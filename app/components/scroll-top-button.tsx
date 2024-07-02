/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';

export default function ScrollTopButton() {

  function scrollToTop() {
    window.location.replace("/#banner")
  };

  return (
    <button
      className="scroll-top-button flex self-end mb-2"
      onClick={scrollToTop}
    >
      <img
        id="scroll-top-image"
        className="scroll-top-image"
        width={50}
        height={50}
        alt="not found"
        src="https://cdn-icons-png.flaticon.com/512/6051/6051376.png"
      />
    </button>
  );
}
