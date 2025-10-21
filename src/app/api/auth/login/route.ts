import { generateToken } from "@/utils/tokenCustomization";
import { validateUser } from "@/utils/validateUser";
import { loginValidationSchema } from "@/validations/login.validation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validate = loginValidationSchema.safeParse(body);

    if (!validate.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: validate.error.issues.map((issue) => ({
            path: issue.path.join("."),
            message: issue.message,
          })),
        },
        {
          status: 422,
        }
      );
    }

    const { email, password } = validate.data;

    const user = await validateUser(email, password);

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password",
        },
        { status: 401 }
      );
    }

    const token = generateToken(
      { email, id: user.id },
      process.env.JWT_SECRET as string,
      process.env.JWT_EXPIRES_IN as string
    );

    const response = NextResponse.json({
      success: true,
      message: "Login successful",
      data: {
        user: {
          id: user.id,
          email: user.email,
        },
        token,
      },
    });

    response.cookies.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Error login:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}
