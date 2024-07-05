/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function RadioButton(props: any) {

  return (
    <label>
      <input
        type="radio"
        name="design"
        value={props.value}
        required={true}
        className="design-choice hidden"
        onChange={props.onChange}
        defaultChecked={props.value === "red"}
      />
      <img
        className="design-choice-image"
        src={props.src}
        alt="not found"
      />
    </label>
  );
}
