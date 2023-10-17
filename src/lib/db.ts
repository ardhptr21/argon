import { PrismaClient } from '@prisma/client';

const globalPrisma = global as unknown as { prisma: PrismaClient };

export const db = globalPrisma.prisma || new PrismaClient({ log: ['error'] });

if (process.env.NODE_ENV !== 'production') globalPrisma.prisma = db;