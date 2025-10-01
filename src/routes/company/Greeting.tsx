export default function Greeting() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-12 font-pretendard">
      <div className="w-full max-w-2xl bg-white bg-opacity-80 rounded-3xl shadow-xl p-10">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-8 text-center tracking-tight font-pretendard">인사말</h1>
        <div className="w-full max-w-lg mb-8 flex gap-4 items-center justify-center mx-auto">
          {[6,7,8,9].map(num => (
            <img
              key={num}
              src={`/images/donghae-0${num}.jpg`}
              alt={`오토바이 이미지${num}`}
              className="rounded-xl shadow-lg w-1/4 h-40 object-cover"
            />
          ))}
        </div>
        <div className="text-xl text-gray-800 mb-8 text-left font-normal font-pretendard leading-relaxed">
          <p className="mb-4">무한한 열정과 안전중심의 동해기계, 글로벌 성장을 이루어 나가겠습니다.</p>
          <p className="mb-4">우리만의 노하우와 철저한 품질 관리로 고객 제일 지향주의를 실천하는 글로벌 스탠다드를 만듭니다.</p>
          <p className="mb-4">동해기계는 중장비·플랜트·산업설비의 설계, 제작, 시공을 전문으로 하며, 고객의 성공을 위해 끊임없이 혁신하고 있습니다.</p>
          <p className="mb-4">앞으로도 안전과 품질을 최우선으로, 세계 시장에서 인정받는 기업이 되겠습니다.</p>
          <div className="border-t border-blue-100 pt-4 mt-4">
            <p>동해기계주식회사 대표이사 장 경 수</p>
          </div>
        </div>
      </div>
    </section>
  );
}
