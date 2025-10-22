import React from "react";
import Slider from "./Slider";
import Image from "next/image";
import breath from "@/assets/breathW.png";
const HomeService = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
        description:"চোখ থেকে পানি পড়া ও নেত্রনালী DCR & DCT টিউব এর মাধ্যমে অপারেশন করা হয়. "
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
      description:"অত্যাধুনিক ডিজিটাল মাইক্রোস্কোপর মাধ্যমে,  ছানি ও ফ্যাকো অপারেশন করা হয়.।"
    },
    {
      id: 3,
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffree-images&psig=AOvVaw2tkuPtcyfSLk3sWia01fWM&ust=1761198022043000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNCUnYaMt5ADFQAAAAAdAAAAABAE",
      description:"BCL এর মাধ্যমে চোখের আলসারের চিকিৎসা  করা হয়।"
    },
    {
      id: 4,
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffree-images&psig=AOvVaw2tkuPtcyfSLk3sWia01fWM&ust=1761198022043000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNCUnYaMt5ADFQAAAAAdAAAAABAE",
      description:"BCL এর মাধ্যমে চোখের আলসারের চিকিৎসা  করা হয়।"
    },
    {
      id: 5,
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffree-images&psig=AOvVaw2tkuPtcyfSLk3sWia01fWM&ust=1761198022043000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNCUnYaMt5ADFQAAAAAdAAAAABAE",
      description:"BCL এর মাধ্যমে চোখের আলসারের চিকিৎসা  করা হয়।"
    },
    {
      id: 6,
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffree-images&psig=AOvVaw2tkuPtcyfSLk3sWia01fWM&ust=1761198022043000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNCUnYaMt5ADFQAAAAAdAAAAABAE",
      description:"BCL এর মাধ্যমে চোখের আলসারের চিকিৎসা  করা হয়।"
    },
    {
      id: 7,
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffree-images&psig=AOvVaw2tkuPtcyfSLk3sWia01fWM&ust=1761198022043000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNCUnYaMt5ADFQAAAAAdAAAAABAE",
      description:"BCL এর মাধ্যমে চোখের আলসারের চিকিৎসা  করা হয়।"
    },
   
  ];

  return (
    <main className=" w-full bg-brand mt-20 py-14">
     <div className="flex justify-center items-center gap-2 ">
        <Image src={breath} alt="breath" width={20} height={50} />
        <h1 className="font-bangla text-lg text-white">আমাদের ক্যাম্পেইন</h1>
        <Image src={breath} alt="breath" width={20} height={50} />
      </div>
      <h1 className="font-bangla font-bold text-xl md:text-3xl text-center pt-2 pb-8 text-white">বরিশাল মডার্ন চক্ষু হাসপাতালের আসন্ন ক্যাম্পিং ট্রিপ</h1>
        <Slider slides={slides} autoPlay={true} autoPlayInterval={5000} visibleCount={5} />
    </main>
  );
};

export default HomeService;
