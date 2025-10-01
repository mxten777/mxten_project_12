import HeroSection from '../../components/HeroSection';

export default function Greeting() {
  return (
    <div className="px-2 sm:px-6 py-6 sm:py-12 text-left bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen flex items-center justify-center">
      <div className="bg-white bg-opacity-95 rounded-3xl shadow-2xl p-6 sm:p-12 mx-auto max-w-2xl w-full flex flex-col gap-8 border border-blue-100">
        <HeroSection
          title="인사말"
          images={[6,7,8,9].map(num => `/images/donghae-0${num}.jpg`)}
          imageAlt="동해기계 산업 현장 이미지"
          imageClass="rounded-xl shadow-lg w-full sm:w-1/3 h-32 sm:h-40 object-cover mb-4 mx-auto border border-blue-200"
          subtitle={[
            "무한한 열정과 안전중심의 동해기계, 글로벌 성장을 이루어 나가겠습니다.",
            "우리만의 노하우와 철저한 품질 관리로 고객 제일 지향주의를 실천하는 글로벌 스탠다드를 만듭니다.",
            "동해기계는 중장비·플랜트·산업설비의 설계, 제작, 시공을 전문으로 하며, 고객의 성공을 위해 끊임없이 혁신하고 있습니다.",
            "앞으로도 안전과 품질을 최우선으로, 세계 시장에서 인정받는 기업이 되겠습니다."
          ].join("\n\n")}
          buttons={[{
            label: "회사개요 바로가기",
            href: "/ko/company",
            style: "bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded-full border border-blue-800 text-base sm:text-lg w-full sm:w-auto text-center transition mt-6 focus:outline-none focus:ring-2 focus:ring-blue-400",
            ariaLabel: "회사개요 바로가기"
          }]}
          bgClass="bg-transparent"
        >
          <div className="border-t border-blue-200 pt-6 mt-8 text-left">
            <p className="text-lg sm:text-xl text-gray-800 dark:text-blue-100 font-semibold italic tracking-wide leading-relaxed md:leading-normal px-2 sm:px-0">
              동해기계주식회사 대표이사 장 경 수
            </p>
          </div>
        </HeroSection>
      </div>
    </div>
  );
}
