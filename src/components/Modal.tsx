import type { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-gray-900 rounded-xl shadow-2xl max-w-2xl w-full mx-4 overflow-hidden animate-scaleIn">
        {/* 🔥 Gradient strip across the top */}
        <div className="w-full h-1.5 bg-gradient-to-r from-red-600 via-red-500 to-blue-500"></div>

        {/* ❌ Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl font-bold transition-colors"
          aria-label="Close"
        >
          ×
        </button>

        {/* Modal content */}
        <div className="p-6 sm:p-8">{children}</div>
      </div>
    </div>
  );
}