export default function Notice() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen flex flex-col items-center justify-center px-0 md:px-8 py-0 md:py-12 font-pretendard">
  <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-blue-700 text-center tracking-tight drop-shadow-2xl">공지사항</h1>
        <div className="w-full bg-white dark:bg-gray-900/80 rounded-2xl shadow-2xl p-6 mb-8 flex flex-col gap-6 border border-gray-100 dark:border-gray-800 items-center">
          <p className="mb-2 text-base md:text-lg text-gray-700 dark:text-gray-200 font-normal text-center">동해기계의 최근 공지사항을 안내합니다.</p>
          <ul className="list-disc pl-6 text-left text-base md:text-lg text-gray-800 dark:text-gray-200">
            <li className="mb-4"><span className="font-bold text-blue-700">2025.09.01</span> - 추석 연휴 휴무 안내</li>
            <li className="mb-4"><span className="font-bold text-blue-700">2025.08.15</span> - 신제품 출시 및 프로모션 안내</li>
            <li className="mb-4"><span className="font-bold text-blue-700">2025.07.10</span> - 홈페이지 리뉴얼 오픈</li>
          </ul>
        </div>
      </div>
    </section>
  );
}