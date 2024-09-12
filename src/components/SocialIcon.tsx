import React from 'react';

interface SocialIconProps {
  src: string;
  alt: string;
  height: number;
  width: number;
}

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt, height, width }) => {
  return (
    <img 
      loading="lazy" 
      src={src} 
      alt={alt} 
      height={height}
      width={width}
      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" 
    />
  );
};

export default SocialIcon;