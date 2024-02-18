import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import funny from "../../assets/funny.png";
import "./section2.css";

const Section2 = () => {
    const ref = useRef(null)
    const isInView = useInView(ref);
    return (
        <div>
            <div className='mt-5 d-flex' ref={ref}>
                <motion.h1
                    initial={{ x: -100, y: 100, fontSize: '10px', opacity: 0.1 }}
                    animate={isInView && { x: 0, y: 0, fontSize: '50px', opacity: 1, transition: { duration: 1 } }}
                    className='section2-heading ps-4'>Does this sound familiar...
                </motion.h1>
                <motion.img
                    initial={{ width: 80, height: 80, x: 1000, y: 100, rotate: '-90deg' }}
                    animate={isInView && { width: 80, height: 80, x: 0, y: 0, rotate: '0deg', transition: { duration: 1 } }}
                    src={funny} />
            </div>
            <div className='d-flex flex-row align-items-center familiar-images-container'>

                <div className='familar-cards card-1 me-4'>
                    <h5>You argue with a colleague</h5>
                    <p>You get angry and defective instead of staying open and working towards common ground.</p>
                </div>
                <div className='familar-cards card-2 me-4'>
                    <h5>You argue with a colleague</h5>
                    <p>You get angry and defective instead of staying open and working towards common ground.</p>
                </div>
                <motion.div
                    initial={{ rotate: '-30deg' }}
                    animate={isInView && { rotate: '-5deg' }}
                    className='familar-cards card-3 me-4'>
                    <h5>You argue with a colleague</h5>
                    <p>You get angry and defective instead of staying open and working towards common ground.</p>
                </motion.div>
                <div className='familar-cards card-4 me-4 text-white'>
                    <h5>You attend a class reunion</h5>
                    <p>You compare yourself with your peers achievements, instead of making your self-judgement more independent of others.</p>
                </div>
                <div className='familar-cards card-5 me-4'>
                    <h5>You are at a lively dinner party</h5>
                    <p>You play on your phone, Instead of confidently approching strangers and stiking up a chat.</p>
                </div>
                <div className='familar-cards card-6 me-4'>
                    <h5>You hit dead end in a negotiation</h5>
                    <p>You get nervous, frazzled and frustrated, instead of staying optimistic and solution-oriented.</p>
                </div>
            </div>
        </div>

    )


}

export default Section2