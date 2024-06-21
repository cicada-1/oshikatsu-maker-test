/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { useState } from 'react';
import template from './assets/images/oshikatsu-template.jpg';

import Banner from './components/banner';
import Explanation from './components/explanation';
import Form from './components/form';

export default function Home(this: any) {

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Banner />

      <Explanation />

      <Form />
    </main >
  );
}
