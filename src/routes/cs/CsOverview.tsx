
import { useRef, useEffect, useState } from 'react';

const csSections = [
  {
    name: '문의사항',
    image: '/images/donghae-07.jpg',
    desc: '제품, 서비스, 기술 등 궁금한 점을 문의하실 수 있습니다.',
    info: ['온라인 문의, 전화 상담, 방문 상담 가능'],
    link: '/ko/cs/inquiry',
  },
];

function CsOverview() {
  const sectionRefs = csSections.map(() => useRef<HTMLDivElement>(null));
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
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-8 text-center tracking-tight drop-shadow-lg">고객센터</h1>
      <nav className="flex flex-wrap justify-center gap-4 mb-8">
        {csSections.map((cs, idx) => (
          <button
            key={cs.name}
            onClick={() => handleScroll(idx)}
            className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded-full border-2 border-blue-800 text-base transition focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
            aria-label={cs.name + ' 섹션으로 이동'}
          >
            {cs.name}
          </button>
        ))}
      </nav>
      <div className="flex flex-col gap-12 max-w-4xl mx-auto">
        {csSections.map((cs, idx) => (
            <div
              key={cs.name}
              ref={sectionRefs[idx]}
              className="bg-white bg-opacity-95 rounded-3xl shadow-xl p-7 flex flex-col gap-5 hover:scale-[1.025] hover:shadow-2xl transition-all duration-200 border border-blue-100 group"
            >
              <img
                src={cs.image}
                alt={cs.name + ' 대표 이미지'}
                className="w-full h-40 sm:h-56 object-cover rounded-2xl shadow-md border-2 border-blue-200 mb-2 group-hover:shadow-lg group-hover:border-blue-400 transition-all duration-200"
              />
              <h2 className="text-2xl font-extrabold text-blue-800 mb-1 font-pretendard tracking-tight">{cs.name}</h2>
              <p className="text-base text-gray-700 mb-1 font-pretendard leading-relaxed">{cs.desc}</p>
              <ul className="text-sm text-gray-600 mb-2 list-disc pl-4 font-pretendard">
                {cs.info.map((item, idx2) => (
                  <li key={idx2}>{item}</li>
                ))}
              </ul>
              <a
                href={cs.link}
                className="mt-auto inline-block bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded-full border-2 border-blue-800 text-base text-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
              >
                문의하기
              </a>
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

export default CsOverview;
