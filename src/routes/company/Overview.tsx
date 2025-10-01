export default function Overview() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-6 font-pretendard">
      <div className="w-full max-w-3xl bg-white bg-opacity-80 rounded-3xl shadow-xl p-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 text-center tracking-tight font-pretendard">회사개요</h1>
  <img src="/images/donghae-01.jpg" alt="회사개요" className="w-full max-w-md mb-6 rounded-xl shadow-lg mx-auto" />
        <ul className="list-disc pl-6 text-base text-gray-800 space-y-1 mb-6 font-normal font-pretendard">
            <li><span className="font-semibold">회사명</span>: 동해기계주식회사</li>
            <li><span className="font-semibold">창립일</span>: 1998년</li>
            <li><span className="font-semibold">대표이사</span>: 장경수</li>
            <li><span className="font-semibold">주요 사업</span>: 중장비, 플랜트, 자동화설비, 품질관리</li>
        </ul>
        <h2 className="text-lg font-bold mb-4 text-blue-700 text-center font-pretendard">인증서 보유 현황</h2>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <img src="https://donghae.co.kr/asset/images/company/overview-certification1.jpg" alt="ASME 'U'" className="w-24 h-auto rounded shadow" />
          <img src="https://donghae.co.kr/asset/images/company/overveiw-certification-iso9001-ko.jpg" alt="ISO 9001:2015" className="w-24 h-auto rounded shadow" />
          <img src="https://donghae.co.kr/asset/images/company/overveiw-certification-iso14001-ko.jpg" alt="ISO 14001:2015" className="w-24 h-auto rounded shadow" />
          <img src="https://donghae.co.kr/asset/images/company/overveiw-certification-iso45001-ko.jpg" alt="ISO 45001:2018" className="w-24 h-auto rounded shadow" />
        </div>
        <div className="mt-8 py-4 text-center">
          <span className="inline-block text-lg md:text-xl font-semibold text-blue-900 dark:text-blue-100 bg-blue-50 dark:bg-blue-900/30 px-6 py-3 rounded-xl shadow-sm tracking-wide">
            무한한 열정으로 안전중심의 글로벌 성장을 이어나가겠습니다.
          </span>
        </div>
      </div>
    </section>
  );
}
