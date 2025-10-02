

import { useRef, useEffect, useState } from 'react';

const factorySections = [
  {
    name: '1공장',
    image: '/images/donghae-03.jpg',
    desc: '중장비 및 플랜트 주요 제품의 생산을 담당하는 핵심 사업장입니다.',
    info: ['용접기, 절단기, 조립라인, 품질검사장비 등', '경상남도 함안군 칠서면 공단서길 120'],
  },
  {
    name: '2공장',
    image: '/images/donghae-04.jpg',
    desc: '플랜트 및 구조물, 고소작업차 등 다양한 산업설비의 생산을 담당합니다.',
    info: ['프레스, 크레인, 자동화라인, 안전관리시스템 등', '경상남도 함안군 칠서면 공단서길 120'],
  },
  {
    name: '3공장',
    image: '/images/donghae-05.jpg',
    desc: '생산설비, 자동화설비, 품질관리 등 첨단 산업설비 생산.',
    info: ['자동화설비, 검사장비, 생산라인 등', '경상남도 함안군 칠서면 공단서길 120'],
  },
  {
    name: '4공장',
    image: '/images/donghae-06.jpg',
    desc: '측정설비, 연구개발, 품질혁신을 위한 첨단 사업장.',
    info: ['측정장비, 연구설비, 품질관리시스템 등', '경상남도 함안군 칠서면 공단서길 120'],
  },
];

function FactoryOverview() {
  const sectionRefs = factorySections.map(() => useRef<HTMLDivElement>(null));
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const handleScroll = (idx: number) => {
    sectionRefs[idx].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <section className="min-h-[calc(100vh-64px)] bg-white px-2 py-8 font-pretendard relative">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-8 text-center tracking-tight drop-shadow-lg">사업장소개</h1>
      <nav className="flex flex-wrap justify-center gap-4 mb-8">
        {factorySections.map((section, idx) => (
          <button
            key={section.name}
            onClick={() => handleScroll(idx)}
            className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded-full border-2 border-blue-800 text-base transition focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
            aria-label={section.name + ' 섹션으로 이동'}
          >
            {section.name}
          </button>
        ))}
      </nav>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {factorySections.map((section, idx) => (
              <div
                key={section.name}
                ref={sectionRefs[idx]}
                className="bg-white bg-opacity-95 rounded-3xl shadow-xl p-7 flex flex-col gap-5 hover:scale-[1.025] hover:shadow-2xl transition-all duration-200 border border-blue-100 group"
              >
                <img
                  src={section.image}
                  alt={section.name + ' 대표 이미지'}
                  className="w-full h-40 sm:h-56 object-cover rounded-2xl shadow-md border-2 border-blue-200 mb-2 group-hover:shadow-lg group-hover:border-blue-400 transition-all duration-200"
                />
                <h2 className="text-2xl font-extrabold text-blue-800 mb-1 font-pretendard tracking-tight">{section.name}</h2>
                <p className="text-base text-gray-700 mb-1 font-pretendard leading-relaxed">{section.desc}</p>
                <ul className="text-sm text-gray-600 mb-2 list-disc pl-4 font-pretendard">
                  {section.info.map((item, idx2) => (
                    <li key={idx2}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-full border-2 border-blue-800 text-lg shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="맨 위로 이동"
        >
          ↑ 상위로
        </button>
      )}
    </section>
  );
}

export default FactoryOverview;
