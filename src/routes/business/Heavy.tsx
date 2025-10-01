export default function Heavy() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-12 font-pretendard">
      <div className="w-full max-w-4xl bg-white bg-opacity-80 rounded-3xl shadow-xl p-10">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-8 text-center tracking-tight font-pretendard">중장비 사업</h1>
        <img src="https://donghae.co.kr/asset/images/company/overview-overview.jpg" alt="중장비 사업 예시 이미지" className="w-full max-w-lg mb-8 rounded-2xl shadow-lg mx-auto" />
        <div className="text-xl text-gray-800 mb-8 text-center font-normal font-pretendard">
          <p className="mb-2">동해기계는 건설장비, 광산장비, 고소작업차 등 다양한 중장비를 설계·제작하여 국내외 산업 현장에 공급하고 있습니다.</p>
          <p className="mb-2">최신 기술과 품질관리로 안전하고 효율적인 중장비 솔루션을 제공합니다.</p>
          <p className="mb-2"><span className="font-semibold">대표 제품</span>: 굴삭기, 크레인, 고소작업차, 광산운반차 등</p>
          <p><span className="font-semibold">특징</span>: 내구성, 안전성, 맞춤형 설계, 글로벌 인증</p>
        </div>
      </div>
    </div>
  );
}
