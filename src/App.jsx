import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './App.css';
import Header from './components/header/header';
import MainBanner from './components/mainBanner/mainBanner';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Scroll() {

  return (
    <div className='Main-container container-fluid px-4'>
      <Header />
      <MainBanner />
    </div>
  );
}
