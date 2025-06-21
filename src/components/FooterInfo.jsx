import footer from "../images/footer.png"
import { FaInfoCircle } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white p-4 sm:p-6 rounded-xl border border-gray-300 text-sm text-gray-800 space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          <img
            src={footer}
            alt="Colourclub"
            className="w-5 h-5"
          />
          <span>Colourclub members earn up to</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-yellow-100 text-yellow-600 font-semibold px-2 py-1 rounded-full text-xs">
            56
          </div>
          <span>reward points when buy this item.</span>
          <a href="/signup" className="text-blue-600 underline">Sign up or log in</a>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-4 border-t pt-4">
        <div className="uppercase tracking-wide font-medium">
          Delivery<br />
          <span className="normal-case text-gray-600">Free delivery on orders over $30</span>
        </div>
        <div className="uppercase tracking-wide font-medium">
          Estimated Delivery Date:<br />
          <span className="normal-case text-gray-600">Jun 9 - Jun 13 to</span>
        </div>
      </div>
      <div className="border-t pt-4">
        <div className="uppercase tracking-wide font-medium mb-1">After Pay</div>
        <div className="flex flex-wrap items-center gap-2 text-gray-700">
          <span>or 4 interest-free payments of <strong>$13.97</strong> with</span>
          <div className="flex items-center gap-2">
            <img src="https://media.istockphoto.com/id/652872508/photo/dollar-sign-isolated.jpg?s=612x612&w=0&k=20&c=SHjQpmUvSD-8lwAuELAr6hzTfSS_vwpiLth4maj2UR8=" alt="Afterpay" className="h-5" />
            <h2>Afterpay</h2>
            <FaInfoCircle className="text-gray-400" />
          </div>
        </div>
      </div>
      <div className="border-t pt-4">
        <div className="uppercase tracking-wide font-medium mb-2">UMF™ Scale</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 text-sm font-medium">
          <span className="border-b-2 border-orange-500 pb-1 text-center">UMF™ 10+</span>
          <span className="border-b-2 border-pink-500 pb-1 text-center">UMF™ 15+</span>
          <span className="border-b-2 border-red-500 pb-1 text-center">UMF™ 20+</span>
          <span className="border-b-2 border-fuchsia-600 pb-1 text-center">UMF™ 24+</span>
          <span className="border-b-2 border-cyan-400 pb-1 text-center">UMF™ 26+</span>
          <span className="border-b-2 border-green-400 pb-1 text-center">UMF™ 28+</span>
          <span className="border-b-2 border-indigo-600 pb-1 text-center">UMF™ 30+</span>
        </div>
      </div>
      <div className="border-t pt-4">
        <div className="uppercase tracking-wide font-medium mb-2">Taste Profile</div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 relative">
          <span className="text-sm">Clean & Intense</span>
          <div className="flex-1 h-1 bg-gradient-to-r from-orange-400 via-pink-400 to-blue-600 mx-4 relative w-full sm:w-auto">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full"></div>
          </div>
          <span className="text-sm">Bold & Intense</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
