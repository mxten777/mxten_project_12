import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { SparklesIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';
import Modal from '../components/Modal';

export default function Home() {
  const [showToast, setShowToast] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (showToast) {
      const t = setTimeout(() => setShowToast(false), 2000);
      return () => clearTimeout(t);
    }
  }, [showToast]);

  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>동해기계 Donghae Machinery | 메인</title>
        <meta name="description" content="동해기계 공식 홈페이지 메인. 산업 혁신을 이끄는 신뢰와 기술의 기업." />
      </Helmet>
      <main className="min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-50 to-mint-400/10 px-4 md:px-8 py-16 md:py-28 font-sans" role="main">
        <section className="w-full max-w-2xl text-center bg-white/90 rounded-2xl shadow-soft p-8 md:p-14 backdrop-blur-md border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-navy leading-tight flex flex-col items-center justify-center gap-3">
            <span className="flex items-center justify-center gap-3">
              <SparklesIcon className="w-8 h-8 text-blue-400 animate-pulse" aria-hidden="true" />
              <span className="tracking-wide">{t('footer.brand')}</span>
            </span>
            <span className="block mt-4 text-center">
              <span className="font-extrabold text-2xl md:text-3xl text-blue-400 tracking-wide drop-shadow-lg animate-fade-in block mb-2">
                {t('slogan.growth')}
              </span>
              <span className="font-extrabold text-2xl md:text-3xl text-mint-400 tracking-wide drop-shadow-lg animate-fade-in block mb-2">
                {t('slogan.passion')}
              </span>
              <span className="font-extrabold text-2xl md:text-3xl text-navy tracking-wide drop-shadow-lg animate-fade-in block">
                {t('slogan.safety')}
              </span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">산업의 혁신을 이끄는 동해기계, 신뢰와 기술로 함께합니다.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-6">
            <a
              href="#inquiry"
              className="inline-block bg-blue-400 text-white font-bold py-3 px-8 rounded-full transition-all duration-200 hover:bg-blue-500 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-soft hover:shadow-lg text-lg tracking-wide"
              aria-label="문의하기 바로가기"
              onClick={e => {e.preventDefault(); setModalOpen(true);}}
            >
              문의하기
            </a>
            <a
              href="#products"
              className="inline-block bg-mint-400 text-navy font-bold py-3 px-8 rounded-full transition-all duration-200 hover:bg-mint-500 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-mint-400 shadow-soft hover:shadow-lg text-lg tracking-wide"
              aria-label="제품 보러가기"
            >
              제품 보러가기
            </a>
          </div>
        </section>
        {showToast && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-navy/90 text-white px-6 py-3 rounded shadow-lg animate-fade-in z-50 font-semibold text-base backdrop-blur-md border border-blue-400">
            문의하기 섹션으로 이동합니다
          </div>
        )}
        <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="문의하기">
          <div className="text-gray-600 text-base mb-4">빠른 문의를 원하시면 아래 이메일로 연락해 주세요.<br />contact@donghae.co.kr</div>
          <a href="mailto:contact@donghae.co.kr" className="inline-block bg-blue-400 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-500 transition-all">이메일 문의</a>
        </Modal>
      </main>
    </>
  );
}