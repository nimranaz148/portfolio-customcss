import React from 'react'
import { caveatFont, interFont } from '@/font'
import Portfoliocard from './portfoliocards/Portfoliocard'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div>
      <section id='portfolio' className={styles.portfolio}>
        <h1 className={caveatFont.className}>
          <span>M</span>y <span>L</span>atest <span>W</span>ork
        </h1>

        <p className={interFont.className}>
          Selected projects covering e-commerce, AI-assisted products, dashboards,
          and full-stack systems built with modern frontend engineering practices.
        </p>

        <div className={styles.mywork}>
          <Portfoliocard />
        </div>
      </section>
    </div>
  )
}

export default Portfolio
