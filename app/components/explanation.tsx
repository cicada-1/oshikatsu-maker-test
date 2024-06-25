import React from 'react';
import Image from 'next/image';
import posterExample from '../assets/images/poster-example.jpg';

export default function JapaneseExplanation(props: any) {

  return (
    <div className="heading m-5 flex flex-col items-center">
      <h1 className="form-title mb-5 font-bold leading-7 text-gray-900">{props.title}</h1>
      <p
        className="explanation"
        style={{ whiteSpace: 'pre-wrap' }}
      >
        {props.body1}<br /> <br />
      </p>
      <div className="my-5 flex flex-col items-center">
        <Image
          className="poster-example"
          width={300}
          height={243}
          alt="not found"
          src={posterExample.src}
        />
        <p className="image-note"><em>{props.imageNote}</em></p>
      </div>
      <p className="explanation">
        {props.body2}
      </p>
    </div>
  );
}
