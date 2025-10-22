import { Activity, MoveRight, PhoneCall } from "lucide-react";
import aboutUsHomeImage from "@/assets/aboutUsHome.png";
import aboutUsHomeSide1 from "@/assets/abouthomeright1.png";
import aboutUsHomeSide2 from "@/assets/abouthome2.png";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    index: 1,
    title:
      "বিনামূল্যে প্রশিক্ষিত চক্ষু ডাক্তারের (এমবিবিএস) মাধ্যমে চক্ষু পরীক্ষা চোখের পাওয়ার নির্ণয় ও চিকিৎসা প্রদান",
  },
  {
    index: 2,
    title:
      "স্বল্পমূল্যে ছানী অপারেশন ও বিদেশী লেন্স সংযোজন।(এর সঙ্গে পরীক্ষা, ওটি মেডিসিন,  যাতায়াত ও থাকা খাওয়া ফ্রি)",
  },
  {
    index: 3,
    title:
      "আমাদের হাসপাতালে স্বল্পমূল্যে নেত্রনালী ও মাংশবৃদ্ধিসহ চোখের অন্যান্য অপারেশন সু-ব্যবস্হা আছে",
  },
  {
    index: 4,
    title:
      "ক্যাম্পের দিনে ভর্তিকৃত রোগীদের বরিশাল অধুনিক চক্ষু হাসপাতালে নিয়ে যাওয়া হবে এবং ছানী, নেত্রনালী ও মাংশবৃদ্ধি সহ যাবতীয় অপারেশনের সু-ব্যবস্হা করা হবে।",
  },
  {
    index: 5,
    title: "চক্ষু ক্যাম্পে ন্যায্যমূল্যে ঔষধ ও চশমা পাওয়া যায়",
  },
];

const OurRelationSection = () => {
  return (
    <div className="container mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-2">
          <div className="flex items-center gap-1">
            <Activity className="w-4 h-4 text-green-500" />
            <h3 className="font-bangla text-sm text-green-500">
              আমাদের সম্পর্কে
            </h3>
            <Activity className="w-4 h-4 text-green-500" />
          </div>

          <h1 className="font-bangla text-4xl my-5">
            আমরা আপনার{" "}
            <span className="font-bold text-brand">
              বরিশাল আধুনিক চক্ষু হাসপাতালের যত্ন নিচ্ছি।
            </span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="col-span-1">
              <Image
                src={aboutUsHomeImage}
                alt="about us image"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="col-span-2 ">
              <div className="flex flex-col gap-3">
                {services
                  .sort((a, b) => a.index - b.index)
                  .map((service) => (
                    <div
                      key={service.index}
                      className="flex items-center gap-1"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check text-brand w-6 h-6"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                        </svg>
                      </div>

                      <h3 className="font-bangla text-sm">{service.title}</h3>
                    </div>
                  ))}
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 items-center mt-5 mb-5 lg:mb-0">
                <div className="bg-brand rounded-sm hover:bg-brand/90 transition duration-200 mt-2 lg:mt-0">
                  <Link href="/contact" className="grid grid-cols-3">
                    <h3 className=" text-gray-100 text-xs lg:text-base col-span-2 py-2 px-3">
                      More About Us
                    </h3>
                    <span className="col-span-1 bg-white m-[2px] rounded-sm flex items-center justify-center">
                      <MoveRight className="text-brand w-6 h-6 p-[2px]" />
                    </span>
                  </Link>
                </div>
                <div className="flex gap-1 items-center">
                  <PhoneCall className="w-12 h-12 text-white bg-brand p-2 rounded-full" />
                  <div className="flex flex-col">
                    <h2 className="font-semibold text-brand font-bangla">
                      জরুরি অবস্থ কল
                    </h2>
                    <h3>01708-445363</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-5">
          <Image
            src={aboutUsHomeSide1}
            width={1000}
            height={1000}
            alt="about us home section right image number 1"
            className="w-full h-56 object-cover rounded-md"
          />
          <Image
            src={aboutUsHomeSide2}
            width={1000}
            height={1000}
            alt="about us home section right image number 1"
            className="w-full h-56 object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default OurRelationSection;
