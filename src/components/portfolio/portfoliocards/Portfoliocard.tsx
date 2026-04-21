'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { portfoliocards } from '@/constant/portfoliocard'
import styles from './Portfoliocard.module.css'

function Portfoliocard() {
  return (
    <>
      {portfoliocards.map((item) => {
        const cardContent = (
          <>
            <div className={styles.cardimage}>
              {item.type === 'image' ? (
                <Image
                  src={item.src}
                  alt={item.title}
                  width={407}
                  height={407}
                  className={styles.img}
                />
              ) : (
                <video src={item.src} controls loop muted className={styles.video} />
              )}
            </div>
            <div className={styles.cardtext}>{item.title}</div>
          </>
        )

        return (
          <motion.div
            className={styles.card}
            key={item.id}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={styles.cardlink}
                aria-label={`Open ${item.title}`}
              >
                {cardContent}
              </a>
            ) : (
              cardContent
            )}
          </motion.div>
        )
      })}
    </>
  )
}

export default Portfoliocard
