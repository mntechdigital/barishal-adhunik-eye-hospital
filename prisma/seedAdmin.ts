import { PrismaClient } from "@/generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const main = async() => {
  console.log("Seeding admin user...");

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    console.error("ADMIN_EMAIL and ADMIN_PASSWORD must be set in .env");
    process.exit(1);
  }

  try {
    // Upsert so you can run this repeatedly without duplicate errors
    await prisma.admin.upsert({
      where: { email: adminEmail },
      update: {},
      create: {
        email: adminEmail,
        password: await bcrypt.hash(adminPassword, 12),
      },
    });
    console.log("Admin seeded successfully.");
  } catch (error) {
    console.error("Error during seeding:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

