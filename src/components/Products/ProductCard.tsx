import Image from "next/image";
import React from "react";

interface BandProps {
  metal: string;
  ringSize: string;
}

interface StoneProps {
  label: string;
  value: string;
}

interface ProductCardProps {
  imageSrc: string;
  sku: string;
  price: string;
  band: BandProps;
  stone: StoneProps[];
  delivery: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, sku, price, band, stone, delivery }) => {
  return (
    <div className="flex flex-col flex-1 shrink self-stretch py-4 my-auto bg-white border border-gray-100 border-solid basis-0 min-w-[240px] max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <Image
          height={422}
          width={240}
          src={imageSrc}
          alt="product"
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-col justify-start px-4 mt-4 w-full text-black max-md:max-w-full">
        <div className="self-start text-lg leading-loose text-start">
          SKU: {sku}
        </div>
        <div className="mt-1.5 text-xl font-medium">{price}</div>
      </div>
      <div className="flex flex-col px-4 mt-4 w-full max-md:max-w-full">
        <div className="border-t border-dashed border-neutral-200"></div>
        <div className="flex flex-col mt-3 w-full leading-tight">
          <div className="self-start text-xl font-medium text-center text-neutral-800">
            Band
          </div>
          <div className="flex gap-3 items-start mt-3 w-full">
            <div className="flex flex-col flex-1 shrink basis-0">
              <div className="text-base text-neutral-400">Metal</div>
              <div className="mt-1 text-lg font-[450] text-zinc-800">
                {band.metal}
              </div>
            </div>
            <div className="flex flex-col flex-1 shrink justify-center basis-0">
              <div className="text-base text-neutral-400">Ring Size</div>
              <div className="mt-1 text-lg font-[450] text-zinc-800">
                {band.ringSize}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-dashed border-neutral-200 mt-3"></div>
        <div className="flex flex-col mt-3 w-full leading-tight">
          <div className="self-start text-xl font-medium text-center text-neutral-800">
            Stone
          </div>
          <div className="grid grid-cols-3 gap-3 items-start mt-3 w-full whitespace-nowrap">
            {stone.map((item, index) => (
              <div key={index} className="flex flex-col flex-1 shrink basis-0">
                <div className="text-base text-neutral-400">{item.label}</div>
                <div className="mt-1 text-lg font-[450] text-zinc-800">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-dashed border-neutral-200 mt-3"></div>
      </div>
      <div className="flex flex-col justify-center px-4 mt-4 w-full text-center max-md:max-w-full">
        <div className="self-start text-sm leading-6 text-stone-400">
          {delivery}
        </div>
        <div className="flex gap-6 items-center mt-3 w-full text-lg leading-none font-[450]">
          <div className="flex-1 shrink gap-2.5 self-stretch px-4 py-3 my-auto bg-white border border-solid border-indigo-950 text-neutral-800">
            View Details
          </div>
          <div className="flex-1 shrink gap-2.5 self-stretch px-4 py-3 my-auto text-white border border-white border-solid bg-neutral-800">
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
