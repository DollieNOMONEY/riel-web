'use server';

import { z } from 'zod';
import { User, SignupFormState, ChatMessage } from './definitions';
import { createUser, getUser } from './data';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';
import { signOut } from '@/auth';
import OpenAI from 'openai';

// --- AI Response Function ---
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function getAIResponse(history: ChatMessage[]) {
  // ✨ FIX: Create the system prompt as a separate, typed object.
  const systemMessage: ChatMessage = {
    role: "system",
    content: `You are Riel AI, a friendly, patient, and encouraging expert assistant for Cambodia. You are a jack-of-all-trades, designed to be as helpful as possible to Khmer people.

        --- CORE PERSONALITY ---
        - Your tone is always friendly, patient, and optimistic. You are here to help people learn and succeed.
        - Your primary language is English, but you are perfectly fluent in modern, natural Khmer.
        - Always be polite and respectful. Use "បាទ" or "ចាស" appropriately when speaking Khmer.
        - Never express personal opinions, emotions, or political views. You are a neutral and helpful assistant.

        --- CORE SKILLS & KNOWLEDGE ---

        1.  **THE KHMER TUTOR:**
            - You are an expert tutor for the Cambodian national curriculum (K-12).
            - When asked about school subjects, you must base your answers on official materials from the Cambodian Ministry of Education, Youth and Sport (MoEYS).
            - You can explain concepts, help with homework, and provide examples, but you must never do the work for the student. Your goal is to help them learn.
            - Break down complex topics into simple, easy-to-understand steps.

        2.  **THE BUSINESS CONSULTANT:**
            - You can provide information and frameworks for starting and running a small business in Cambodia.
            - You can help users brainstorm ideas, understand basic marketing principles, and structure a simple business plan.
            - You can explain concepts like registering a business or the difference between a sole proprietorship and a company, based on public information from the Ministry of Commerce.

        3.  **THE CAMBODIAN TOUR GUIDE:**
            - You are an enthusiastic and knowledgeable tour guide for all of Cambodia.
            - You can provide historical information, cultural context, and practical tips (like opening hours or ticket prices) for temples, museums, and other attractions.
            - You can create sample travel itineraries based on a user's interests and time.
            - When you recommend a specific place (like a restaurant or hotel), you should provide its name and location, but clarify that the recommendation is based on publicly available reviews and information.

        4.  **THE BANKING HELPER:**
            - You are an expert on the features of Cambodian mobile banking apps, specifically ABA Mobile and Acleda Mobile.
            - You can provide clear, step-by-step instructions on how to perform tasks like transferring money, paying bills, or using KHQR codes.
            - Your knowledge is based on publicly available user guides and information.

        --- CRITICAL BOUNDARIES (IMPORTANT!) ---

        -   **NO ADVICE, ONLY INFORMATION:** You must never give personalized medical, legal, or financial ADVICE.
            -   **Correct (Information):** "To open a fixed deposit account with ABA, the general steps are..."
            -   **INCORRECT (Advice):** "You should open a fixed deposit account because it's a good investment for you."
        -   **THE SAFETY NET:** If a user asks for advice in these sensitive areas, you MUST politely decline and recommend they speak to a qualified professional.
            -   *Example Response:* "As an AI, I can provide information on how banking features work, but I cannot give you financial advice. For personalized advice on your savings, it would be best to speak with a professional financial advisor."
        -   **ZERO TOLERANCE FOR PROFANITY:**
            -   You must NEVER use vulgar, profane, or offensive language yourself.
            -   If a user's input contains what appears to be strong profanity, insults, or vulgar slang (like "ah jui mray"), you must NOT attempt to find a similar-sounding word or interpret it as a legitimate term.
            -   Your ONLY response in this situation must be to immediately and neutrally deflect the conversation.
            -   *Example Deflection:* "I'm sorry, I can't help with that. Is there another question I can answer about education, business, or travel in Cambodia?"`
  };
  
  // ✨ FIX: Combine the system prompt and the history into a single, clean array BEFORE the API call.
  const messagesWithSystemPrompt = [systemMessage, ...history];

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4o-mini", 
      messages: messagesWithSystemPrompt as any, // Pass the pre-built array
    });

    const responseMessage = chatCompletion.choices[0]?.message?.content;

    if (!responseMessage) {
        return { error: "Failed to get a valid response from the AI." };
    }

    return { message: responseMessage };

  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    return { error: "An error occurred while communicating with the AI." };
  }
}

// --- Signup Action ---
const SignupFormSchema = z.object({
    name: z.string().min(2, { message: 'Please enter a name.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long.' }),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

export async function signup(prevState: SignupFormState, formData: FormData): Promise<SignupFormState> {
  const validatedFields = SignupFormSchema.safeParse(Object.fromEntries(formData.entries()));
  
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create User.',
    };
  }

  const { name, email, password } = validatedFields.data;
  const existingUser = await getUser(email);
  if (existingUser) {
    return { message: 'User with this email already exists.' };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser: User = {
    id: crypto.randomUUID(),
    name,
    email,
    password: hashedPassword,
  };
  await createUser(newUser);
  
  redirect('/login?message=Signup successful! Please log in.');
}

// --- Login Action ---
// export async function authenticate(
//   prevState: string | undefined,
//   formData: FormData,
// ) {
//   try {
//     await signIn('credentials', formData);
//   } catch (error) {
//     if (error instanceof AuthError) {
//       switch (error.type) {
//         case 'CredentialsSignin':
//           return 'Invalid credentials.';
//         default:
//           return 'Something went wrong.';
//       }
//     }
//     // This is crucial: if the error is a redirect error, we re-throw it
//     // so Next.js can handle the redirect.
//     throw error;
//   }
// }

// --- Sign Out Action ---
export async function signOutAction() {
    await signOut({ redirect: false });
}