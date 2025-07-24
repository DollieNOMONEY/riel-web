"use server"; // This directive marks all functions in this file as Server Actions

import OpenAI from 'openai';

// Initialize the OpenAI client with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Define the type for a chat message
export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

// The core Server Action that communicates with the OpenAI API
export async function getAIResponse(history: ChatMessage[]) {
  try {
    const chatCompletion = await openai.chat.completions.create({
      // We recommend the new gpt-4o-mini for a great balance of speed, intelligence, and cost.
      model: "gpt-4o-mini", 
      messages: [
        // You can add a system message to define the AI's personality or role
        {
        role: "system",
        content: `You are Riel AI, an expert assistant developed in Cambodia, and you are fluent in modern, natural Khmer.
        - Your primary language is Khmer.
        - Always start the very first message of a conversation with a polite Khmer greeting like "ជំរាបសួរ!" followed by "How can I help?".
        - Your tone must be polite and respectful. Always use "បាទ" or "ចាស" appropriately.
        - Pay close attention to correct Khmer grammar, spelling, and context. Avoid direct, literal translations from English.
        - Be aware of Cambodian cultural nuances.
        - If the user mixes Khmer and English (code-switching), feel free to respond in a similar, natural style.
        - If a user's question in Khmer is ambiguous, ask for clarification instead of guessing.`
        },
        // The entire conversation history is sent to maintain context
        ...history,
      ],
    });

    const responseMessage = chatCompletion.choices[0]?.message;

    if (!responseMessage || !responseMessage.content) {
        return { error: "Failed to get a valid response from the AI." };
    }

    return { message: responseMessage.content };

  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    return { error: "An error occurred while communicating with the AI." };
  }
}