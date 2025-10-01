// ...existing code...
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
    <main className="min-h-screen w-full flex flex-col items-center bg-gray-50 dark:bg-gray-900 px-0 py-0 font-sans font-pretendard relative overflow-x-hidden" role="main">
      <Helmet>
        <title>동해기계 | 회사소개</title>
        <meta name="description" content="동해기계 회사소개, 비전, 연혁, 위치 등 기업 정보 안내." />
      </Helmet>
      {/* Hero Section - Donghae Machinery 스타일 */}
      <section className="relative w-screen max-w-none min-h-[600px] flex flex-col items-center justify-center overflow-hidden px-0 mb-10 md:mb-16">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'url("data:image/svg+xml;utf8,<svg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'><rect x=\'0.5\' y=\'0.5\' width=\'39\' height=\'39\' stroke=\'%23ffffff33\'/></svg>")',
            opacity: 0.2,
          }}
        />
        <h1 className="relative z-10 text-white dark:text-gray-100 text-3xl sm:text-5xl md:text-6xl font-extrabold text-center mb-6 drop-shadow-xl leading-tight">
          글로벌 성장과<br />품질의 동해기계
        </h1>
        <p className="relative z-10 text-purple-100 dark:text-purple-200 text-lg md:text-2xl text-center mb-8 font-medium leading-relaxed">
          무역의 탑 · 수출유공자 · 글로벌 품질 인증<br />고객 신뢰와 혁신의 리더
        </p>
        <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
          <a href="#inquiry" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-xl text-lg md:text-xl w-full sm:w-auto text-center">문의하기</a>
          <a href="#downloads" className="bg-white bg-opacity-20 hover:bg-opacity-30 dark:bg-gray-700 dark:bg-opacity-40 dark:hover:bg-opacity-60 text-white font-bold py-3 px-8 rounded-full border border-white dark:border-gray-300 text-lg md:text-xl w-full sm:w-auto text-center">회사 자료 다운로드</a>
        </div>
      </section>
          <div className="mb-8">
            <span className="inline-block bg-gray-100 dark:bg-gray-700 text-blue-500 dark:text-blue-200 font-medium px-4 py-1 rounded-full text-xs md:text-sm">
              비전: 글로벌 성장 · 안전 중심 · 혁신
            </span>
          </div>
          <img src="/company.jpg" alt="동해기계 사옥 외관" className="mx-auto rounded-xl mb-8 w-full max-h-64 object-cover object-center border border-gray-100 dark:border-gray-700" loading="lazy" />
          <a href="#inquiry" className="inline-block bg-blue-600 dark:bg-blue-700 text-white font-medium py-1 px-6 rounded-full border border-blue-100 dark:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 text-xs tracking-wide" aria-label="문의하기 바로가기">문의하기</a>
      {/* Section Divider */}
      <div className="w-full border-t border-gray-100 dark:border-gray-700 mb-20"></div>
      {/* Section Divider */}
  <div className="w-full border-t border-gray-100 dark:border-gray-700 mb-20"></div>
      <section className="w-full mb-24">
        <h2 className="text-xs md:text-sm font-bold mb-10 text-navy dark:text-blue-200">회사 연혁</h2>
  <div className="w-full border-t border-gray-100 dark:border-gray-700 mb-10" />
        <ul className="mb-16 flex flex-col items-start gap-8">
          {history.map((h, idx) => (
            <li key={h.year} className="flex gap-4 items-center w-full max-w-2xl relative">
              <span className="font-bold text-xs md:text-sm text-blue-400 dark:text-blue-300 w-16 text-right">{h.year}</span>
              <span className="text-xs md:text-sm text-gray-500 dark:text-gray-300 font-normal leading-relaxed">{h.event}</span>
              {idx < history.length - 1 && <span className="absolute left-10 top-1/2 w-1 h-8 bg-gray-100 dark:bg-gray-700 rounded-full -translate-y-1/2" />}
            </li>
          ))}
        </ul>
        <h3 className="text-xs md:text-sm font-bold mb-10 text-navy dark:text-blue-200">글로벌 네트워크</h3>
  <div className="w-full border-t border-gray-100 dark:border-gray-700 mb-10" />
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10">
          {network.map(n => (
            <div key={n.region} className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-5 text-gray-700 dark:text-gray-200 border border-gray-100 dark:border-gray-700 flex flex-col justify-between mb-2">
              <span className="font-medium text-xs md:text-sm text-blue-600 dark:text-blue-300">{n.region}</span>
              <span className="text-xs md:text-sm text-gray-500 dark:text-gray-300">{n.desc}</span>
            </div>
          ))}
        </div>
      </section>
      {/* Section Divider Bottom */}
  <div className="w-full border-t border-gray-100 dark:border-gray-700 mb-8" />
  {/* Footer는 App.tsx에서 렌더링되므로 중복 제거 */}
    </main>
  );
}