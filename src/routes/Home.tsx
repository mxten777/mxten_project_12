import HeroSection from '../components/HeroSection';

// 카드 컴포넌트: 함수 바깥에서 선언
type ProductCardProps = {
  name: string;
  description: string;
  image: string;
};

const ProductCard = ({ name, description, image }: ProductCardProps) => (
  <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 flex flex-col items-center border border-blue-100 dark:border-blue-800 hover:scale-[1.04] hover:shadow-2xl hover:border-blue-400 transition-all duration-200 group cursor-pointer">
    <img src={image} alt={name} className="rounded-2xl shadow-xl w-[220px] h-[220px] md:w-[260px] md:h-[260px] 2xl:w-[280px] 2xl:h-[280px] object-cover mb-6 border-2 border-blue-200 group-hover:shadow-2xl group-hover:border-blue-400 transition-all duration-200" />
    <div className="font-extrabold text-xl mb-2 text-blue-900 dark:text-blue-200 tracking-tight text-center drop-shadow-sm">{name}</div>
    <div className="text-gray-600 dark:text-gray-300 text-base mb-4 text-center font-pretendard leading-relaxed">{description}</div>
  </div>
);
// ...existing code...

const products = [
  { id: 1, name: "HEAVY EQUIPMENT", description: "굴삭기 · 휠로더 · 불도저 · 광산장비 · 초대형 휠로더 · 고소작업차량", image: "/images/donghae-05.jpg" },
  { id: 2, name: "PLANT SOLUTIONS", description: "발전 · 석유화학 · 지역난방 · LNG · 하이테크 · 환경사업", image: "/images/donghae-06.jpg" },
  { id: 3, name: "GLOBAL EXPORT", description: "30개국 수출 · 품질 인증 · 글로벌 스탠다드", image: "/images/donghae-07.jpg" },
  { id: 4, name: "SAFETY & QUALITY", description: "안전관리 · 품질보증 · 인증서 · 글로벌 기준", image: "/images/donghae-08.jpg" },
  { id: 5, name: "INNOVATION", description: "기술혁신 · R&D · 스마트공장 · 친환경 설비", image: "/images/donghae-09.jpg" },
  { id: 6, name: "PARTNERSHIP", description: "국내외 협력 · 고객지원 · 글로벌 네트워크", image: "/images/donghae-10.jpg" },
  { id: 7, name: "CUSTOMER FIRST", description: "고객 제일주의 · 맞춤형 서비스 · 신속 대응", image: "/images/donghae-01.jpg" },
  { id: 8, name: "GLOBAL NETWORK", description: "30개국 수출 · 글로벌 파트너십 · 현지화 전략", image: "/images/donghae-02.jpg" },
  { id: 9, name: "SUSTAINABILITY", description: "친환경 · 사회적 책임 · 지속가능경영", image: "/images/donghae-03.jpg" },
];

const trustBadges = [
  { id: 1, label: "수출유공자", description: "한국무역협회장상 · 무역의 탑 수상", image: "/images/donghae-01.jpg" },
  { id: 2, label: "품질 인증", description: "글로벌 품질 · 안전 중심 · 고객 제일주의", image: "/images/donghae-02.jpg" },
  { id: 3, label: "글로벌 리딩 컴퍼니", description: "Global Leading Company 선정", image: "/images/donghae-03.jpg" },
];

import { useCallback } from 'react';

export default function Home() {
  // 상위로 스크롤 함수
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="w-full min-h-screen bg-white dark:bg-gray-900 font-pretendard">
      {/* HeroSection 컴포넌트 사용 */}
      <HeroSection
        title={<span className="block text-4xl md:text-5xl font-extrabold tracking-tight text-blue-900 drop-shadow-lg">무한한 열정과<br className="hidden md:inline"/>안전중심의 동해기계</span>}
        subtitle={"글로벌 스탠다드, 품질과 안전을 바탕으로\n30개국 수출과 혁신을 실현합니다"}
        bgClass="bg-gradient-to-br from-blue-600 via-blue-200 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 md:py-24"
        buttons={[
          { label: "회사개요 바로가기", href: "/ko/company", style: "bg-white bg-opacity-40 hover:bg-opacity-70 dark:bg-gray-700 dark:bg-opacity-40 dark:hover:bg-opacity-60 text-blue-900 dark:text-blue-200 font-bold py-3 px-8 rounded-full border-2 border-blue-800 dark:border-blue-200 text-lg md:text-xl w-full sm:w-auto text-center transition-all duration-200 shadow-xl" }
        ]}
      />

      {/* Product Cards */}
      <section className="w-full max-w-screen-2xl mx-auto py-20 px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-blue-900 dark:text-blue-200 text-center tracking-tight drop-shadow-lg">주요 서비스</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 md:gap-12 w-full">
          {products.map(({ id, name, description, image }) => (
            <ProductCard key={id} name={name} description={description} image={image} />
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="w-full max-w-screen-2xl mx-auto py-20 px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-blue-900 dark:text-blue-200 text-center tracking-tight drop-shadow-lg">신뢰의 이유</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 md:gap-12 w-full">
          {trustBadges.map(badge => (
            <div key={badge.id} className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 flex flex-col items-center border border-blue-100 dark:border-blue-800 hover:scale-[1.04] hover:shadow-2xl hover:border-blue-400 transition-all duration-200 group cursor-pointer">
              <img src={badge.image} alt={badge.label} className="rounded-2xl shadow-xl w-[180px] h-[180px] md:w-[200px] md:h-[200px] 2xl:w-[220px] 2xl:h-[220px] object-cover mb-6 border-2 border-blue-200 group-hover:shadow-2xl group-hover:border-blue-400 transition-all duration-200" />
              <div className="font-extrabold text-xl mb-2 text-blue-900 dark:text-blue-200 tracking-tight text-center drop-shadow-sm">{badge.label}</div>
              <div className="text-gray-600 dark:text-gray-300 text-base mb-4 text-center font-pretendard leading-relaxed">{badge.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer는 App.tsx에서 렌더링되므로 중복 제거 */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-full border-2 border-blue-800 text-lg shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="맨 위로 이동"
      >
        ↑ 상위로
      </button>
    </main>
  );
}