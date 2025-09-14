import Image from "next/image";
import Link from "next/link";

export default function GuideCard({ guide, language }) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="flex flex-col items-start gap-2 cursor-pointer transform transition-transform duration-200 hover:scale-101"
    >
      <div className="relative w-full h-48">
        <Image
          src={guide.image}
          alt={language === "ID" ? guide.titleID : guide.titleEN}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <strong className="text-lg">
        {language === "ID" ? guide.titleID : guide.titleEN}
      </strong>
      <span className="text-primary text-sm">
        {language === "ID" ? "Baca panduan →" : "Read the guide →"}
      </span>
    </Link>
  );
}
