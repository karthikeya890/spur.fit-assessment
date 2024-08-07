import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import Header from './components/header/header';
import MainBanner from './components/mainBanner/mainBanner';
import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";
import Section3 from "./components/section3/section3";
import Section4 from './components/section4/section4';
import Section5 from "./components/section5/section5";
import Section6 from './components/section6/section6';
import Section7 from './components/section7/section7';



export default function Scroll() {

  useEffect(() => {

    setTimeout(() => {
      toast.error("First of all, I apologize for not completing the assessment properly. I believe I could have performed better with proper guidance and more time allocated for the assessment. And It's not responsive.", { duration: 10000 });
    }, 3000)

  }, [])



  return (
    <div className='Main-container container-fluid px-4'>
      <Header />
      <MainBanner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section7 />
      <Toaster position="bottom-left" />
    </div>
  );
}
