import { useEffect, useState } from 'react';

export default function Org() {
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
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-6 text-center tracking-tight font-pretendard drop-shadow-lg">조직도</h1>
        <div className="bg-blue-50 rounded-2xl shadow-lg p-6 flex flex-wrap justify-center gap-6 mb-6">
          <img src="/images/chart-01.jpg" alt="동해기계 조직도 차트1" className="w-full sm:w-1/2 max-w-xs rounded-xl shadow-lg border-2 border-blue-200 hover:scale-105 transition-transform duration-200" />
          <img src="/images/chart-02.jpg" alt="동해기계 조직도 차트2" className="w-full sm:w-1/2 max-w-xs rounded-xl shadow-lg border-2 border-blue-200 hover:scale-105 transition-transform duration-200" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
            <p className="text-base text-gray-800 font-normal leading-relaxed mb-2">동해기계의 조직은 연구개발, 생산, 품질관리, 영업 등 각 분야의 전문가로 구성되어 있습니다.</p>
            <p className="text-base text-gray-800 font-normal leading-relaxed mb-2">효율적인 협업과 책임경영으로 최고의 성과를 창출합니다.</p>
          </div>
          <div className="bg-blue-50 rounded-xl shadow p-6 flex flex-col gap-2 border border-blue-100">
            <p className="mb-1"><span className="font-semibold text-blue-700">주요 부서</span>: 연구소, 생산팀, 품질관리팀, 영업팀 등</p>
            <p><span className="font-semibold text-blue-700">위치</span>: 경상남도 함안군 칠서면 공단서길 120</p>
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
