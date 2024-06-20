/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { useState } from 'react';
import * as htmlToImage from 'html-to-image';
import { useRef } from 'react';

export default function Home(this: any) {

  const [formData, setFormData] = useState({
    oshikatsu: '',
    mirai: '',
    penname: '',
    age: '',
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const [submittedImage, setSubmittedImage] = useState(null);

  const [submittedText, setSubmittedText] = useState({
    oshikatsu: '',
    mirai: '',
    penname: '',
    age: '',
  });

  const oshikatsuChangeHandler = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    e.target.setCustomValidity("");
  };

  const miraiChangeHandler = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    e.target.setCustomValidity("");
  };

  const pennameChangeHandler = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const ageChangeHandler = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    e.target.setCustomValidity("");
  };

  const imageHandler = (e: any) => {
    setSelectedImage(e.target.files[0]);
    e.target.setCustomValidity("");
  };

  const existenceValidity = (e: any) => {
    e.target.name == "image" ? e.target.setCustomValidity("写真をアップしてください") : e.target.setCustomValidity("入力してください");
  };

  const ageLimitValidity = (e: any) => {
    e.target.setCustomValidity("120まで入力できます");
  };

  function autoScroll() {
    window.location.replace("/#result");
  };

  const screenshotRef = useRef(this);

  function screenshotDownload() {
    {/* htmlToImage.toPng(screenshotRef.current)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        screenshotRef.current.append(img);
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      }); */}

    htmlToImage.toJpeg(screenshotRef.current, { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'watashi-no-oshikatsu.jpeg';
        link.href = dataUrl;
        link.click();
      });
  };

  function handleSubmit(e: any) {
    e.preventDefault();
    setSubmittedImage(e.target.image.files[0]);
    setSubmittedText({
      ...submittedText,
      [e.target.oshikatsu.name]: e.target.oshikatsu.value,
      [e.target.mirai.name]: e.target.mirai.value,
      [e.target.penname.name]: e.target.penname.value,
      [e.target.age.name]: e.target.age.value,
    });
    setTimeout(autoScroll, 500);
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <a className="header" href='/'>
        <img
          alt="not found"
          src={"https://i.ibb.co/dkDBPnG/oshikatsu-banner.jpg"}
        />
      </a>

      <form onSubmit={handleSubmit} className="p-5">
        <div className="space-y-5 flex flex-col items-center">
          <h1 className="form-title mb-5 font-bold leading-7 text-gray-900">私の「推し勝★」ジェネレーター</h1>
          <div className="form mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label htmlFor="oshikatsu" className="form-heading block font-semibold leading-6 text-gray-900">
                あなたの「推し勝★」を教えてください！
              </label>
              <p className="form-note">※7字まで入力できます。</p>
              <div className="mt-2">
                <div className="flex mt-4 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="oshikatsu"
                    id="oshikatsu"
                    value={formData.oshikatsu}
                    maxLength={7}
                    className="oshikatsu block flex-1 rounded-md border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="きょうりゅう"
                    required={true}
                    onInvalid={existenceValidity}
                    onChange={oshikatsuChangeHandler}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="mirai" className="form-heading block font-semibold  leading-6 text-gray-900">
                「推し勝★」でどんな未来を創る？
              </label>
              <p className="form-note">※36字まで入力できます。</p>
              <div className="mt-2">
                <textarea
                  name="mirai"
                  id="mirai"
                  value={formData.mirai}
                  maxLength={36}
                  className="mirai block w-full mt-4 rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="勝山は、いろんな魅力が恐竜級！私たちみんなでお待ちしています！"
                  required={true}
                  onInvalid={existenceValidity}
                  onChange={miraiChangeHandler}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="penname" className="form-heading block font-semibold leading-6 text-gray-900">
                あなたのペンネームは何ですか？
              </label>
              <p className="form-note">※15字まで入力できます。</p>
              <div className="mt-2">
                <div className="flex mt-4 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="penname"
                    id="penname"
                    value={formData.penname}
                    maxLength={15}
                    className="pen-name block flex-1 rounded-md border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="勝山たろう"
                    onChange={pennameChangeHandler}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="age" className="form-heading block font-semibold leading-6 text-gray-900">
                おいくつですか？
              </label>
              <p className="form-note"></p>
              <div className="mt-2">
                <div className="age-container flex mt-4 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <input
                    type="number"
                    name="age"
                    id="age"
                    value={formData.age}
                    max={120}
                    placeholder="40"
                    className=" age block flex-1 rounded-md border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                    onInvalid={ageLimitValidity}
                    onChange={ageChangeHandler}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="image" className="form-heading block font-semibold  leading-6 text-gray-900">
                写真をアップしてください。
              </label>
              <p className="form-note">※テンプレートの写真スペースは横になっているので、縦の写真をアップする場合、全部が表示されない可能性があります。</p>
              <div className="mt-4">
                {selectedImage && (
                  <div>
                    <img
                      alt="not found"
                      width={"250px"}
                      src={URL.createObjectURL(selectedImage)}
                    />
                  </div>
                )}

                <div className="flex flex-col items-center">
                  <input
                    style={{ maxWidth: 250 }}
                    type="file"
                    id="image"
                    name="image"
                    className=""
                    onChange={imageHandler}
                    required={true}
                    onInvalid={existenceValidity}
                  />
                </div>


              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="check" className="block text-sm font-medium leading-6 text-gray-900">

              </label>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-14 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            「推し勝★」を創る！
          </button>
        </div>
      </form>

      <br />
      <br />

        <div className="mt-2">
          {submittedImage && (
            <div id="result">
              <div id="template" className="template flex flex-col items-center max-w-5xl p-5">
                <h2 id="download-heading" className="download-heading font-bold align-center m-10">
                  写真をクリックすると、ダウンロードが始まります。
                </h2>
                <div id="screenshot-div" ref={screenshotRef} className="screenshot-div flex flex-col items-center">
                  <img
                    className="template-base"
                    id="template-base"
                    alt="not found"
                  src="https://i.ibb.co/Hrv5tnV/oshikatsu-template.jpg"
                  />

                  <img
                    className="picture"
                    id="picture"
                    alt="not found"
                    src={URL.createObjectURL(submittedImage)}
                  />

                  <p className="poster-oshikatsu" id="poster-oshikatsu">{submittedText.oshikatsu}</p>
                  <p className="poster-mirai" id="poster-mirai">{submittedText.mirai}</p>
                  <p className="poster-name-age" id="poster-name-age">{submittedText.penname}・{submittedText.age}歳</p>
                  <a id="download-div" className="download-div w-full h-full" onClick={screenshotDownload}></a>
                </div>
                <button
                  id="download-button"
                  className="download-button rounded-md bg-indigo-600 mt-10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={screenshotDownload}
                >
                  保存する
                </button>
              </div>
            </div>
          )}
        </div>




      {/* <div className="mt-2">
        {submittedImage && (
          <div id="result">
            <div
              className="template flex flex-col items-center max-w-5xl p-5"
              style={{ maxWidth: "1024px" }}
            >
              <img
                id="base"
                className="template-base"
                alt="not found"
                src="https://i.ibb.co/vVPJwLv/oshikatsu-template.jpg"
              />

              <img
                id="upload"
                className="picture"
                alt="not found"
                src={URL.createObjectURL(submittedImage)}
              />

              <p id="text1" className="text1">{submittedText.oshikatsu}</p>
              <p id="text2" className="text2">
                {submittedText.mirai}
              </p>
            </div>
          </div>
        )}
      </div> */}
    </main >
  );
}
