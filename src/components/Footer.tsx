import { SparklesIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
  <footer className="w-full bg-gradient-to-r from-blue-50 via-mint-100 to-purple-100 border-t border-gray-100 py-10 px-4 md:px-12 flex flex-col items-center text-base shadow-soft backdrop-blur-md" role="contentinfo" aria-label={t('footer.aria')}>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start justify-between">
        {/* 브랜드/슬로건 영역 */}
        <div className="flex flex-col gap-3 md:gap-4">
          <div className="flex items-center gap-2 mb-1">
            <SparklesIcon className="w-6 h-6 text-blue-400 animate-pulse" aria-hidden="true" />
            <span className="font-extrabold text-xl text-navy tracking-wide">{t('footer.brand')}</span>
          </div>
          <div className="text-gray-700 font-semibold">{t('footer.network')}</div>
          <div className="text-gray-500 text-sm">{t('footer.scale')}</div>
        </div>
        {/* 연락처/정보 영역 */}
        <div className="flex flex-col gap-2 md:gap-3">
          <div className="text-gray-500 text-sm">{t('footer.tel')}: <a href="tel:02-1234-5678" className="text-blue-400 font-bold hover:underline">02-1234-5678</a></div>
          <div className="text-gray-500 text-sm">{t('footer.email')}: <a href="mailto:contact@donghae.co.kr" className="text-blue-400 font-bold hover:underline">contact@donghae.co.kr</a></div>
          <div className="flex gap-3 mt-2">
            <a href="https://www.linkedin.com/company/donghae" target="_blank" rel="noopener" aria-label="LinkedIn" className="text-blue-700 hover:text-blue-900"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.001 3.601 4.601v5.595z"/></svg></a>
            <a href="https://www.youtube.com/@donghaemachinery" target="_blank" rel="noopener" aria-label="YouTube" className="text-red-500 hover:text-red-700"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112c-1.868-.502-9.386-.502-9.386-.502s-7.518 0-9.386.502a2.994 2.994 0 0 0-2.112 2.112c-.502 1.868-.502 5.772-.502 5.772s0 3.904.502 5.772a2.994 2.994 0 0 0 2.112 2.112c1.868.502 9.386.502 9.386.502s7.518 0 9.386-.502a2.994 2.994 0 0 0 2.112-2.112c.502-1.868.502-5.772.502-5.772s0-3.904-.502-5.772zm-13.498 9.314v-7l6.5 3.5-6.5 3.5z"/></svg></a>
          </div>
        </div>
        {/* 푸터 메뉴 영역 */}
        <nav className="flex flex-col gap-2 md:gap-3 items-start md:items-end" aria-label={t('footer.menuAria')}>
          <a href="/policy" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-400 font-bold" aria-label={t('footer.policyAria')}>{t('footer.policy')}</a>
          <a href="/inquiry" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-400 font-bold" aria-label={t('footer.inquiryAria')}>{t('footer.inquiry')}</a>
          <a href="/downloads" className="hover:underline focus:outline-none focus:ring-2 focus:ring-mint-400 text-mint-500 font-bold" aria-label={t('footer.downloadAria')}>{t('footer.download')}</a>
        </nav>
      </div>
  <div className="w-full text-center text-gray-400 text-xs mt-8 pt-4 border-t border-gray-100">© {new Date().getFullYear()} {t('footer.brand')}. {t('footer.copyright')}</div>
    </footer>
  );
}