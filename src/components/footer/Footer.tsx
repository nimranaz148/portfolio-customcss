import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.css'
import { caveatFont } from '@/font'

function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.inner}>
          <div>
            <h1 className={caveatFont.className}>Nimra Salahuddin</h1>
            <p>Full Stack Developer focused on React, Next.js, TypeScript, APIs, and product-quality web experiences.</p>
          </div>

          <div className={styles.links}>
            <Link href="#portfolio">Projects</Link>
            <Link href="#services">Skills</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
