'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { caveatFont, interFont } from '@/font'
import Button from '../button/button'
import styles from './About.module.css'

function About() {
  return (
    <div>
      <section id='about' className={styles.about}>
        <motion.div
          className={styles.aboutleftdiv}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, type: 'spring' }}
        >
          <h1 className={caveatFont.className}>Nimra Salahuddin</h1>
          <p className={caveatFont.className}>Full Stack Developer</p>

          <h2 className={`${styles.detailstext} ${interFont.className}`}>
            Results-driven full stack developer with hands-on experience in React,
            Next.js, TypeScript, and backend-integrated applications. I focus on
            responsive UI, clean architecture, SEO best practices, and building
            scalable products that work smoothly across the full web stack.
          </h2>

          <Button text={"Let's connect"} href={'#contact'} />
        </motion.div>

        <motion.div
          className={styles.aboutrightdiv}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 50 }}
          transition={{ duration: 2, type: 'tween' }}
        >
          <Image
            src={'/myImage/my-pic.jpeg'}
            alt={'Nimra Salahuddin profile'}
            width={400}
            height={400}
            className={styles.img}
          />
        </motion.div>
      </section>
    </div>
  )
}

export default About
