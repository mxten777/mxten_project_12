
export default function Footer() {
  return (
    <footer className="w-screen max-w-none text-center py-6 md:py-8 text-gray-400 dark:text-gray-300 text-xs md:text-sm px-2 md:px-0 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700">
      <div className="mb-2 font-bold text-navy dark:text-blue-200 text-sm md:text-base">동해기계㈜ (Donghae Machinery Co., Ltd.)</div>
      <div className="mb-1">설립: 1995년 | 대표자: 장경수 | 사업자등록번호: 609-81-36699</div>
      <div className="mb-1">주소: 경상남도 함안군 칠서면 공단서길 120</div>
      <div className="mb-1">대표전화: 055-285-2331 | 팩스: 055-584-9878 | 이메일: info@donghae.co.kr</div>
      <div className="mb-1">주요 인증/수상: 무역의 탑, 수출유공자, 글로벌 리딩 컴퍼니, 품질 인증</div>
      <div className="mb-2 flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 text-blue-600 dark:text-blue-400 text-xs md:text-sm">
        <a href="/policy" className="underline">개인정보처리방침</a>
        <a href="/terms" className="underline">이용약관</a>
        <a href="https://donghae.co.kr/en/cs/inquiry.php" className="underline" target="_blank" rel="noopener noreferrer">Contact Us</a>
        <span>© 2025 Donghae Machinery Co., Ltd. All Rights Reserved.</span>
      </div>
    </footer>
  );
}