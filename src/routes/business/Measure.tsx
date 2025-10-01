export default function Measure() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-6 font-pretendard">
      <div className="w-full max-w-2xl bg-white bg-opacity-80 rounded-3xl shadow-xl p-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 text-center tracking-tight font-pretendard">측정설비</h1>
  <img src="/images/donghae-10.jpg" alt="측정설비 내부 이미지" className="w-1/2 max-w-xs mb-6 rounded-xl shadow-lg mx-auto" />
        <div className="text-base text-gray-800 mb-6 text-center font-normal font-pretendard">
          <p className="mb-1">동해기계는 정밀 측정설비를 통해 제품의 품질과 안전을 보장합니다.</p>
          <p className="mb-1">첨단 측정기술과 엄격한 검사로 신뢰받는 산업설비를 제공합니다.</p>
          <p className="mb-1"><span className="font-semibold">대표 설비</span>: 3D측정기, 자동측정기, 품질검사장비 등</p>
          <p><span className="font-semibold">특징</span>: 정밀도, 신뢰성, 품질보증</p>
        </div>
      </div>
    </section>
  );
}
