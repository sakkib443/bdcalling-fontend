import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const OfferModal = ({ onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 50);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/30 backdrop-blur-[2px] transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Modal */}
      <div
        className={`relative z-50 bg-white p-8 rounded-2xl shadow-2xl w-[600px] h-[450px] text-center flex flex-col items-center justify-center transform transition-all duration-500 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-red-500 transition-colors duration-200"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-bold mb-4">🎁 Special Offer!</h2>
        <p className="mb-6 text-lg">
          Get 20% discount on all courses. Limited time offer!
        </p>
        <button
          onClick={onClose}
          className="bg-[#F79952] hover:bg-orange-600 cursor-pointer text-white font-semibold py-2 px-6 rounded"
        >
          Get Offer
        </button>
      </div>
    </div>
  );
};

export default OfferModal;
