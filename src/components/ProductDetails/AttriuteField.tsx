import React, { useState } from "react";

interface AttributeFieldProps {
  label: string;
  value: string;
  width: string;
}

const AttributeField: React.FC<AttributeFieldProps> = ({ label, value, width }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-col whitespace-nowrap relative" style={{ width }}>
      <label className="flex-1 shrink self-stretch w-full text-neutral-400">
        {label}
      </label>
      <div className="flex gap-5 items-center mt-4 w-full text-neutral-800">
        <div
          className="flex overflow-hidden flex-1 shrink gap-1 justify-center items-center self-stretch px-4 py-2 my-auto w-full bg-white border border-solid basis-0 border-neutral-200 min-h-[40px] cursor-pointer"
          onClick={toggleDropdown}
        >
          <span className="self-stretch my-auto">{value}</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7948826af7a3b02f3e61d1263977693b6fbd8c079d0b228fffff7fdbb8f7503?placeholderIfAbsent=true&apiKey=0a60cade3eee49188dd76722c1ea9af2"
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            alt=""
          />
        </div>
      </div>

      {/* Dropdown content */}
      {isDropdownOpen && (
        <div className="mt-2 border border-neutral-200 bg-white rounded shadow-lg absolute top-full left-0">
          <ul className="py-2">
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">opt 1</li>
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">opt 2</li>
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">opt 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AttributeField;
