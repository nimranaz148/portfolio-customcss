import React from 'react'
import styles from './Footer.module.css'
import { caveatFont } from '@/font'

function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <h1 className={caveatFont.className}>&copy; Nimra Naz. All rights reserved</h1>

      </footer>
    </div>
  )
}

export default Footer
