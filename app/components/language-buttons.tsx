import React from 'react';

export default function LanguageButtons(props: any) {

  return (
    <div className="under-banner flex mx-5 justify-end">
      <div className="language-buttons mt-3 mr-5 md:mr-10 flex justify-end">
        <span>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            onClick={props.onChange}
          >
            {!props.setLanguage ? "🇯🇵 日本語" : "🇬🇧/🇺🇸 English"}
          </button>
        </span>
      </div>
    </div>
  );
}
