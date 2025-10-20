import Image from "next/image";
import React from "react";
import breath from "@/assets/breath.png";

const page = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-2 mt-24">
        <Image src={breath} alt="breath" width={20} height={50} />
        <h1 className="font-bangla">আমাদের সম্পর্কে</h1>
        <Image src={breath} alt="breath" width={20} height={50} />
      </div>
      <div className="mt-5">
        <p className="flex justify-center items-center gap-2">
          <span>আমরা আপনার</span>
          <span className="font-semibold text-brand">বরিশাল আধুনিক চক্ষু হাসপাতালের যত্ন নিচ্ছি।</span>
        </p>
      </div>
    </div>
  );
};

export default page;
