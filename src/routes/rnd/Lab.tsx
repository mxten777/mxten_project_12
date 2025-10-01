export default function Lab() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-6 font-pretendard">
      <div className="w-full max-w-2xl bg-white bg-opacity-80 rounded-3xl shadow-xl p-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 text-center tracking-tight font-pretendard">기술연구소</h1>
  <img src="/images/fractal-01.jpg" alt="기술연구소 예시 이미지" className="w-full max-w-md mb-6 rounded-xl shadow-lg mx-auto" />
        <div className="text-base text-gray-800 mb-6 text-center font-normal font-pretendard">
          <p className="mb-1">동해기계 기술연구소는 중장비 및 플랜트 산업의 미래를 위한 연구개발을 수행합니다.</p>
          <p className="mb-1">혁신적인 기술 개발과 품질 향상을 통해 글로벌 경쟁력을 강화하고 있습니다.</p>
          <p className="mb-1"><span className="font-semibold">주요 연구분야</span>: 중장비 신기술, 친환경 플랜트, 자동화 설비, 품질향상</p>
          <p><span className="font-semibold">연구 인력</span>: 박사/석사급 연구원, 산업기술 전문가</p>
        </div>
      </div>
    </section>
  );
}
