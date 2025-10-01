export default function Plant() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-6 font-pretendard">
      <div className="w-full max-w-2xl bg-white bg-opacity-80 rounded-3xl shadow-xl p-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 text-center tracking-tight font-pretendard">플랜트 사업</h1>
  <img src="/images/donghae-08.jpg" alt="플랜트 사업 내부 이미지" className="w-1/2 max-w-xs mb-6 rounded-xl shadow-lg mx-auto" />
        <div className="text-base text-gray-800 mb-6 text-center font-normal font-pretendard">
          <p className="mb-1">동해기계는 화학/석유화학, 석유 및 가스 플랜트, 발전소 등 다양한 플랜트 산업에 필요한 구조물과 설비를 공급합니다.</p>
          <p className="mb-1">국내외 대형 프로젝트에서 검증된 기술력과 신뢰를 바탕으로 최적의 플랜트 솔루션을 제공합니다.</p>
          <p className="mb-1"><span className="font-semibold">대표 설비</span>: 압력용기, 열교환기, 저장탱크, 파이프라인 등</p>
          <p><span className="font-semibold">특징</span>: 국제 인증, 대형 프로젝트 경험, 맞춤형 설계</p>
        </div>
      </div>
    </section>
  );
}
