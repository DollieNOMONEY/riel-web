import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // The authorized callback is no longer needed here for redirect logic.
    // We will handle all redirect logic in the middleware for clarity.
    authorized({ auth: _auth, request: { nextUrl: _nextUrl } }) {
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
