import { useState } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
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
    <main className="min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-50 to-mint-400/10 px-4 md:px-8 py-16 md:py-28 font-sans" role="main">
      {/* 브랜드 슬로건 반복 노출 */}
      <div className="mb-8 text-center">
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
      <form
  className="w-full max-w-lg bg-gradient-glass rounded-2xl shadow-md p-8 md:p-14 flex flex-col gap-6 backdrop-blur-md border border-gray-100"
        onSubmit={e => {e.preventDefault(); handleSubmit(e); if (!Object.values(error).some(Boolean) && !loading) setModalOpen(true);}}
        aria-label="문의 폼"
        autoComplete="on"
      >
        <div className="flex items-center gap-2 mb-2">
          <EnvelopeIcon className="w-6 h-6 text-blue-400" aria-hidden="true" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy leading-tight">문의하기</h2>
        </div>
        <label htmlFor="name" className="font-semibold text-navy mb-1">이름</label>
        <input
          id="name"
          name="name"
          type="text"
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 hover:border-blue-400 hover:shadow-sm placeholder-gray-400"
          value={form.name}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!error.name}
          aria-describedby={error.name ? 'name-error' : undefined}
          placeholder="이름을 입력하세요"
        />
        {error.name && <span id="name-error" className="text-red-500 text-sm">{error.name}</span>}
        <label htmlFor="email" className="font-semibold text-navy mb-1">이메일</label>
        <input
          id="email"
          name="email"
          type="email"
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 hover:border-blue-400 hover:shadow-sm placeholder-gray-400"
          value={form.email}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!error.email}
          aria-describedby={error.email ? 'email-error' : undefined}
          placeholder="예: user@email.com"
        />
        {error.email && <span id="email-error" className="text-red-500 text-sm">{error.email}</span>}
        <label htmlFor="message" className="font-semibold text-navy mb-1">문의 내용</label>
        <textarea
          id="message"
          name="message"
          className="border rounded px-3 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 hover:border-blue-400 hover:shadow-sm placeholder-gray-400"
          value={form.message}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!error.message}
          aria-describedby={error.message ? 'message-error' : undefined}
          placeholder="문의하실 내용을 입력해 주세요"
        />
        {error.message && <span id="message-error" className="text-red-500 text-sm">{error.message}</span>}
        {/* 개인정보 동의 체크박스 */}
        <label className="flex items-center gap-2 mt-2 text-sm text-gray-700">
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
        {error.global && <span className="text-red-500 text-sm mt-1">{error.global}</span>}
        <button
          type="submit"
          className="mt-4 bg-blue-400 text-white font-bold py-2 px-4 rounded-full transition-all duration-200 hover:bg-blue-500 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm text-lg tracking-wide"
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? '전송 중...' : '문의하기'}
        </button>
      </form>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="문의 완료">
        <div className="text-blue-400 text-lg font-bold mb-2 flex items-center gap-2">
          <span>✔</span> 문의가 정상적으로 접수되었습니다.
        </div>
        <div className="text-gray-600 mb-4">빠른 답변을 위해 입력하신 이메일로 연락드리겠습니다.<br />감사합니다!</div>
        <button onClick={() => setModalOpen(false)} className="bg-blue-400 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-500 transition-all">닫기</button>
      </Modal>
    </main>
  );
}