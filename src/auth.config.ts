import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // The authorized callback is no longer needed here for redirect logic.
    // We will handle all redirect logic in the middleware for clarity.
    authorized({ auth, request: { nextUrl } }) {
      return true; // Allow all requests by default; middleware will handle specifics.
    },
  },
  providers: [],
} satisfies NextAuthConfig;
