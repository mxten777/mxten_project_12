export default function Measure() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-12 font-pretendard">
      <div className="w-full max-w-4xl bg-white bg-opacity-80 rounded-3xl shadow-xl p-10">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-8 text-center tracking-tight font-pretendard">측정설비</h1>
        <img src="https://donghae.co.kr/asset/images/company/overview-overview.jpg" alt="측정설비 예시 이미지" className="w-full max-w-lg mb-8 rounded-2xl shadow-lg mx-auto" />
        <div className="text-xl text-gray-800 mb-8 text-center font-normal font-pretendard">
          <p className="mb-2">동해기계는 정밀 측정설비를 통해 제품의 품질과 안전을 보장합니다.</p>
          <p className="mb-2">첨단 측정기술과 엄격한 검사로 신뢰받는 산업설비를 제공합니다.</p>
          <p className="mb-2"><span className="font-semibold">대표 설비</span>: 3D측정기, 자동측정기, 품질검사장비 등</p>
          <p><span className="font-semibold">특징</span>: 정밀도, 신뢰성, 품질보증</p>
        </div>
      </div>
    </div>
  );
}
