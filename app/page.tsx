/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';

import Banner from './components/banner';
import Explanation from './components/explanation';
import Form from './components/form';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Banner />

      <Explanation />

      <Form />
    </main>
  );
}
