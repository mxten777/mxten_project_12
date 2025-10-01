export default function Plant4() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-6 font-pretendard">
      <div className="w-full max-w-2xl bg-white bg-opacity-80 rounded-3xl shadow-xl p-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 text-center tracking-tight font-pretendard">4공장</h1>
  <img src="/images/donghae-06.jpg" alt="4공장 내부 이미지" className="w-1/2 max-w-xs mb-6 rounded-xl shadow-lg mx-auto" />
        <div className="text-base text-gray-800 mb-6 text-left font-normal font-pretendard leading-relaxed">
          <p className="mb-2">동해기계 4공장은 중장비 및 플랜트 산업의 특수 설비를 생산하는 전문 사업장입니다.</p>
          <p className="mb-4">고도화된 생산공정과 품질관리로 고객 만족을 실현합니다.</p>
          <div className="border-t border-blue-100 pt-4 mt-4">
            <p className="mb-1"><span className="font-semibold">주요 설비</span>: 특수 용접기, 자동화 설비 등</p>
            <p><span className="font-semibold">위치</span>: 경상남도 함안군 칠서면 공단서길 150</p>
          </div>
        </div>
      </div>
    </section>
  );
}
