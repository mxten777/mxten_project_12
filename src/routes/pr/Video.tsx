export default function Video() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen flex flex-col items-center justify-center px-0 md:px-8 py-0 md:py-12 font-pretendard">
  <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-blue-700 text-center tracking-tight drop-shadow-2xl">홍보영상</h1>
        <div className="w-full bg-white dark:bg-gray-900/80 rounded-2xl shadow-2xl p-6 mb-8 flex flex-col gap-6 border border-gray-100 dark:border-gray-800 items-center">
          <div className="w-full max-w-md mb-6 mx-auto aspect-video rounded-xl shadow-lg overflow-hidden">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/1Q8fG0TtVAY" title="동해기계 홍보영상" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <p className="mb-2 text-base md:text-lg text-gray-700 dark:text-gray-200 font-normal text-center">동해기계의 주요 사업과 제품을 소개하는 홍보영상을 시청하실 수 있습니다.</p>
        </div>
      </div>
    </section>
  );
}
