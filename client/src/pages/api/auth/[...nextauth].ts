import { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import { User } from '@/interfaces';
import { fetchWrapper } from '@/utils/fetchWrapper';

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials');
        }

        const user = await fetchWrapper<User>('users/login', {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password
          })
        });

        if ('message' in user) {
          throw new Error(user.message as string);
        }

        return user;
      }
    })
  ],
  pages: {
    signIn: '/login',
    error: '/login'
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      return { ...session, token: token.token as string };
    }
  },
  debug: process.env.NODE_ENV === 'development',

  secret: process.env.NEXTAUTH_SECRET
};

export default NextAuth(authOptions);
