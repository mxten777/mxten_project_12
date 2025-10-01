export default function News() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen flex flex-col items-center justify-center px-0 md:px-8 py-0 md:py-12 font-pretendard">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-12 text-blue-700 text-center tracking-tight drop-shadow-2xl">회사뉴스</h1>
        <img src="https://donghae.co.kr/asset/images/company/overview-overview.jpg" alt="회사뉴스 예시 이미지" className="w-full max-w-lg md:max-w-xl mb-8 rounded-2xl shadow-lg mx-auto" />
        <div className="w-full bg-white dark:bg-gray-900/80 rounded-2xl shadow-2xl p-10 md:p-16 mb-12 flex flex-col gap-8 border border-gray-100 dark:border-gray-800 items-center">
          <p className="mb-4 text-2xl md:text-3xl text-gray-700 dark:text-gray-200 font-semibold text-center">동해기계의 최신 소식과 뉴스를 안내합니다.</p>
          <ul className="list-disc pl-8 text-left text-xl md:text-2xl text-gray-800 dark:text-gray-200">
            <li className="mb-4"><span className="font-bold text-blue-700">2025.09.01</span> - 동해기계, 추석 연휴 휴무 안내</li>
            <li className="mb-4"><span className="font-bold text-blue-700">2025.08.15</span> - 신제품 출시 및 프로모션 안내</li>
            <li className="mb-4"><span className="font-bold text-blue-700">2025.07.10</span> - 홈페이지 리뉴얼 오픈</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
