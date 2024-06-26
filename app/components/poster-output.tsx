import React from 'react';
import { useRef } from 'react';
import Image from 'next/image';
import * as htmlToImage from 'html-to-image';
import template from '../assets/images/oshikatsu-template.jpg';

export default function PosterOutput(props: any) {
  const outputTextLanguages = {
    Japanese: {
      heading: '写真をクリックすると、ダウンロードが始まります。',
      age: '歳',
      downloadButton: '保存する',
    },
    English: {
      heading: 'Click on the picture or the "Download" button to download your poster',
      age: ' years old',
      downloadButton: 'Download',
    },
  };

  var outputText = props.setLanguage ? outputTextLanguages.Japanese : outputTextLanguages.English;

  const screenshotRef = useRef(props.this);

  function screenshotDownload() {
    htmlToImage.toJpeg(screenshotRef.current, { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'watashi-no-oshikatsu.jpeg';
        link.href = dataUrl;
        link.click();
      });
  };

  return (
    <div className="result mt-2">
      {props.submittedImage && (
        <div id="poster">
          <div id="template" className="template flex flex-col items-center max-w-5xl p-5">
            <h2 id="download-heading" className="download-heading font-bold align-center m-10">
              {outputText.heading}
            </h2>
            <div id="screenshot-div" ref={screenshotRef} className="screenshot-div flex flex-col items-center">
              <Image
                className="template-base"
                id="template-base"
                width={984}
                height={1387}
                alt="not found"
                src={template.src}
              />

              <Image
                className="picture"
                id="picture"
                width={646}
                height={424.5}
                alt="not found"
                src={URL.createObjectURL(props.submittedImage)}
              />

              <p className="poster-oshikatsu" id="poster-oshikatsu">{props.submittedText.oshikatsu}</p>
              <p className="poster-mirai" id="poster-mirai">{props.submittedText.mirai}</p>
              <p className="poster-name-age" id="poster-name-age">{props.submittedText.penname}・{props.submittedText.age}{outputText.age}</p>
              <a id="download-div" className="download-div w-full h-full" onClick={screenshotDownload}></a>
            </div>
            <button
              id="download-button"
              className="download-button rounded-md bg-indigo-600 my-10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={screenshotDownload}
            >
              {outputText.downloadButton}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
