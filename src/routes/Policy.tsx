import { useTranslation } from 'react-i18next';

export default function Policy() {
  const { t } = useTranslation();

  return (
    <main
  className="min-h-screen w-screen max-w-none flex flex-col items-center bg-white dark:bg-gray-900 px-0 py-0 font-sans font-pretendard relative overflow-x-hidden"
      role="main"
    >
      <div className="mb-16 text-left w-full max-w-2xl mx-auto mt-32">
        <span className="block leading-[1.12]">
          <span className="block font-bold text-base md:text-lg text-blue-600 tracking-tight mb-2">
            {t('slogan.growth')}
          </span>
          <span className="block font-bold text-base md:text-lg text-navy tracking-tight mb-2">
            {t('slogan.passion')}
          </span>
          <span className="block font-bold text-base md:text-lg text-gray-400 tracking-tight">
            {t('slogan.safety')}
          </span>
        </span>
      </div>
      <section className="w-full max-w-2xl mx-auto mb-24 relative z-10">
        <h1
          className="text-base md:text-lg font-bold mb-10 text-navy leading-tight flex items-center gap-2"
          tabIndex={0}
          aria-label="개인정보 처리방침"
        >
          {/* 아이콘 제거됨 */}
          개인정보 처리방침
        </h1>
  <div className="bg-white rounded-xl p-7 md:p-8 text-gray-700 border border-gray-100 shadow-none mb-24 text-left">
          {/* Section Divider */}
          <div className="w-full border-t border-gray-100 mb-10" />
          <article
            className="bg-white rounded-xl p-5 md:p-7 text-gray-700 mx-auto border border-gray-100"
            tabIndex={0}
            aria-label="정책 전문"
          >
            <p className="mb-6 text-xs font-normal leading-relaxed text-gray-500">
              동해기계는 고객의 개인정보를 소중히 다루며, 관련 법령을 준수합니다.
            </p>
            <ul className="list-disc list-inside text-gray-500 text-xs md:text-sm mb-6 text-left mx-auto max-w-xl">
              <li>수집 항목: 이름, 이메일, 회사, 문의 내용 등</li>
              <li>수집 목적: 문의 응대, 서비스 개선, 법적 의무 준수</li>
              <li>보유 기간: 문의 처리 후 1년 또는 법령에 따른 기간</li>
              <li>동의 철회 및 열람/정정/삭제 요청 가능</li>
            </ul>
            <p className="text-xs text-gray-300">
              자세한 내용은 문의를 통해 안내받으실 수 있습니다.
            </p>
          </article>
          {/* Section Divider Bottom */}
          <div className="w-full border-t border-gray-100 mt-10" />
        </div>
      </section>
      <div className="w-full max-w-2xl mx-auto border-t border-gray-100 mb-8" />
  {/* Footer */}
  {/* Footer는 App.tsx에서 렌더링되므로 중복 제거 */}
    </main>
  );
}