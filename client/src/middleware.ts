import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isAuth = req.cookies.get('userToken')?.value;

  const sensitiveRoutes = ['/dashboard', '/create', '/token'];
  const editRoute = pathname.startsWith('/edit');
  const authPaths = ['/', '/login', '/signup'];

  if (authPaths.includes(pathname) && isAuth) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }
  if (
    (sensitiveRoutes.includes(pathname) && !isAuth) ||
    (editRoute && !isAuth)
  ) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}
export const config = {
  matchter: ['/dashboard', '/create', '/token', '/edit/:path*']
};
