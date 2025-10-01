export default function Location() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-6 font-pretendard">
      <div className="w-full max-w-2xl bg-white bg-opacity-80 rounded-3xl shadow-xl p-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 text-center tracking-tight font-pretendard">오시는길</h1>
  <img src="/images/donghae-02.jpg" alt="동해기계 위치 지도" className="w-full max-w-md mb-6 rounded-xl shadow-lg mx-auto" />
        <div className="text-base text-gray-800 mb-6 text-left font-normal font-pretendard leading-relaxed">
          <p className="mb-2"><span className="font-semibold">주소</span>: 경상남도 함안군 칠서면 공단서길 120</p>
          <p className="mb-2"><span className="font-semibold">대표전화</span>: 055-285-2331 / <span className="font-semibold">팩스</span>: 055-584-9878</p>
          <div className="border-t border-blue-100 pt-4 mt-4">
            <p>자가용/대중교통 이용 시 칠서산업단지 내 위치, 함안역/함안터미널에서 택시로 약 10분 거리입니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
