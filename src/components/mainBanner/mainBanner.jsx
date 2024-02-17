import { useEffect, useRef } from "react"
import { motion } from 'framer-motion';
import './mainBanner.css';

import funny from "../../assets/funny.png"
import smile from "../../assets/smile.png"
import angry from "../../assets/angry.png"
import phone from "../../assets/phone.png"

const MainBanner = () => {

    const elementRef = useRef(null);
    const parentRef = useRef(null);

    return (
        <div className='main-banner-container row d-flex justify-content-between'>
            <div style={{ overflow: "hidden" }} className='col-6 ps-5 d-flex  flex-column justify-content-center'>
                <motion.p
                    initial={{ x: -100, y: 0 }}
                    animate={{ x: 0, y: 0, transition: { duration: 1.5 } }}
                    className='m-0 p-0'>Ahead app</motion.p>
                <motion.h1
                    initial={{ x: -100, y: 0 }}
                    animate={{ x: 0, y: 0, transition: { duration: 1.5 } }}
                    className='banner-heading'>Master your life by mastering emotions</motion.h1>
                <div className='d-flex align-items-center'>
                    <button className='app-store-btn d-flex align-items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-apple me-3" viewBox="0 0 16 16">
                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                        </svg>
                        <div className='d-flex flex-column justify-content-center'>
                            <span style={{ fontSize: '10px' }}>Download on the</span>
                            <span style={{ fontSize: "12x", textAlign: 'start' }}>App Store</span>
                        </div>
                    </button>
                    <div className='ms-4 d-flex flex-column justify-content-center'>
                        <div className='d-flex'>
                            <motion.svg
                                initial={{ x: 4, y: 4, width: 0, height: 0 }}
                                animate={{ x: 0, y: 0, width: 16, height: 16, transition: { duration: 0.2, delay: 0.2 } }}
                                xmlns="http://www.w3.org/2000/svg" fill="#FFD700" className="bi bi-star-fill me-1" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </motion.svg>
                            <motion.svg
                                initial={{ x: 4, y: 4, width: 0, height: 0 }}
                                animate={{ x: 0, y: 0, width: 16, height: 16, transition: { duration: 0.2, delay: 0.4 } }}
                                xmlns="http://www.w3.org/2000/svg" fill="#FFD700" className="bi bi-star-fill mx-1" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </motion.svg>
                            <motion.svg
                                initial={{ x: 4, y: 4, width: 0, height: 0 }}
                                animate={{ x: 0, y: 0, width: 16, height: 16, transition: { duration: 0.2, delay: 0.6 } }}
                                xmlns="http://www.w3.org/2000/svg" fill="#FFD700" className="bi bi-star-fill mx-1" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </motion.svg>
                            <motion.svg
                                initial={{ x: 4, y: 4, width: 0, height: 0 }}
                                animate={{ x: 0, y: 0, width: 16, height: 16, transition: { duration: 0.2, delay: 0.8 } }}
                                xmlns="http://www.w3.org/2000/svg" fill="#FFD700" className="bi bi-star-fill mx-1" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </motion.svg>
                            <motion.svg
                                initial={{ x: 4, y: 4, width: 0, height: 0 }}
                                animate={{ x: 0, y: 0, width: 16, height: 16, transition: { duration: 0.2, delay: 1 } }}
                                xmlns="http://www.w3.org/2000/svg" fill="#FFD700" className="bi bi-star-fill mx-1" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </motion.svg>
                        </div>
                        <p style={{ fontSize: '12px' }} className='m-0'>100+ AppStore reviews</p>
                    </div>
                </div>

            </div>
            <div className='col-6 d-flex justify-content-center align-items-center'>
                <motion.div className="banner-ring"
                    animate={{ rotate: `360deg`, transition: { type: "spring", stiffness: 8, damping: 2, } }}>
                    <motion.div className="element"
                        initial={{ x: -15, y: 40, rotate: '180deg' }}
                        animate={{ x: -15, y: 40, rotate: '0deg', transition: { type: "spring", stiffness: 5, damping: 1, } }}>
                        <motion.img
                            initial={{ width: 0, height: 0 }}
                            animate={{ width: 100, height: 100, transition: { duration: 2 } }}
                            src={smile} alt="" />
                    </motion.div>

                    <motion.div className="element"
                        initial={{ x: 335, y: 110, rotate: '180deg' }}
                        animate={{ x: 335, y: 110, rotate: '0deg', transition: { type: "spring", stiffness: 5, damping: 1, } }}>
                        <motion.img
                            initial={{ width: 0, height: 0 }}
                            animate={{ width: 100, height: 100, transition: { duration: 2 } }}
                            src={funny} alt="" />
                    </motion.div>

                    <motion.div className="element"
                        initial={{ x: 100, y: 340, rotate: '180deg' }}
                        animate={{ x: 100, y: 340, rotate: '0deg', transition: { type: "spring", stiffness: 5, damping: 1, } }}>
                        <motion.img
                            initial={{ width: 0, height: 0 }}
                            animate={{ width: 100, height: 100, transition: { duration: 2 } }}
                            src={angry} alt="" />
                    </motion.div>

                    <motion.div className="element"
                        initial={{ x: -25, y: 250, }}
                        animate={{ x: -25, y: 250, rotate: '-180deg', transition: { type: "spring", stiffness: 5, damping: 1, } }}>
                        <motion.img
                            initial={{ width: 0, height: 0 }}
                            animate={{ width: 40, height: 40, transition: { duration: 5 } }}
                            src={angry} alt="" />
                    </motion.div>

                    <motion.div className="element"
                        initial={{ x: 280, y: -10, }}
                        animate={{ x: 280, y: -10, rotate: '-180deg', transition: { type: "spring", stiffness: 5, damping: 1, } }}>
                        <motion.img
                            initial={{ width: 0, height: 0 }}
                            animate={{ width: 40, height: 40, transition: { duration: 5 } }}
                            src={smile} alt="" />
                    </motion.div>

                    <motion.div className="element"
                        initial={{ x: 320, y: 340 }}
                        animate={{ x: 320, y: 340, rotate: '-180deg', transition: { type: "spring", stiffness: 5, damping: 1, } }}>
                        <motion.img
                            initial={{ width: 0, height: 0 }}
                            animate={{ width: 40, height: 40, transition: { duration: 5 } }}
                            src={funny} alt="" />
                    </motion.div>
                </motion.div>
                <motion.div className="center"></motion.div>
                <motion.img className="phone"
                    initial={{ x: 0, y: 0, height: 0, rotate: "0deg" }}
                    animate={{ x: 0, y: 0, height: 300, rotate: "3deg", transition: { duration: 1 } }}
                    inherit={false}
                    src={phone}
                />
            </div>
        </div >
    );
}

export default MainBanner;