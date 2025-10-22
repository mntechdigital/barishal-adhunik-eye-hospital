import { prisma } from "@/lib/prismaConfig";
import { NextRequest, NextResponse } from "next/server";

export async function GET({ params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    const response = await prisma.upcomingCampaign.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Campaign retrieved successfully",
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
}// adjust path if needed

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params; 
    console.log("Deleting campaign with ID:", id);

    const response = await prisma.upcomingCampaign.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "Campaign deleted successfully",
      data: response,
    });
  } catch (error) {
    console.error("Error deleting campaign:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}


export async function PUT({
  params,
  request,
}: {
  params: Promise<{ id: string }>;
  request: NextRequest;
}) {
  try {
    const { id } = await params;
    const body = await request.json();

    const response = await prisma.upcomingCampaign.update({
      where: { id },
      data: body,
    });

    return NextResponse.json({
      success: true,
      message: "Campaign updated successfully",
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
