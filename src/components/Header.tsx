import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';
import DarkModeToggle from './DarkModeToggle';

const nav = [
  {
    to: 'company',
    label: '회사소개',
    submenu: [
      { to: 'company/greeting', label: '인사말' },
      { to: 'company/greeting', label: '회사개요' },
      { to: 'company/org', label: '조직도' },
      { to: 'company/location', label: '오시는길' },
    ],
  },
  {
    to: 'factory',
    label: '사업장소개',
    submenu: [
      { to: 'factory/plant1', label: '1공장' },
      { to: 'factory/plant2', label: '2공장' },
      { to: 'factory/plant3', label: '3공장' },
      { to: 'factory/plant4', label: '4공장' },
    ],
  },
  {
    to: 'business',
    label: '사업소개',
    submenu: [
      { to: 'business/heavy', label: '중장비 사업' },
      { to: 'business/plant', label: '플랜트 사업' },
      { to: 'business/equipment', label: '생산설비' },
      { to: 'business/measure', label: '측정설비' },
    ],
  },
  {
    to: 'rnd',
    label: '기술연구소',
    submenu: [
      { to: 'rnd/lab', label: '연구개발' },
      { to: 'rnd/overview', label: '혁신기술' },
    ],
  },
  {
    to: 'pr',
    label: '홍보센터',
    submenu: [
  { to: 'pr', label: '회사뉴스' },
      { to: 'pr/catalog', label: '카탈로그' },
      { to: 'pr/video', label: '홍보영상' },
      { to: 'pr/notice', label: '공지사항' },
    ],
  },
  {
    to: 'cs',
    label: '고객센터',
    submenu: [
  { to: 'cs', label: '문의사항' },
    ],
  },
];

// 모바일 메뉴 아이템 컴포넌트 (파일 최상단에서 선언)
import type { Dispatch, SetStateAction } from 'react';

interface NavItem {
  to: string;
  label: string;
  submenu?: { to: string; label: string }[];
}

function MobileMenuItem({ item, locale, setOpen }: { item: NavItem; locale: string; setOpen: Dispatch<SetStateAction<boolean>> }) {
  const [showSub, setShowSub] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = location.pathname.split("/")[2] === item.to;
  // 상위 메뉴 클릭 시 항상 overview(상위)로 이동
  const handleMenuClick = () => {
    navigate(`/${locale}/${item.to}`);
    setOpen(false);
  };
  return (
    <div className="w-full">
      <div className="flex items-center">
        <button
          className={`w-full text-left px-4 py-3 font-extrabold tracking-wide text-lg rounded-lg flex justify-between items-center transition
            ${isActive ? 'text-blue-400 bg-blue-50' : 'text-gray-500'}
            focus:outline-none focus:ring-2 focus:ring-blue-400`}
          onClick={handleMenuClick}
          aria-expanded={showSub}
          aria-controls={`submenu-${item.to}`}
        >
          <span>{item.label}</span>
        </button>
        {item.submenu && (
          <button
            className={`ml-2 transition-transform ${showSub ? 'rotate-90' : ''}`}
            aria-label="하위메뉴 펼치기"
            onClick={e => { e.stopPropagation(); setShowSub(s => !s); }}
          >▶</button>
        )}
      </div>
      {/* 하위메뉴는 모바일에서만 펼침, 상위 메뉴 클릭 시에는 항상 overview로 이동 */}
    </div>
  );
}

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

  return (
    <header
      className="w-full bg-white/95 border-b border-blue-100 text-navy flex items-center justify-between px-4 md:px-12 py-4 sticky top-0 z-50 backdrop-blur-md shadow-sm"
      role="banner"
    >
      <Link to={`/${locale}/home`} className="font-extrabold text-2xl sm:text-3xl tracking-tight text-blue-900 drop-shadow-sm font-pretendard" aria-label="동해기계 홈">
        동해기계
      </Link>
      {/* 데스크탑 네비게이션 */}
      <nav className="hidden md:flex gap-10 items-center" aria-label="메인 메뉴">
        {nav.map(item => {
          const isActive = location.pathname.split("/")[2] === item.to;
          return (
            <div key={item.to} className="relative group">
              <Link
                to={`/${locale}/${item.to}`}
                className={`relative px-5 py-2 font-semibold text-lg rounded-xl transition-all duration-200 font-pretendard
                  ${isActive ? 'text-blue-800 bg-blue-50 shadow-md' : 'text-gray-600 hover:text-blue-700 hover:bg-blue-50'}
                  group focus:outline-none focus:ring-2 focus:ring-blue-400`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-7 h-1 bg-blue-700 rounded-full" aria-hidden="true"></span>
                )}
              </Link>
            </div>
          );
        })}
      </nav>
      {/* 모바일 햄버거 */}
      <button className="md:hidden p-2 bg-white/80 rounded-lg ml-2 flex flex-col items-center justify-center gap-1 transition-all duration-200 hover:bg-blue-50" aria-label="메뉴 열기" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(o => !o)}>
        <span className={`block w-7 h-1 rounded-full transition-all duration-200 ${open ? 'bg-blue-700 rotate-45 translate-y-2' : 'bg-navy'}`}></span>
        <span className={`block w-7 h-1 rounded-full transition-all duration-200 ${open ? 'opacity-0' : 'bg-navy'}`}></span>
        <span className={`block w-7 h-1 rounded-full transition-all duration-200 ${open ? 'bg-blue-700 -rotate-45 -translate-y-2' : 'bg-navy'}`}></span>
      </button>
      {/* 모바일 메뉴 */}
      {open && (
        <div ref={menuRef} className="fixed inset-0 z-50 flex flex-col">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setOpen(false)} aria-hidden="true"></div>
          <nav id="mobile-menu" className="relative w-full bg-white/95 border-t border-gray-100 flex flex-col gap-2 py-4 md:hidden backdrop-blur-md animate-fade-in-down" aria-label="모바일 메뉴">
            {nav.map(item => (
              <MobileMenuItem key={item.to} item={item} locale={locale} setOpen={setOpen} />
            ))}
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