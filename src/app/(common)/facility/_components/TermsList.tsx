import { CircleDot } from "lucide-react"

export default function TermsList() {
  const terms = [
    "শনি থেকে শুক্র বহি: বিভাগ রোগী দেখার ফি'র উপরে ৪০% ডিসকাউন্ট (শুধু কার্ডধারীদের জন্য) ",
    "চোখের সকল টেষ্টের উপর ২৫% ডিসকাউন্ট",
    "অপারেশনে ১৫% ডিসকাউন্ট (শুধু কার্ডধারীদের জন্য)",
    "কার্ডধারী সদস্য যতদিন পর্যন্ত তার কার্ড হাতে থাকবে ততদিন পর্যন্ত সে উল্লেখিত সুবিধা পাবে",
    "ডাক্তার দেখানোর সময় রোগীকে অবশ্যই কার্ডটি সাথে নিয়ে আসতে হবে। অন্যথায় উল্লেখিত সুবিধা পাবে না",
    "কার্ড হারানো গেলে পুনরায় চার্জ দিয়ে কার্ড সংগ্রহ করতে হবে।",
  ]

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-3xl mx-auto space-y-0">
        <h2 className="text-center bg-green-700 text-white border rounded-md p-3 mb-8 font-bangla">চিকিৎসা কার্ডের সুবিধা সমূহ</h2>
        {terms.map((term, index) => (
          <div
            key={index}
            className="flex items-start gap-3 mb-4 px-2 py-3 border-2 rounded-md border-gray-200 bg-white hover:bg-gray-50 transition-colors"
          >
            <div className="flex-shrink-0 mt-0.5">
              <CircleDot  className="w-6 h-6 text-green-600 flex-shrink-0" />
            </div>
            <p className="text-gray-800 text-sm leading-relaxed font-medium font-bangla">{term}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
