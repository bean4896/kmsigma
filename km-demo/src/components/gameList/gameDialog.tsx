import React, { useEffect } from "react";

interface GameDialogProps {
  gameName: string;
  onClose: () => void;
}

const GameDialog: React.FC<GameDialogProps> = ({ gameName, onClose }) => {
  useEffect(() => {
    // Disable scrolling when the modal is open
    document.body.style.overflow = "hidden";

    return () => {
      // Enable scrolling when the modal is closed
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close the modal only if the click is outside the dialog content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={handleOverlayClick}
      ></div>
      <div className="relative bg-white p-6">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold">{gameName}</h2>
          <button className="text-gray-500" onClick={onClose}>
            Close
          </button>
        </div>

        <div className="mt-4">
          {/* Add your game dialog content here */}
          <p>This is the dialog content for {gameName}</p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameDialog;
