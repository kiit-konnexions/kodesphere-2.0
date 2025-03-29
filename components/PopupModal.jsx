import { X } from "lucide-react";

export default function PopupModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 h-full w-full bg-gradient-to-b from-transparent to-black/50 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl relative">
        <div className="flex items-center justify-between px-5">
          <img
            src="/kodespherelogo.png"
            className="h-12 rounded-xl mt-5 -ml-1"
          />
          <button
            className="h-10 w-10 flex items-center justify-center bg-neutral-100 text-neutral-700 rounded-full"
            onClick={onClose}
          >
            <X size={24} />
          </button>
        </div>
        <div className="px-5 pb-7 mt-2">
          <h1 className="text-xl font-bold text-black">Announcements</h1>
          <p className="text-sm leading-7 text-neutral-500">
            The Hackathon has postponed from 31st March, 2025 and the new date
            is 6th April, 2025.
          </p>
        </div>
      </div>
    </div>
  );
}
