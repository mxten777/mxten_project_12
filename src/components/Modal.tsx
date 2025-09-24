import { XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, title, children }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 오버레이 */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} aria-hidden="true"></div>
      {/* 모달 카드 */}
      <div className="relative bg-white rounded-2xl shadow-soft border border-gray-100 p-8 w-full max-w-md mx-auto animate-fade-in-up">
        <button
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-50 hover:bg-blue-100 text-gray-400 hover:text-blue-400 transition-all"
          onClick={onClose}
          aria-label="닫기"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
        {title && <h2 className="text-xl font-bold text-navy mb-4">{title}</h2>}
        <div>{children}</div>
      </div>
    </div>
  );
}
