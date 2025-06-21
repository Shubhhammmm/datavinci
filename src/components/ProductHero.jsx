import { useState } from 'react';
import manukaJar from '../images/manukaJar.jpg';
import productimage1 from '../images/productimage1.png';
import productimage2 from '../images/productimage2.png';
import productimage3 from '../images/productimage3.png';
import productimage4 from '../images/productimage4.png';
import productimage5 from '../images/productimage5.png';
import productimage6 from '../images/productimage6.png';
import modalopener from '../images/modalopener.png';

import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';
import logo4 from '../images/logo4.png';
import logo5 from '../images/logo5.png';
import logo6 from '../images/logo6.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import UMFMGOModal from './UMFMGOModal ';

const ProductHero = () => {
  const images = [manukaJar,productimage1, productimage2, productimage3, modalopener, productimage4, productimage5, productimage6];
  const [currentImage, setCurrentImage] = useState(0);

  const prevSlide = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col lg:flex-row items-center p-4 sm:p-8 bg-gray-50">
      <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0">
        <img
          src={images[currentImage]}
          alt={`Product ${currentImage + 1}`}
          className="h-[250px] sm:h-[300px] md:h-[400px] w-auto mx-auto rounded shadow-md transition-all duration-300 object-contain"
        />
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
        >
          ›
        </button>
      </div>
      <div className="w-full lg:w-1/2 space-y-4 lg:pl-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Manuka Honey</h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-purple-600">UMF 24+ | MGO 1122+</h2>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-gray-600 w-full gap-2 sm:gap-0">
          <a href="#" className="underline text-base font-medium">
            The Optimizer
          </a>
          <div className="flex items-center gap-1 text-sm">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon key={index} icon={faHeart} style={{ color: "#FFD43B" }} />
            ))}
            <span>823 Reviews</span>
          </div>
        </div>

        <div className="flex justify-between items-center w-full sm:w-1/2">
          <UMFMGOModal />
        </div>

        <div className="w-full max-w-lg">
          <div className="text-left text-gray-700 space-y-1">
            <p className="text-sm sm:text-base">For those times in life when quality comes first. This pure UMF™ 24+ Manuka</p>
            <p className="text-sm sm:text-base">Honey is powerfully active, sourced from wild and rugged locations around</p>
            <p className="text-sm sm:text-base">Aotearoa New Zealand and great for almost all uses. It has a full, delicious</p>
            <p className="text-sm sm:text-base">flavour and your body will love you for it.</p>
          </div>
          <div className="flex justify-between flex-wrap gap-4 mt-4">
            <img src={logo1} alt="Certification 1" className="h-8 sm:h-12 w-8 sm:w-12 object-contain" />
            <img src={logo2} alt="Certification 2" className="h-8 sm:h-12 w-8 sm:w-12 object-contain" />
            <img src={logo3} alt="Certification 3" className="h-8 sm:h-12 w-8 sm:w-12 object-contain" />
            <img src={logo4} alt="Certification 4" className="h-8 sm:h-12 w-8 sm:w-12 object-contain" />
            <img src={logo5} alt="Certification 5" className="h-8 sm:h-12 w-8 sm:w-12 object-contain" />
            <img src={logo6} alt="Certification 6" className="h-8 sm:h-12 w-8 sm:w-12 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
