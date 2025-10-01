
import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  bgClass?: string;
  images?: string[];
  imageAlt?: string;
  imageClass?: string;
  buttons?: Array<{ label: string; href: string; style?: string; ariaLabel?: string }>;
  children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  bgClass = "bg-gradient-to-br from-blue-50 via-white to-blue-100",
  images,
  imageAlt = "이미지",
  imageClass = "rounded-xl shadow-lg w-1/4 h-40 object-cover",
  buttons,
  children,
}) => {
  return (
  <section className={`relative w-full max-w-screen-xl mx-auto min-h-[500px] flex flex-col items-center justify-center overflow-hidden px-0 py-6 font-pretendard ${bgClass}`}>
  {/* 배경 그라데이션 레이어 제거됨 - bgClass로만 제어 */}
  <h1 className="relative z-10 text-blue-900 dark:text-gray-100 text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 drop-shadow-2xl leading-tight tracking-tight">{title}</h1>
      {subtitle && (
        <p className="relative z-10 text-blue-600 dark:text-blue-200 text-base md:text-lg text-left mb-6 font-normal leading-relaxed" style={{ whiteSpace: 'pre-line' }}>{subtitle}</p>
      )}
      {images && (
        <div className="relative z-10 w-full max-w-lg mb-6 flex gap-2 items-center justify-center mx-auto">
          {images.map((src, idx) => (
            <img
              key={src + idx}
              src={src}
              alt={imageAlt + (idx + 1)}
              className={imageClass || "rounded-xl shadow-lg w-1/5 h-32 object-cover"}
            />
          ))}
        </div>
      )}
      {buttons && (
        <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full justify-center items-center mb-2">
          {buttons.map((btn, idx) => (
            <a
              key={btn.label + idx}
              href={btn.href}
              className={btn.style || "bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-full shadow-2xl text-base md:text-lg w-full sm:w-auto text-center transition"}
              aria-label={btn.ariaLabel || (btn.label + " 바로가기")}
            >
              {btn.label}
            </a>
          ))}
        </div>
      )}
      {children}
    </section>
  );
};

export default HeroSection;
