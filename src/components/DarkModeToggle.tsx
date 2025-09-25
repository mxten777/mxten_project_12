import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // 시스템 다크모드 감지
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  return (
    <button
      onClick={() => setIsDark(d => !d)}
      className="ml-2 p-2 rounded-full bg-gray-100 dark:bg-navy text-navy dark:text-yellow-300 shadow hover:bg-gray-200 dark:hover:bg-blue-900 transition"
      aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
      title={isDark ? '라이트 모드' : '다크 모드'}
      type="button"
    >
      {isDark ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M4.219 4.219l1.061 1.061M17.657 17.657l1.061 1.061M3 12h1.5M19.5 12H21M4.219 19.781l1.061-1.061M17.657 6.343l1.061-1.061M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0112 21.75c-5.385 0-9.75-4.365-9.75-9.75 0-4.006 2.349-7.464 5.748-9.002a.75.75 0 01.75.75v.457c0 2.32 1.664 4.376 3.94 4.876a5.25 5.25 0 004.242-1.13.75.75 0 01.976.073l.323.323a.75.75 0 01.073.976 9.713 9.713 0 01-1.13 4.242c-.5 2.276-2.556 3.94-4.876 3.94h-.457a.75.75 0 01-.75-.75c0-3.399 3.458-5.748 7.002-5.748a.75.75 0 01.75.75v.457z" />
        </svg>
      )}
    </button>
  );
}
