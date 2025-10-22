import { prisma } from "@/lib/prismaConfig";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await prisma.upcomingCampaign.create({
      data: body,
    });

    return NextResponse.json({
      success: true,
      message: "Campaign created successfully",
      data: response,
    });
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

export async function GET() {
  try {
    const response = await prisma.upcomingCampaign.findMany();

    return NextResponse.json({
      success: true,
      message: "Campaigns retrieved successfully",
      data: response,
    });
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
