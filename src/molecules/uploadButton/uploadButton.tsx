import React, { ChangeEvent, Dispatch } from "react";
import { IMeme } from "../../utils/interfaces";
import Button from "../../atoms/button/button";
import { BiUpload } from "react-icons/bi";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

interface IProps {
  setMeme: Dispatch<React.SetStateAction<IMeme>>;
}

const UploadButton: React.FC<IProps> = ({ setMeme }) => {
  const { isPhone } = useWindowDimensions();

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || !event.target.files.length) {
      return;
    }
    const file = event.target.files[0];
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setMeme((prevMeme) => ({
          ...prevMeme,
          image: reader.result as string,
        }));
      };
      setMeme((prevMeme) => ({
        ...prevMeme,
        image: file.name,
      }));
    } else {
      //TODO: add notification
    }
  };

  return (
    <>
      <label
        htmlFor="fileInput"
        className=" ease-in duration-150 flex items-center justify-center gap-1 md:gap-4 text-sm md:text-base bg-white border border-orange text-orange hover:border-none hover:text-white hover:bg-light-orange active:bg-gradient-to-r from-white to-light-orange text-m my-4 rounded-lg cursor-pointer"
      >
        <BiUpload size={!isPhone ? 30 : 22} />
        {!isPhone ? " Upload your image" : "Upload image"}
      </label>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="w-.1 h-.1 opacity-0 overflow-hidden absolut -z-10"
      />
    </>
  );
};

export default UploadButton;
