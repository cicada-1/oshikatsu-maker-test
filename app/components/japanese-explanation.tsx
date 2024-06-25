import React from 'react';
import posterExample from '../assets/images/poster-example.jpg';
import Image from 'next/image';

export default function JapaneseExplanation() {

  return (
    <div className="heading m-5 flex flex-col items-center">
      <h1 className="form-title mb-5 font-bold leading-7 text-gray-900">私の「推し勝★」ジェネレーター</h1>
      <p
        className="explanation"
        style={{ whiteSpace: 'pre-wrap' }}
      >
        自分の「推し勝★」を創ってみましょう！<br /> <br />
        私の「推し勝★」ジェネレーターに：<br /> <br />
        -「推し勝★」<br />
        - 創る未来<br />
        - ペンネーム<br />
        - 年齢<br />
        - 写真<br /> <br />
        を入力して、キャンペーンのポスターのように自分のができます！
      </p>
      <div className="my-5 flex flex-col items-center">
        <Image
          className="poster-example"
          width={300}
          height={243}
          alt="not found"
          src={posterExample.src}
        />
        <p className="image-note"><em>ポスターの例</em></p>
      </div>
      <p className="explanation">
        このように完成すると、保存できますので、完成したポスターか、「保存する」のボタンをクリックしてください！<br />
        ポスターを保存してから、「#私の推し勝」「#勝山しか勝たん山」のハッシュタグでSNSに投稿しましょう！<br />
        では、私の「推し勝★」ジェネレーターで楽しみましょう！
      </p>
    </div>
  );
}
