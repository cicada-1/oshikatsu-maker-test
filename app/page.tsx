/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { useState } from 'react';

import Banner from './components/banner';
import Explanation from './components/explanation';
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
          <Explanation
            setLanguage={isJapanese}
            title='私の「推し勝★」ジェネレーター'
            body1={`自分の「推し勝★」を創ってみましょう！\n\n私の「推し勝★」ジェネレーターに：\n\n-「推し勝★」\n- 創る未来\n- ペンネーム\n- 年齢\n- 写真\n\nを入力して、キャンペーンのポスターのように自分のができます！`}
            imageNote='ポスターの例'
            body2={`このように完成すると、保存できますので、完成したポスターか、「保存する」のボタンをクリックしてください！\nポスターを保存してから、「#私の推し勝」「#勝山しか勝たん山」のハッシュタグでSNSに投稿しましょう！\nでは、私の「推し勝★」ジェネレーターで楽しみましょう！`}
          />
        </span>
      ) : (
        <span>
          <Explanation
            setLanguage={isJapanese}
            title='My "Oshi-Katsu" Generator!'
            body1={`Create your own "Oshi-Katsu" poster!\n\nPlease enter your:\n\n- "Oshi-Katsu"\n- belief for the future\n- nickname\n- age\n- picture\n\nto the generator and you can make your own poster, just like those of the official campaign!`}
            imageNote='Example poster'
            body2={`Once your poster has been generated, click on the generated poster or the "download" button below to download your poster.\nIf you upload your poster to social media, remember to use the hashtags #私の推し勝, #勝山しか勝たん山. Or in English #MyOshiKatsu, #KatsuyamaShikaKatanYama.\nHave fun with the My "Oshi-Katsu" Generator!`}
          />
        </span>
      )}

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
