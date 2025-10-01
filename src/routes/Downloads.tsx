import Footer from '../components/Footer';
import { DocumentArrowDownIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';

export default function Downloads() {
  const files = [
    { id: 'cat2025', name: '2025 제품 카탈로그', url: '/downloads/catalog2025.pdf', desc: '동해기계 최신 제품 카탈로그 PDF' },
    { id: 'manual', name: '설치/운영 매뉴얼', url: '/downloads/manual.pdf', desc: '설치 및 운영 매뉴얼 PDF' },
  ];
  const { t } = useTranslation();
  return (
  <main className="min-h-screen w-full flex flex-col items-center bg-white dark:bg-gray-900 px-0 py-0 font-sans font-pretendard relative overflow-x-hidden" role="main">
      {/* Section Divider Top */}
      <div className="w-full max-w-2xl mx-auto border-b border-gray-100 mt-0 mb-0" />
      {/* 브랜드 슬로건 */}
      <div className="mb-16 text-left w-full max-w-2xl mx-auto mt-32">
        <span className="block leading-[1.12]">
          <span className="block font-bold text-base md:text-lg text-blue-600 tracking-tight mb-2">
            {t('slogan.growth')}
          </span>
          <span className="block font-bold text-base md:text-lg text-navy tracking-tight mb-2">
            {t('slogan.passion')}
          </span>
          <span className="block font-bold text-base md:text-lg text-gray-400 tracking-tight">
            {t('slogan.safety')}
          </span>
        </span>
      </div>
      {/* Section Divider */}
      <div className="w-full max-w-2xl mx-auto border-t border-gray-100 mb-10" />
      <section className="w-full max-w-2xl mx-auto mb-24 relative z-10">
        <h1 className="text-base md:text-lg font-bold mb-10 text-navy leading-tight flex items-center gap-2">
          <DocumentArrowDownIcon className="w-6 h-6 text-blue-600" aria-hidden="true" />
          다운로드
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {files.map(file => (
            <div key={file.id} className="bg-white rounded-xl p-7 md:p-8 text-left border border-gray-100 flex flex-col justify-between mb-4 transition-all hover:shadow-none hover:border-blue-100 cursor-pointer">
              <DocumentArrowDownIcon className="w-8 h-8 text-blue-500 mb-3" aria-hidden="true" />
              <div className="font-medium text-sm md:text-base mb-1 text-navy">{file.name}</div>
              <div className="text-xs md:text-sm mb-2 text-gray-500 font-normal leading-relaxed">{file.desc}</div>
              <a href={file.url} download className="bg-blue-500 text-white font-medium py-2 px-7 rounded-full border border-blue-500 shadow-none hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 text-xs md:text-sm tracking-wider transition-all">
                PDF 다운로드
              </a>
            </div>
          ))}
        </div>
      </section>
      {/* Section Divider Bottom */}
      <div className="w-full max-w-2xl mx-auto border-t border-gray-100 mb-8" />
  {/* Footer */}
      <Footer />
    </main>
  );
}