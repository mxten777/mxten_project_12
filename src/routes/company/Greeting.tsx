import { useRef, useEffect, useState } from 'react';

const companySections = [
  {
    name: '인사말',
    image: '/images/donghae-06.jpg',
  desc: '',
    detail: (
      <>
        {/* 하단 메시지: 작은 폰트 */}
        <div className="flex flex-col gap-2 font-pretendard">
          <div className="text-base text-gray-700 leading-relaxed">동해기계는 열정과 안전을 바탕으로 글로벌 성장을 추구합니다.</div>
          <div className="text-base text-gray-700 leading-relaxed">우리만의 노하우와 철저한 품질 관리로 고객 제일 지향주의를 실천하는 글로벌 스탠다드를 만듭니다.</div>
          <div className="text-base text-gray-700 leading-relaxed">동해기계는 중장비·플랜트·산업설비의 설계, 제작, 시공을 전문으로 하며, 고객의 성공을 위해 끊임없이 혁신하고 있습니다.</div>
          <div className="text-base text-gray-700 leading-relaxed">앞으로도 안전과 품질을 최우선으로, 세계 시장에서 인정받는 기업이 되겠습니다.</div>
        </div>
        <div className="mt-4 text-left font-pretendard">
          <p className="text-sm text-blue-900 font-semibold italic tracking-wide leading-relaxed font-pretendard">동해기계주식회사 대표이사 장 경 수</p>
        </div>
      </>
    ),
  },
  {
    name: '회사개요',
    image: '/images/donghae-07.jpg',
  desc: '',
    detail: (
      <>
        <div className="flex flex-col gap-2 font-pretendard">
          <div className="text-base text-gray-700 leading-relaxed"><b>설립일</b>: 1995년 3월 1일</div>
          <div className="text-base text-gray-700 leading-relaxed"><b>사업영역</b>: 중장비, 플랜트, 산업설비 설계/제작/시공</div>
          <div className="text-base text-gray-700 leading-relaxed"><b>주요연혁</b>: 1995 설립 / 2005 해외진출 / 2020 글로벌 인증 획득</div>
          <div className="text-base text-gray-700 leading-relaxed"><b>주소</b>: 경기도 시흥시 공단1대로 123</div>
        </div>
      </>
    ),
  },
  {
    name: '조직도',
    image: '/images/donghae-08.jpg',
  desc: '',
    detail: (
      <>
        <div className="flex flex-col gap-2 font-pretendard">
          <div className="text-base text-gray-700 leading-relaxed">대표이사</div>
          <div className="text-base text-gray-700 leading-relaxed">경영지원팀 / 기술연구소 / 생산본부 / 영업본부</div>
          <div className="text-base text-gray-700 leading-relaxed">각 부서별 전문 인력과 효율적 협업 체계 구축</div>
        </div>
      </>
    ),
  },
  {
    name: '오시는길',
    image: '/images/donghae-09.jpg',
  desc: '',
    detail: (
      <>
        <div className="flex flex-col gap-2 font-pretendard">
          <div className="text-base text-gray-700 leading-relaxed">주소: 경기도 시흥시 공단1대로 123</div>
          <div className="text-base text-gray-700 leading-relaxed">지하철 4호선 오이도역 2번 출구, 버스 30번 환승</div>
          <div className="text-base text-gray-700 leading-relaxed">주차장 완비, 방문 전 전화 문의 권장</div>
        </div>
      </>
    ),
  },
];

export default function Greeting() {
  const sectionRefs = companySections.map(() => useRef<HTMLDivElement>(null));
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <section className="min-h-[calc(100vh-64px)] bg-white px-2 py-8 font-pretendard relative">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-8 text-center tracking-tight drop-shadow-lg font-pretendard">회사소개</h1>
      <nav className="flex flex-wrap justify-center gap-4 mb-8">
        {companySections.map((section, idx) => (
          <button
            key={section.name}
            onClick={() => sectionRefs[idx].current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded-full border-2 border-blue-800 text-base transition focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
            aria-label={section.name + ' 섹션으로 이동'}
          >
            {section.name}
          </button>
        ))}
      </nav>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {companySections.map((section, idx) => (
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
            <div className="text-base text-gray-700 mb-1 font-pretendard leading-relaxed">{section.desc}</div>
            <div className="text-sm text-gray-600 mb-2 font-pretendard">{section.detail}</div>
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