import Image from "next/image";
import React from "react";
import quote from "@/assets/quote.png";
import ceo from "@/assets/authority/ceo.png";
import admin from "@/assets/authority/admin.png";
const Authority = () => {
  const missionItems = [
    "সর্বাধুনিক প্রযুক্তি ও অভিজ্ঞ চিকিৎসকের মাধ্যমে বিশ্বমানের চক্ষু সেবা প্রদান।",
    "দরিদ্র ও অসহায় মানুষের জন্য মানবিক ও সাশ্রয়ী চিকিৎসা নিশ্চিত করা।",
    "চোখের রোগ প্রতিরোধে জনসচেতনতা বৃদ্ধি ও প্রতিরোধমূলক কার্যক্রম পরিচালনা।",
    "স্কুল স্ক্রিনিং, চোখের ক্যাম্প ও কমিউনিটি প্রোগ্রামের মাধ্যমে দৃষ্টি সংরক্ষণে অবদান রাখা।",
    "গবেষণা, প্রশিক্ষণ ও ইনোভেশনের মাধ্যমে দেশের চক্ষু চিকিৎসা ব্যবস্থার মানোন্নয়ন।",
  ];
  return (
    <div className="bg-gradient-to-br from-[#DEFFDE] via-emerald-50 to-[#ffffff] px-4 mt-20 flex flex-col ">
      <div className="container w-full flex justify-between md:relative">
        <div className="mt-20">
          <div className=" mx-auto space-y-8">
            <div className="md:absolute">
              <div className="flex flex-col lg:flex-row gap-5 items-start ">
                <div className="flex-1 border-t-1 border-b-1 border-l-1 border-[#008000]  p-10 md:relative">
                  <Image
                    src={quote}
                    width={50}
                    height={50}
                    alt="qte"
                    className="absolute -top-6 -left-6 hidden md:block object-cover"
                  />
                  <div className="space-y-4 text-gray-800 font-bangla">
                    <p className="text-base leading-relaxed">
                      চোখ শুধু দৃষ্টির জানালা নয়, এটি জীবনের সৌন্দর্যের অনুভবের
                      পথ। আমাদের লক্ষ্য—প্রতিটি মানুষ যেন সুস্থ, স্বচ্ছ ও সুন্দর
                      দৃষ্টি নিয়ে নিজের জীবনকে নতুনভাবে দেখতে পারে।
                    </p>

                    <p className="text-base leading-relaxed">
                      বরিশাল আধুনিক চক্ষু হাসপাতালে আমরা বিশ্বাস করি চিকিৎসা
                      কেবল একটি সেবা নয়, এটি একটি মানবিক দায়িত্ব। সর্বাধুনিক
                      প্রযুক্তি, দক্ষ চিকিৎসক দল এবং আন্তরিক সেবার সমন্বয়ে আমরা
                      প্রতিনিয়ত কাজ করছি চোখের চিকিৎসা ব্যবস্থাকে আধুনিক,
                      সহজলভ্য ও নির্ভরযোগ্য করে তুলতে।
                    </p>

                    <p className="text-base font-semibold leading-relaxed">
                      আমাদের প্রতিশ্রুতি—“মানবিক সেবা, আধুনিক চিকিৎসা।”
                    </p>

                    <p className="text-base leading-relaxed">
                      আপনার চোখের সুস্থতাই আমাদের সাফল্য। আসুন, আমরা সবাই মিলে
                      গড়ে তুলি এক আলোকিত আগামী।
                    </p>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="z-50">
                    <div className="lg:w-80 flex items-center justify-end h-full md:relative">
                      <Image
                        src={ceo}
                        alt="aboutBg"
                        className="md:h-80 h-full w-full md:w-[17.5rem] md:absolute right-10 top-0 object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-[19rem] bg-linear-to-l from-[#effcef]  to-[#b9fcb9] mt-2 md:mt-[20.5rem] z-50 ">
                    <div className="p-2 flex flex-col flex-1 border-t-1 border-b-1 border-l-1 border-[#008000]">
                      <span className="font-bangla">মোঃ কবির হোসেন খান</span>
                      <span className="font-bangla">
                        প্রধান নির্বাহী কর্মকর্তা (CEO)
                      </span>
                      <span className="font-bangla">
                        বরিশাল আধুনিক চক্ষু হাসপাতাল
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[28rem] min-w-[8rem]   bg-linear-to-t from-[#effcef]  to-[#b9fcb9] text-[#b9fcb9] hidden md:flex justify-end items-end">
          .
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-20 container w-full">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/3 flex flex-col">
          <div className="relative w-full aspect-square">
            <Image
              src={admin || "/placeholder.svg"}
              alt={"সিদ্ধার্থ হাসান"}
              fill
              className=""
            />
          </div>
          {/* Green Footer Bar */}
          <div className="bg-brand text-white p-4 flex-1 flex flex-col justify-center items-center">
            <h3 className="font-bold text-lg font-bangla">
              সৈয়দ মেহেদী হাসান{" "}
            </h3>
            <p className="text-sm font-bangla">জি.এম, এইচ.আর এন্ড অ্যাডমিন</p>
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="w-full md:w-2/3 p-8 flex flex-col gap-8 border-t-1 border-b-1 border-r-1 border-[#008000]">
          {/* Vision Section */}
          <div>
            <h2 className="font-bangla text-2xl font-bold mb-4 pb-2 border-b-2 border-green-600 inline-block">
              {"Vision (ভিশন)"}
            </h2>
            <p className="font-bangla text-gray-700 text-sm mb-3 leading-relaxed">
              {
                "সবার জন্য উজ্জ্বল দৃষ্টি, উন্নত ভবিষ্যৎ। আমাদের ভিশন হলো এমন একটি বাংলাদেশ গড়ে তোলা যেখানে প্রত্যেক মানুষ মানসম্মত চক্ষু চিকিৎসা পাবে, এবং কেউ অন্ধত্ব বা দৃষ্টিশক্তি হ্রাসের কারণে জীবনে পিছিয়ে থাকবে না।"
              }
            </p>
            <p className="font-bangla text-gray-700 text-sm leading-relaxed">
              {
                "To ensure 'Bright vision for a better future' by delivering modern, safe, and compassionate eye care for all."
              }
            </p>
          </div>

          {/* Mission Section */}
          <div>
            <h2 className="font-bangla text-2xl font-bold mb-4 pb-2 border-b-2 border-green-600 inline-block">
              {"Mission (মিশন)"}
            </h2>
            <ul className="space-y-2">
              {missionItems.map((item, index) => (
                <li key={index} className="flex gap-3 text-sm text-gray-700">
                  <span className="text-green-600 font-bold flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                    </svg>
                  </span>
                  <span className="font-bangla">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authority;
