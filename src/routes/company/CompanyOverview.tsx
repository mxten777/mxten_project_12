
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const sections = [
  {
    name: '회사개요',
    image: '/images/donghae-01.jpg',
    desc: '동해기계주식회사는 중장비, 플랜트, 자동화설비, 품질관리 등 다양한 산업 분야에서 글로벌 스탠다드를 실현하고 있습니다.',
    info: [
      '창립일: 1998년',
      '대표이사: 장경수',
      '주요 사업: 중장비, 플랜트, 자동화설비, 품질관리',
    ],
    link: '/ko/company/overview',
  },
  {
    name: '조직도',
    image: '/images/chart-01.jpg',
    desc: '연구개발, 생산, 품질관리, 영업 등 각 분야의 전문가로 구성된 효율적 조직.',
    info: [
      '주요 부서: 연구소, 생산팀, 품질관리팀, 영업팀 등',
      '위치: 경상남도 함안군 칠서면 공단서길 120',
    ],
    link: '/ko/company/org',
  },
  {
    name: '오시는길',
    image: '/images/donghae-02.jpg',
    desc: '경상남도 함안군 칠서면 공단서길 120에 위치. 함안역/터미널에서 택시로 약 10분 거리.',
    info: [
      '대표전화: 055-285-2331',
      '팩스: 055-584-9878',
    ],
    link: '/ko/company/location',
  },
];

export default function CompanyOverview() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <section className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 via-white to-blue-100 px-2 py-8 font-pretendard relative">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-10 text-center tracking-tight drop-shadow-lg font-pretendard">회사소개</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {sections.map((section) => (
          <div
            key={section.name}
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
              {section.info.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <Link
              to={section.link}
              className="mt-auto inline-block bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded-full border-2 border-blue-800 text-base text-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
            >
              자세히 보기
            </Link>
          </div>
        ))}
      </div>
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-full border-2 border-blue-800 text-lg shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="맨 위로 이동"
      >
        ↑ 상위로
      </button>
    </section>
  );
}
