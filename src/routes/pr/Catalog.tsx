export default function Catalog() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen flex flex-col items-center justify-center px-0 md:px-8 py-0 md:py-12 font-pretendard">
  <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-blue-700 text-center tracking-tight drop-shadow-2xl">카탈로그</h1>
        <div className="w-full bg-white dark:bg-gray-900/80 rounded-2xl shadow-2xl p-6 mb-8 flex flex-col gap-6 border border-gray-100 dark:border-gray-800 items-center">
          <img src="/images/art-01.jpg" alt="동해기계 카탈로그" className="w-full max-w-md mb-6 rounded-xl shadow-lg mx-auto" />
          <p className="mb-4 text-base md:text-lg text-gray-700 dark:text-gray-200 font-normal text-center">동해기계의 최신 제품 및 사업 카탈로그를 다운로드하실 수 있습니다.</p>
          <a href="https://donghae.co.kr/asset/catalog/donghae_catalog.pdf" target="_blank" rel="noopener" className="inline-block bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-xl hover:bg-blue-800 transition text-base md:text-lg">카탈로그 다운로드</a>
        </div>
      </div>
    </section>
  );
}