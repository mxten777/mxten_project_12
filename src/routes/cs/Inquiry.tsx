export default function InquiryCS() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen flex flex-col items-center justify-center px-4 py-6 font-pretendard">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-blue-700 text-center tracking-tight drop-shadow-2xl">문의사항</h1>
        <div className="w-full bg-white dark:bg-gray-900/80 rounded-2xl shadow-2xl p-6 mb-8 flex flex-col gap-6 border border-gray-100 dark:border-gray-800 items-center">
          <img src="/images/whatsapp-01.jpg" alt="문의사항 예시 이미지" className="w-full max-w-md mb-6 rounded-xl shadow-lg mx-auto" />
          <div className="w-full text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-200 mb-6 text-center font-normal">
            <p className="mb-2">동해기계에 궁금하신 점이나 문의사항이 있으시면 언제든 연락해 주세요.</p>
            <p className="mb-2">문의는 대표전화 또는 이메일, 온라인 문의폼을 통해 가능합니다.</p>
            <p className="mb-2"><strong>대표전화</strong>: 055-285-2331 / <strong>팩스</strong>: 055-584-9878</p>
            <p><strong>문의 절차</strong>: 전화/이메일/온라인 문의 → 담당자 확인 → 신속 답변</p>
          </div>
        </div>
      </div>
    </section>
  );
}
