import React from 'react';
import { useState, useRef } from 'react';
import Image from 'next/image';
import * as htmlToImage from 'html-to-image';
import template from '../assets/images/oshikatsu-template.jpg';

export default function Form(props: any) {

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
    props.setLanguage ? (
      e.target.name == "image" ? e.target.setCustomValidity("写真をアップしてください") : e.target.setCustomValidity("入力してください")
    ) : (
      e.target.name == "image" ? e.target.setCustomValidity("Please select an image") : e.target.setCustomValidity("Required field")
    );
  };

  const ageLimitValidity = (e: any) => {
    props.setLanguage ? (
      e.target.setCustomValidity("0から120まで入力できます")
    ) : (
      e.target.setCustomValidity("Please enter an age between 0 and 120")
    );
  };

  function autoScroll() {
    window.location.replace("/#poster");
  };

  async function handleSubmit(e: any) {
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
    <div>
      <form onSubmit={handleSubmit} className="p-5">
        <div className="space-y-5 flex flex-col items-center">
          <div className="form mt-5 grid grid-cols-1 gap-x-6 gap-y-8">
            <div className="col-span-full">
              <label htmlFor="oshikatsu" className="form-heading block font-semibold leading-6 text-gray-900">
                {props.oshikatsuQuestion}
              </label>
              <p className="form-note">{props.oshikatsuNote}</p>
              <div className="mt-2">
                <div className="form-field flex mt-4 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <input
                    type="text"
                    name="oshikatsu"
                    id="oshikatsu"
                    value={formData.oshikatsu}
                    maxLength={props.oshikatsuMaxLength}
                    className="oshikatsu block flex-1 rounded-md border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                    placeholder={props.oshikatsuPlaceholder}
                    required={true}
                    onInvalid={existenceValidity}
                    onChange={oshikatsuChangeHandler}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="mirai" className="form-heading block font-semibold  leading-6 text-gray-900">
                {props.miraiQuestion}
              </label>
              <p className="form-note">{props.miraiNote}</p>
              <div className="form-field mt-2">
                <textarea
                  name="mirai"
                  id="mirai"
                  value={formData.mirai}
                  maxLength={props.miraiMaxLength}
                  className="mirai block w-full mt-4 rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  placeholder={props.miraiPlaceholder}
                  required={true}
                  onInvalid={existenceValidity}
                  onChange={miraiChangeHandler}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="penname" className="form-heading block font-semibold leading-6 text-gray-900">
                {props.pennameQuestion}
              </label>
              <p className="form-note">{props.pennameNote}</p>
              <div className="mt-2">
                <div className="form-field flex mt-4 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <input
                    type="text"
                    name="penname"
                    id="penname"
                    value={formData.penname}
                    maxLength={15}
                    className="pen-name block flex-1 rounded-md border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                    placeholder={props.pennamePlaceholder}
                    onChange={pennameChangeHandler}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="age" className="form-heading block font-semibold leading-6 text-gray-900">
                {props.ageQuestion}
              </label>
              <p className="form-note"></p>
              <div className="mt-2">
                <div className="age-container flex mt-4 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <input
                    type="number"
                    name="age"
                    id="age"
                    value={formData.age}
                    min={0}
                    max={120}
                    placeholder="70"
                    className=" age block flex-1 rounded-md border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                    onInvalid={ageLimitValidity}
                    onChange={ageChangeHandler}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="image" className="form-heading block font-semibold  leading-6 text-gray-900">
                {props.imageQuestion}
              </label>
              <p className="form-note">{props.imageNote}</p>
              <div className="form-field mt-4">
                {selectedImage && (
                  <div>
                    <Image
                      width={250}
                      height={140}
                      alt="not found"
                      src={URL.createObjectURL(selectedImage)}
                    />
                  </div>
                )}

                <div className="image-input mt-1">
                  <input
                    style={{ maxWidth: 250 }}
                    type="file"
                    id="image"
                    name="image"
                    className="py-1.5"
                    onChange={imageHandler}
                    required={true}
                    onInvalid={existenceValidity}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-6 flex flex-col items-center gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-14 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {props.submitButtonText}
          </button>
        </div>
      </form>

      <div className="result mt-2">
        {submittedImage && (
          <div id="poster">
            <div id="template" className="template flex flex-col items-center max-w-5xl p-5">
              <h2 id="download-heading" className="download-heading font-bold align-center m-10">
                写真をクリックすると、ダウンロードが始まります。
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
                  src={URL.createObjectURL(submittedImage)}
                />

                <p className="poster-oshikatsu" id="poster-oshikatsu">{submittedText.oshikatsu}</p>
                <p className="poster-mirai" id="poster-mirai">{submittedText.mirai}</p>
                <p className="poster-name-age" id="poster-name-age">{submittedText.penname}・{submittedText.age}歳</p>
                <a id="download-div" className="download-div w-full h-full" onClick={screenshotDownload}></a>
              </div>
              <button
                id="download-button"
                className="download-button rounded-md bg-indigo-600 my-10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={screenshotDownload}
              >
                保存する
              </button>
            </div>
          </div>
        )}
      </div>
    </div>

  );
}
