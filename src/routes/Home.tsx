import HeroSection from '../components/HeroSection';

// 카드 컴포넌트: 함수 바깥에서 선언
type ProductCardProps = {
  name: string;
  description: string;
  image: string;
};

const ProductCard = ({ name, description, image }: ProductCardProps) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col items-center border border-gray-100 dark:border-gray-800">
    <img src={image} alt={name} className="rounded-3xl shadow-2xl w-[320px] h-[320px] object-cover mb-6" />
    <div className="font-bold text-lg mb-2 text-navy dark:text-blue-200">{name}</div>
    <div className="text-gray-600 dark:text-gray-300 text-base mb-4 text-center">{description}</div>
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

export default function Home() {
  // 상태 관리 변수를 제거하여 props/상태 최소화
  // const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <main className="w-full min-h-screen bg-white dark:bg-gray-900 font-pretendard">
      {/* HeroSection 컴포넌트 사용 */}
      <HeroSection
        title="무한한 열정과 안전중심의 동해기계"
        subtitle={"글로벌 스탠다드, 품질과 안전을 바탕으로\n30개국 수출과 혁신을 실현합니다"}
        bgClass="bg-gradient-to-br from-blue-500 via-blue-300 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        buttons={[
          { label: "문의하기", href: "/ko/inquiry", style: "bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-full shadow-2xl text-base md:text-lg w-full sm:w-auto text-center transition" },
          { label: "회사개요 바로가기", href: "/ko/company", style: "bg-white bg-opacity-30 hover:bg-opacity-50 dark:bg-gray-700 dark:bg-opacity-40 dark:hover:bg-opacity-60 text-blue-900 dark:text-blue-200 font-bold py-2 px-6 rounded-full border border-white dark:border-gray-300 text-base md:text-lg w-full sm:w-auto text-center transition" }
        ]}
      />

      {/* Product Cards */}
      <section className="w-full max-w-screen-xl mx-auto py-16 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-navy dark:text-blue-200 text-center tracking-tight">주요 서비스</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
          {products.map(({ id, name, description, image }) => (
            <ProductCard key={id} name={name} description={description} image={image} />
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="w-full max-w-screen-xl mx-auto py-16 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-navy dark:text-blue-200 text-center tracking-tight">신뢰의 이유</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
          {trustBadges.map(badge => (
            <div key={badge.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col items-center border border-gray-100 dark:border-gray-800">
              <img src={badge.image} alt={badge.label} className="rounded-3xl shadow-2xl w-[320px] h-[320px] object-cover mb-6" />
              <div className="font-bold text-lg mb-2 text-navy dark:text-blue-200">{badge.label}</div>
              <div className="text-gray-600 dark:text-gray-300 text-base mb-4 text-center">{badge.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer는 App.tsx에서 렌더링되므로 중복 제거 */}
    </main>
  );
}