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
      <main className="min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-50 to-mint-400/10 px-4 md:px-8 py-16 md:py-28 font-sans" role="main">
        {/* 브랜드 슬로건 반복 노출 */}
        <div className="mb-8 text-center">
          <span className="block leading-[1.05]">
            <span className="block font-bold text-lg md:text-xl text-blue-400 tracking-tight mb-0">
              {t('slogan.growth')}
            </span>
            <span className="block font-bold text-lg md:text-xl text-purple-500 tracking-tight mb-0">
              {t('slogan.passion')}
            </span>
              <span className="block font-bold text-lg md:text-xl text-pink-500 tracking-tight">
              {t('slogan.safety')}
            </span>
          </span>
        </div>
  <section className="w-full max-w-2xl bg-gradient-glass rounded-2xl shadow-md p-8 md:p-14 backdrop-blur-md border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-navy leading-tight flex items-center gap-2" tabIndex={0} aria-label="관리자 페이지">
            <Cog6ToothIcon className="w-7 h-7 text-blue-400" aria-hidden="true" />
            관리자 페이지
          </h2>
          <div className="bg-white rounded-xl shadow-sm p-6 text-gray-900" tabIndex={0} aria-label="관리자 기능">
            <p className="mb-4">관리자 전용 기능이 여기에 표시됩니다.</p>
            <ul className="list-disc list-inside text-gray-700 text-sm mb-4">
              <li>제품/게시물/문의 CRUD (생성, 수정, 삭제, 조회)</li>
              <li>Firebase Auth 기반 역할별 접근 (admin, editor, viewer)</li>
              <li>실시간 데이터 관리, 알림 연동</li>
              <li>보안: HTTPS, 접근 권한, 로그 기록</li>
            </ul>
            <p className="text-xs text-gray-400">관리자 인증 후에만 접근 가능합니다.</p>
          </div>
        </section>
      </main>
    </>
  );
}