import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './App.css';
import Header from './components/header/header';
import MainBanner from './components/mainBanner/mainBanner';
import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";
import Section3 from "./components/section3/section3";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Scroll() {

  return (
    <div className='Main-container container-fluid px-4'>
      <Header />
      <MainBanner />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}
