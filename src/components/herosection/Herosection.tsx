'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { FaArrowRight, FaBehance, FaDribbble, FaInstagram } from 'react-icons/fa'
import { interFont } from '@/font'
import Button from '../button/button'
import styles from './Herosection.module.css'

const highlights = [
  'React + Next.js',
  'TypeScript and SEO',
  'Full-stack product builds',
]

const stats = [
  { value: '2023+', label: 'Hands-on experience' },
  { value: '50+', label: 'Students mentored' },
  { value: 'CWV', label: 'Performance mindset' },
]

function Herosection() {
  return (
    <section className={`${styles.hero} ${interFont.className}`}>
      <div className={styles.backdropGlow}></div>

      <div className={styles.heroInner}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className={styles.eyebrow}>Available for full-stack roles in Karachi and remote teams</span>

          <h1>
            Building <span className={styles.accent}>modern</span> web products with clean UI and smooth backend integration.
          </h1>

          <p className={styles.description}>
            I&apos;m Nimra Salahuddin, a full stack developer with experience building
            responsive interfaces, backend-connected applications, and polished product experiences with modern web technologies.
          </p>

          <div className={styles.typeRow}>
            <span>I work as</span>
            <strong>
              <Typewriter
                words={['Full Stack Developer', 'React / Next.js Engineer', 'Frontend and Backend Builder']}
                loop={Infinity}
                cursor={true}
                cursorStyle={'|'}
                typeSpeed={70}
                deleteSpeed={45}
                delaySpeed={1400}
              />
            </strong>
          </div>

          <div className={styles.ctaRow}>
            <Button text='View my work' href='#portfolio' />
            <Button text='Contact me' href='#contact' variant='secondary' />
          </div>

          <div className={styles.highlightRow}>
            {highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
        >
          <div className={styles.photoFrame}>
            <div className={styles.photoBadge}>Nimra Salahuddin</div>
            <Image
              src='/myImage/my-pic.jpeg'
              alt='Nimra Salahuddin portrait'
              width={520}
              height={640}
              className={styles.heroImage}
              priority
            />
            <div className={styles.floatingCard}>
              <span>Best fit for</span>
              <strong>Full stack developer roles</strong>
              <p>React, Next.js, TypeScript, APIs, dashboards, responsive product builds.</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className={styles.bottomBand}>
        <div className={styles.statsGrid}>
          {stats.map((item) => (
            <div key={item.label} className={styles.statCard}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.brandStrip}>
          <span className={styles.stripLabel}>Profiles</span>
          <div className={styles.socialChips}>
            <span><FaBehance /> Behance</span>
            <span><FaDribbble /> Dribbble</span>
            <span><FaInstagram /> Instagram</span>
            <span><FaArrowRight /> Open to company opportunities</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Herosection
