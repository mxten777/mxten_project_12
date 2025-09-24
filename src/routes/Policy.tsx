import { Helmet } from 'react-helmet-async';
import { ShieldCheckIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';

export default function Policy() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>동해기계 | 개인정보 처리방침</title>
        <meta name="description" content="동해기계 개인정보 처리방침 안내." />
      </Helmet>
      <main className="min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-50 to-mint-400/10 px-4 md:px-8 py-16 md:py-28 font-sans" role="main">
        {/* 브랜드 슬로건 반복 노출 */}
        <div className="mb-8 text-center">
          <span className="block">
            <span className="font-extrabold text-xl md:text-2xl text-blue-400 tracking-wide drop-shadow-lg animate-fade-in block mb-2">
              {t('slogan.growth')}
            </span>
            <span className="font-extrabold text-xl md:text-2xl text-mint-400 tracking-wide drop-shadow-lg animate-fade-in block mb-2">
              {t('slogan.passion')}
            </span>
            <span className="font-extrabold text-xl md:text-2xl text-navy tracking-wide drop-shadow-lg animate-fade-in block">
              {t('slogan.safety')}
            </span>
          </span>
        </div>
        <section className="w-full max-w-2xl bg-gradient-glass rounded-2xl shadow-glass p-8 md:p-14 backdrop-blur-md border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-navy leading-tight flex items-center gap-2" tabIndex={0} aria-label="개인정보 처리방침">
            <ShieldCheckIcon className="w-7 h-7 text-blue-400" aria-hidden="true" />
            개인정보 처리방침
          </h2>
          <article className="bg-white rounded-xl shadow-soft p-6 text-gray-900" tabIndex={0} aria-label="정책 전문">
            <p className="mb-4">동해기계는 고객의 개인정보를 소중히 다루며, 관련 법령을 준수합니다.</p>
            <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
              <li>수집 항목: 이름, 이메일, 회사, 문의 내용 등</li>
              <li>수집 목적: 문의 응대, 서비스 개선, 법적 의무 준수</li>
              <li>보유 기간: 문의 처리 후 1년 또는 법령에 따른 기간</li>
              <li>동의 철회 및 열람/정정/삭제 요청 가능</li>
            </ul>
            <p className="text-xs text-gray-400">자세한 내용은 문의를 통해 안내받으실 수 있습니다.</p>
          </article>
        </section>
      </main>
    </>
  );
}