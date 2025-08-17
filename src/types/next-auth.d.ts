import 'next-auth';

declare module 'next-auth' {
  /**
   * Extends the built-in session.user type to include the properties
   * we added in the auth.ts callbacks.
   */
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  /** Extends the built-in token type */
  interface JWT {
    id: string;
    name: string;
  }
}