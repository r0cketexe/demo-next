import {PrismaClient} from '@prisma/client'

export const prisma =new PrismaClient();


/* import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE !== "production") global.prisma = prisma; */