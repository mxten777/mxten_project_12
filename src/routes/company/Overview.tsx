
import { useRef } from 'react';

const companySections = [
  {
    name: '회사개요',
    image: '/images/donghae-01.jpg',
    desc: '무한한 열정과 안전중심의 동해기계, 글로벌 성장을 이루어 나가겠습니다.',
    info: [
      <div className="bg-gray-100 rounded px-2 py-1 text-lg text-blue-900 font-semibold leading-relaxed font-pretendard" key="1">
        무한한 열정과 안전중심의 동해기계, 글로벌 성장을 이루어 나가겠습니다.
      </div>,
      <div className="bg-gray-100 rounded px-2 py-1 text-lg text-blue-900 font-semibold leading-relaxed font-pretendard" key="2">
        우리만의 노하우와 철저한 품질 관리로 고객 제일 지향주의를 실천하는 글로벌 스탠다드를 만듭니다.
      </div>,
      <div className="bg-gray-100 rounded px-2 py-1 text-lg text-blue-900 font-semibold leading-relaxed font-pretendard" key="3">
        동해기계는 중장비·플랜트·산업설비의 설계, 제작, 시공을 전문으로 하며, 고객의 성공을 위해 끊임없이 혁신하고 있습니다.
      </div>,
      <div className="bg-gray-100 rounded px-2 py-1 text-lg text-blue-900 font-semibold leading-relaxed font-pretendard" key="4">
        앞으로도 안전과 품질을 최우선으로, 세계 시장에서 인정받는 기업이 되겠습니다.
      </div>,
      <div className="border-t border-blue-200 pt-4 mt-4 text-left font-pretendard" key="5">
        <p className="text-base text-blue-900 font-semibold italic tracking-wide leading-relaxed font-pretendard">
          동해기계주식회사 대표이사 장 경 수
        </p>
      </div>
    ],
  },
  {
    name: '인증서',
    image: '/images/donghae-02.jpg',
    desc: '국내외 주요 인증을 보유하여 품질과 안전을 인정받고 있습니다.',
    info: [
      "ASME 'U'", 'ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018'
    ],
  },
  {
    name: '비전',
    image: '/images/donghae-01.jpg',
    desc: '무한한 열정으로 안전중심의 글로벌 성장을 이어나가겠습니다.',
    info: [
      '글로벌 성장', '안전 중심', '지속가능 경영'
    ],
  },
];

export default function Overview() {
  const sectionRefs = companySections.map(() => useRef<HTMLDivElement>(null));
  const handleScroll = (idx: number) => {
    sectionRefs[idx].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <section className="min-h-[calc(100vh-64px)] bg-white px-2 py-8 font-pretendard">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-8 text-center tracking-tight drop-shadow-lg">회사소개</h1>
      <nav className="flex flex-wrap justify-center gap-4 mb-8">
        {companySections.map((section, idx) => (
          <button
            key={section.name}
            onClick={() => handleScroll(idx)}
            className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded-full border-2 border-blue-800 text-base transition focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
            aria-label={section.name + ' 섹션으로 이동'}
          >
            {section.name}
          </button>
        ))}
      </nav>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {companySections.map((section, idx) => (
          <div
            key={section.name}
            ref={sectionRefs[idx]}
            className="bg-white bg-opacity-95 rounded-3xl shadow-xl p-7 flex flex-col gap-5 hover:scale-[1.025] hover:shadow-2xl transition-all duration-200 border border-blue-100 group"
          >
            <img
              src={section.image}
              alt={section.name + ' 대표 이미지'}
              className="w-full h-40 sm:h-56 object-cover rounded-2xl shadow-md border-2 border-blue-200 mb-2 group-hover:shadow-lg group-hover:border-blue-400 transition-all duration-200"
            />
            <h2 className="text-2xl font-extrabold text-blue-800 mb-1 font-pretendard tracking-tight">{section.name}</h2>
            <p className="text-base text-gray-700 mb-1 font-pretendard leading-relaxed">{section.desc}</p>
            <div className="text-sm text-gray-600 mb-2 font-pretendard">
              {Array.isArray(section.info)
                ? section.info.map((item, idx2) => (
                    <div key={idx2}>{item}</div>
                  ))
                : section.info}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
