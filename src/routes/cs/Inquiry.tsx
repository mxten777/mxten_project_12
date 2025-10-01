export default function InquiryCS() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen flex flex-col items-center justify-center px-0 md:px-8 py-0 md:py-12 font-pretendard">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-12 text-blue-700 text-center tracking-tight drop-shadow-2xl">문의사항</h1>
        <div className="w-full bg-white dark:bg-gray-900/80 rounded-2xl shadow-2xl p-10 md:p-16 mb-12 flex flex-col gap-8 border border-gray-100 dark:border-gray-800 items-center">
          <img src="https://donghae.co.kr/asset/images/company/overview-overview.jpg" alt="문의사항 예시 이미지" className="w-full max-w-lg md:max-w-xl mb-8 rounded-2xl shadow-lg mx-auto" />
          <div className="w-full text-2xl md:text-3xl leading-relaxed text-gray-800 dark:text-gray-200 mb-8 text-center font-semibold">
            <p className="mb-4">동해기계에 궁금하신 점이나 문의사항이 있으시면 언제든 연락해 주세요.</p>
            <p className="mb-4">문의는 대표전화 또는 이메일, 온라인 문의폼을 통해 가능합니다.</p>
            <p className="mb-4"><strong>대표전화</strong>: 055-285-2331 / <strong>팩스</strong>: 055-584-9878</p>
            <p><strong>문의 절차</strong>: 전화/이메일/온라인 문의 → 담당자 확인 → 신속 답변</p>
          </div>
        </div>
      </div>
    </section>
  );
}
