import { DocumentArrowDownIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';

export default function Downloads() {
  const files = [
    { id: 'cat2025', name: '2025 제품 카탈로그', url: '/downloads/catalog2025.pdf', desc: '동해기계 최신 제품 카탈로그 PDF' },
    { id: 'manual', name: '설치/운영 매뉴얼', url: '/downloads/manual.pdf', desc: '설치 및 운영 매뉴얼 PDF' },
  ];
  const { t } = useTranslation();
  return (
    <main className="min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-50 to-mint-400/10 px-4 md:px-8 py-16 md:py-28 font-sans" role="main">
      {/* 브랜드 슬로건 반복 노출 */}
      <div className="mb-10 text-center">
        <span className="block">
          <span className="font-extrabold text-xl md:text-2xl text-blue-400 tracking-wide drop-shadow-lg animate-fade-in block mb-2">
            {t('slogan.growth')}
          </span>
          <span className="font-extrabold text-xl md:text-2xl text-mint-400 tracking-wide drop-shadow-lg animate-fade-in block mb-2">
            {t('slogan.passion')}
          </span>
          <span className="font-extrabold text-xl md:text-2xl text-navy tracking-wide drop-shadow-lg animate-fade-in block">
            {t('slogan.safety')}
          </span>
        </span>
      </div>
      <section className="w-full max-w-2xl bg-gradient-glass rounded-2xl shadow-glass p-8 md:p-14 backdrop-blur-md border border-gray-100 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-navy leading-tight flex items-center justify-center gap-2">
          <DocumentArrowDownIcon className="w-7 h-7 text-blue-400" aria-hidden="true" />
          다운로드
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {files.map(file => (
            <div key={file.id} className="bg-white rounded-2xl shadow-soft p-6 flex flex-col items-center border border-gray-100 hover:shadow-xl transition-all">
              <DocumentArrowDownIcon className="w-8 h-8 text-mint-400 mb-2" aria-hidden="true" />
              <div className="font-bold text-lg md:text-xl mb-2 text-navy">{file.name}</div>
              <div className="text-sm text-gray-600 mb-3">{file.desc}</div>
              <a href={file.url} download className="bg-blue-400 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-500 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-soft">
                PDF 다운로드
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
