import Exit from '@modules/common/icons/exit';
import React, { ReactNode } from 'react';

interface PopupProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Popup: React.FC<PopupProps> = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-black p-6 rounded-lg shadow-lg relative w-2/3 h-auto">
      <button
        className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-900"
        onClick={onClose}
      >
        <Exit/>
      </button>
      {children}
    </div>
  </div>
  );
};

export default Popup;
