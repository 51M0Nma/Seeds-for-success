import React from 'react';
import { Upload, ExternalLink, Image as ImageIcon, Sparkles } from 'lucide-react';

export interface ImagePreset {
  label: string;
  url: string;
}

export const COMMON_IMAGE_PRESETS: ImagePreset[] = [
  {
    label: 'Classroom',
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    label: 'Students',
    url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80'
  },
  {
    label: 'Teacher',
    url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80'
  },
  {
    label: 'Finance',
    url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80'
  },
  {
    label: 'Investing',
    url: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=1200&q=80'
  },
  {
    label: 'Community',
    url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80'
  }
];

interface ImageFieldCardProps {
  label: string;
  badge?: string;
  description?: string;
  imageUrl: string;
  onUrlChange: (url: string) => void;
  onFileUpload: (file: File) => void;
  recommendedDimensions?: string;
  aspectClass?: string;
  presets?: ImagePreset[];
}

export const ImageFieldCard: React.FC<ImageFieldCardProps> = ({
  label,
  badge,
  description,
  imageUrl,
  onUrlChange,
  onFileUpload,
  recommendedDimensions = '1920 × 1080px (Landscape)',
  aspectClass = 'aspect-16/10',
  presets = COMMON_IMAGE_PRESETS
}) => {
  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-[#141617] border border-neutral-800 space-y-4 shadow-xs">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">{label}</h4>
            {badge && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-mono border border-emerald-500/30">
                {badge}
              </span>
            )}
          </div>
          {description && <p className="text-xs text-neutral-400 mt-1">{description}</p>}
        </div>
        <span className="text-[11px] text-neutral-500 font-mono bg-neutral-900 px-2 py-1 rounded-md border border-neutral-800">
          {recommendedDimensions}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
        {/* Preview Thumbnail */}
        <div
          className={`sm:col-span-4 relative group rounded-xl overflow-hidden bg-neutral-950 border border-neutral-700/80 ${aspectClass} max-h-36 flex items-center justify-center`}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={label}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="text-xs text-neutral-500 flex flex-col items-center gap-1.5 p-4 text-center">
              <ImageIcon className="w-5 h-5 text-neutral-600" />
              <span>No image selected</span>
            </div>
          )}

          {imageUrl && (
            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-neutral-950/70 opacity-0 group-hover:opacity-100 flex items-center justify-center text-xs text-white font-medium gap-1.5 transition-opacity"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View Full Size</span>
            </a>
          )}
        </div>

        {/* Action Controls */}
        <div className="sm:col-span-8 space-y-3">
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
              Image URL / Source
            </label>
            <input
              type="text"
              value={imageUrl}
              onChange={e => onUrlChange(e.target.value)}
              placeholder="https://images.unsplash.com/... or upload local file below"
              className="w-full px-3.5 py-2 bg-neutral-900/90 border border-neutral-700 rounded-xl text-xs text-neutral-200 focus:border-[#3ec48f] focus:outline-none font-mono"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <label className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/40 text-xs font-semibold rounded-xl cursor-pointer text-emerald-300 transition-colors shadow-xs active:scale-98">
              <Upload className="w-3.5 h-3.5" />
              <span>Upload Local Image</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={e => e.target.files?.[0] && onFileUpload(e.target.files[0])}
              />
            </label>

            {presets && presets.length > 0 && (
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[10px] text-neutral-500 uppercase font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-neutral-400" />
                  Presets:
                </span>
                {presets.map(p => (
                  <button
                    key={p.label}
                    type="button"
                    onClick={() => onUrlChange(p.url)}
                    className="text-[10px] px-2 py-1 rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors border border-neutral-700/60 cursor-pointer"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
