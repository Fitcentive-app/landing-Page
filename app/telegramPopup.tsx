import React from "react";
import { FaTelegram } from "react-icons/fa";
import { X } from "lucide-react"; // Import the X icon

interface TelegramPopupProps {
  onClose: () => void;
}

const TelegramPopup: React.FC<TelegramPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#073B37] p-8 rounded-lg shadow-xl max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors duration-300"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold text-white mb-4">Get Beta Access</h2>
        <p className="text-gray-300 mb-6">
          Join our Telegram group to get exclusive beta access and stay updated
          on the latest features!
        </p>
        <a
          href="https://t.me/fitcentive"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#159D91] text-white font-bold py-3 px-6 rounded-md hover:bg-[#0E6D64] flex items-center justify-center"
        >
          <FaTelegram className="mr-2" />
          Join Fitcentive TG
        </a>
      </div>
    </div>
  );
};

export default TelegramPopup;
