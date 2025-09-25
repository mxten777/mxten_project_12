import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';
import DarkModeToggle from './DarkModeToggle';

const nav = [
  { to: 'home', label: 'Home' },
  { to: 'products', label: 'Products' },
  { to: 'pr', label: 'PR Center' },
  { to: 'inquiry', label: 'Inquiry' },
  { to: 'company', label: 'Company' },
  { to: 'policy', label: 'Policy' },
  { to: 'admin', label: 'Admin' },
];

export default function Header() {
  const { locale = 'ko' } = useParams();
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // 모바일 메뉴 바깥 클릭/ESC 닫기
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [open]);

  // ...existing code...

  return (
    <header
  className="w-full bg-white/90 border-b border-gray-100 text-navy flex items-center justify-between px-4 md:px-8 py-5 sticky top-0 z-50 backdrop-blur-md"
      role="banner"
    >
  <Link to={`/${locale}/home`} className="font-extrabold text-2xl tracking-tight text-navy" aria-label="동해기계 홈">동해기계</Link>
      {/* 데스크탑 네비게이션 */}
      <nav className="hidden md:flex gap-7" aria-label="메인 메뉴">
        {nav.map(item => {
          const isActive = location.pathname.split("/")[2] === item.to;
          return (
            <Link
              key={item.to}
              to={`/${locale}/${item.to}`}
              className={`relative px-2 py-1 transition font-semibold tracking-wide text-lg
                ${isActive ? 'text-blue-400' : 'text-gray-500'}
                group focus:outline-none focus:ring-2 focus:ring-blue-400`}
              aria-current={isActive ? 'page' : undefined}
            >
              <span>{item.label}</span>
              {isActive && (
                <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-5 h-1 bg-blue-400 rounded-full" aria-hidden="true"></span>
              )}
            </Link>
          );
        })}
      </nav>
      {/* 모바일 햄버거 */}
  <button className="md:hidden p-2 bg-white/80 rounded-lg ml-2 flex flex-col items-center justify-center gap-1" aria-label="메뉴 열기" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(o => !o)}>
        <span className="block w-7 h-1 bg-navy rounded-full"></span>
        <span className="block w-7 h-1 bg-navy rounded-full"></span>
        <span className="block w-7 h-1 bg-navy rounded-full"></span>
      </button>
      {/* 모바일 메뉴 */}
      {open && (
        <div ref={menuRef} className="fixed inset-0 z-50 flex flex-col">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setOpen(false)} aria-hidden="true"></div>
          <nav id="mobile-menu" className="relative w-full bg-white/95 border-t border-gray-100 flex flex-col gap-2 py-4 md:hidden backdrop-blur-md animate-fade-in-down" aria-label="모바일 메뉴">
            {nav.map(item => {
              const isActive = location.pathname.split("/")[2] === item.to;
              return (
                <Link
                  key={item.to}
                  to={`/${locale}/${item.to}`}
                  className={`relative px-4 py-3 transition font-extrabold tracking-wide text-lg rounded-lg
                    ${isActive ? 'text-blue-400 bg-blue-50' : 'text-gray-500'}
                    group focus:outline-none focus:ring-2 focus:ring-blue-400`}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-5 h-1 bg-blue-400 rounded-full" aria-hidden="true"></span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
  <div className="flex gap-2 ml-4 items-center">
        <button
          onClick={() => {
            if (locale !== 'ko') {
              const newPath = location.pathname.replace(/^\/(ko|en)/, '/ko');
              navigate(newPath + location.search);
              i18n.changeLanguage('ko');
            }
          }}
          className={`px-2 py-1 rounded ${locale === 'ko' ? 'bg-white text-blue-900 font-bold' : ''}`}
          aria-label="한국어"
        >KO</button>
        <span className="mx-1">|</span>
        <button
          onClick={() => {
            if (locale !== 'en') {
              const newPath = location.pathname.replace(/^\/(ko|en)/, '/en');
              navigate(newPath + location.search);
              i18n.changeLanguage('en');
            }
          }}
          className={`px-2 py-1 rounded ${locale === 'en' ? 'bg-white text-blue-900 font-bold' : ''}`}
          aria-label="영어"
        >EN</button>
        <DarkModeToggle />
      </div>
    </header>
  );
}
