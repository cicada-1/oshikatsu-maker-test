/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Banner from './components/banner';
import LanguageButtons from './components/language-buttons';
import Explanation from './components/explanation';
import Form from './components/form';

export default function Home() {

  const [isJapanese, setIsJapanese] = useState(true);

  function scrollToTop() {
    window.location.replace("/#banner")
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
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

      <button
        className="scroll-top-button flex self-end mb-2"
        onClick={scrollToTop}
        >
        <img
          id="scroll-top-image"
          className="scroll-top-image"
          width={50}
          height={50}
          alt="not found"
          src="https://cdn-icons-png.flaticon.com/512/6051/6051376.png"
        />
      </button>
    </main>
  );
}
