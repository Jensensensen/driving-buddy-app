import { PrismaClient } from '@/generated/prisma/client'

// Reuse a single PrismaClient across hot reloads in development, otherwise
// every reload opens a new pool and exhausts the database connections.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
