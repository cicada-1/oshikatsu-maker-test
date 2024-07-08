/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import templateRed from '../assets/images/oshikatsu-template-red.jpg';
import templateBlue from '../assets/images/oshikatsu-template-blue.jpg';
import templateGreen from '../assets/images/oshikatsu-template-green.jpg';
import templateYellow from '../assets/images/oshikatsu-template-yellow.jpg';
import ShareButtons from './share-buttons';
import Output from './output';

import RadioButton from './radio-button';

export default function Form(props: any) {

  const formInfo = {
    Japanese: {
      designQuestion: 'ポスターのデザインを選択してください',
      oshikatsuQuestion: 'あなたの「推し勝★」を教えてください！',
      oshikatsuNote: '※7字まで入力できます。',
      oshikatsuMaxLength: 7,
      oshikatsuPlaceholder: '山',
      miraiQuestion: '「推し勝★」でどんな未来を創る？',
      miraiNote: '※36字まで入力できます。',
      miraiMaxLength: 36,
      miraiPlaceholder: '勝山が山に囲まれて、守ってくれてるような感じです。登るのも楽しいです！',
      pennameQuestion: 'あなたのペンネームは何ですか？（任意）',
      pennameNote: '※15字まで入力できます。',
      pennamePlaceholder: '勝山たろう',
      ageQuestion: 'おいくつですか？（任意）',
      imageQuestion: '写真を選択してください。',
      imageNote: '※テンプレートの写真スペースは横になっているので、縦の写真をアップする場合、全部が表示されない可能性があります。',
      submitButtonText: '「推し勝★」を創る！',
    },
    English: {
      designQuestion: 'Choose your poster design',
      oshikatsuQuestion: 'What is your "Oshi-Katsu"?',
      oshikatsuNote: '※ Please enter up to 13 characters',
      oshikatsuMaxLength: 13,
      oshikatsuPlaceholder: 'Mountains',
      miraiQuestion: 'What is your belief for the future?',
      miraiNote: '※ Please enter up to 54 characters',
      miraiMaxLength: 54,
      miraiPlaceholder: "The mountains are a part of the city.",
      pennameQuestion: 'What is your nickname? (Optional)',
      pennameNote: '※ Please enter up to 15 characters',
      pennamePlaceholder: 'Taro Katsuyama',
      ageQuestion: 'How old are you? (Optional)',
      imageQuestion: 'Please select an image',
      imageNote: '※ The template only has space for landscape images, so portrait images will be cropped to fit',
      submitButtonText: 'Generate My "Oshi-Katsu"!',
    }
  };

  let formShow = props.setLanguage ? formInfo.Japanese : formInfo.English;

  const [formData, setFormData] = useState({
    design: '',
    oshikatsu: '',
    mirai: '',
    penname: '',
    age: '',
    image: '',
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const [submittedImage, setSubmittedImage] = useState(null);

  const [submittedText, setSubmittedText] = useState({
    design: '',
    oshikatsu: '',
    mirai: '',
    penname: '',
    age: '',
  });

  const imageHandler = (e: any) => {
    if(e.target.files[0].size > 2000000){
      props.setLanguage ? alert("2MBまでのファイルが選択できます") : alert("File over size limit. Please select an image up to 2MB")
     }else{
      setSelectedImage(e.target.files[0]);
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })};
    e.target.setCustomValidity("");
  };

  const changeHandler = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    e.target.setCustomValidity("");
  };

  const existenceValidity = (e: any) => {
    props.setLanguage ? (
      e.target.name === "image" ? e.target.setCustomValidity("写真を選択してください") : e.target.setCustomValidity("入力してください")
    ) : (
      e.target.name === "image" ? e.target.setCustomValidity("Please select an image") : e.target.setCustomValidity("Required field")
    );
  };

  const ageLimitValidity = (e: any) => {
    props.setLanguage ? (
      e.target.setCustomValidity("0から120まで入力できます")
    ) : (
      e.target.setCustomValidity("Please enter an age between 0 and 120")
    );
  };

  function posterScroll() {
    window.location.replace("/#poster");
  };

  async function handleSubmit(e: any) {
    e.preventDefault();
    setSubmittedImage(e.target.image.files[0]);
    setSubmittedText(formData);
    setTimeout(posterScroll, 500);
  };

  const templateDesigns = {
    'red': templateRed.src,
    'blue': templateBlue.src,
    'green': templateGreen.src,
    'yellow': templateYellow.src,
  };

  return (
    <div>
      <form id="form" onSubmit={handleSubmit} className="p-5">
        <div className="space-y-5 flex flex-col items-center">
          <div className="form mt-5 grid grid-cols-1 gap-x-6 gap-y-8">
            <div className="col-span-full">
              <label className="form-heading block font-semibold leading-6 text-gray-900">
                {formShow.designQuestion}
              </label>
              <div className="flex justify-center">
                <div className="design-options flex flex-wrap mt-4 justify-between place-self-center gap-y-4">
                  {Object.keys(templateDesigns).map((colour: any) => (
                    <RadioButton
                      key={colour}
                      onChange={changeHandler}
                      value={colour}
                      src={templateDesigns[colour as keyof typeof templateDesigns]}
                    />
                  ))}
                </div>
              </div>

            </div>
            <div className="col-span-full">
              <label htmlFor="oshikatsu" className="form-heading block font-semibold leading-6 text-gray-900">
                {formShow.oshikatsuQuestion}
              </label>
              <p className="form-note">{formShow.oshikatsuNote}</p>
              <div className="mt-2">
                <div className="form-input flex mt-4 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset">
                  <input
                    type="text"
                    name="oshikatsu"
                    id="oshikatsu"
                    value={formData.oshikatsu}
                    maxLength={formShow.oshikatsuMaxLength}
                    className="oshikatsu block flex-1 rounded-md border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                    placeholder={formShow.oshikatsuPlaceholder}
                    required={true}
                    onInvalid={existenceValidity}
                    onChange={changeHandler}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="mirai" className="form-heading block font-semibold  leading-6 text-gray-900">
                {formShow.miraiQuestion}
              </label>
              <p className="form-note">{formShow.miraiNote}</p>
              <div className="form-input mt-2">
                <textarea
                  name="mirai"
                  id="mirai"
                  value={formData.mirai}
                  maxLength={formShow.miraiMaxLength}
                  className="mirai block w-full mt-4 rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset"
                  placeholder={formShow.miraiPlaceholder}
                  required={true}
                  onInvalid={existenceValidity}
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="penname" className="form-heading block font-semibold leading-6 text-gray-900">
                {formShow.pennameQuestion}
              </label>
              <p className="form-note">{formShow.pennameNote}</p>
              <div className="mt-2">
                <div className="form-input flex mt-4 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset">
                  <input
                    type="text"
                    name="penname"
                    id="penname"
                    value={formData.penname}
                    maxLength={15}
                    className="pen-name block flex-1 rounded-md border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                    placeholder={formShow.pennamePlaceholder}
                    onChange={changeHandler}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="age" className="form-heading block font-semibold leading-6 text-gray-900">
                {formShow.ageQuestion}
              </label>
              <p className="form-note"></p>
              <div className="mt-2">
                <div className="age-container flex mt-4 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset">
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
                    onChange={changeHandler}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="image" className="form-heading block font-semibold  leading-6 text-gray-900">
                {formShow.imageQuestion}
              </label>
              <p className="form-note">{formShow.imageNote}</p>
              <div className="form-input mt-4">
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
                    className="py-1.5"
                    style={{ maxWidth: 250 }}
                    type="file"
                    id="image"
                    name="image"
                    value={formData.image}
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
            className="rounded-md bg-green-600 px-14 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise-600"
          >
            {formShow.submitButtonText}
          </button>
        </div>
      </form>

      <ShareButtons
        setLanguage={props.setLanguage}
      />

      <Output
        setLanguage={props.setLanguage}
        setSelectedImage={setSelectedImage}
        setFormData={setFormData}
        submittedImage={submittedImage}
        submittedText={submittedText}
      />
    </div>

  );
}
