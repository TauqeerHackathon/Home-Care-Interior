import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Tag } from 'lucide-react';
import { ProjectItem } from '../data/businessData';

interface LightboxProps {
  items: ProjectItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const ProjectLightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else {
      onNavigate(items.length - 1);
    }
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onNavigate(currentIndex + 1);
    } else {
      onNavigate(0);
    }
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Project viewer: ${currentItem.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-md p-4 sm:p-6 lg:p-8 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-charcoal border border-white/10 rounded-sm shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with project info & close */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-charcoal/80">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest text-champagne font-medium">
              {currentItem.category}
            </span>
            <h3 className="text-lg font-serif text-white tracking-wide">{currentItem.title}</h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-ivory/70 hover:text-white rounded-sm hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image View */}
        <div className="relative flex-1 flex items-center justify-center bg-black/60 overflow-hidden min-h-[300px] sm:min-h-[460px]">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[65vh] w-auto max-w-full object-contain mx-auto select-none"
            referrerPolicy="no-referrer"
          />

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 text-white bg-charcoal/80 hover:bg-champagne hover:text-charcoal border border-white/10 rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
            aria-label="Previous project photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 text-white bg-charcoal/80 hover:bg-champagne hover:text-charcoal border border-white/10 rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
            aria-label="Next project photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption & Location metadata */}
        <div className="px-6 py-4 bg-charcoal/90 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-ivory/75">
          <p className="max-w-2xl font-light leading-relaxed">{currentItem.caption}</p>

          <div className="flex items-center gap-4 shrink-0 text-stone-muted">
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-champagne" />
              <span>{currentItem.location}</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-champagne" />
              <span>{currentItem.type === 'conceptual-inspiration' ? 'Concept Study' : 'Completed Project'}</span>
            </span>
            <span>
              {currentIndex + 1} / {items.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
