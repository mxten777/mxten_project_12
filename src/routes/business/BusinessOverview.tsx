
import { useRef, useEffect, useState } from 'react';

const businessSections = [
  {
    name: '중장비 사업',
    image: '/images/donghae-07.jpg',
    desc: '동해기계의 최신 중장비 생산 및 글로벌 공급망 구축.',
    info: ['최신 중장비', '글로벌 네트워크', '품질 인증'],
  },
  {
    name: '플랜트 사업',
    image: '/images/donghae-08.jpg',
    desc: '플랜트 설비 및 자동화 시스템 구축, 친환경 플랜트 개발.',
    info: ['자동화 설비', '친환경 플랜트', '전문 엔지니어'],
  },
  {
    name: '생산설비',
    image: '/images/donghae-09.jpg',
    desc: '생산설비 개발 및 맞춤 제작, 고객 맞춤형 서비스 제공.',
    info: ['맞춤형 설비', '고객 맞춤 서비스', '연구개발 협력'],
  },
  {
    name: '측정설비',
    image: '/images/donghae-10.jpg',
    desc: '정밀 측정설비 및 품질관리, 최신 장비 도입.',
    info: ['정밀 측정', '품질관리', '최신 장비'],
  },
];

function BusinessOverview() {
  const sectionRefs = businessSections.map(() => useRef<HTMLDivElement>(null));
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
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-8 text-center tracking-tight drop-shadow-lg">사업소개</h1>
      <nav className="flex flex-wrap justify-center gap-4 mb-8">
        {businessSections.map((section, idx) => (
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
      <div className="flex flex-col gap-12 max-w-4xl mx-auto">
        {businessSections.map((section, idx) => (
          <div
            key={section.name}
            ref={sectionRefs[idx]}
            className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col gap-4"
          >
            <img src={section.image} alt={section.name + ' 대표 이미지'} className="w-full h-40 sm:h-56 object-cover rounded-2xl shadow-lg border-2 border-blue-200 mb-2" />
            <h2 className="text-2xl font-bold text-blue-800 mb-2">{section.name}</h2>
            <p className="text-base text-gray-700 mb-2">{section.desc}</p>
            <ul className="text-sm text-gray-600 mb-2 list-disc pl-4">
              {section.info.map((item, idx2) => (
                <li key={idx2}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {businessSections.map((section, idx) => (
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

export default BusinessOverview;
