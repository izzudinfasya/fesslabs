"use client";

import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useParams } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import guides from "../../data/guides";
import { useLanguage } from "../../context/LanguageContext";

export default function GuideDetail() {
  const { slug } = useParams();
  const { language } = useLanguage();

  if (!slug) return null;

  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return <div className="text-center py-10">Guide not found</div>;

  const title = language === "ID" ? guide.titleID : guide.titleEN;

  const section = guide.section;

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 xl:px-0 pt-10 pb-10 md:pb-16">
        {/* Back button */}
        <button
          onClick={() => window.history.back()}
          className="group flex items-center gap-2 text-foreground font-medium relative cursor-pointer transition-colors mb-4"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="relative">
            {language === "ID" ? "Kembali" : "Back"}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
          </span>
        </button>

        <h1 className="text-2xl font-bold mb-8">{title}</h1>

        {/* Cover Image */}
        <div className="relative w-full h-96 mb-6">
          <Image
            src={guide.image}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Text + Image (textLeftImageRight) */}
        {section?.type === "textLeftImageRight" && section.textID && (
          <div className="mt-12 flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/2 space-y-4">
              {(language === "ID" ? section.textID : section.textEN).map(
                (para, idx) => (
                  <p key={idx} className="text-base text-justify">
                    {para}
                  </p>
                )
              )}
            </div>
            <div className="md:w-1/2">
              <Image
                src={section.image}
                alt={title}
                width={800}
                height={500}
                className="w-full h-auto rounded-lg shadow-md object-contain"
              />
            </div>
          </div>
        )}

        {/* Text + Image + Comparison */}
        {section?.type === "textImageAndComparison" && (
          <>
            {/* Intro */}
            {(language === "ID" ? section.introID : section.introEN) && (
              <p className="text-base text-justify mb-6">
                {language === "ID" ? section.introID : section.introEN}
              </p>
            )}

            {/* Text + Image Grid */}
            {(section.textImageID?.text1 || section.textImageEN?.text1) && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Grid 1 */}
                <div className="flex flex-col items-start gap-4">
                  <div className="w-full h-64 sm:h-80 md:h-96 relative">
                    <Image
                      src={
                        language === "ID"
                          ? section.textImageID?.image1 ?? ""
                          : section.textImageEN?.image1 ?? ""
                      }
                      alt={title}
                      fill
                      className="rounded-lg shadow-md object-cover"
                    />
                  </div>
                  <p className="text-base text-justify">
                    {language === "ID"
                      ? section.textImageID?.text1 ?? ""
                      : section.textImageEN?.text1 ?? ""}
                  </p>
                </div>

                {/* Grid 2 */}
                <div className="flex flex-col items-start gap-4">
                  <div className="w-full h-64 sm:h-80 md:h-96 relative">
                    <Image
                      src={
                        language === "ID"
                          ? section.textImageID?.image2 ?? ""
                          : section.textImageEN?.image2 ?? ""
                      }
                      alt={title}
                      fill
                      className="rounded-lg shadow-md object-cover"
                    />
                  </div>
                  <p className="text-base text-justify">
                    {language === "ID"
                      ? section.textImageID?.text2 ?? ""
                      : section.textImageEN?.text2 ?? ""}
                  </p>
                </div>
              </div>
            )}

            {/* Comparison Table */}
            {(section.comparison?.length ?? 0) > 0 && (
              <div className="mt-12">
                <h2 className="text-lg sm:text-xl font-semibold mb-4">
                  {language === "ID"
                    ? "Tabel Perbandingan: Keyboard Mekanikal vs Membran"
                    : "Comparison Table: Mechanical vs Membrane Keyboards"}
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-[600px] w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-gray-300 px-4 py-2">
                          {language === "ID" ? "Fitur" : "Feature"}
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                          {language === "ID" ? "Mekanikal" : "Mechanical"}
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                          {language === "ID" ? "Membran" : "Membrane"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {(section.comparison ?? []).map((row, idx) => (
                        <tr key={idx}>
                          <td className="border border-gray-300 px-4 py-2">
                            {language === "ID"
                              ? row.featureID ?? ""
                              : row.featureEN ?? ""}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {language === "ID"
                              ? row.mechanicalID ?? ""
                              : row.mechanicalEN ?? ""}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {language === "ID"
                              ? row.membraneID ?? ""
                              : row.membraneEN ?? ""}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}

        {/* Tips List */}
        {section?.type === "tipsList" && section.tips && (
          <div className="mt-12 space-y-8">
            {section.introID && (
              <p className="text-base text-justify mb-6">
                {language === "ID" ? section.introID[0] : section.introEN[0]}
              </p>
            )}
            <h2 className="text-lg sm:text-xl font-semibold mb-4">
              {language === "ID" ? section.tips.titleID : section.tips.titleEN}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(language === "ID"
                ? section.tips.pointsID
                : section.tips.pointsEN
              ).map((point, idx) => (
                <div key={idx} className="flex flex-col items-start">
                  <div className="relative w-full">
                    <div className="absolute top-3 left-3 w-8 h-8 flex items-center justify-center bg-primary text-white font-bold rounded-full shadow">
                      {idx + 1}
                    </div>
                    <Image
                      src={point.image}
                      alt={`tip-${idx}`}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <p className="mt-4 text-base text-justify">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TextImageList (points + handGuide) */}
        {section?.type === "textImageList" && (
          <>
            <p className="text-base mb-8 text-justify">
              {language === "ID"
                ? section.descriptionID
                : section.descriptionEN}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {section.points?.map((point, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-start gap-4 relative"
                >
                  <div className="w-full relative">
                    <Image
                      src={point.image}
                      alt={`point-${idx}`}
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-primary text-white text-sm font-bold w-8 h-8 flex items-center justify-center rounded-full shadow-lg">
                      {idx + 1}
                    </div>
                  </div>
                  <p className="text-sm text-justify">
                    {language === "ID" ? point.textID : point.textEN}
                  </p>
                </div>
              ))}
            </div>

            {/* Hand Guide */}
            {section.handGuide && (
              <div className="mt-12">
                <h2 className="text-lg sm:text-xl font-semibold mb-4">
                  {language === "ID"
                    ? section.handGuide.titleID
                    : section.handGuide.titleEN}
                </h2>
                <p className="text-base text-justify mb-6">
                  {language === "ID"
                    ? section.handGuide.textID
                    : section.handGuide.textEN}
                </p>
                <Image
                  src={section.handGuide.image}
                  alt="Hand Measurement Guide"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-lg shadow-md object-contain"
                />
              </div>
            )}
          </>
        )}

        {/* Section: Detailed Section */}
        {section?.type === "detailedSection" && (
          <div className="mt-6 space-y-4">
            {/* Intro Paragraphs */}
            {(() => {
              const intro =
                language === "ID" ? section.introID : section.introEN;

              if (Array.isArray(intro)) {
                return intro.map((para: string, idx: number) => (
                  <p key={idx} className="text-base text-justify">
                    {para}
                  </p>
                ));
              } else if (typeof intro === "string") {
                return <p className="text-base text-justify">{intro}</p>;
              }

              return null;
            })()}

            {/* Items Grid */}
            {Array.isArray(section.items) && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {section.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-start gap-2">
                    <div className="w-full h-50 lg:h-60 relative">
                      <Image
                        src={item.image}
                        alt={language === "ID" ? item.titleID : item.titleEN}
                        fill
                        className="rounded-lg shadow-md object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mt-2">
                      {language === "ID" ? item.titleID : item.titleEN}
                    </h3>
                    <p className="text-base text-justify">
                      {language === "ID" ? item.textID : item.textEN}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
