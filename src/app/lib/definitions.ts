import type { ChatCompletionMessageParam } from 'openai/resources/chat/completions';

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type ChatMessage = ChatCompletionMessageParam;

// export type ChatMessage = {
//   role: "user" | "assistant" | "system";
//   content: string | Array<{
//     type: "text";
//     text: string;
//   } | {
//     type: "image_url";
//     image_url: { url: string };
//   }>;
// };

export type SignupFormState = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  message?: string | null;
};
