import React from 'react';

interface NavigationItemProps {
  label: string;
  href: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ label, href }) => {
  return (
    <a href={href} className="gap-2.5 self-stretch px-2.5 py-1.5 my-auto whitespace-nowrap">
      {label}
    </a>
  );
};

export default NavigationItem;