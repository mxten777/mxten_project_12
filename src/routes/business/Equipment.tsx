export default function Equipment() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-12 font-pretendard">
      <div className="w-full max-w-4xl bg-white bg-opacity-80 rounded-3xl shadow-xl p-10">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-8 text-center tracking-tight font-pretendard">생산설비</h1>
        <img src="https://donghae.co.kr/asset/images/company/overview-overview.jpg" alt="생산설비 예시 이미지" className="w-full max-w-lg mb-8 rounded-2xl shadow-lg mx-auto" />
        <div className="text-xl text-gray-800 mb-8 text-center font-normal font-pretendard">
          <p className="mb-2">동해기계는 다양한 산업현장에 맞는 생산설비를 설계·제작하여 효율적인 생산 환경을 제공합니다.</p>
          <p className="mb-2">고객 맞춤형 설비와 철저한 품질관리로 생산성 향상에 기여합니다.</p>
          <p className="mb-2"><span className="font-semibold">대표 설비</span>: 자동화 생산라인, 조립설비, 검사설비 등</p>
          <p><span className="font-semibold">특징</span>: 맞춤형 설계, 생산성 극대화, 품질관리</p>
        </div>
      </div>
    </div>
  );
}
