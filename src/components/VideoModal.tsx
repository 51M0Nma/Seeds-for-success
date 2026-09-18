import React from 'react';
import { X, Volume2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div id="video-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        id="video-modal-container"
        className="relative w-full max-w-3xl bg-neutral-950 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-900">
          <h3 className="text-white font-medium text-base truncate">{title}</h3>
          <button
            id="close-video-modal"
            onClick={onClose}
            aria-label="Close Video"
            className="w-8 h-8 rounded-full bg-neutral-800 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player Display */}
        <div className="relative aspect-video bg-neutral-900 flex items-center justify-center overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0"
            title="Seeds for Success Student Story"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Caption info */}
        <div className="p-5 bg-neutral-900/90 text-sm text-neutral-300 border-t border-neutral-800 flex items-center justify-between">
          <p className="text-xs text-neutral-400">
            Students share what they learned through the Seeds for Success weekend financial workshops.
          </p>
          <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
            <Volume2 className="w-3.5 h-3.5" /> High Definition
          </span>
        </div>
      </div>
    </div>
  );
};
