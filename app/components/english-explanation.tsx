import React from 'react';
import Image from 'next/image';

export default function EnglishExplanation(props: any) {

  return (
    <div className="heading m-5 flex flex-col items-center">
      <h1 className="form-title mb-5 font-bold leading-7 text-gray-900">My &quot;Oshi-Katsu&quot; Generator!</h1>
      <p
        className="explanation"
        style={{ whiteSpace: 'pre-wrap' }}
      >
        Create your own &quot;Oshi-Katsu&quot; poster!<br /> <br />
        Please enter:<br /> <br />
        - Your &quot;Oshi-Katsu&quot;<br />
        - Your belief for the future<br />
        - Nickname<br />
        - Age<br />
        - A picture<br /> <br />
        to the generator and you can make your own poster, just like those of the official campaign!
      </p>
      <div className="my-5 flex flex-col items-center">
        <Image
          className="poster-example"
          width={300}
          height={243}
          alt="not found"
          src={props.poster.src}
        />
        <p className="image-note"><em>Example poster</em></p>
      </div>
      <p className="explanation">
        Once your poster has been generated, click on the generated poster or the &quot;download&quot; button below to download your poster.<br />
        If you upload your poster to social media, remeber to use the hashtags #私の推し勝, #勝山しか勝たん山. Or in English #MyOshiKatsu, #KatsuyamaShikaKatanYama.<br />
        Have fun with the My &quot;Oshi-Katsu&quot; Generator!
      </p>
    </div>
  );
}
