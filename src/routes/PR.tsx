// ...existing code...
import { NewspaperIcon, PlayCircleIcon, DocumentTextIcon, ShareIcon, ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Modal from '../components/Modal';

export default function PR() {
  const posts = [
    { id: 'n1', type: 'news', title: '동해기계, 신제품 출시', date: '2025-09-01', cover: '', body: '신제품 출시 소식입니다.' },
    { id: 'v1', type: 'video', title: '제품 소개 영상', date: '2025-08-20', cover: '', body: '주요 제품 영상입니다.' },
    { id: 'p1', type: 'press', title: '언론 보도자료', date: '2025-08-10', cover: '', body: '언론에 소개된 기사입니다.' },
  ];
  type Post = typeof posts[number];
  const [selected, setSelected] = useState<Post | null>(null);
  const [filterType, setFilterType] = useState<'all'|'news'|'video'|'press'>('all');
  const [search, setSearch] = useState('');
  const { t } = useTranslation();

  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-gray-50 dark:bg-gray-900 px-0 py-0 font-sans font-pretendard relative overflow-x-hidden" role="main">
      {/* Hero Section */}
      <section className="relative w-screen max-w-none min-h-[600px] flex flex-col items-center justify-center overflow-hidden px-0 mb-10 md:mb-16">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'url("data:image/svg+xml;utf8,<svg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'><rect x=\'0.5\' y=\'0.5\' width=\'39\' height=\'39\' stroke=\'%23ffffff33\'/></svg>")',
            opacity: 0.2,
          }}
        />
    <h1 className="relative z-10 text-white dark:text-gray-100 text-xl sm:text-2xl md:text-4xl font-extrabold text-center mb-3 md:mb-4 drop-shadow-lg leading-tight">
          PR 센터
        </h1>
    <p className="relative z-10 text-purple-100 dark:text-purple-200 text-sm sm:text-base md:text-xl text-center mb-4 md:mb-6 font-medium leading-relaxed">
          동해기계의 최신 소식과 자료를 확인하세요
        </p>
  <div className="relative z-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center items-center">
          <a href="#inquiry" className="bg-pink-500 hover:bg-pink-600 dark:bg-pink-700 dark:hover:bg-pink-800 text-white font-bold py-2 px-6 md:py-2.5 md:px-8 rounded-full shadow-lg text-sm md:text-base w-full sm:w-auto text-center">문의하기</a>
          <a href="#downloads" className="bg-white bg-opacity-20 hover:bg-opacity-30 dark:bg-gray-700 dark:bg-opacity-40 dark:hover:bg-opacity-60 text-white font-bold py-2 px-6 md:py-2.5 md:px-8 rounded-full border border-white dark:border-gray-300 text-sm md:text-base w-full sm:w-auto text-center">자료 다운로드</a>
        </div>
      </section>
      {/* Card Section */}
  <section className="w-full mb-24 relative z-10">
        <h1 className="text-base md:text-lg font-bold mb-10 text-navy leading-tight flex items-center gap-2">
          <NewspaperIcon className="w-6 h-6 text-blue-600" aria-hidden="true" />
          PR 센터
        </h1>
  <div className="bg-white dark:bg-gray-800 rounded-xl p-7 md:p-8 border border-gray-100 dark:border-gray-700 shadow-none">
          {/* 검색/필터 UI */}
          <div className="flex flex-col md:flex-row gap-3 mb-6 items-center justify-between">
            <div className="flex gap-1">
              <button onClick={() => setFilterType('all')} className={`px-3 py-1 rounded-full font-medium text-xs border ${filterType==='all'?'bg-blue-600 text-white border-blue-600':'bg-gray-100 dark:bg-gray-700 text-navy dark:text-blue-200 border-gray-100 dark:border-gray-700'}`}>전체</button>
              <button onClick={() => setFilterType('news')} className={`px-3 py-1 rounded-full font-medium text-xs border ${filterType==='news'?'bg-blue-600 text-white border-blue-600':'bg-gray-100 dark:bg-gray-700 text-navy dark:text-blue-200 border-gray-100 dark:border-gray-700'}`}>뉴스</button>
              <button onClick={() => setFilterType('video')} className={`px-3 py-1 rounded-full font-medium text-xs border ${filterType==='video'?'bg-blue-600 text-white border-blue-600':'bg-gray-100 dark:bg-gray-700 text-navy dark:text-blue-200 border-gray-100 dark:border-gray-700'}`}>영상</button>
              <button onClick={() => setFilterType('press')} className={`px-3 py-1 rounded-full font-medium text-xs border ${filterType==='press'?'bg-blue-600 text-white border-blue-600':'bg-gray-100 dark:bg-gray-700 text-navy dark:text-blue-200 border-gray-100 dark:border-gray-700'}`}>보도자료</button>
            </div>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="검색어 입력"
              className="border border-gray-100 dark:border-gray-700 rounded px-3 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {posts
              .filter(p => filterType === 'all' || p.type === filterType)
              .filter(p => !search || p.title.includes(search) || p.body.includes(search))
              .map(post => (
                <div key={post.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 text-left border border-gray-100 dark:border-gray-700 flex flex-col justify-between mb-4 transition-all hover:shadow-none hover:border-blue-100 dark:hover:border-blue-400 cursor-pointer" onClick={() => setSelected(post)}>
                  <div className="flex items-center gap-2 mb-2">
                    {post.type === 'news' && <NewspaperIcon className="w-6 h-6 text-blue-500" />}
                    {post.type === 'video' && <PlayCircleIcon className="w-6 h-6 text-blue-500" />}
                    {post.type === 'press' && <DocumentTextIcon className="w-6 h-6 text-blue-500" />}
                    <span className="font-medium text-sm md:text-base text-navy dark:text-blue-200">{post.title}</span>
                  </div>
                  <div className="text-xs md:text-sm mb-2 text-gray-500 dark:text-gray-300 font-normal leading-relaxed">{post.body}</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">{post.date}</div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.title + ' 상세'}>
        {selected && (
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-2 mb-2">
              {selected.type === 'news' && <NewspaperIcon className="w-6 h-6 text-blue-600" />}
              {selected.type === 'video' && <PlayCircleIcon className="w-6 h-6 text-blue-600" />}
              {selected.type === 'press' && <DocumentTextIcon className="w-6 h-6 text-blue-600" />}
              <span className="font-bold text-lg text-navy leading-tight">{selected.title}</span>
            </div>
            <div className="text-base text-gray-700 dark:text-gray-200 font-normal leading-relaxed mb-2">{selected.body}</div>
            <div className="text-sm text-gray-400 dark:text-gray-500 mb-4">{selected.date}</div>
            {selected.type === 'video' && (
              <div className="aspect-video bg-blue-50 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-200 mb-4">
                <PlayCircleIcon className="w-16 h-16" />
                <span className="ml-2 text-lg font-bold">제품 소개 영상</span>
              </div>
            )}
            {selected.type === 'news' && (
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="뉴스 이미지" className="w-full rounded-lg mb-4" />
            )}
            {selected.type === 'press' && (
              <a href="#" className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-200 font-medium px-4 py-2 rounded-full border border-blue-100 dark:border-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 transition-all mb-4">
                <ArrowDownTrayIcon className="w-5 h-5" /> 보도자료 다운로드
              </a>
            )}
            <div className="flex gap-3 mt-2">
              <button className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-navy dark:text-blue-200 font-medium px-4 py-2 rounded-full border border-gray-100 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all">
                <ShareIcon className="w-5 h-5" /> 공유하기
              </button>
            </div>
          </div>
        )}
      </Modal>
      {/* Section Divider Bottom */}
      <div className="w-full max-w-2xl mx-auto border-t border-gray-100 dark:border-gray-700 mb-8" />
  {/* Footer는 App.tsx에서 렌더링되므로 중복 제거 */}
    </main>
  );
}