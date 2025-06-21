import NZ from "../images/NZ.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return ( 
    <div className="bg-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center py-6">
          <button 
            className="lg:hidden text-gray-600 hover:text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="flex flex-col items-center lg:hidden">
            <img src={NZ} alt="New Zealand" className="h-8 w-auto" />
            <div className="flex flex-col text-center">
              <span className="mt-1 text-lg font-medium tracking-wider">NEW ZEALAND</span>
              <span className="text-lg font-medium tracking-wider">HONEY CO.</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-12">
            <a href="#" className="text-center rounded-full text-sm text-#313131 hover:text-black border border-gray-800 px-3 py-2">
              WHICH MANUKA IS FOR ME?
            </a>
            <a href="#" className="text-sm font-normal tracking-wider text-gray-600 hover:text-black">Shop</a>
            <a href="#" className="text-sm font-normal tracking-wider text-gray-600 hover:text-black">Explore</a>
            <div className="flex flex-col items-center mx-8">
              <img src={NZ} alt="New Zealand" className="h-8 w-auto" />
              <div className="flex flex-col text-center">
                <span className="mt-1 text-lg font-medium tracking-wider">NEW ZEALAND</span>
                <span className="text-lg font-medium tracking-wider">HONEY CO.</span>
              </div>
            </div>
            
            <a href="#" className="text-sm uppercase tracking-wider text-gray-600 hover:text-black">About</a>
            <a href="#" className="text-sm uppercase tracking-wider text-gray-600 hover:text-black">Rewards</a>
            <a href="#" className="text-sm uppercase tracking-wider text-gray-600 hover:text-black">Contact</a>
          </div>
          <div className="flex gap-4 sm:gap-6">
            <button className="text-gray-600 hover:text-black size-lg"><FontAwesomeIcon icon={faUser} /></button>
            <button className="text-gray-600 hover:text-black"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            <button className="text-gray-600 hover:text-black"><FontAwesomeIcon icon={faCartShopping} /></button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-4 border-t">
            <a href="#" className="block text-center rounded-full text-sm text-#313131 hover:text-black border border-gray-800 px-3 py-2 mb-4">
              WHICH MANUKA IS FOR ME?
            </a>
            <a href="#" className="block text-sm font-normal tracking-wider text-gray-600 hover:text-black py-2">Shop</a>
            <a href="#" className="block text-sm font-normal tracking-wider text-gray-600 hover:text-black py-2">Explore</a>
            <a href="#" className="block text-sm uppercase tracking-wider text-gray-600 hover:text-black py-2">About</a>
            <a href="#" className="block text-sm uppercase tracking-wider text-gray-600 hover:text-black py-2">Rewards</a>
            <a href="#" className="block text-sm uppercase tracking-wider text-gray-600 hover:text-black py-2">Contact</a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;