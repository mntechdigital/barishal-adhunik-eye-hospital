import { CircleDot } from "lucide-react";

const products = [
  "PanOptix-Trifocal-Alcon(USA)",
  "Vivinex Toric Multi Seri (Hoya Japan) /Toric-Alcon (USA)",
  "Clareon(Advance Monofocal) - Alcon/Vivinex Impress (Japan)",
  "Hoya Vivinex Multisert (Preloaded Aspheric Yellow– (Japan)",
  "IQ - Alcon (USA) /Nanex Multi Sert Preloaded Aspheric Yellow-(Japan)",
  "HOYA Isert 251 (Preloaded Aspheric Yellow – (Japan)",
  "MBI Yellow – (USA)",
  "Single Piece–(USA)/MBI Clear / HOYA Isert 150 (Perloaded Clear–(Japan)",
  "Multi Piece–(USAO/ HOYA Isert PC 60R (Preloaded Multi Piece) Japan",
  "CIMA Asters– (USA)",
  "Aqua Sense (Yellow)/CIMA Cimflex–(USA)/MDR",
  "Hemafold/Nanofold/U-Fold/ Glufold / Trufold (Indian Lens)",
  "CIMA PMMA/Z-Max (USA)",
  "EYE Q MED (India)",
  "Envision PMMA–(Belgium–India)",
  "Excellecce(India)",
];
const otlist = [
  "DCR surgery (cosmetic with tube intubations)",
  "DCR surgery (tube intubation)",
  "DCT surgery (cosmetic)",
  "DCT surgery ",
  "Pterygium surgery (auto-graft)",
  "Pterygium surgery (excision)",
  "Calazian",
];

export default function IOLProductsList() {
  return (
    <div className="">
      <h2 className="text-center font-semibold text-5xl text-[#2B2B2B] font-bangla my-20">
        ফ্যাকো, ছানি ও অন্যান্য অপারেশন
      </h2>
      <div className="w-full bg-[#F6F9FF] py-10 md:py-15">
        <div className="max-w-3xl mx-auto space-y-4 px-4">
          <div className="mb-10">
            <h2 className="text-center bg-green-700 text-white border rounded-md p-3 mb-8 ">
              Type Of Lens
            </h2>
            {products.map((product, index) => (
              <div
                key={index}
                className="flex items-start mb-4 gap-4 p-4 border border-border rounded-lg bg-card hover:bg-muted/50 transition-colors duration-200"
              >
                <CircleDot className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-medium leading-relaxed">
                  {product}
                </p>
              </div>
            ))}
          </div>
          <div className="">
            <h2 className="text-center bg-green-700 text-white border rounded-md p-3 mb-8 ">
              Others OT Chart
            </h2>
            {otlist.map((product, index) => (
              <div
                key={index}
                className="flex items-start mb-4 gap-4 p-4 border border-border rounded-lg bg-card hover:bg-muted/50 transition-colors duration-200"
              >
                <CircleDot className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-medium leading-relaxed">
                  {product}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
