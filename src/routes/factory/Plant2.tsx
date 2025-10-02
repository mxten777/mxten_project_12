export default function Plant2() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-2 py-8 font-pretendard">
      <div className="w-full max-w-2xl bg-white bg-opacity-95 rounded-3xl shadow-2xl p-8 flex flex-col gap-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-6 text-center tracking-tight font-pretendard drop-shadow-lg">2공장</h1>
        <div className="bg-blue-50 rounded-2xl shadow-lg p-6 flex flex-col items-center mb-6">
          <img src="/images/donghae-04.jpg" alt="2공장 예시 이미지" className="w-full sm:w-1/2 max-w-xs rounded-xl shadow-lg border-2 border-blue-200 hover:scale-105 transition-transform duration-200" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
            <p className="text-base text-gray-800 font-normal leading-relaxed mb-2">동해기계 2공장은 플랜트 및 구조물, 고소작업차 등 다양한 산업설비의 생산을 담당합니다.</p>
            <p className="text-base text-gray-800 font-normal leading-relaxed mb-2">효율적인 공정과 안전 중심의 운영으로 최고의 품질을 제공합니다.</p>
          </div>
          <div className="bg-blue-50 rounded-xl shadow p-6 flex flex-col gap-2 border border-blue-100">
            <p className="mb-1"><span className="font-semibold text-blue-700">주요 설비</span>: 프레스, 크레인, 자동화라인, 안전관리시스템 등</p>
            <p><span className="font-semibold text-blue-700">위치</span>: 경상남도 함안군 칠서면 공단서길 120</p>
          </div>
        </div>
      </div>
    </section>
  );
}
