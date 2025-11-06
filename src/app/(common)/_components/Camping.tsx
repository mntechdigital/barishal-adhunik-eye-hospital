import React from "react";
import Slider from "./Slider";
import Image from "next/image";
import breath from "@/assets/breath.png";
import { getCampaigns } from "@/services/campaign.service";
const Camping = async () => {
  const campaigns = await getCampaigns();
  return (
    <main className="pb-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center items-center gap-2 mt-24 ">
          <Image src={breath} alt="breath" width={20} height={50} />
          <h1 className="font-bangla text-lg text-brand">আমাদের ক্যাম্পেইন</h1>
          <Image src={breath} alt="breath" width={20} height={50} />
        </div>
        <h1 className="font-bangla font-bold text-xl md:text-3xl text-center pt-2 pb-8">
          বরিশাল আধুনিক চক্ষু হাসপাতাল এর চলমান ক্যাম্পেইন সমূহ
        </h1>
        <Slider
          slides={campaigns?.data || []}
          autoPlay={true}
          autoPlayInterval={5000}
          visibleCount={3}
        />
      </div>
    </main>
  );
};

export default Camping;
