import { useRef, useEffect, useState } from 'react';

const labSections = [
  {
    name: '연구개발',
    image: '/images/fractal-01.jpg',
    desc: '동해기계 기술연구소는 중장비 및 플랜트 산업의 미래를 위한 연구개발을 수행합니다.',
    info: [
      '중장비 신기술',
      '친환경 플랜트',
      '자동화 설비',
      '품질향상',
      '박사/석사급 연구원, 산업기술 전문가'
    ],
  },
  {
    name: '혁신기술',
    image: '/images/donghae-10.jpg',
    desc: '혁신적인 기술 개발과 품질 향상을 통해 글로벌 경쟁력을 강화하고 있습니다.',
    info: [
      '신소재 개발',
      '스마트 공정',
      '지속가능한 생산'
    ],
  },
];

function LabOverview() {
  const sectionRefs = labSections.map(() => useRef<HTMLDivElement>(null));
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const handleScrollEvt = () => setShowTop(window.scrollY > 200);
    window.addEventListener('scroll', handleScrollEvt);
    return () => window.removeEventListener('scroll', handleScrollEvt);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const handleScroll = (idx: number) => {
    sectionRefs[idx].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <section className="min-h-[calc(100vh-64px)] bg-white px-2 py-8 font-pretendard relative">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-8 text-center tracking-tight drop-shadow-lg">기술연구소</h1>
      <nav className="flex flex-wrap justify-center gap-4 mb-8">
        {labSections.map((lab, idx) => (
          <button
            key={lab.name}
            onClick={() => handleScroll(idx)}
            className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded-full border-2 border-blue-800 text-base transition focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
            aria-label={lab.name + ' 섹션으로 이동'}
          >
            {lab.name}
          </button>
        ))}
      </nav>
      <div className="flex flex-col gap-12 max-w-4xl mx-auto">
        {labSections.map((lab, idx) => (
          <div
            key={lab.name}
            ref={sectionRefs[idx]}
            className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col gap-4"
          >
            <img src={lab.image} alt={lab.name + ' 대표 이미지'} className="w-full h-40 sm:h-56 object-cover rounded-2xl shadow-lg border-2 border-blue-200 mb-2" />
            <h2 className="text-2xl font-bold text-blue-800 mb-2">{lab.name}</h2>
            <p className="text-base text-gray-700 mb-2">{lab.desc}</p>
            <ul className="text-sm text-gray-600 mb-2 list-disc pl-4">
              {lab.info.map((item, idx2) => (
                <li key={idx2}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {labSections.map((lab, idx) => (
            <div
              key={lab.name}
              ref={sectionRefs[idx]}
              className="bg-white bg-opacity-95 rounded-3xl shadow-xl p-7 flex flex-col gap-5 hover:scale-[1.025] hover:shadow-2xl transition-all duration-200 border border-blue-100 group"
            >
              <img
                src={lab.image}
                alt={lab.name + ' 대표 이미지'}
                className="w-full h-40 sm:h-56 object-cover rounded-2xl shadow-md border-2 border-blue-200 mb-2 group-hover:shadow-lg group-hover:border-blue-400 transition-all duration-200"
              />
              <h2 className="text-2xl font-extrabold text-blue-800 mb-1 font-pretendard tracking-tight">{lab.name}</h2>
              <p className="text-base text-gray-700 mb-1 font-pretendard leading-relaxed">{lab.desc}</p>
              <ul className="text-sm text-gray-600 mb-2 list-disc pl-4 font-pretendard">
                {lab.info.map((item, idx2) => (
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

export default LabOverview;
