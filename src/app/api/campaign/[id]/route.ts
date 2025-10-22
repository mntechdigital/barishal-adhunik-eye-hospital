import { prisma } from "@/lib/prismaConfig";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
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
