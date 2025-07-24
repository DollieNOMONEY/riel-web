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
        { role: "system", content: "You are Riel AI, a helpful and concise assistant." },
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