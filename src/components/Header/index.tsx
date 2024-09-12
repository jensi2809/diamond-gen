import React from 'react';
import Image from 'next/image';
import NavigationItem from '../NavigationItem';
import SocialIcon from '../SocialIcon';

interface HeaderProps {}

const navigationItems = [
  { label: 'Stud', href: '#' },
  { label: 'Diamond', href: '#' },
  { label: 'Jewelry', href: '#' },
  { label: 'Made to Order', href: '#' },
];

const headerIcons = [
  { src: '/images/search.svg', alt: 'search' },
  { src: '/images/user.svg', alt: 'User' },
  { src: '/images/cart.svg', alt: 'Cart' },
];

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
    <div className='py-5 flex justify-center w-full '>
            <Image src="/images/logo.svg" alt="diamond" width={184} height={78} />
        </div>
    <header className="container flex flex-wrap justify-between items-center !py-4 bg-white border border-solid border-stone-100">
      <div className="flex gap-6 self-stretch my-auto min-h-[36px]" />
      <nav className="flex flex-wrap flex-1 shrink gap-4 justify-center items-center self-stretch my-auto text-base text-center basis-0 min-w-[240px] text-neutral-800 max-md:max-w-full">
        {navigationItems.map((item, index) => (
          <NavigationItem key={index} label={item.label} href={item.href} />
        ))}
      </nav>
      <div className="flex gap-6 items-center self-stretch my-auto">
        {headerIcons.map((icon, index) => (
          <SocialIcon key={index} src={icon.src} alt={icon.alt} height={24} width={24} />
        ))}
      </div>
    </header>
    </>
  );
};

export default Header;