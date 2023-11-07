import { PrismaAdapter } from '@auth/prisma-adapter';
import { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { db } from './db';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
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
};
