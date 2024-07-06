/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import Banner from './components/banner';
import LanguageButtons from './components/language-buttons';
import Explanation from './components/explanation';
import Form from './components/form';
import ScrollTopButton from './components/scroll-top-button';
import Footer from './components/footer';

export default function Home() {

  const [isJapanese, setIsJapanese] = useState(true);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="page-width flex flex-col items-center">
        <Banner />

        <LanguageButtons
          setLanguage={isJapanese}
          onChange={() => setIsJapanese(!isJapanese)}
        />

        <Explanation
          setLanguage={isJapanese}
        />

        <Form
          setLanguage={isJapanese}
        />

        <ScrollTopButton />
      </div>
      <Footer />
    </main>
  );
}
