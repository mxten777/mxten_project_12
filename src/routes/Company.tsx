import { BuildingOffice2Icon } from '@heroicons/react/24/solid';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export default function Company() {
  const history = [
    { year: 1995, event: '동해기계 설립' },
    { year: 2005, event: '해외 수출 시작' },
    { year: 2015, event: '신공장 준공' },
    { year: 2025, event: '글로벌 30개국 진출' },
  ];
  const network = [
    { region: '서울', desc: '본사' },
    { region: '부산', desc: '남부지사' },
    { region: '상하이', desc: '중국법인' },
    { region: 'LA', desc: '미국지사' },
  ];
  const { t } = useTranslation();
  return (
    <main className="min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-50 to-mint-400/10 px-4 md:px-8 py-16 md:py-28 font-sans" role="main">
      <Helmet>
        <title>동해기계 | 회사소개</title>
        <meta name="description" content="동해기계 회사소개, 비전, 연혁, 위치 등 기업 정보 안내." />
      </Helmet>
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
      <section className="w-full max-w-2xl text-center bg-gradient-glass rounded-2xl shadow-glass p-8 md:p-14 backdrop-blur-md border border-gray-100">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-navy leading-tight flex items-center justify-center gap-2">
          <BuildingOffice2Icon className="w-7 h-7 text-blue-400" aria-hidden="true" />
          회사 소개
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">동해기계는 산업의 미래를 선도하는 기업입니다.<br />글로벌 성장, 안전 중심, 열정, 혁신을 핵심 가치로 삼고 있습니다.</p>
        <div className="mb-8">
          <span className="inline-block bg-mint-100 text-navy font-bold px-4 py-2 rounded-full shadow-soft text-base md:text-lg">비전: 글로벌 성장 · 안전 중심 · 혁신</span>
        </div>
        <img src="/company.jpg" alt="동해기계 사옥 외관" className="mx-auto rounded shadow mb-8 w-full max-h-72 object-cover object-center animate-fade-in border border-gray-100" loading="lazy" />
        <a href="#inquiry" className="inline-block bg-blue-400 text-white font-bold py-3 px-8 rounded-full transition-all duration-200 hover:bg-blue-500 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-soft hover:shadow-lg text-lg tracking-wide" aria-label="문의하기 바로가기">문의하기</a>
      </section>
      <div className="w-full max-w-5xl mt-12 md:mt-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-navy">회사 연혁</h2>
        <ul className="mb-8 space-y-2">
          {history.map(h => (
            <li key={h.year} className="flex gap-4 items-center">
              <span className="font-bold text-blue w-16">{h.year}</span>
              <span className="text-gray-900">{h.event}</span>
            </li>
          ))}
        </ul>
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-navy">글로벌 네트워크</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4">
          {network.map(n => (
            <div key={n.region} className="bg-blue-50 rounded p-4 text-center hover:shadow-lg transition">
              <div className="font-bold text-blue-900">{n.region}</div>
              <div className="text-sm text-gray-700">{n.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}