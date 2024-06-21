/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { useState } from 'react';

import Banner from './components/banner';
import Explanation from './components/explanation';
import Form from './components/form';

export default function Home(this: any) {

  const [isActive, setIsActive] = useState(false);

  let japaneseButtonClass = "";
  let englishButtonClass = "";

  if (isActive) {
    englishButtonClass = "hidden";
    japaneseButtonClass = "";
  } else {
    englishButtonClass = "";
    japaneseButtonClass = "hidden";
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Banner />

      <div className="under-banner flex mx-5 justify-end">
        <div className="language-buttons mt-3 mr-5 md:mr-10 flex justify-end">
          <span className={japaneseButtonClass}>
            <button
              type="button"
              onClick={() => setIsActive(false)}
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              🇯🇵 日本語
            </button>
          </span>

          <span className={englishButtonClass}>
            <button
              type="button"
              onClick={() => setIsActive(true)}
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              🇬🇧/🇺🇸 English
            </button>
          </span>
        </div>
      </div>

      <Explanation />

      <Form />
    </main >
  );
}
