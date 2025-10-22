"use server";

import { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";

export const login = async (payload: FieldValues) => {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (data.success) {
      const { cookies } = await import("next/headers");
      (await cookies()).set("auth-token", data?.data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
    }

    return data;
  } catch (error) {
    console.error("Error during login:", error);
    return {
      success: false,
      message: "Internal server error",
    };
  }
};

interface TCustomJwtPayload extends JwtPayload {
  id?: string;
  email: string;
  iat: number;
  exp: number;
}

export const loggedUser = async () => {
  const cookie = await cookies();
  const accessToken = cookie.get("auth-token")?.value;

  let decoded: TCustomJwtPayload | null = null;

  if (accessToken) {
    decoded = jwtDecode<TCustomJwtPayload>(accessToken);
  }

  return decoded;
};

export const logoutUser = async () => {
  const cookie = await cookies();
  const accessToken = cookie.get("auth-token")?.value;
  if (accessToken) {
    cookie.set("auth-token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 0,
    });
  }
};
