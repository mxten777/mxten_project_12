  {/* 이미 최신 스타일 적용됨. */}
import { BriefcaseIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export default function Business() {
  const businesses = [
    { title: 'Heavy Equipment', desc: '산업용 중장비, 글로벌 인증, 고효율 설계', icon: <BriefcaseIcon className="w-10 h-10 text-blue-400" /> },
    { title: 'Plant Solutions', desc: '공장/설비, 맞춤형 플랜트, 안전 중심', icon: <CheckBadgeIcon className="w-10 h-10 text-mint-400" /> },
    { title: 'R&D', desc: '혁신 연구개발, 최신 기술 적용, 친환경', icon: <BriefcaseIcon className="w-10 h-10 text-purple-400" /> },
    { title: 'Factory', desc: '생산공장, 글로벌 네트워크, 품질관리', icon: <CheckBadgeIcon className="w-10 h-10 text-blue-400" /> },
  ];
  const { t } = useTranslation();
  return (
  <main className="min-h-screen w-full flex flex-col items-center bg-white dark:bg-gray-900 px-0 py-0 font-sans relative overflow-x-hidden" role="main">
      {/* Subtle blur background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-white/80 backdrop-blur-sm" />
      </div>
      <Helmet>
        <title>동해기계 | 사업/연구개발/공장</title>
        <meta name="description" content="동해기계 사업영역, 연구개발, 생산공장 등 핵심 역량 안내." />
      </Helmet>
  <div className="mb-16 text-center mt-32">
        <span className="block leading-[1.12]">
          <span className="block font-bold text-base md:text-lg text-blue-500 tracking-tight mb-2">
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
  <div className="w-full max-w-5xl mx-auto border-t border-gray-100 mb-20" />
      <section className="w-full max-w-5xl mx-auto mb-24 relative z-10">
        <h2 className="text-base md:text-lg font-bold mb-12 text-navy leading-tight flex items-center gap-2">
          <BriefcaseIcon className="w-6 h-6 text-blue-400" aria-hidden="true" />
          사업/연구개발/공장
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-20">
          {businesses.map((b, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 md:p-7 text-gray-700 transition-all duration-150 border border-gray-100 flex flex-col items-center justify-center">
              {b.icon}
              <div className="font-bold text-sm md:text-base mb-2 text-navy text-center">{b.title}</div>
              <div className="text-xs md:text-sm mb-1 text-gray-400 font-normal text-center">{b.desc}</div>
            </div>
          ))}
        </div>
      </section>
      {/* CTA Section */}
      <section className="w-full max-w-5xl mx-auto mb-24 flex flex-col items-center">
        <div className="text-center mb-8">
          <span className="font-bold text-base md:text-lg text-navy">사업/연구개발/공장에 대해 궁금하신가요?</span>
        </div>
        <a href="/inquiry" className="inline-block px-6 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm md:text-base shadow-none border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
          문의하기
        </a>
      </section>
      {/* Section Divider */}
      <div className="w-full max-w-5xl mx-auto border-t border-gray-100 mb-8" />
      {/* Footer */}
      <footer className="w-full max-w-5xl mx-auto text-center py-6 text-gray-400 text-xs">
        <div className="mb-1">© 2025 Donghae Machinery</div>
        <div>info@donghaemachinery.com | +82-2-1234-5678</div>
      </footer>
  </main>
  );
}