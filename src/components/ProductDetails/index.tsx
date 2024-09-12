import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import AttributeField from "./AttriuteField";

const images = [
  "/images/product.png",
  "/images/product1.png",
  "/images/product2.png",
  "/images/product3.png",
  "/images/product4.png",
];

const ProductDetails = () => {
  const toneOptions = [
    { label: "WG", color: "bg-slate-100	", selected: true },
    { label: "RG", color: "bg-red-300" },
    { label: "YG", color: "bg-orange-300" },
  ];
  const [selectedMetal, setSelectedMetal] = useState<string>("10k Gold");
  const [selectedGold, setSelectedGold] = useState<string>("10k Gold");
  const [selectedStone, setSelectedStone] =
    useState<string>("Diamond Recommends");
  const [selectedSize, setSelectedSize] = useState<string>("8");
  const [mainImage, setMainImage] = useState<string>(images[0]);
  const attributes = {
    totalCarat: "2.5",
    colour: "White",
    clarity: "SI1",
    cut: "EX",
    certificate: "GIA",
  };
  const { totalCarat, colour, clarity, cut, certificate } = attributes;
  const fields = [
    { label: "Total Carat", value: totalCarat, width: "w-[140px]" },
    { label: "Colour", value: colour, width: "w-[90px]" },
    { label: "Clarity", value: clarity, width: "w-[100px]" },
    { label: "Cut", value: cut, width: "w-[150px]" },
    {
      label: "Certificate",
      value: certificate,
      width: "flex-1 shrink basis-0",
    },
  ];

  const PrevArrow = ({ onClick }: any) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 -left-[22px] transform -translate-y-1/2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={24}
        width={24}
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </button>
  );

  const NextArrow = ({ onClick }: any) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 -right-[24px] transform -translate-y-1/2"
    >
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  );
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const handleMetalChange = (metal: string) => {
    setSelectedMetal(metal);
  };

  const handleGoldChange = (gold: string) => {
    setSelectedGold(gold);
  };

  const handleStoneChange = (stone: string) => {
    setSelectedStone(stone);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    alert("Item added to cart!");
  };

  return (
    <div className="mx-auto gap-6 justify-between pt-5 flex lg:flex-nowrap flex-wrap border-b border-dashed border-neutral-200">
      <div className="lg:w-10/12 w-full">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:pl-10 md:px-4 px-4">
          <div className="w-full">
            <div className="relative group cursor-pointer">
              <Image
                src={mainImage}
                alt="diamond"
                width={800}
                height={846}

              />
              <div className="absolute inset-0 bg-white bg-opacity-15 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="mt-4 px-6">
              <Slider {...settings}>
                {images.map((src, index) => (
                  <div
                    key={index}
                    onClick={() => setMainImage(src)}
                    className="cursor-pointer"
                  >
                    <div className="relative group cursor-pointer">
                      <Image
                        src={src}
                        alt={`Thumbnail Image ${index + 1}`}
                        width={100}
                        height={100}
                        className="!h-[112px]"
                      />
                      <div className="absolute inset-0 bg-white bg-opacity-15 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="w-full">
            <div className="">
              <div className="text-4xl font-semibold text-neutral-800">
                Bespoke Signet Ring (gold)
              </div>
              <div className="flex items-center mt-1.5 gap-4">
                <div className="text-3xl font-medium text-neutral-900">
                  £2800.00
                </div>
                <div className="text-lg text-neutral-400 line-through">
                  £4000.00
                </div>
              </div>
              <div className="text-base text-neutral-400 mt-3">
                (SKU: DHLT1386PE)
              </div>
              <div className="border-t border-dashed border-neutral-200 mt-6"></div>

              {/* Metal Selection */}
              <div className="flex flex-wrap flex-col mt-6">
                <div className="flex items-center">
                  <div className="text-xl text-neutral-400">Metal: </div>
                  <div className="text-xl pl-[6px] text-dark">
                    {selectedMetal}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  {[
                    "9k Gold",
                    "10k Gold",
                    "18k Gold",
                    "Silver",
                    "Platinum",
                  ].map((metal) => (
                    <div
                      key={metal}
                      onClick={() => handleMetalChange(metal)}
                      className={`px-6 py-2 border ${
                        selectedMetal === metal
                          ? "bg-gray-200 border-zinc-800"
                          : "bg-white border-neutral-200"
                      } cursor-pointer`}
                    >
                      {metal}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap flex-col mt-6">
                <div className="flex items-center">
                  <div className="text-xl text-neutral-400">Tone : </div>
                  <div className="text-xl pl-[6px] text-dark">White Gold</div>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  {toneOptions.map((tone, index) => (
                    <div
                      key={index}
                      className="flex flex-col self-stretch my-auto w-9 text-sm leading-none text-center text-black whitespace-nowrap"
                      onClick={() => handleGoldChange(tone?.label)}
                    >
                      <div
                        className={`flex items-center justify-center px-1 w-9 h-9 ${tone.color} rounded-full`}
                      >
                        {tone.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-dashed border-neutral-200 mt-6"></div>
              <div className="flex flex-col mt-6">
                <div className="text-xl text-neutral-400">Stone selection</div>
                <div className="flex flex-wrap gap-4 mt-5">
                  {["Find a Specific Diamond", "Diamond Recommends"].map(
                    (stone) => (
                      <div
                        key={stone}
                        onClick={() => handleStoneChange(stone)}
                        className={`px-6 py-4 border ${
                          selectedStone === stone
                            ? "bg-gray-200 border-zinc-800"
                            : "bg-white border-neutral-200"
                        } cursor-pointer`}
                      >
                        {stone}
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="border-t border-dashed border-neutral-200 mt-6"></div>
              <div className="flex flex-col">
                <div className="flex flex-wrap gap-3 items-start mt-6 w-full text-xl leading-tight font-[450] max-md:px-5 max-md:max-w-full">
                  {fields.map((attr, index) => (
                    <AttributeField
                      key={index}
                      label={attr.label}
                      value={attr.value}
                      width={attr.width}
                    />
                  ))}
                </div>
              </div>
              <div className="border-t border-dashed border-neutral-200 mt-6"></div>
              <div className="flex flex-col mt-6">
                <div className="text-xl text-neutral-400">Size:</div>
                <div className="flex flex-wrap gap-3 mt-5">
                  {["6", "8", "10", "14", "18", "20"].map((size) => (
                    <div
                      key={size}
                      onClick={() => handleSizeChange(size)}
                      className={`px-3 py-2 border w-[48px] h-[40px] flex items-center justify-center ${
                        selectedSize === size
                          ? "bg-gray-200 border-zinc-800"
                          : "bg-white border-neutral-200"
                      } cursor-pointer`}
                    >
                      {size}
                    </div>
                  ))}
                  <div className="text-base text-neutral-600 flex items-center">
                    Show more sizes
                  </div>
                </div>
              </div>
              <h2 className="mt-6 flex gap-1.5 items-center self-stretch my-auto text-xl">
                <span className="self-stretch my-auto font-semibold underline text-[#B4A377] pe-[6px]">
                  Add Engraving
                </span>
                <span className="self-stretch my-auto text-[#8E8E93]">
                  (Optional)
                </span>
              </h2>
              <div
                className="bg-neutral-800 text-white text-2xl text-center py-4 mt-[38px] cursor-pointer"
                onClick={handleAddToCart}
              >
                Add to Cart
              </div>
              <div className="mt-[38px] pb-[69px] flex flex-col text-base leading-tight font-[450] max-w-[720px] text-neutral-500">
                <div className="flex flex-wrap gap-3 items-center w-full max-md:max-w-full">
                  <Image
                    src="/images/Frame.png"
                    alt="delivery"
                    width={24}
                    height={24}
                  />
                  <div className="self-stretch my-auto">
                    Delivered in 3 to 4 weeks approx. Check your PIN code.
                  </div>
                </div>
                <div className="gap-3 self-stretch mt-4 w-full max-md:max-w-full">
                  Please check design IN STOCK for quicker 2-3 days delivery.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-2/12 w-full p-6 bg-gray-100 text-center">
        <div className="text-2xl tracking-normal">Ask Query</div>
        <div className="mt-4">
          {["Customize", "Return & Policy", "Chat", "Mail", "Pdf"].map(
            (item) => (
              <div
                key={item}
                className="px-6 py-3 mt-3 bg-white border border-neutral-200 cursor-pointer"
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
