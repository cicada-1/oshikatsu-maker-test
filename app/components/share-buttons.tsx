/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FacebookShareButton, TwitterShareButton, LineShareButton, FacebookIcon, XIcon, LineIcon } from 'react-share';

export default function ShareButtons(props: any) {

  const outputTextLanguages = {
    Japanese: {
      shareInfo: `「推し勝★」メーカーをみんなにシェアしましょう！`,
      title: '私の「推し勝★」メーカーで私の「推し勝★」ポスターを創りましょう！',
    },
    English: {
      shareInfo: 'Share "My Oshi-Katsu Generator" on social media:',
      title: 'Make your "Oshi-Katsu" poster with the "Oshi-Katsu" Generator!',
    },
  };

  let outputText = props.setLanguage ? outputTextLanguages.Japanese : outputTextLanguages.English;

  const shareUrl = "https://oshikatsu-maker-test.onrender.com"

  return (
    <div className="share-buttons flex mb-10 space-x-2 p-5 justify-center">
      <p className="share-info">
        {outputText.shareInfo}
      </p>
      <FacebookShareButton
        url={shareUrl}
        className=""
      >
        <FacebookIcon size={32} borderRadius={10} />
      </FacebookShareButton>
      <TwitterShareButton
        url={shareUrl}
        title={outputText.title}
        hashtags={["私の推し勝", "勝山しか勝たん山"]}
        className=""
      >
        <XIcon size={32} borderRadius={10} />
      </TwitterShareButton>
      <LineShareButton
        url={shareUrl}
        title={outputText.title}
        className=""
      >
        <LineIcon size={32} borderRadius={10} />
      </LineShareButton>
    </div>
  );
}
