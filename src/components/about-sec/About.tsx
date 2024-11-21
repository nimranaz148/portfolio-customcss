'use client'
import React from 'react'
import styles from './About.module.css'
import { caveatFont, interFont } from '@/font'
import Button from '../button/button'
import Image from 'next/image'
import {motion} from 'framer-motion'

function About() {
  return (
    <div>
      <section id='about' className={styles.about}>
        <motion.div className={styles.aboutleftdiv}
        initial = {{opacity:0, x: -100}}
        whileInView= {{opacity:1 , x:0}}
        transition= {{duration:2 , type: "spring"}}

        
        
        
        >
            <h1 className={caveatFont.className}>Nimra Naz</h1>
            <p className={caveatFont.className}>Frelance Web developer</p>

             <h2 className={`${styles.detailstext} ${interFont.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ipsam repellat debitis amet vitae, dolores quas placeat qui libero unde laudantium corporis repudiandae ut, molestias perferendis eveniet excepturi cumque accusantium.</h2>

             <Button text={"Contact me"}/>
        </motion.div>

        <motion.div className={styles.aboutrightdiv}
        initial= {{opacity:0, x: 100}}
        whileInView={{opacity:1, x:50}}
        transition={{duration:2, type:"tween"}}
        >
          
          <Image src={"/myImage/profile.png"} alt={"profile"} width={400} height={400} className={styles.img}></Image>
        </motion.div>
      </section>
    </div>
  )
}

export default About
