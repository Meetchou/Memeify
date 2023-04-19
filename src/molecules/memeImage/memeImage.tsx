import { toPng } from "html-to-image";
import React, { useCallback, useRef, useState } from "react";
import Button from "../../atoms/button/button";
import { IMeme } from "../../utils/interfaces";

const MemeImage: React.FC<IMeme> = ({ image, topText, bottomText }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const downloadButton = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "generated-meme.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        //TODO: Add Notification
        console.log(err);
      });
  }, [ref]);

  const className =
    "meme-text px-10 break-words absolute text-center w-full text-xl md:text-3xl text-white uppercase";

  return (
    <div className="flex flex-col items-center w-full h-screen">
      {image && (
        <div ref={ref} className="relative max-w-md">
          <img
            src={image}
            alt="meme image"
            className="rounded-sm shadow-md shadow-orange w-full"
            onLoad={() => setIsImageLoaded(true)}
          />
          {isImageLoaded && (
            <>
              <h2 className={`${className} top-5`}>{topText}</h2>
              <h2 className={`${className} bottom-5`}>{bottomText}</h2>
            </>
          )}
        </div>
      )}
      {isImageLoaded && <Button onClick={downloadButton}>Download</Button>}
    </div>
  );
};

export default MemeImage;
