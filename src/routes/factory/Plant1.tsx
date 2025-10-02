export default function Plant1() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-2 py-8 font-pretendard">
      <div className="w-full max-w-2xl bg-white bg-opacity-95 rounded-3xl shadow-2xl p-8 flex flex-col gap-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-6 text-center tracking-tight font-pretendard drop-shadow-lg">1공장</h1>
        <div className="bg-blue-50 rounded-2xl shadow-lg p-6 flex flex-col items-center mb-6">
          <img src="/images/donghae-03.jpg" alt="1공장 예시 이미지" className="w-full sm:w-1/2 max-w-xs rounded-xl shadow-lg border-2 border-blue-200 hover:scale-105 transition-transform duration-200" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
            <p className="text-base text-gray-800 font-normal leading-relaxed mb-2">동해기계 1공장은 중장비 및 플랜트 주요 제품의 생산을 담당하는 핵심 사업장입니다.</p>
            <p className="text-base text-gray-800 font-normal leading-relaxed mb-2">최신 설비와 품질관리 시스템을 갖추고, 고객 요구에 맞춘 맞춤형 생산을 실현하고 있습니다.</p>
          </div>
          <div className="bg-blue-50 rounded-xl shadow p-6 flex flex-col gap-2 border border-blue-100">
            <p className="mb-1"><span className="font-semibold text-blue-700">주요 설비</span>: 용접기, 절단기, 조립라인, 품질검사장비 등</p>
            <p><span className="font-semibold text-blue-700">위치</span>: 경상남도 함안군 칠서면 공단서길 120</p>
          </div>
        </div>
      </div>
    </section>
  );
}
