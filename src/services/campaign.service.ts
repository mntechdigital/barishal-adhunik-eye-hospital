"use server";

import { revalidatePath } from "next/cache";
import { FieldValues } from "react-hook-form";

export const createCampaign = async (data: FieldValues) => {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/campaign`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    revalidatePath("/dashboard");

    return response.json();
  } catch (error) {
    console.log("Error creating campaign:", error);
    return {
      success: false,
      message: "Error creating campaign",
    };
  }
};

export const getCampaigns = async () => {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/campaign`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await response.json();
  } catch (error) {
    console.error("Error fetching campaign:", error);
    return {
      success: false,
      message: "Error fetching campaign",
    };
  }
};

export const getCampaignById = async (id: string) => {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/campaign/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    return await response.json();
  } catch (error) {
    console.error("Error fetching campaign:", error);
    return {
      success: false,
      message: "Error fetching campaign",
    };
  }
};

export const updateCampaign = async (id: string, data: FieldValues) => {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/campaign/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error("Error updating campaign:", error);
    return {
      success: false,
      message: "Error updating campaign",
    };
  }
};

export const deleteCampaign = async (id: string) => {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/campaign/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    revalidatePath("/dashboard");

    return await response.json();
  } catch (error) {
    console.error("Error deleting campaign:", error);
    return {
      success: false,
      message: "Error deleting campaign",
    };
  }
};
