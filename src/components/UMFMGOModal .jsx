import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const UMFMGOModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-fit">
      <p
        onClick={() => setIsOpen(true)}
        className="cursor-pointer border rounded-full bg-gray-100 text-gray-800 px-4 py-2 flex items-center gap-2 text-sm w-fit hover:shadow-md hover:ring-2 hover:ring-blue-300 transition"
      >
        <FontAwesomeIcon icon={faCircleInfo} className="text-blue-600" />
        What is UMF and MGO?
      </p>
      {isOpen && (
        <div className="absolute z-50 mt-3 bg-white backdrop-blur-sm border shadow-2xl rounded-2xl w-[360px] p-5 text-sm animate-fadeIn">
          <div className="mb-4 bg-gradient-to-r from-[#fffaf0] to-[#f1f1f1] p-4 rounded-xl shadow-sm">
            <p className="text-gray-800">
              <span className="font-bold">UMF</span> is the strength and purity rating of Manuka honey.
            </p>
            <div className="flex flex-wrap gap-2 mt-2 text-[13px] font-semibold">
              <span className="text-orange-500 border-b-2 border-orange-500">10+</span>
              <span className="text-red-500 border-b-2 border-red-500">15+</span>
              <span className="text-pink-500 border-b-2 border-pink-500">20+</span>
              <span className="text-purple-600 border-b-2 border-purple-600">24+</span>
              <span className="text-blue-400 border-b-2 border-blue-400">26+</span>
              <span className="text-green-500 border-b-2 border-green-500">28+</span>
              <span className="text-blue-800 border-b-2 border-blue-800">30+</span>
            </div>
            <p className="text-gray-500 mt-2 text-[12px]">
              The higher the number, the greater the potency and rarity of Manuka honey.
            </p>
          </div>
          <div className="mb-4 bg-gradient-to-r from-[#f5faff] to-[#f1f1f1] p-4 rounded-xl shadow-sm">
            <p className="text-gray-800">
              <span className="font-bold">MGO</span> is the key natural compound that gives Manuka honey its special antibacterial strength.
            </p>
            <div className="flex flex-wrap gap-2 mt-2 text-[13px] font-semibold">
              <span className="text-orange-500 border-b-2 border-orange-500">263+</span>
              <span className="text-red-500 border-b-2 border-red-500">514+</span>
              <span className="text-pink-500 border-b-2 border-pink-500">829+</span>
              <span className="text-purple-600 border-b-2 border-purple-600">1122+</span>
              <span className="text-blue-400 border-b-2 border-blue-400">1282+</span>
              <span className="text-green-500 border-b-2 border-green-500">1450+</span>
              <span className="text-blue-800 border-b-2 border-blue-800">1620+</span>
            </div>
            <p className="text-gray-500 mt-2 text-[12px]">
              The higher the number, the higher the antibacterial properties in the honey.
            </p>
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="mt-1 px-4 py-1 rounded-full bg-gray-100 text-sm text-gray-700 hover:bg-gray-200 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UMFMGOModal;
