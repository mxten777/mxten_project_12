import { useEffect, useState } from 'react';

export default function Location() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-2 py-8 font-pretendard relative">
      <div className="w-full max-w-2xl bg-white bg-opacity-95 rounded-3xl shadow-2xl p-8 flex flex-col gap-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-6 text-center tracking-tight font-pretendard drop-shadow-lg">오시는길</h1>
        <div className="bg-blue-50 rounded-2xl shadow-lg p-6 flex flex-col items-center mb-6">
          <img src="/images/donghae-02.jpg" alt="동해기계 위치 지도" className="w-full max-w-lg rounded-xl shadow-lg border-2 border-blue-200 hover:scale-105 transition-transform duration-200" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
            <p className="mb-2"><span className="font-semibold text-blue-700">주소</span>: 경상남도 함안군 칠서면 공단서길 120</p>
            <p className="mb-2"><span className="font-semibold text-blue-700">대표전화</span>: 055-285-2331</p>
            <p className="mb-2"><span className="font-semibold text-blue-700">팩스</span>: 055-584-9878</p>
          </div>
          <div className="bg-blue-50 rounded-xl shadow p-6 flex flex-col gap-2 border border-blue-100">
            <p>자가용/대중교통 이용 시 칠서산업단지 내 위치, 함안역/함안터미널에서 택시로 약 10분 거리입니다.</p>
          </div>
        </div>
      </div>
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-full border-2 border-blue-800 text-lg shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="맨 위로 이동"
        >
          ↑ 상위로
        </button>
      )}
    </section>
  );
}
