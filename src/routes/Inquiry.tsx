import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../components/Modal';

export default function Inquiry() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', agree: false });
  const [error, setError] = useState({ global: '', name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
    setError({ global: '', name: '', email: '', message: '' });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError({ global: '', name: '', email: '', message: '' });
    if (!form.name || !form.email || !form.message || !form.agree) {
      setError(f => ({ ...f, global: '모든 필수 항목을 입력하고 개인정보 동의에 체크해 주세요.' }));
      return;
    }
    setLoading(true);
    await new Promise(res => setTimeout(res, 1000)); // fake delay
    setLoading(false);
    setForm({ name: '', email: '', company: '', message: '', agree: false });
    setModalOpen(true);
  };
  const { t } = useTranslation();
  return (
  <main className="min-h-screen w-screen max-w-none flex flex-col items-center bg-white dark:bg-gray-900 px-0 py-0 font-sans font-pretendard relative overflow-x-hidden" role="main">
      {/* Section Divider Top */}
      <div className="w-full max-w-2xl mx-auto border-b border-gray-100 mt-0 mb-0" />
      {/* 브랜드 슬로건 */}
      <div className="mb-16 text-left w-full max-w-2xl mx-auto mt-32">
        <span className="block leading-[1.12]">
          <span className="block font-bold text-base md:text-lg text-blue-500 tracking-tight mb-2">
            {t('slogan.growth')}
          </span>
          <span className="block font-bold text-base md:text-lg text-navy tracking-tight mb-2">
            {t('slogan.passion')}
          </span>
          <span className="block font-bold text-base md:text-lg text-gray-400 tracking-tight">
            {t('slogan.safety')}
          </span>
        </span>
      </div>
      {/* Section Divider */}
      <div className="w-full max-w-2xl mx-auto border-t border-gray-100 mb-10" />
      <form
        className="w-full max-w-2xl mx-auto bg-white rounded-xl p-7 md:p-8 flex flex-col gap-8 border border-gray-100 shadow-none mb-24 text-left"
        onSubmit={e => {e.preventDefault(); handleSubmit(e); if (!Object.values(error).some(Boolean) && !loading) setModalOpen(true);}}
        aria-label="문의 폼"
        autoComplete="on"
      >
        <div className="flex items-center gap-2 mb-7">
          {/* 아이콘 제거됨 */}
          <h1 className="text-base md:text-lg font-bold text-navy leading-tight">문의하기</h1>
        </div>
        {/* Section Divider */}
        <div className="w-full border-t border-gray-100 mb-6" />
        <label htmlFor="name" className="font-semibold text-navy mb-1 text-xs md:text-sm">이름</label>
        <input
          id="name"
          name="name"
          type="text"
          className="border border-gray-100 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-sm"
          value={form.name}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!error.name}
          aria-describedby={error.name ? 'name-error' : undefined}
          placeholder="이름을 입력하세요"
        />
        {error.name && <span id="name-error" className="text-red-500 text-xs">{error.name}</span>}
        <label htmlFor="email" className="font-semibold text-navy mb-1 text-xs md:text-sm">이메일</label>
        <input
          id="email"
          name="email"
          type="email"
          className="border border-gray-100 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-sm"
          value={form.email}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!error.email}
          aria-describedby={error.email ? 'email-error' : undefined}
          placeholder="예: user@email.com"
        />
        {error.email && <span id="email-error" className="text-red-500 text-xs">{error.email}</span>}
        <label htmlFor="message" className="font-semibold text-navy mb-1 text-xs md:text-sm">문의 내용</label>
        <textarea
          id="message"
          name="message"
          className="border border-gray-100 rounded px-4 py-3 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-sm"
          value={form.message}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!error.message}
          aria-describedby={error.message ? 'message-error' : undefined}
          placeholder="문의하실 내용을 입력해 주세요"
        />
        {error.message && <span id="message-error" className="text-red-500 text-xs">{error.message}</span>}
        {/* 개인정보 동의 체크박스 */}
        <label className="flex items-center gap-2 mt-2 text-xs text-gray-700">
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
            className="accent-blue-400 w-4 h-4 rounded focus:ring-2 focus:ring-blue-400"
            aria-required="true"
          />
          <span>개인정보 수집 및 이용에 동의합니다.</span>
        </label>
        {error.global && <span className="text-red-500 text-xs mt-1">{error.global}</span>}
        <button
          type="submit"
          className="mt-8 bg-blue-500 text-white font-medium py-3 px-10 rounded-full border border-blue-500 shadow-none hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm tracking-wider transition-all"
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? '전송 중...' : '문의하기'}
        </button>
      </form>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="문의 완료">
        <div className="text-blue-500 text-sm md:text-base font-bold mb-4 flex items-center gap-2">
          <span className="text-base">✔</span> 문의가 정상적으로 접수되었습니다.
        </div>
        <div className="text-gray-700 mb-5 text-xs md:text-sm font-normal leading-relaxed">
          빠른 답변을 위해 입력하신 이메일로 연락드리겠습니다.<br />감사합니다!
        </div>
        <button onClick={() => setModalOpen(false)} className="bg-blue-500 text-white font-medium py-2 px-7 rounded-full border border-blue-500 shadow-none hover:bg-blue-600 text-xs md:text-sm tracking-wider transition-all">닫기</button>
      </Modal>
      {/* Section Divider Bottom */}
      <div className="w-full max-w-2xl mx-auto border-t border-gray-100 mb-8" />
  {/* Footer는 App.tsx에서 렌더링되므로 중복 제거 */}
    </main>
  );
}