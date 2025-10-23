import React from "react";
import CreateCampaign from "./_components/CreateCampaign";
import { getCampaigns } from "@/services/campaign.service";
import Image from "next/image";
import DeleteCampaign from "./_components/DeleteCampaign";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Dashboard = async () => {
  const campaigns = await getCampaigns();
  return (
    <div className="container mx-auto mt-20">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <Button className="bg-brand text-white cursor-pointer">Back to Home</Button>
        </Link>
        <CreateCampaign />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {campaigns?.data?.length > 0 ? (
          campaigns?.data?.map((campaign: { id: string; image: string }) => (
            <div key={campaign?.id} className="border rounded-md p-1 relative">
              <DeleteCampaign id={campaign.id} />
              <Image
                src={campaign?.image || ""}
                alt={`campaign image ${campaign?.id}`}
                width={1000}
                height={1000}
                className="rounded-md object-cover w-full h-64"
              />
            </div>
          ))
        ) : (
          <div className="col-span-4 text-center">
            <p className="text-lg font-bold">No campaigns available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
