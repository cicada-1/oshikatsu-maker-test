import React from 'react';
import Image from 'next/image';
import posterExampleJp from '../assets/images/poster-example-jp.jpg';
import posterExampleEn from '../assets/images/poster-example-en.jpg';

export default function Explanation(props: any) {
  const explanationText = {
    Japanese: {
      title: '私の「推し勝★」メーカー',
      body1: `自分の「推し勝★」を創ってみましょう！\n\n私の「推し勝★」メーカーに：\n\n-「推し勝★」\n- 創る未来\n- ペンネーム\n- 年齢\n- 写真\n\nを入力して、自分の「推し勝★」ポスターが創れます！`,
      imageNote: 'ポスターの例',
      body2: `このように完成すると、保存できますので、完成したポスターか、「保存する」のボタンをクリックしてください！*\nポスターを保存してから、「#私の推し勝」「#勝山しか勝たん山」のハッシュタグでSNSに投稿しましょう！\nでは、私の「推し勝★」メーカーで楽しみましょう！\n\n`,
      note: `*iPhoneで保存機能が動きませんので、iPhoneの方がスクリーンショットを撮ってください。\n"音量を減らす"ボタンと"画面をロックする"ボタンを同時に押すと、スクリーンショットが撮れます。ご迷惑をかけして申し訳ありません。`,
    },
    English: {
      title: 'My "Oshi-Katsu" Generator!',
      body1: `Create your own "Oshi-Katsu" poster!\n\nPlease enter your:\n\n- "Oshi-Katsu"\n- belief for the future\n- nickname\n- age\n- picture\n\nto the generator and you can make your own poster, just like those of the official campaign!`,
      imageNote: 'Example poster',
      body2: `Once your poster has been generated, click on the generated poster or the "Download" button below to download your poster.\nIf you upload your poster to social media, remember to use the hashtags #私の推し勝, #勝山しか勝たん山. Or in English #MyOshiKatsu, #KatsuyamaShikaKatanYama.\nHave fun with the My "Oshi-Katsu" Generator!`,
      note: `\n*The download function is not compatible with iPhone, so if you are using an iPhone please take a screenshot instead.\nYou can take a screenshot by pressing the "volume down" button and the "lock" button at the same time. Sorry for any inconvenience.`,
    },
  };

  let explanation = props.setLanguage ? explanationText.Japanese : explanationText.English;

  return (
    <div className="heading m-5 mt-1 flex flex-col items-center">
      <h1 className="page-title mb-5 font-bold leading-7 text-gray-900">{explanation.title}</h1>
      <p className="explanation">
        {explanation.body1}
      </p>
      <div className="my-5 flex flex-col items-center">
        <Image
          className="poster-example"
          width={300}
          height={243}
          alt="not found"
          src={props.setLanguage ? posterExampleJp.src : posterExampleEn.src}
        />
        <p className="image-note"><em>{explanation.imageNote}</em></p>
      </div>
      <p className="explanation">
        {explanation.body2}
      </p>
      <p className="explanation-note">
        {explanation.note}
      </p>
    </div>
  );
}
