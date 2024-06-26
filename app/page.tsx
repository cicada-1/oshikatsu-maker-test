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

      <Form
        setLanguage={isJapanese}
      />
    </main>
  );
}
