/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { useState } from 'react';
import template from './assets/images/oshikatsu-template.jpg';

import Banner from './components/banner';
import Explanation from './components/explanation';
import Form from './components/form';

export default function Home(this: any) {

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Banner />

      <Explanation />

      <Form />

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
