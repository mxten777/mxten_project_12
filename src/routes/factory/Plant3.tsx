export default function Plant3() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-12 font-pretendard">
      <div className="w-full max-w-2xl bg-white bg-opacity-80 rounded-3xl shadow-xl p-10">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-8 text-center tracking-tight font-pretendard">3공장</h1>
        <img src="https://donghae.co.kr/asset/images/company/greeting-cpnphoto.jpg" alt="3공장 예시 이미지" className="w-full max-w-lg mb-8 rounded-2xl shadow-lg mx-auto" />
        <div className="text-xl text-gray-800 mb-8 text-left font-normal font-pretendard leading-relaxed">
            <p className="mb-4">동해기계 3공장은 플랜트 구조물 및 대형 중장비 부품을 생산하는 특화 사업장입니다.</p>
            <p className="mb-6">대형 설비와 숙련된 인력으로 다양한 산업현장에 최적화된 제품을 제공합니다.</p>
            <div className="border-t border-blue-100 pt-4 mt-4">
              <p className="mb-2"><span className="font-semibold">주요 설비</span>: 대형 프레스, 용접기, 크레인 등</p>
              <p><span className="font-semibold">위치</span>: 경상남도 함안군 칠서면 공단서길 140</p>
            </div>
        </div>
      </div>
    </div>
  );
}
