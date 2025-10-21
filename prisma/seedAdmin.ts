import { prisma } from "@/lib/prismaConfig";
import bcrypt from "bcryptjs";

async function main() {
  try {
    await prisma.admin.create({
      data: {
        email: process.env.ADMIN_EMAIL as string,
        password: await bcrypt.hash(process.env.ADMIN_PASSWORD as string, 12),
      },
    });
  } catch (error) {
    console.error("Error during seeding:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
