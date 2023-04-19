import React, { ChangeEvent, useEffect, useState } from "react";
import { useQuery } from "react-query";
import FormLayout from "../../templates/formLayout";
import MemeLayout from "../../templates/memeLayout";
import QueryLayout from "../../templates/queryLayout";
import getMemes from "../../utils/getMemes";
import { IApiPhoto, IMeme } from "../../utils/interfaces";
import Button from "../../atoms/button/button";
import Form from "../../molecules/form/form";
import MemeImage from "../../molecules/memeImage/memeImage";
import UploadButton from "../../molecules/uploadButton/uploadButton";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { FaRandom } from "react-icons/fa";

const MemeSection: React.FC = () => {
  const { isPhone } = useWindowDimensions();
  const [meme, setMeme] = useState<IMeme>({
    topText: "",
    bottomText: "",
    image: "",
  });

  const [allMeme, setAllMeme] = useState<IApiPhoto[]>();

  const memesQuery = useQuery<IApiPhoto[]>("memes", getMemes);

  useEffect(() => {
    if (memesQuery.data) {
      setAllMeme(memesQuery.data);
    }
  }, [memesQuery.data]);

  function handleChangeText(event: ChangeEvent<HTMLInputElement>) {
    setMeme((prevMeme) => ({
      ...prevMeme,
      [event.target.name]: event.target.value,
    }));
  }

  function getMemeImage() {
    const memesArray = allMeme;
    if (memesArray) {
      const randomNumber = Math.floor(Math.random() * memesArray.length);
      setMeme((prevMeme) => ({
        ...prevMeme,
        image: memesArray[randomNumber].url,
      }));
    }
  }

  return (
    <MemeLayout>
      <Form
        topText={meme.topText}
        bottomText={meme.bottomText}
        onChange={handleChangeText}
      />
      <FormLayout>
        <Button size="large" onClick={() => getMemeImage()}>
          <span className="flex items-center justify-center gap-1 md:gap-4">
            <FaRandom size={!isPhone ? 28 : 22} />
            {!isPhone ? "Generate a new meme image" : "Generate image"}
          </span>
        </Button>
        <UploadButton setMeme={setMeme} />
      </FormLayout>
      <QueryLayout queries={[memesQuery]}>
        <MemeImage
          image={meme.image}
          topText={meme.topText}
          bottomText={meme.bottomText}
        />
      </QueryLayout>
    </MemeLayout>
  );
};

export default MemeSection;
