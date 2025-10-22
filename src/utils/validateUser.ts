import { prisma } from "@/lib/prismaConfig";
import { comparePassword } from "./comparePassword";

export const validateUser = async (email: string, password: string) => {
  try {
    const user = await prisma.admin.findUnique({
      where: { email },
    });

    if (!user) {
      return null;
    }

    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      return null;
    }

    return {
      id: user.id,
      email: user.email,
      created_at: user.createdAt,
      updated_at: user.updatedAt,
    };
  } catch (error) {
    console.error("Error validating user:", error);
    return null;
  }
};
