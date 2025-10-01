export default function Plant() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-12 font-pretendard">
      <div className="w-full max-w-4xl bg-white bg-opacity-80 rounded-3xl shadow-xl p-10">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-8 text-center tracking-tight font-pretendard">플랜트 사업</h1>
        <img src="https://donghae.co.kr/asset/images/company/overview-overview.jpg" alt="플랜트 사업 예시 이미지" className="w-full max-w-lg mb-8 rounded-2xl shadow-lg mx-auto" />
        <div className="text-xl text-gray-800 mb-8 text-center font-normal font-pretendard">
          <p className="mb-2">동해기계는 화학/석유화학, 석유 및 가스 플랜트, 발전소 등 다양한 플랜트 산업에 필요한 구조물과 설비를 공급합니다.</p>
          <p className="mb-2">국내외 대형 프로젝트에서 검증된 기술력과 신뢰를 바탕으로 최적의 플랜트 솔루션을 제공합니다.</p>
          <p className="mb-2"><span className="font-semibold">대표 설비</span>: 압력용기, 열교환기, 저장탱크, 파이프라인 등</p>
          <p><span className="font-semibold">특징</span>: 국제 인증, 대형 프로젝트 경험, 맞춤형 설계</p>
        </div>
      </div>
    </div>
  );
}
