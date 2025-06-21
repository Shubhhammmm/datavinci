import React, { useState } from "react";
import productimage1 from "../images/productimage1.png";
import productimage2 from "../images/productimage2.png";
import productimage3 from "../images/productimage3.png";
import productimage4 from "../images/productimage4.png";
import productimage5 from "../images/productimage5.png";
import productimage6 from "../images/productimage6.png";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import icon5 from "../images/icon5.png";
import icon6 from "../images/icon6.png";
import icon7 from "../images/icon7.png";
import bundle1 from "../images/bundle1.png";
import bundle2 from "../images/bundle2.png";
import bundle3 from "../images/bundle3.png";
import modalopener from "../images/modalopener.png";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./FooterInfo";

const ProductImages = () => {
  const [selectedSize, setSelectedSize] = useState("125g / 4.4oz");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 p-4 sm:p-8">
      <div className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <img src={productimage1} alt="Product 1" className="aspect-[1/1] object-cover w-full rounded h-[150px] sm:h-[200px]" />
          <img src={productimage2} alt="Product 2" className="aspect-[1/1] object-cover w-full rounded h-[150px] sm:h-[200px]" />
          <img src={productimage3} alt="Product 3" className="col-span-1 sm:col-span-2 aspect-[3/2] object-cover w-full rounded h-[200px] sm:h-[300px]" />
          <img src={modalopener} alt="Product 4" className="aspect-[1/1] object-cover w-full rounded h-[150px] sm:h-[200px]" />
          <img src={productimage4} alt="Product 5" className="aspect-[1/1] object-cover w-full rounded h-[150px] sm:h-[200px]" />
          <img src={productimage5} alt="Product 6" className="aspect-[1/1] object-cover w-full rounded h-[150px] sm:h-[200px]" />
          <img src={productimage6} alt="Product 7" className="aspect-[1/1] object-cover w-full rounded h-[150px] sm:h-[200px]" />
        </div>
      </div>
      <div className="flex-1 space-y-4 sm:space-y-6">
        <div>
          <h3 className="text-base sm:text-lg font-semibold">SIZE (SELECT ONE):</h3>
          
          <div className="flex flex-wrap gap-2 mt-2 items-center">
            <div className="text-sm sm:text-base font-medium">Variant:</div>
            {["125g / 4.4oz", "250g / 8.8oz", "500g / 17.6oz"].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 sm:px-4 py-1 sm:py-2 border rounded-lg transition text-sm sm:text-base ${
                  selectedSize === size ? "bg-purple-600 text-white" : "bg-white text-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2 sm:gap-4 items-center">
          <img src={icon1} alt="" className="h-[30px] sm:h-[40px] w-auto" />
          <img src={icon2} alt="" className="h-[30px] sm:h-[40px] w-auto" />
          <img src={icon3} alt="" className="h-[30px] sm:h-[40px] w-auto" />
          <img src={icon4} alt="" className="h-[30px] sm:h-[40px] w-auto" />
          <img src={icon5} alt="" className="h-[30px] sm:h-[40px] w-auto" />
          <img src={icon6} alt="" className="h-[30px] sm:h-[40px] w-auto" />
          <img src={icon7} alt="" className="h-[30px] sm:h-[40px] w-auto" />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-4">PAYMENT OPTIONS (SELECT ONE):</h3>

          <div className="bg-gray-100 border border-gray-300 rounded-2xl p-4 sm:p-6 w-full max-w-3xl flex flex-col items-center gap-4">
            <div>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <button className="flex justify-between items-center bg-[#F1B434] text-white rounded-full w-full sm:w-[290px] px-3 sm:px-4 py-2 sm:py-3">
                  <div className="text-left leading-tight">
                    <div className="text-xs sm:text-sm">One-time</div>
                    <div className="text-xs sm:text-sm">purchase</div>
                  </div>
                  <div className="h-full border-l border-white mx-2 sm:mx-4"></div>
                  <div className="text-right leading-tight">
                    <div className="font-semibold text-sm sm:text-base">$55.88</div>
                    <div className="text-xs">USD</div>
                  </div>
                </button>
                <button className="flex justify-between items-center bg-white text-black border border-yellow-500 rounded-full w-full sm:w-[290px] px-4 sm:px-6 py-2 sm:py-4">
                  <div className="text-left leading-tight">
                    <div className="text-xs sm:text-sm">Subscribe & save</div>
                    <div className="text-xs sm:text-sm">20%</div>
                  </div>
                  <div className="h-full border-l border-yellow-500 mx-2 sm:mx-4"></div>
                  <div className="text-right leading-tight">
                    <div className="font-semibold text-sm sm:text-base">$44.70</div>
                    <div className="text-xs">USD</div>
                  </div>
                </button>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 self-start">
                <FontAwesomeIcon icon={faRotateRight} /> What is a subscription?
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-sm sm:text-base font-semibold tracking-wide mb-2">SELECT QUANTITY</h3>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-full sm:w-auto">
              <div className="flex items-center bg-[#F1B434] text-white rounded-full px-3 py-2 justify-between">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-2 sm:px-3 py-1 bg-white text-black rounded-full text-base sm:text-lg font-semibold cursor-pointer"
                >
                  -
                </button>
                <span className="px-2 sm:px-3 font-medium text-sm sm:text-base">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2 sm:px-3 py-1 bg-white text-black rounded-full text-base sm:text-lg font-semibold cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
            <div className="w-full sm:w-3/4">
              <button className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-black text-white rounded-full font-medium text-sm tracking-wide">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="p-4 sm:p-6 bg-gray-100 border border-gray-300 rounded-2xl w-full">
          <h3 className="text-lg sm:text-xl font-semibold text-center flex items-center justify-center gap-4">
            <span className="text-lg sm:text-xl">‹</span>
            <span>Beauty Bundle</span>
            <span className="text-lg sm:text-xl">›</span>
          </h3>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 sm:mt-6 gap-4 sm:gap-6">
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
              <div className="flex flex-col items-center w-[80px] sm:w-[100px] text-center">
                <div className="bg-white rounded-xl p-2">
                  <img src={bundle1} alt="UMF 20+" className="w-16 sm:w-20 h-16 sm:h-20 object-contain" />
                </div>
                <p className="mt-2 font-medium text-sm sm:text-base">UMF 20+</p>
                <select className="mt-1 bg-gray-200 text-xs sm:text-sm rounded-full px-2 sm:px-3 py-1">
                  <option>250g</option>
                </select>
              </div>
              <div className="flex items-center justify-center h-[80px] sm:h-[100px]">
                <p className="text-xl sm:text-2xl font-bold">+</p>
              </div>
              <div className="flex flex-col items-center w-[80px] sm:w-[100px] text-center">
                <div className="bg-white rounded-xl p-2">
                  <img src={bundle2} alt="UMF 24+" className="w-16 sm:w-20 h-16 sm:h-20 object-contain" />
                </div>
                <p className="mt-2 font-medium text-sm sm:text-base">UMF 24+</p>
                <select className="mt-1 bg-gray-200 text-xs sm:text-sm rounded-full px-2 sm:px-3 py-1">
                  <option>250g</option>
                </select>
              </div>
              <div className="flex items-center justify-center h-[80px] sm:h-[100px]">
                <p className="text-xl sm:text-2xl font-bold">+</p>
              </div>
              <div className="flex flex-col items-center w-[80px] sm:w-[100px] text-center">
                <div className="bg-white rounded-xl p-2">
                  <img src={bundle3} alt="Wooden Spoon" className="w-16 sm:w-20 h-16 sm:h-20 object-contain" />
                </div>
                <p className="mt-2 font-medium text-sm sm:text-base">Wooden Spoon</p>
              </div>
            </div>
            <div className="flex flex-col items-center sm:items-end sm:ml-auto text-right w-full sm:w-auto">
              <div className="flex flex-row flex-nowrap items-baseline gap-2 w-full sm:w-auto justify-center sm:justify-end">
                <p className="text-xs sm:text-sm text-gray-500 line-through whitespace-nowrap">
                  $478.75 USD
                </p>
                <p className="text-base sm:text-xl font-semibold whitespace-nowrap">
                  $430.88 USD
                </p>
                <span className="text-xs sm:text-sm text-green-600 font-medium whitespace-nowrap">
                  Save 10%
                </span>
              </div>
              <button className="mt-2 px-4 sm:px-6 py-2 sm:py-3 bg-black text-white rounded-full font-medium w-full text-sm">
                ADD BUNDLE TO CART
              </button>
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    </div>
  );
};

export default ProductImages;
