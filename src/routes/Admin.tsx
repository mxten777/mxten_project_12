import { Cog6ToothIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export default function Admin() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>동해기계 | 관리자</title>
        <meta name="description" content="동해기계 관리자 페이지." />
      </Helmet>
  <main className="min-h-screen w-screen max-w-none flex flex-col items-center bg-white dark:bg-gray-900 px-0 py-0 font-sans relative overflow-x-hidden" role="main">
        {/* 브랜드 슬로건 */}
        <div className="mb-16 text-center mt-32">
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
        {/* Section Divider */}
        <div className="w-full max-w-2xl mx-auto border-t border-gray-100 mb-10" />
        <section className="w-full max-w-2xl mx-auto mb-24 relative z-10">
          <h2 className="text-base md:text-lg font-bold mb-10 text-navy leading-tight flex items-center gap-2" tabIndex={0} aria-label="관리자 페이지">
            <Cog6ToothIcon className="w-6 h-6 text-blue-600" aria-hidden="true" />
            관리자 페이지
          </h2>
          <div className="bg-white rounded-xl p-7 md:p-8 text-gray-700 border border-gray-100" tabIndex={0} aria-label="관리자 기능">
            <p className="mb-6 text-xs font-normal text-gray-500">관리자 전용 기능이 여기에 표시됩니다.</p>
            <ul className="list-disc list-inside text-gray-500 text-xs mb-6">
              <li>제품/게시물/문의 CRUD (생성, 수정, 삭제, 조회)</li>
              <li>Firebase Auth 기반 역할별 접근 (admin, editor, viewer)</li>
              <li>실시간 데이터 관리, 알림 연동</li>
              <li>보안: HTTPS, 접근 권한, 로그 기록</li>
            </ul>
            <p className="text-xs text-gray-300">관리자 인증 후에만 접근 가능합니다.</p>
          </div>
        </section>
        {/* Section Divider */}
        <div className="w-full max-w-2xl mx-auto border-t border-gray-100 mb-8" />
        {/* Footer */}
        <footer className="w-full max-w-2xl mx-auto text-center py-6 text-gray-400 text-xs">
          <div className="mb-1">© 2025 Donghae Machinery</div>
          <div className="text-gray-500">info@donghaemachinery.com | +82-2-1234-5678</div>
        </footer>
      </main>
    </>
  );
}