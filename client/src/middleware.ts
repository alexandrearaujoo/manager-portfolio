import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  async function middleware(req) {
    const { pathname } = req.nextUrl;
    const isAuth = req.nextauth.token;

    const sensitiveRoutes = ['/dashboard'];
    const authPaths = ['/login', '/signup'];

    if (authPaths.includes(pathname) && isAuth) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
    if (sensitiveRoutes.includes(pathname) && !isAuth) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      async authorized() {
        return true;
      }
    }
  }
);

export const config = {
  matchter: ['/dashboard']
};
