import React from 'react';
import Image from 'next/image';
import posterExampleJp from '../assets/images/poster-example-jp.jpg';

export default function Explanation() {

  return (
    <div className="heading m-5 flex flex-col items-center">
      <h1 className="form-title mb-5 font-bold leading-7 text-gray-900">私の「推し勝★」ジェネレーター</h1>
      <p
        className="explanation"
        style={{ whiteSpace: 'pre-wrap' }}
      >
        {`自分の「推し勝★」を創ってみましょう！\n\n私の「推し勝★」ジェネレーターに：\n\n-「推し勝★」\n- 創る未来\n- ペンネーム\n- 年齢\n- 写真\n\nを入力して、キャンペーンのポスターのように自分のができます！`}<br /> <br />
      </p>
      <div className="my-5 flex flex-col items-center">
        <Image
          className="poster-example"
          width={300}
          height={243}
          alt="not found"
          src={posterExampleJp.src}
        />
        <p className="image-note"><em>ポスターの例</em></p>
      </div>
      <p className="explanation">
        {`このように完成すると、保存できますので、完成したポスターか、「保存する」のボタンをクリックしてください！\nポスターを保存してから、「#私の推し勝」「#勝山しか勝たん山」のハッシュタグでSNSに投稿しましょう！\nでは、私の「推し勝★」ジェネレーターで楽しみましょう！`}
      </p>
    </div>
  );
}
