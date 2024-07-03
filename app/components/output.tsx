/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRef } from 'react';
import Image from 'next/image';
import * as htmlToImage from 'html-to-image';
import templateRed from '../assets/images/oshikatsu-template.jpg';
import templateBlue from '../assets/images/oshikatsu-template-2.jpg';
import templateGreen from '../assets/images/oshikatsu-template-3.jpg';
import templateYellow from '../assets/images/oshikatsu-template-4.jpg';
import cornerTag from '../assets/images/watashi-no-oshikatsu-corner-tag.png';

export default function Output(props: any) {

  const outputTextLanguages = {
    Japanese: {
      heading: '写真か「保存する」ボタンをクリックすると、ダウンロードが始まります。',
      age: '歳',
      downloadButton: '保存する',
      newOshikatsuButton: '新規作成',
    },
    English: {
      heading: 'Click on the picture or the "Download" button to download your poster',
      age: ' years old',
      downloadButton: 'Download',
      newOshikatsuButton: 'New "Oshi-Katsu"',
    },
  };

  let outputText = props.setLanguage ? outputTextLanguages.Japanese : outputTextLanguages.English;

  function formScroll() {
    window.location.replace("/#form");
  };

  const clickHandler = (e: any) => {
    e.preventDefault();
    props.setFormData({
      oshikatsu: '',
      mirai: '',
      penname: '',
      age: '',
      image: '',
    });
    props.setSelectedImage(null);
    formScroll();
  };

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
          <div id="poster" className="poster">
            <div id="template" className="template flex flex-col items-center max-w-5xl p-5">
              <h2 id="download-heading" className="heading font-bold align-center my-10">
                {outputText.heading}
              </h2>
              <div className="output-buttons flex items-center mb-4 space-x-5">
                <button
                  id="download-button"
                  className="download-button rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={screenshotDownload}
                >
                  {outputText.downloadButton}
                </button>
                <button
                  id="new-oshikatsu-button"
                  className="new-oshikatsu-button rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={clickHandler}
                >
                  {outputText.newOshikatsuButton}
                </button>
              </div>
              <div id="screenshot-div" ref={screenshotRef} className="screenshot-div flex flex-col items-center">
                <img
                  className="template-base"
                  id="template-base"
                  alt="not found"
                  src={templateRed.src}
                />

                <Image
                  className="picture"
                  id="picture"
                  width={646}
                  height={424.5}
                  alt="not found"
                  src={URL.createObjectURL(props.submittedImage)}
                />

                <img
                  className="corner-tag"
                  id="corner-tag"
                  alt="not found"
                  src={cornerTag.src}
                />

                <p className="poster-oshikatsu" id="poster-oshikatsu">{props.submittedText.oshikatsu}</p>
                <p className="poster-mirai" id="poster-mirai">{props.submittedText.mirai}</p>
                <p className="poster-name-age" id="poster-name-age">{props.submittedText.penname}・{props.submittedText.age}{outputText.age}</p>
                <a id="download-div" className="download-div w-full h-full" onClick={screenshotDownload}></a>
              </div>
            </div>
          </div>
        )}
      </div>
  );
}
