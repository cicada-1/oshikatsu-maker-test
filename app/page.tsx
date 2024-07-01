/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { useState } from 'react';
import Banner from './components/banner';
import LanguageButtons from './components/language-buttons';
import Explanation from './components/explanation';
import Form from './components/form';

export default function Home() {

  const [isJapanese, setIsJapanese] = useState(true);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Banner />

      <LanguageButtons
        setLanguage={isJapanese}
        onChange={() => setIsJapanese(!isJapanese)}
      />

      <Explanation />

      <Form />
    </main>
  );
}
