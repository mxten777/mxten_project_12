
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const prSections = [
  {
    name: '회사뉴스',
    image: '/images/donghae-03.jpg',
    desc: '동해기계의 최신 소식과 업계 동향을 빠르게 전달합니다.',
    info: ['보도자료, 수상, 신제품 출시 등'],
    link: '/ko/pr/news',
  },
  {
    name: '카탈로그',
    image: '/images/donghae-04.jpg',
    desc: '제품/사업 카탈로그를 다운로드 및 열람할 수 있습니다.',
    info: ['PDF, 온라인 뷰어 제공'],
    link: '/ko/pr/catalog',
  },
  {
    name: '홍보영상',
    image: '/images/donghae-05.jpg',
    desc: '동해기계의 기술력과 현장을 영상으로 소개합니다.',
    info: ['프로모션, 현장 스케치, 제품 영상 등'],
    link: '/ko/pr/video',
  },
  {
    name: '공지사항',
    image: '/images/donghae-06.jpg',
    desc: '중요 공지 및 안내사항을 신속하게 전달합니다.',
    info: ['업데이트, 이벤트, 채용 등'],
    link: '/ko/pr/notice',
  },
];

function PrOverview() {
  const sectionRefs = prSections.map(() => useRef<HTMLDivElement>(null));
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
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-8 text-center tracking-tight drop-shadow-lg">홍보센터</h1>
      <nav className="flex flex-wrap justify-center gap-4 mb-8">
        {prSections.map((pr, idx) => (
          <button
            key={pr.name}
            onClick={() => handleScroll(idx)}
            className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded-full border-2 border-blue-800 text-base transition focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
            aria-label={pr.name + ' 섹션으로 이동'}
          >
            {pr.name}
          </button>
        ))}
      </nav>
      <div className="flex flex-col gap-12 max-w-4xl mx-auto">
        {prSections.map((pr, idx) => (
          <div
            key={pr.name}
            ref={sectionRefs[idx]}
            className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col gap-4"
          >
            <img src={pr.image} alt={pr.name + ' 대표 이미지'} className="w-full h-40 sm:h-56 object-cover rounded-2xl shadow-lg border-2 border-blue-200 mb-2" />
            <h2 className="text-2xl font-bold text-blue-800 mb-2">{pr.name}</h2>
            <p className="text-base text-gray-700 mb-2">{pr.desc}</p>
            <ul className="text-sm text-gray-600 mb-2 list-disc pl-4">
              {pr.info.map((item, idx2) => (
                <li key={idx2}>{item}</li>
              ))}
            </ul>
            <Link to={pr.link} className="mt-auto inline-block bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded-full border-2 border-blue-800 text-base text-center transition focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg">
              자세히 보기
            </Link>
          </div>
        ))}
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {prSections.map((pr, idx) => (
            <div
              key={pr.name}
              ref={sectionRefs[idx]}
              className="bg-white bg-opacity-95 rounded-3xl shadow-xl p-7 flex flex-col gap-5 hover:scale-[1.025] hover:shadow-2xl transition-all duration-200 border border-blue-100 group"
            >
              <img
                src={pr.image}
                alt={pr.name + ' 대표 이미지'}
                className="w-full h-40 sm:h-56 object-cover rounded-2xl shadow-md border-2 border-blue-200 mb-2 group-hover:shadow-lg group-hover:border-blue-400 transition-all duration-200"
              />
              <h2 className="text-2xl font-extrabold text-blue-800 mb-1 font-pretendard tracking-tight">{pr.name}</h2>
              <p className="text-base text-gray-700 mb-1 font-pretendard leading-relaxed">{pr.desc}</p>
              <ul className="text-sm text-gray-600 mb-2 list-disc pl-4 font-pretendard">
                {pr.info.map((item, idx2) => (
                  <li key={idx2}>{item}</li>
                ))}
              </ul>
              <a
                href={pr.link}
                className="mt-auto inline-block bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded-full border-2 border-blue-800 text-base text-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
              >
                자세히 보기
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

export default PrOverview;
