'use client'
import React from 'react'
import styles from './Portfoliocard.module.css'
import Image from 'next/image'
import { portfoliocards } from '@/constant/portfoliocard'
import {motion} from "framer-motion"
import Link from 'next/link'

function Portfoliocard() {
    return (


        <>

            {portfoliocards.map((item, index) => {
                return (
                    <motion.div className={styles.card} key={index}
                    initial={{opacity:0, scale:0}}
                    whileInView={{opacity:1, scale:1}}
                    transition={{duration:1}}
                    
                    >
                       
                        <div className={styles.cardimage}>
                        {item.type == "image" ?(
                            <Image src={item.src} 
                            alt='pic' 
                            width={407} 
                            height={407}
                            className={styles.img}/>
                        ): (
                            <video src={item.src} controls loop muted></video>
                        )}

                        </div>
                        
                        <div className={styles.cardtext}>{item.title}</div>
                    </motion.div>
                );
})}


        </>
    )
}

export default Portfoliocard
