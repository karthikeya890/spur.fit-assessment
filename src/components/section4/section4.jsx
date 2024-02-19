import { motion, useInView, } from 'framer-motion';
import { useRef, } from 'react';
import angry from "../../assets/angry.png";
import flower from "../../assets/flower.png";
import leaf from "../../assets/leaf.png";

import './section4.css'


const Section4 = () => {

    const ref = useRef(null)
    const isInView = useInView(ref);

    const ref2 = useRef(null)
    let isInView2 = useInView(ref2);

    if (isInView2) {

        console.log(ref2.current.getBoundingClientRect().top);

        // const element = document.getElementById("horizontalScroll");
        // let scrollFunction = (e) => {
        //     const deltaX = e.deltaX;
        //     const deltaY = e.deltaY;
        //     const isTouchpadScrolling = Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10;

        //     if (deltaY > 0) {
        //         if (isTouchpadScrolling) {
        //             element.scrollTo(a, 0);
        //             a += 1
        //             if ((element.offsetWidth - 100) < a) {
        //                 document.getElementById("section3").classList.remove("d-none");
        //                 e.preventDefault();
        //             }
        //         } else {
        //             element.scrollTo(a, 0);
        //             a += 50
        //             if ((element.offsetWidth - 100) < a) {
        //                 document.getElementById("section3").classList.remove("d-none");
        //                 e.preventDefault();
        //             }
        //         }
        //     }


        // }
        // window.addEventListener("wheel", (e) => {
        //     scrollFunction(e);

        //     if ((element.offsetWidth - 100) < a) {
        //         e.preventDefault();
        //     }
        // });
    }


    return (
        <div className='d-none hideSections1'>
            <motion.p
                initial={{ x: -100, y: 100, fontSize: '10px', opacity: 0.1 }}
                animate={isInView && { x: 0, y: 0, fontSize: '20px', opacity: 1, transition: { duration: 1 } }}
                className='ps-4'>Wrong with self-improvement & how we're fixing it.</motion.p>

            <div className='d-flex' ref={ref}>

                <motion.h1
                    initial={{ x: -100, y: 100, fontSize: '10px', opacity: 0.1 }}
                    animate={isInView && { x: 0, y: 0, fontSize: '50px', opacity: 1, transition: { duration: 1 } }}
                    className='section2-heading ps-4'>Self-improvement. Ugh
                </motion.h1>
                <motion.img
                    initial={{ width: 80, height: 80, x: 1000, y: 100, rotate: '-90deg' }}
                    animate={isInView && { width: 80, height: 80, x: 0, y: 0, rotate: '0deg', transition: { duration: 1 } }}
                    src={angry} />
            </div>
            <div className='d-flex flex-row align-items-center justify-content-center'>

                <div ref={ref2} className='vertical-improvements mt-5' >

                    <div style={{ minHeight: '150px' }} className='d-flex'>
                        <div style={{ minWidth: '60px' }} className='d-flex flex-column align-items-center'>
                            <motion.div
                                animate={{ width: '20px', height: "20px", borderRadius: '10px' }}
                                className='round'></motion.div>
                            <div className='line'></div>
                        </div>
                        <div>
                            <h4>It's not as easy as 1-2-3</h4>
                            <p>
                                The jounery of chnage may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).
                            </p>
                        </div>

                    </div>

                    <div style={{ minHeight: '150px' }} className='d-flex'>
                        <div style={{ minWidth: '60px' }} className='d-flex flex-column align-items-center'>
                            <motion.div
                                animate={{ width: '20px', height: "20px", borderRadius: '10px' }}
                                className='round'></motion.div>
                            <div className='line'></div>
                        </div>
                        <div>
                            <h4>Old habits are hard to break.</h4>
                            <p>And bad behaviours die hard. Fortunately, we give you great,
                                science-backed techniques to use.
                            </p>
                        </div>

                    </div>
                    <div style={{ minHeight: '150px' }} className='d-flex'>
                        <div style={{ minWidth: '60px' }} className='d-flex flex-column align-items-center'>
                            <motion.div
                                animate={{ width: '20px', height: "20px", borderRadius: '10px' }}
                                className='round'></motion.div>
                            <div className='line'></div>
                        </div>
                        <div>
                            <h4>You and your motivation don't have a long-term relationship.</h4>
                            <p>
                                Luckily, we can proactively prepare you for the marathon,
                                not just the race. Effective, memorable exercises will help you stick to your goals.
                            </p>
                        </div>

                    </div>

                    <div style={{ minHeight: '150px' }} className='d-flex'>
                        <div style={{ minWidth: '60px' }} className='d-flex flex-column align-items-center'>
                            <motion.div
                                animate={{ width: '20px', height: "20px", borderRadius: '10px' }}
                                className='round'></motion.div>
                            <div className='line'></div>
                        </div>
                        <div >
                            <h4>Books just don't offer practical solutions.</h4>
                            <p>
                                Remember when you learned to ride a bike just by reading? Yeash, we don't either. We help you take concrete small steps towards your goals. Learning just a bit, then immediately sprining into action.
                            </p>
                        </div>

                    </div>
                    <div style={{ minHeight: '150px' }} className='d-flex'>
                        <div style={{ minWidth: '60px' }} className='d-flex flex-column align-items-center'>
                            <motion.div
                                animate={{ width: '20px', height: "20px", borderRadius: '10px' }}
                                className='round'></motion.div>
                            <div className='line'></div>
                        </div>
                        <div >
                            <h4>Inspiration is great, but then what.</h4>
                            <p>
                                We make sure your energy from all the content you consume does not fizzle out.
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}


export default Section4