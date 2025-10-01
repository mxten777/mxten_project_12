export default function Plant1() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-6 font-pretendard">
      <div className="w-full max-w-2xl bg-white bg-opacity-80 rounded-3xl shadow-xl p-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 text-center tracking-tight font-pretendard">1공장</h1>
  <img src="/images/donghae-03.jpg" alt="1공장 예시 이미지" className="w-1/3 max-w-xs mb-6 rounded-xl shadow-lg mx-auto" />
        <div className="text-base text-gray-800 mb-6 text-left font-normal font-pretendard leading-relaxed">
          <p className="mb-2">동해기계 1공장은 중장비 및 플랜트 주요 제품의 생산을 담당하는 핵심 사업장입니다.</p>
          <p className="mb-4">최신 설비와 품질관리 시스템을 갖추고, 고객 요구에 맞춘 맞춤형 생산을 실현하고 있습니다.</p>
          <div className="border-t border-blue-100 pt-4 mt-4">
            <p className="mb-1"><span className="font-semibold">주요 설비</span>: 용접기, 절단기, 조립라인, 품질검사장비 등</p>
            <p><span className="font-semibold">위치</span>: 경상남도 함안군 칠서면 공단서길 120</p>
          </div>
        </div>
      </div>
    </section>
  );
}
