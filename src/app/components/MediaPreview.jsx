import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const DEFAULT_IMAGE = "/placeholder.png";
const DEFAULT_VIDEO = "/no-video.png";

export default function MediaPreview({ product }) {
  const [index, setIndex] = useState(-1);

  const images =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images
      : [DEFAULT_IMAGE];

  const slides = [
    ...images.map((img) => ({ type: "image", src: img })),
    ...(product.video
      ? [
          {
            type: "video",
            sources: [
              {
                src: product.video,
                type: "video/mp4",
              },
            ],
          },
        ]
      : []),
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:sticky lg:top-28">
        {/* Thumbnails Desktop */}
        <div className="hidden lg:flex flex-col gap-2">
          {images.map((img, i) => (
            <div
              key={i}
              className="w-24 h-28 relative cursor-pointer"
              onClick={() => setIndex(i)}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover rounded"
                onError={(e) => {
                  e.currentTarget.src = DEFAULT_IMAGE;
                }}
              />
            </div>
          ))}
        </div>

        {/* Main Video/Image */}
        <div
          className="w-full relative rounded-xl overflow-hidden cursor-pointer"
          onClick={() => product.video && setIndex(images.length)}
        >
          {product.video ? (
            <video
              src={product.video}
              className="object-cover w-full h-auto aspect-[4/3] md:aspect-[4/3] lg:aspect-[9/16] lg:max-w-[335px]"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img
              src={DEFAULT_VIDEO}
              alt="No video available"
              className="w-full h-auto aspect-[4/3] md:aspect-[4/3] lg:aspect-[9/16] lg:max-w-[335px] object-cover rounded"
            />
          )}

          {/* Thumbnails Mobile */}
          <div className="flex lg:hidden gap-2 mt-2">
            {images.slice(0, 5).map((img, i) => (
              <div
                key={i}
                className={`flex-1 h-20 relative cursor-pointer`}
                onClick={() => setIndex(i)}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover rounded"
                  onError={(e) => {
                    e.currentTarget.src = DEFAULT_IMAGE;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Video, Zoom]}
      />
    </>
  );
}
