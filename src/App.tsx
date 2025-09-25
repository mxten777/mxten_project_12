import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './i18n';
import './index.css';
import Home from './routes/Home';
import Products from './routes/Products';
import PR from './routes/PR';
import Inquiry from './routes/Inquiry';
import Company from './routes/Company';
import Policy from './routes/Policy';
import Admin from './routes/Admin';
import Header from './components/Header';
import Footer from './components/Footer';

function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-20 text-center">
      <h1 className="text-6xl font-bold text-blue-900 mb-6">404</h1>
      <p className="text-xl text-gray-700 mb-8">페이지를 찾을 수 없습니다.</p>
      <a href="/ko/home" className="inline-block bg-blue text-white font-bold py-2 px-6 rounded hover:bg-navy transition-all focus:outline-none focus:ring-2 focus:ring-blue-400">홈으로 이동</a>
    </main>
  );
}

function LocaleRoutes() {
  const { locale } = useParams();
  const { i18n } = useTranslation();
  if (locale && i18n.language !== locale) i18n.changeLanguage(locale);
  return (
    <>
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="pr" element={<PR />} />
          <Route path="inquiry" element={<Inquiry />} />
          <Route path="company" element={<Company />} />
          <Route path="policy" element={<Policy />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>동해기계 Donghae Machinery</title>
        <meta name="description" content="동해기계 공식 홈페이지. 산업 혁신을 이끄는 신뢰와 기술의 기업." />
        <meta name="keywords" content="동해기계, Donghae, 산업기계, 제조, 기계, 산업, machinery, manufacturing" />
        <meta property="og:title" content="동해기계 Donghae Machinery" />
        <meta property="og:description" content="동해기계 공식 홈페이지. 산업 혁신을 이끄는 신뢰와 기술의 기업." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="동해기계" />
        <meta property="og:locale" content="ko_KR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-mint-400/10 to-purple-400/10 dark:from-[#101624] dark:via-[#1B2A3A] dark:to-[#101624] transition-colors duration-500">
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
            <Routes>
              <Route path=":locale/*" element={<LocaleRoutes />} />
              <Route path="*" element={<Navigate to="/ko/home" replace />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </div>
    </HelmetProvider>
  );
}
