import React from 'react';

interface SocialButtonProps {
  icon: string;
  text: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, text }) => {
  return (
    <button className="flex overflow-hidden flex-col justify-center items-center px-16 py-5 mt-4 w-full bg-white border border-solid border-zinc-800 max-w-[528px] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-4 justify-center items-center">
        <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        <span className="self-stretch my-auto">{text}</span>
      </div>
    </button>
  );
};

export default SocialButton;