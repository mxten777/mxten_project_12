export default function Equipment() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-6 font-pretendard">
      <div className="w-full max-w-2xl bg-white bg-opacity-80 rounded-3xl shadow-xl p-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 text-center tracking-tight font-pretendard">생산설비</h1>
  <img src="/images/donghae-09.jpg" alt="생산설비 내부 이미지" className="w-1/2 max-w-xs mb-6 rounded-xl shadow-lg mx-auto" />
        <div className="text-base text-gray-800 mb-6 text-center font-normal font-pretendard">
          <p className="mb-1">동해기계는 다양한 산업현장에 맞는 생산설비를 설계·제작하여 효율적인 생산 환경을 제공합니다.</p>
          <p className="mb-1">고객 맞춤형 설비와 철저한 품질관리로 생산성 향상에 기여합니다.</p>
          <p className="mb-1"><span className="font-semibold">대표 설비</span>: 자동화 생산라인, 조립설비, 검사설비 등</p>
          <p><span className="font-semibold">특징</span>: 맞춤형 설계, 생산성 극대화, 품질관리</p>
        </div>
      </div>
    </section>
  );
}
