import { PrismaAdapter } from '@auth/prisma-adapter';
import { getServerSession, type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
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
        if (!credentials) return null;

        const { username, password } = credentials;

        const user = await db.user.findFirst({ where: { username } });

        if (!user) return null;

        const matchPassword = await bcrypt.compare(password, user.password!);

        if (!matchPassword) return null;

        return user;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
};

export const getServerAuthSession = () => getServerSession(authOptions);
