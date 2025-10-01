export default function Org() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-12 font-pretendard">
        <div className="w-full max-w-2xl bg-white bg-opacity-80 rounded-3xl shadow-xl p-10">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-8 text-center tracking-tight font-pretendard">조직도</h1>
          <img src="https://donghae.co.kr/asset/images/company/overview-org.jpg" alt="조직도 예시 이미지" className="w-full max-w-lg mb-8 rounded-2xl shadow-lg mx-auto" />
          <div className="text-xl text-gray-800 mb-8 text-left font-normal font-pretendard leading-relaxed">
            <p className="mb-4">동해기계의 조직은 연구개발, 생산, 품질관리, 영업 등 각 분야의 전문가로 구성되어 있습니다.</p>
            <p className="mb-6">효율적인 협업과 책임경영으로 최고의 성과를 창출합니다.</p>
            <div className="border-t border-blue-100 pt-4 mt-4">
              <p className="mb-2"><span className="font-semibold">주요 부서</span>: 연구소, 생산팀, 품질관리팀, 영업팀 등</p>
              <p><span className="font-semibold">위치</span>: 경상남도 함안군 칠서면 공단서길 120</p>
            </div>
          </div>
      </div>
    </div>
  );
}
