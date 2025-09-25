// ...existing code...
import { NewspaperIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';

export default function PR() {
  // 샘플 뉴스/영상/보도자료 데이터
  const posts = [
    { id: 'n1', type: 'news', title: '동해기계, 신제품 출시', date: '2025-09-01', cover: '', body: '신제품 출시 소식입니다.' },
    { id: 'v1', type: 'video', title: '제품 소개 영상', date: '2025-08-20', cover: '', body: '주요 제품 영상입니다.' },
    { id: 'p1', type: 'press', title: '언론 보도자료', date: '2025-08-10', cover: '', body: '언론에 소개된 기사입니다.' },
  ];
  const { t } = useTranslation();
  return (
    <main className="min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-50 to-mint-400/10 px-4 md:px-8 py-16 md:py-28 font-sans" role="main">
      {/* 브랜드 슬로건 반복 노출 */}
      <div className="mb-10 text-center">
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
  <section className="w-full max-w-3xl bg-gradient-glass rounded-2xl shadow-md p-8 md:p-14 backdrop-blur-md border border-gray-100">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-navy leading-tight flex items-center gap-2">
          <NewspaperIcon className="w-7 h-7 text-blue-400" aria-hidden="true" />
          PR 센터
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map(post => (
            <article key={post.id} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-all duration-200 hover:-translate-y-1 hover:scale-105 focus-within:shadow-md focus-within:-translate-y-1 focus-within:scale-105 cursor-pointer border border-gray-100" tabIndex={0} aria-label={post.title}>
              <h3 className="font-bold text-lg md:text-xl mb-2 text-navy leading-tight flex items-center gap-2">
                <NewspaperIcon className="w-5 h-5 text-blue-400" aria-hidden="true" />
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-2 leading-relaxed">{post.body}</p>
              <span className="text-xs text-gray-400">{post.date}</span>
              {/* 최근 소식 강조 */}
              {post.id === 'n1' && (
                <span className="inline-block mt-2 px-3 py-1 bg-mint-100 text-mint-700 rounded-full text-xs font-bold">신제품 출시</span>
              )}
              {post.id === 'v1' && (
                <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">주요 영상</span>
              )}
              {post.id === 'p1' && (
                <span className="inline-block mt-2 px-3 py-1 bg-navy text-white rounded-full text-xs font-bold">언론 보도</span>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}