import { Activity, Phone } from "lucide-react";

const eyeCares = [
  "IOP",
  "RBS",
  "SPT",
  "Fluorescein Dye Test",
  "Biometry",
  "Dilate",
  "Saline Wash",
  "Foreign Body",
  "Schirmer Test",
  "Pad Bandage",
  "Refraction",
  "ECG",
  "AC Wash",
  "BP",
  "Tube Remove",
  "S Cutting",
];

const EyeCareSection = () => {
  return (
    <div className="mt-20">
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center gap-1">
            <Activity className="w-4 h-4 text-green-500" />
            <h3 className="font-bangla text-sm text-green-500">
              চোখের পরীক্ষার
            </h3>
            <Activity className="w-4 h-4 text-green-500" />
          </div>

          <h2 className="font-bangla text-3xl font-bold">
            চোখের বিভিন্ন পরীক্ষার তালিকা
          </h2>
        </div>
      </div>

      <div className="container border border-green-700 bg-gray-100 p-7 rounded-sm shadow-sm mt-10">
        <div className="flex flex-wrap gap-5 px-5 items-center justify-center">
          {eyeCares.map((care, index) => (
            <div
              key={index}
              className="px-4 py-2 border rounded-sm border-brand font-semibold"
            >
              {care}
            </div>
          ))}
        </div>
      </div>

      <div className="container bg-brand text-white px-20 py-1 flex items-center gap-2 rounded-md justify-center mt-20">
        <Phone className="h-6 w-6 inline-block border border-white p-[1px] rounded-xs" />
        <p className="font-bangla text-lg">
          আপনার যদি কোন প্রশ্ন থাকে তাহলে আমাদের কল করুন (০১৭০৮-৪৪৫৩৬৩)
        </p>
      </div>
    </div>
  );
};

export default EyeCareSection;
