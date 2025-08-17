import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

const { auth } = NextAuth(authConfig);

export default auth((req) => {

  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;
  const isAuthRoute = nextUrl.pathname.startsWith('/login') || nextUrl.pathname.startsWith('/signup');

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL('/ai/app', nextUrl));
    }
  }
  
  return; 
});

export const config = { 
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
