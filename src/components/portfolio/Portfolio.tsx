import React from 'react'
import styles from './Portfolio.module.css'
import { caveatFont, interFont } from '@/font'
import Image from 'next/image'
import Portfoliocard from './portfoliocards/Portfoliocard'

function Portfolio() {
  return (
    <div>
      <section id='portfolio' className={styles.portfolio}>
        <h1 className={`${caveatFont.className}`}>
            <span>M</span>y {" "}
            <span>L</span>ast {""}
            <span>W</span>ork

        </h1>

        <p className={interFont.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deleniti odio  
        alias iste tempore nihil praesentium,<br /> evenietbr
         exercitationem eligendi temporibus rem nostrum sapiente aspernatur. Sit nemo consectetur <br />
          modi consequuntur aliquam. </p>

          <div className={styles.mywork}>
        <Portfoliocard/>
        

            

          </div>
      </section>
    </div>
  )
}

export default Portfolio
