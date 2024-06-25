/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { useState } from 'react';
import posterExample from './assets/images/poster-example.jpg';

import Banner from './components/banner';
import JapaneseExplanation from './components/japanese-explanation';
import EnglishExplanation from './components/english-explanation';
import Form from './components/form';
import LanguageButtons from './components/language-buttons';

export default function Home() {

  const [isJapanese, setIsJapanese] = useState(true);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Banner />

      <LanguageButtons
        setLanguage={isJapanese}
        onChange={() => setIsJapanese(!isJapanese)}
      />

      {isJapanese ? (
        <span>
          <JapaneseExplanation
            poster={posterExample}
          />
        </span>
      ) : (
        <span>
          <EnglishExplanation
            poster={posterExample}
          />
        </span>
      )}

      {/* English : {
      oshikatsuQuestion: 'What is your "Oshi-Katsu"?',
      oshikatsuNote: '※ Please enter up to 13 characters',
      oshikatsuMaxLength: 13,
      oshikatsuPlaceholder: 'Mountains',
      miraiQuestion: 'What is your belief for the future?',
      miraiNote: '※ Please enter up to 50 characters',
      miraiMaxLength: 54,
      miraiPlaceholder: `It's as if the surrounding mountains protect the city!`,
      pennameQuestion: 'What is your nickname? (Optional)',
      pennameNote: '※ Please enter up to 15 characters',
      pennameMaxLength: 15,
      pennamePlaceholder: 'Katsuyama Taro',
      ageQuestion: 'How old are you? (Optional)',
      ageMax: 120,
      ageMin: 0,
      agePlaceholder: '70',
      imageQuestion: 'Please select an image',
      imageNote: '※ The template only has space for landscape images, so any portrait images will be cropped to fit',
    },
  }; */}

      {isJapanese ? (
        <span>
          <Form
            setLanguage={isJapanese}
            oshikatsuQuestion='あなたの「推し勝★」を教えてください！'
            oshikatsuNote='※7字まで入力できます。'
            oshikatsuMaxLength={7}
            oshikatsuPlaceholder='山'
            miraiQuestion='「推し勝★」でどんな未来を創る？'
            miraiNote='※36字まで入力できます。'
            miraiMaxLength={36}
            miraiPlaceholder='勝山が山に囲まれて、守ってくれてるような感じです。登るのも楽しいです！'
            pennameQuestion='あなたのペンネームは何ですか？（任意）'
            pennameNote='※15字まで入力できます。'
            pennamePlaceholder='勝山たろう'
            ageQuestion='おいくつですか？（任意）'
            imageQuestion='写真をアップしてください。'
            imageNote='※テンプレートの写真スペースは横になっているので、縦の写真をアップする場合、全部が表示されない可能性があります。'
            submitButtonText='「推し勝★」を創る！'
          />
        </span>
      ) : (
        <span>
          <Form
            setLanguage={isJapanese}
            oshikatsuQuestion='What is your "Oshi-Katsu"?'
            oshikatsuNote='※ Please enter up to 13 characters'
            oshikatsuMaxLength={13}
            oshikatsuPlaceholder='Mountains'
            miraiQuestion='What is your belief for the future?'
            miraiNote='※ Please enter up to 54 characters'
            miraiMaxLength={54}
            miraiPlaceholder="It's as if the surrounding mountains protect the city!"
            pennameQuestion='What is your nickname? (Optional)'
            pennameNote='※ Please enter up to 15 characters'
            pennamePlaceholder='Taro Katsuyama'
            ageQuestion='How old are you? (Optional)'
            imageQuestion='Please select an image'
            imageNote='※ The template only has space for landscape images, so any portrait images will be cropped to fit'
            submitButtonText='Generate My "Oshi-Katsu"!'
          />
        </span>
      )}

      {/* {isJapanese ? (
        <span>
          <JapaneseForm />
        </span>
      ) : (
        <span>
          <EnglishForm />
        </span>
      )} */}
    </main>
  );
}
