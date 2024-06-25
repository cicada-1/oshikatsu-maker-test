/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { useState } from 'react';

import Banner from './components/banner';
import JapaneseExplanation from './components/japanese-explanation';
import EnglishExplanation from './components/english-explanation';
import JapaneseForm from './components/japanese-form';
import EnglishForm from './components/english-form';
import LanguageButtons from './components/language-buttons';

export default function Home() {

  const [activeIndex, setActiveIndex] = useState(true);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Banner />

      <LanguageButtons
        setLanguage={activeIndex}
        onChange={() => setActiveIndex(!activeIndex)}
      />

      {/* <span className={japaneseActive}>
        <JapaneseExplanation />
      </span>
      <span className={englishActive}>
        <EnglishExplanation />
      </span>

      <span className={japaneseActive}>
        <JapaneseForm />
      </span>
      <span className={englishActive}>
        <EnglishForm />
      </span> */}
    </main >
  );
}
