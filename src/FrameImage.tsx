import React from "react";

interface FramedImageProps {
  characterName: string;
  dialogueText: string;
}

const FramedImage: React.FC<FramedImageProps> = ({
  characterName,
  dialogueText,
}) => {
  return (
    <div className="relative w-full max-w-[360px] h-[280px] border-4 border-pink-500 mx-2 sm:px-2">
      <div className="absolute top-[-12px] left-[-4px] py-1 px-2 bg-pink-700 text-white text-sm font-bold font-roboto">
        {characterName}
      </div>
      <div className="absolute top-6 left-2 right-2 bottom-2 bg-white bg-opacity-80 text-black text-lg px-2 font-roboto overflow-y-auto">
        {dialogueText}
      </div>
    </div>
  );
};

export default FramedImage;