import React from "react";
import ProductCard from "./ProductCard";

const productData = [
  {
    imageSrc: "/images/product5.png",
    sku: "DHDOMR11025/SRE719GLAS",
    price: "£1,050.00",
    band: {
      metal: "18k White Gold",
      ringSize: "G",
    },
    stone: [
      { label: "Type", value: "Natural" },
      { label: "Carat", value: "0.05" },
      { label: "Clarity", value: "SI2" },
      { label: "Cert", value: "IDGL/GIE" },
      { label: "Shape", value: "Round" },
      { label: "Colour", value: "H" },
      { label: "Cut", value: "Good" },
    ],
    delivery: "Delivery in 2-3 Working Days",
  },
  {
    imageSrc: "/images/product5.png",
    sku: "DHDOMR11025/SRE719GLAS",
    price: "£1,050.00",
    band: {
      metal: "18k White Gold",
      ringSize: "G",
    },
    stone: [
      { label: "Type", value: "Natural" },
      { label: "Carat", value: "0.05" },
      { label: "Clarity", value: "SI2" },
      { label: "Cert", value: "IDGL/GIE" },
      { label: "Shape", value: "Round" },
      { label: "Colour", value: "H" },
      { label: "Cut", value: "Good" },
    ],
    delivery: "Delivery in 2-3 Working Days",
  },
  {
    imageSrc: "/images/product5.png",
    sku: "DHDOMR11025/SRE719GLAS",
    price: "£1,050.00",
    band: {
      metal: "18k White Gold",
      ringSize: "G",
    },
    stone: [
      { label: "Type", value: "Natural" },
      { label: "Carat", value: "0.05" },
      { label: "Clarity", value: "SI2" },
      { label: "Cert", value: "IDGL/GIE" },
      { label: "Shape", value: "Round" },
      { label: "Colour", value: "H" },
      { label: "Cut", value: "Good" },
    ],
    delivery: "Delivery in 2-3 Working Days",
  },
  {
    imageSrc: "/images/product5.png",
    sku: "DHDOMR11025/SRE719GLAS",
    price: "£1,050.00",
    band: {
      metal: "18k White Gold",
      ringSize: "G",
    },
    stone: [
      { label: "Type", value: "Natural" },
      { label: "Carat", value: "0.05" },
      { label: "Clarity", value: "SI2" },
      { label: "Cert", value: "IDGL/GIE" },
      { label: "Shape", value: "Round" },
      { label: "Colour", value: "H" },
      { label: "Cut", value: "Good" },
    ],
    delivery: "Delivery in 2-3 Working Days",
  },
  {
    imageSrc: "/images/product5.png",
    sku: "DHDOMR11025/SRE719GLAS",
    price: "£1,050.00",
    band: {
      metal: "18k White Gold",
      ringSize: "G",
    },
    stone: [
      { label: "Type", value: "Natural" },
      { label: "Carat", value: "0.05" },
      { label: "Clarity", value: "SI2" },
      { label: "Cert", value: "IDGL/GIE" },
      { label: "Shape", value: "Round" },
      { label: "Colour", value: "H" },
      { label: "Cut", value: "Good" },
    ],
    delivery: "Delivery in 2-3 Working Days",
  },
  {
    imageSrc: "/images/product5.png",
    sku: "DHDOMR11025/SRE719GLAS",
    price: "£1,050.00",
    band: {
      metal: "18k White Gold",
      ringSize: "G",
    },
    stone: [
      { label: "Type", value: "Natural" },
      { label: "Carat", value: "0.05" },
      { label: "Clarity", value: "SI2" },
      { label: "Cert", value: "IDGL/GIE" },
      { label: "Shape", value: "Round" },
      { label: "Colour", value: "H" },
      { label: "Cut", value: "Good" },
    ],
    delivery: "Delivery in 2-3 Working Days",
  },
  {
    imageSrc: "/images/product5.png",
    sku: "DHDOMR11025/SRE719GLAS",
    price: "£1,050.00",
    band: {
      metal: "18k White Gold",
      ringSize: "G",
    },
    stone: [
      { label: "Type", value: "Natural" },
      { label: "Carat", value: "0.05" },
      { label: "Clarity", value: "SI2" },
      { label: "Cert", value: "IDGL/GIE" },
      { label: "Shape", value: "Round" },
      { label: "Colour", value: "H" },
      { label: "Cut", value: "Good" },
    ],
    delivery: "Delivery in 2-3 Working Days",
  },
  {
    imageSrc: "/images/product5.png",
    sku: "DHDOMR11025/SRE719GLAS",
    price: "£1,050.00",
    band: {
      metal: "18k White Gold",
      ringSize: "G",
    },
    stone: [
      { label: "Type", value: "Natural" },
      { label: "Carat", value: "0.05" },
      { label: "Clarity", value: "SI2" },
      { label: "Cert", value: "IDGL/GIE" },
      { label: "Shape", value: "Round" },
      { label: "Colour", value: "H" },
      { label: "Cut", value: "Good" },
    ],
    delivery: "Delivery in 2-3 Working Days",
  },
];

const Products = () => {
  return (
    <div className="container">
      <div className="pt-[60px] pb-[50px]">
        <div className="text-[#B4A377] text-lg font-bold pb-2">
          Store Jewelry
        </div>
        <div className="text-4xl font-bold text-[#212121]">
          Ready Stock for Quick Delivery
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-2 pb-[82px]">
        {productData.map((product, index) => (
          <ProductCard
            key={index}
            imageSrc={product.imageSrc}
            sku={product.sku}
            price={product.price}
            band={product.band}
            stone={product.stone}
            delivery={product.delivery}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
