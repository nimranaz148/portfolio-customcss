'use client'
import React from 'react'
import styles from './Herosection.module.css'
import { interFont } from '@/font'
import Button from '../button/button'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import Image from 'next/image';
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

function Herosection() {
  return (
    <div>
      <section className={`${styles.hero} ${interFont.className}`} >
        <h1>Hi! I&apos;m {" "} 
         <span>Nimra Naz</span>
         <motion.span style={{display:"inline-block" ,fontSize:"50px"}}
         animate={{rotate: [0, 15, -10, 20, -10, 0]}}
         transition={{duration: 1.5, repeat: Infinity, ease: 'easeInOut'}}


         
         >👋</motion.span>
          
       
          <br />  <span>I</span>&apos; m {" "}

          <Typewriter
             words= {['Front End Web Developer','UI/UX Designer']}
             loop= {Infinity}
             cursor =  {true}
             cursorStyle = {"_"}
             typeSpeed= {80}
             deleteSpeed= {50}
             delaySpeed = {1500}
             />
             </h1>
          
          
           


        <p>I can build user interface for websites and applications with <span>React JS</span> and <span>Next Js</span><br />
         I love the Front end development</p>

         <Button text ={"Hire me"}/>

         <div className={styles.socialicondiv}>
            <FaFacebook size={30} color='black'/>
            <FaWhatsapp size={30} color='black'/>
            <FaXTwitter size={30} color='black'/>
            <FaInstagram size={30} color='black'/>
            <FaTelegramPlane size={30} color='black'/>
         </div>

         <div className={styles.bottomimagediv}>
            <Image src={"/myImage/behance.png"} alt={"behance"} width={156} height={156}></Image>
            <Image src={"/myImage/dribble.png"} alt={"dribble"} width={156} height={156}></Image>
            <Image src={"/myImage/upwork.png"} alt={"upwork"} width={156} height={156}></Image>
            <Image src={"/myImage/freelance.png"} alt={"freelance"} width={156} height={156}></Image>
         </div>
      </section>
    </div>
  )
}

export default Herosection
