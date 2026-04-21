import React from 'react'
import Image from 'next/image'
import { interFont } from '@/font'
import { testimonialcards } from '@/constant/testimonialcard'
import styles from './testimonialcard.module.css'

function Testimonialcard() {
  return (
    <>
      {testimonialcards.map((card, index) => {
        return (
          <div className={`${styles.card} ${interFont.className}`} key={index}>
            <div className={styles.cardTop}>
              <div className={styles.cardimage}>
                <Image src={card.src} alt={card.name} width={150} height={150} />
              </div>

              <div className={styles.cardMeta}>
                <p className={styles.name}>{card.name}</p>
                <p className={styles.title}>{card.title}</p>
              </div>
            </div>

            <p className={styles.description}>{card.discription}</p>
          </div>
        )
      })}
    </>
  )
}

export default Testimonialcard
