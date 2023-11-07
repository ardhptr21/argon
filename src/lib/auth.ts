import { PrismaAdapter } from '@auth/prisma-adapter';
import { getServerSession, type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { db } from './db';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Masukkan username' },
        password: { label: 'Password', type: 'password', placeholder: '.........' },
      },
      async authorize(credentials) {
        const user = { id: '1', username: 'admin', password: 'admin' };

        if (!credentials) return null;

        const { username, password } = credentials;

        if (username === user.username && password === user.password) {
          return user;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
};

export const getServerAuthSession = () => getServerSession(authOptions);
