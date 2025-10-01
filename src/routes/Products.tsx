  {/* Hero Section - Donghae Machinery 스타일 */}
  <section className="relative w-screen max-w-none min-h-[600px] flex flex-col items-center justify-center overflow-hidden px-0 mb-10 md:mb-16">
    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          'url("data:image/svg+xml;utf8,<svg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'><rect x=\'0.5\' y=\'0.5\' width=\'39\' height=\'39\' stroke=\'%23ffffff33\'/></svg>")',
        opacity: 0.2,
      }}
    />
    <h1 className="relative z-10 text-white dark:text-gray-100 text-3xl sm:text-5xl md:text-6xl font-extrabold text-center mb-6 drop-shadow-xl leading-tight">
      동해기계의<br />주요 사업영역
    </h1>
    <p className="relative z-10 text-purple-100 dark:text-purple-200 text-lg md:text-2xl text-center mb-8 font-medium leading-relaxed">
      중장비 · 플랜트 · 글로벌 수출<br />품질과 안전, 혁신의 리더
    </p>
    <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
      <a href="#inquiry" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-xl text-lg md:text-xl w-full sm:w-auto text-center">문의하기</a>
      <a href="#downloads" className="bg-white bg-opacity-20 hover:bg-opacity-30 dark:bg-gray-700 dark:bg-opacity-40 dark:hover:bg-opacity-60 text-white font-bold py-3 px-8 rounded-full border border-white dark:border-gray-300 text-lg md:text-xl w-full sm:w-auto text-center">카탈로그 다운로드</a>
    </div>
  </section>
// ...existing code...
import { CubeTransparentIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Modal from '../components/Modal';

export default function Products() {
  const [selected, setSelected] = useState<null | typeof products[0]>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const categories = [
    { id: 'cat1', name: '유압기기' },
    { id: 'cat2', name: '공압기기' },
    { id: 'cat3', name: '특수장비' },
  ];
  const products = [
    { id: 'p1', name: '유압펌프', category: 'cat1', desc: '고성능 유압펌프' },
    { id: 'p2', name: '공압실린더', category: 'cat2', desc: '정밀 공압실린더' },
    { id: 'p3', name: '특수크레인', category: 'cat3', desc: '산업용 특수 크레인' },
  ];
  const { t } = useTranslation();
  return (
  <main className="min-h-screen w-screen max-w-none flex flex-col items-center bg-white dark:bg-gray-900 px-0 py-0 font-sans font-pretendard relative overflow-x-hidden" role="main">
  {/* ...기존 브랜드 슬로건 영역 제거, Hero 섹션으로 대체... */}
      <h1 className="text-base md:text-lg font-bold mb-10 text-navy leading-tight flex items-center gap-2">
        <CubeTransparentIcon className="w-6 h-6 text-blue-600" aria-hidden="true" />
        제품 카테고리
      </h1>
      <div className="flex flex-wrap gap-2 md:gap-4 mb-6 justify-center">
        <button
          key="all"
          className={`px-3 py-1 rounded-full font-medium text-xs border ${activeCategory === 'all' ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-100 text-navy border-gray-100'}`}
          onClick={() => setActiveCategory('all')}
        >
          전체
        </button>
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`px-3 py-1 rounded-full font-medium text-xs border ${activeCategory === cat.id ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-100 text-navy border-gray-100'}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-24">
        {products
          .filter(p => activeCategory === 'all' || p.category === activeCategory)
          .map(product => (
            <div key={product.id} className="bg-white rounded-xl p-7 md:p-8 text-left border border-gray-100 flex flex-col justify-between mb-4 transition-all hover:shadow-none hover:border-blue-100 cursor-pointer">
              <CubeTransparentIcon className="w-8 h-8 text-blue-500 mb-3" aria-hidden="true" />
              <div className="font-medium text-sm md:text-base mb-1 text-navy">{product.name}</div>
              <div className="text-xs md:text-sm mb-2 text-gray-500 font-normal leading-relaxed">{product.desc}</div>
              <button
                className="bg-blue-500 text-white font-medium py-2 px-7 rounded-full border border-blue-500 shadow-none hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 text-xs md:text-sm tracking-wider transition-all"
                onClick={() => setSelected(product)}
              >
                상세보기
              </button>
            </div>
          ))}
      </div>
      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.name + ' 상세정보'}>
        {selected && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CubeTransparentIcon className="w-6 h-6 text-blue-600" />
              <span className="font-bold text-lg text-navy">{selected.name}</span>
            </div>
            <div className="text-gray-700 text-base mb-1">{selected.desc}</div>
            <div className="text-xs text-gray-500 mb-2">
              카테고리: {categories.find(c => c.id === selected.category)?.name}
            </div>
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="제품 이미지" className="w-full rounded-lg mb-2" />
            <button className="inline-flex items-center gap-3 bg-blue-600 text-white font-medium px-4 py-2 rounded-full border border-blue-100 hover:bg-blue-700 transition-all shadow-sm" onClick={() => window.location.href='/inquiry'}>
              문의하기
            </button>
            <ul className="text-sm text-gray-600 list-disc list-inside mb-2">
              <li>고효율, 내구성 강화</li>
              <li>글로벌 인증 획득</li>
              <li>다양한 산업 현장 적용</li>
              <li>최신 기술 적용, 맞춤형 설계 지원</li>
              <li>안전 기준 준수 및 친환경 설계</li>
            </ul>
            <div className="text-xs text-gray-400">* 실제 제품 사양 및 적용 사례는 문의 시 상세 안내</div>
          </div>
        )}
      </Modal>
  {/* Section Divider Bottom */}
      <div className="w-full max-w-2xl mx-auto border-t border-gray-100 mb-8" />
  {/* Footer는 App.tsx에서 렌더링되므로 중복 제거 */}
    </main>
  );
}