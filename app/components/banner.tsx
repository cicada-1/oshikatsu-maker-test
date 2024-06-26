import React from 'react';
import banner from '../assets/images/oshikatsu-banner.jpg';
import Image from 'next/image';

export default function Banner() {

  return (
    <a className="home-banner-button" href='/'>
      <Image
        className="banner"
        priority={true}
        width={1024}
        height={281}
        alt="not found"
        src={banner.src}
      />
  </a>
  );
}
