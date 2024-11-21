import React from 'react'
import styles from './testimonialcard.module.css'
import Image from 'next/image'
import { interFont } from '@/font'
import { testimonialcards } from '@/constant/testimonialcard'

function testimonialcard() {
  return (
    
      <>
      {testimonialcards.map((card, index ) =>{
        return(
            <div className={`${styles.card} ${interFont.className}`} key={index}>
                        <div className={styles.cardimage}>
                            <Image src={card.src} alt={"pic"} width={150} height={150}></Image>
                        </div>

                        <p>{card.name}</p>
                        <p><span>{card.title}</span></p>

                        <p style={{ marginBottom: "0px" }}>{card.discription}</p>
                    </div>

        )
      })}
      
      </>
    
  )
}

export default testimonialcard
