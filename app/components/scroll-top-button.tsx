/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import scrollTopImage from '../assets/images/scroll-top-image.png';

export default function ScrollTopButton() {

  function scrollToTop() {
    window.location.replace("/#banner")
  };

  return (
    <div className="scroll-button-div flex justify-end">
      <button
        className="scroll-top-button mb-2"
        onClick={scrollToTop}
      >
        <img
          id="scroll-top-image"
          className="scroll-top-image"
          width={50}
          height={50}
          alt="not found"
          src={scrollTopImage.src}
        />
      </button>
    </div>

  );
}
