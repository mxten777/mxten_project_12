import HeroSection from '../components/HeroSection';
// ...existing code...
import { Helmet } from 'react-helmet-async';

export default function Company() {
  const history = [
    { year: '1995', event: '동해기계 설립 및 사업 개시' },
    { year: '2002', event: 'ISO 9001 품질경영 인증 획득' },
    { year: '2005', event: '해외 수출 시작 및 글로벌 네트워크 구축' },
    { year: '2010', event: '신공장 준공 및 생산설비 확장' },
    { year: '2015', event: '플랜트·중장비 사업 확대' },
    { year: '2020', event: 'ISO 14001/45001 환경·안전 인증 획득' },
    { year: '2025', event: '글로벌 30개국 진출' },
  ];
  const network = [
    { region: '서울', desc: '본사' },
    { region: '부산', desc: '남부지사' },
    { region: '상하이', desc: '중국법인' },
    { region: 'LA', desc: '미국지사' },
  ];
  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-gray-50 dark:bg-gray-900 px-0 py-0 font-sans font-pretendard relative overflow-x-hidden" role="main">
      <Helmet>
        <title>동해기계 | 회사소개</title>
        <meta name="description" content="동해기계 회사소개, 비전, 연혁, 위치 등 기업 정보 안내." />
      </Helmet>
      {/* HeroSection 컴포넌트 사용 */}
      <HeroSection
        title="글로벌 성장과 품질의 동해기계"
        subtitle={"무역의 탑 · 수출유공자 · 글로벌 품질 인증\n고객 신뢰와 혁신의 리더"}
        images={["/images/donghae-06.jpg", "/images/donghae-07.jpg", "/images/donghae-08.jpg"]}
        imageAlt="회사 이미지"
        imageClass="rounded-xl shadow-lg w-1/5 h-32 object-cover"
        buttons={[
          { label: "문의하기", href: "/ko/inquiry", style: "bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-full shadow-2xl text-base md:text-lg w-full sm:w-auto text-center transition" },
          { label: "회사 자료 다운로드", href: "/downloads", style: "bg-white bg-opacity-30 hover:bg-opacity-50 dark:bg-gray-700 dark:bg-opacity-40 dark:hover:bg-opacity-60 text-blue-900 dark:text-blue-200 font-bold py-2 px-6 rounded-full border border-white dark:border-gray-300 text-base md:text-lg w-full sm:w-auto text-center transition" }
        ]}
      />
          <div className="mb-8">
            <span className="inline-block bg-gray-100 dark:bg-gray-700 text-blue-500 dark:text-blue-200 font-medium px-4 py-1 rounded-full text-xs md:text-sm">
              비전: 글로벌 성장 · 안전 중심 · 혁신
            </span>
          </div>
    {/* 필요 없는 이미지, 버튼, 구분선 제거됨 */}
      <section className="w-full mb-24">
        <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-900/80 rounded-2xl shadow-xl p-8 md:p-10 mb-12">
          <h2 className="text-base md:text-lg font-bold mb-8 text-blue-700 dark:text-blue-200 text-center">회사 연혁</h2>
          <div className="relative mb-12">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-100 dark:bg-blue-900" />
            <ul className="flex flex-col gap-8 pl-8">
              {history.map((h) => (
                <li key={h.year} className="relative flex items-center">
                  <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-blue-500 dark:bg-blue-300 border-2 border-white dark:border-gray-900 shadow" />
                  <span className="font-bold text-base md:text-lg text-blue-700 dark:text-blue-200 w-20 text-right mr-4">{h.year}</span>
                  <span className="text-base md:text-lg text-gray-700 dark:text-gray-200 font-normal leading-relaxed">{h.event}</span>
                </li>
              ))}
            </ul>
          </div>
          <h3 className="text-base md:text-lg font-bold mb-8 text-blue-700 dark:text-blue-200 text-center">글로벌 네트워크</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10">
            {network.map(n => (
              <div key={n.region} className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 md:p-5 text-blue-900 dark:text-blue-100 border border-blue-100 dark:border-blue-900 flex flex-col justify-between mb-2 shadow-sm">
                <span className="font-semibold text-base md:text-lg">{n.region}</span>
                <span className="text-sm md:text-base text-blue-700 dark:text-blue-200">{n.desc}</span>
                <span className="text-xs text-gray-400 dark:text-gray-500 mt-1">{n.region === '서울' ? '본사' : n.region === '부산' ? '남부지사' : n.region === '상하이' ? '중국법인' : '미국지사'}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full border-t border-blue-100 dark:border-blue-900 mb-8" />
        <div className="w-full text-center py-6">
          <span className="inline-block text-lg md:text-xl font-semibold text-blue-900 dark:text-blue-100 bg-blue-50 dark:bg-blue-900/30 px-6 py-3 rounded-xl shadow-sm tracking-wide">
            동해기계는 고객 신뢰와 혁신을 바탕으로 글로벌 성장을 이어갑니다.
          </span>
        </div>
      </section>
      {/* Section Divider Bottom */}
      <div className="w-full border-t border-blue-100 dark:border-blue-900 mb-8" />
  {/* Footer는 App.tsx에서 렌더링되므로 중복 제거 */}
    </main>
  );
}