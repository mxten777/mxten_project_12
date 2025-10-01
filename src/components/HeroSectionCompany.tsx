import React from "react";

interface HeroSectionCompanyProps {
  title: string;
  subtitle?: string;
  bgClass?: string;
  images?: string[];
  imageAlt?: string;
  imageClass?: string;
  buttons?: Array<{ label: string; href: string; style?: string }>;
  children?: React.ReactNode;
}

const HeroSectionCompany: React.FC<HeroSectionCompanyProps> = ({
  title,
  subtitle,
  bgClass = "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500",
  images,
  imageAlt = "회사 이미지",
  imageClass = "rounded-xl shadow-lg w-1/4 h-40 object-cover",
  buttons,
  children,
}) => {
  return (
    <section className={`relative w-full max-w-screen-xl mx-auto min-h-[600px] flex flex-col items-center justify-center overflow-hidden px-0 py-12 font-pretendard ${bgClass}`}>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      <h1 className="relative z-10 text-white dark:text-gray-100 text-4xl sm:text-6xl md:text-7xl font-extrabold text-center mb-8 drop-shadow-2xl leading-tight tracking-tight">{title}</h1>
      {subtitle && (
        <p className="relative z-10 text-purple-100 dark:text-purple-200 text-xl md:text-3xl text-center mb-10 font-medium leading-relaxed">{subtitle}</p>
      )}
      {images && (
        <div className="relative z-10 w-full max-w-lg mb-8 flex gap-4 items-center justify-center mx-auto">
          {images.map((src, idx) => (
            <img
              key={src + idx}
              src={src}
              alt={imageAlt + (idx + 1)}
              className={imageClass}
            />
          ))}
        </div>
      )}
      {buttons && (
        <div className="relative z-10 flex flex-col sm:flex-row gap-6 w-full justify-center items-center mb-4">
          {buttons.map((btn, idx) => (
            <a
              key={btn.label + idx}
              href={btn.href}
              className={btn.style || "bg-blue-600 hover:bg-blue-800 text-white font-bold py-4 px-10 rounded-full shadow-2xl text-xl md:text-2xl w-full sm:w-auto text-center transition"}
              aria-label={btn.label + " 바로가기"}
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

export default HeroSectionCompany;
