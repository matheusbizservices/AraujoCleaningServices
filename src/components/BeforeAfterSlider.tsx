import { useState, useRef, useEffect } from 'react';
import { Eye } from 'lucide-react';

interface SliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, title, description }: SliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isSliding, setIsSliding] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isSliding) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isSliding) return;
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsSliding(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col h-full">
      <div className="mb-4">
        <h4 className="font-bold text-slate-900 text-lg">{title}</h4>
        <p className="text-sm text-slate-500 mt-1">{description}</p>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full aspect-video rounded-2xl overflow-hidden select-none cursor-ew-resize border border-slate-100"
        onMouseDown={() => setIsSliding(true)}
        onTouchStart={() => setIsSliding(true)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onTouchMove={(e) => {
          if (e.touches[0]) handleMove(e.touches[0].clientX);
        }}
      >
        {/* After Image (Background) */}
        <img 
          src={afterImage} 
          alt="After clean" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          referrerPolicy="no-referrer"
        />
        <div className="absolute right-4 top-4 bg-emerald-600/90 text-white text-xs font-bold px-2.5 py-1.5 rounded-md backdrop-blur-sm shadow z-20">
          AFTER
        </div>

        {/* Before Image (Overlay clipped by slider position) */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={beforeImage} 
            alt="Before clean" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ width: containerRef.current?.offsetWidth || '100vw', maxWidth: 'none' }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute left-4 top-4 bg-slate-900/90 text-white text-xs font-bold px-2.5 py-1.5 rounded-md backdrop-blur-sm shadow z-20">
            BEFORE
          </div>
        </div>

        {/* Sliding Indicator Handle Line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg z-30 flex items-center justify-center transition-all pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg border-2 border-white text-xs pointer-events-auto">
            <Eye className="w-4 h-4 shrink-0" />
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center text-xs text-slate-400">
        <span>← Drag/Hold to see transition →</span>
        <span className="font-medium text-slate-500">Araujo Quality Guarantee</span>
      </div>
    </div>
  );
}
