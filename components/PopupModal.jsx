import { X } from "lucide-react";

export default function PopupModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-100 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X size={24} />
        </button>
        <h1 className="text-xl font-bold text-black">Announcements</h1>
        <p className="text-sm text-gray-600 mt-2">
          The Event has postponed from 31st March 2025 and the new date is 6th
          April 2025.
        </p>
      </div>
    </div>
  );
}
