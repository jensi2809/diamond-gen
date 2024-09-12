import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FooterProps {}

interface ContactInfoProps {
  name: string;
  phone: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ name, phone }) => {
  return (
    <div className="mt-2 w-full first:mt-0">
      <h3 className="text-white font-semibold uppercase">{name}</h3>
      <div className="flex items-center gap-2 mt-2 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
        </svg>
        <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
      </div>
    </div>
  );
};

const Footer: React.FC<FooterProps> = () => {
  const services = ["Manufacturing", "Grading", "Benefits", "Products", "GIA Certified Diamonds"];
  const aboutLinks = ["About Us", "Media", "Events", "Gallery", "Privacy Policy"];
  const contacts = [
    { name: "John Parker", phone: "+66 89 125 0077" },
    { name: "ALex Xender", phone: "+66 89 125 0077" },
    { name: "John Parker", phone: "+66 89 125 0077" }
  ];

  return (
    <footer className="bg-[#B4A377]">
      <div className='container'>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-6 py-14">
        <div className="lg:col-span-2 md:col-span-3 col-span-1 flex flex-col">
        <Image src="/images/logo-white.svg" alt="diamond" width={184} height={78} />
          <p className="mt-4 text-white">
            At GenZ Diamonds, we're redefining the diamond industry with our lab-grown gems. From crafting and wholesaling to retailing, our diamonds offer unmatched brilliance and a modern touch of sustainability.
          </p>
        </div>
        <div className="col-span-1 flex flex-col text-white">
          <h2 className="text-xl font-bold">Our Services</h2>
          <nav className="mt-4">
            {services.map((service, index) => (
              <Link href="#" className="block mt-2 first:mt-0" key={index}>
                {service}
              </Link>
            ))}
          </nav>
        </div>
        <div className="col-span-1 flex flex-col text-white">
          <h2 className="text-xl font-bold">About Us</h2>
          <nav className="mt-4">
            {aboutLinks.map((link, index) => (
              <Link href="#" className="block mt-2 first:mt-0" key={index}>
                {link}
              </Link>
            ))}
          </nav>
        </div>
        <div className="col-span-1 flex flex-col text-white">
          <h2 className="text-xl font-bold">About Us</h2>
          <nav className="mt-4">
            {aboutLinks.map((link, index) => (
              <Link href="#" className="block mt-2 first:mt-0" key={index}>
                {link}
              </Link>
            ))}
          </nav>
        </div>
        <div className="col-span-1 flex flex-col text-white">
          <h2 className="text-xl font-bold">Contact Us</h2>
          <div className="mt-4">
            <div className='flex '> </div>
            {contacts.map((contact, index) => (
              <ContactInfo key={index} name={contact.name} phone={contact.phone} />
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white py-9 text-center text-sm text-white">
        © 2024 GenZ Diamond. All Rights Reserved.
      </div>
      </div>
    </footer>
  );
};

export default Footer;
