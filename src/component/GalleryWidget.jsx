import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Plus, HelpCircle } from 'lucide-react';

export default function GalleryWidget() {
  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=500&h=500&fit=crop',
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const fileInputRef = useRef(null);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleAddImage = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prev) => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-[#363C43] rounded-[18px] shadow-[5px_5px_10px_rgba(0,0,0,0.5),-5px_-5px_10px_rgba(96,96,96,0.1)] p-6 relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center gap-3">
          <button className="w-6 h-6 rounded-full bg-[#171717] flex items-center justify-center text-gray-400 hover:text-gray-300 transition-colors shadow-inner">
            <HelpCircle size={16} />
          </button>
          
          <div className="bg-[#171717] px-6 py-2 rounded-[20px] shadow-inner">
            <h2 className="text-lg font-semibold text-white">Gallery</h2>
          </div>
        </div>
        
        <div className="flex items-center gap-3 ml-auto">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
          <button
            onClick={handleAddImage}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#FFFFFF] hover:bg-gray-100 text-[#363C43] rounded-full text-xs font-bold transition-all shadow-[4px_4px_8px_rgba(0,0,0,0.4),-2px_-2px_6px_rgba(255,255,255,0.1)] hover:shadow-[6px_6px_12px_rgba(0,0,0,0.5),-3px_-3px_8px_rgba(255,255,255,0.15)] active:scale-95"
          >
            <Plus size={16} strokeWidth={3} />
            <span>ADD IMAGE</span>
          </button>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevious}
              className="w-11 h-11 rounded-full bg-gradient-to-br from-[#303439] to-[#161718] flex items-center justify-center text-gray-400 hover:text-white transition-all shadow-[4px_4px_8px_rgba(0,0,0,0.5),-2px_-2px_6px_rgba(96,96,96,0.1)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.4)] active:scale-95"
            >
              <ChevronLeft size={20} strokeWidth={3} />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-gradient-to-br from-[#303439] to-[#161718] flex items-center justify-center text-gray-400 hover:text-white transition-all shadow-[4px_4px_8px_rgba(0,0,0,0.5),-2px_-2px_6px_rgba(96,96,96,0.1)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.4)] active:scale-95"
            >
              <ChevronRight size={20} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative aspect-square rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:rotate-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.6)]"
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover transition-all duration-300 hover:brightness-110"
            />
            {index === currentIndex && (
              <div className="absolute inset-0 border-2 border-white/50 rounded-3xl"></div>
            )}
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-[#2A2D33] rounded-full h-1.5 overflow-hidden shadow-inner">
        <div
          className="bg-gradient-to-r from-[#4A4E54] to-[#8B8E93] h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}