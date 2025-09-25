// ...existing code...
import { CubeTransparentIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';

export default function Products() {
  // 샘플 카테고리/제품 데이터
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
    <main className="min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-50 to-mint-400/10 px-4 md:px-8 py-16 md:py-28 font-sans" role="main">
      <div className="w-full max-w-4xl">
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
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-navy leading-tight flex items-center gap-2">
          <CubeTransparentIcon className="w-7 h-7 text-blue-400" aria-hidden="true" />
          제품 카테고리
        </h2>
        <div className="flex flex-wrap gap-3 md:gap-5 mb-10 justify-center">
          {categories.map(cat => (
            <button
              key={cat.id}
              className="px-5 py-2 rounded-full bg-blue-400 text-white font-semibold transition-all duration-200 hover:bg-blue-500 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm tracking-wide text-base"
              aria-label={cat.name}
            >
              {cat.name}
            </button>
          ))}
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-navy leading-tight">대표 제품군</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 md:gap-10">
          {products.map(prod => (
            <div
              key={prod.id}
              className="bg-white rounded-2xl shadow-sm p-6 text-gray-900 transition-all duration-200 hover:shadow-md hover:-translate-y-1 hover:scale-105 focus-within:shadow-md focus-within:-translate-y-1 focus-within:scale-105 cursor-pointer border border-gray-100 flex flex-col justify-between"
              tabIndex={0}
              aria-label={prod.name}
            >
              <div className="font-bold text-lg md:text-xl mb-2 text-navy flex items-center gap-2">
                <CubeTransparentIcon className="w-5 h-5 text-blue-400" aria-hidden="true" />
                {prod.name}
              </div>
              <div className="text-sm md:text-base mb-1 text-gray-600">{prod.desc}</div>
              <div className="text-xs text-gray-400 mb-2">카테고리: {categories.find(c => c.id === prod.category)?.name}</div>
              {/* 스펙/적용 예시 */}
              <ul className="text-xs text-gray-500 mb-2 list-disc list-inside">
                <li>고효율, 내구성 강화</li>
                <li>글로벌 인증 획득</li>
                <li>다양한 산업 현장 적용</li>
              </ul>
              <button className="mt-2 bg-mint-400 text-navy font-bold py-2 px-4 rounded-full transition-all duration-200 hover:bg-mint-500 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-mint-400 shadow-sm text-base tracking-wide">
                상세보기
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}