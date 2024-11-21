'use client'
import React from 'react'
import styles from './aboutbottom.module.css'
import Image from 'next/image'
import {motion} from "framer-motion"

const containerVariants = {
  hidden:{},
  show: {
    transition: {
      staggerChildren: 0.2

    }
  }
}

//children
const itemVariant = {
  hidden: {opacity: 0, y: 20},
  show: {opacity:1, y:0}
}







function Aboutbottomimage() {
  return (
    <>
<motion.section className={styles.aboutbottomimage}
variants={containerVariants}
initial= "hidden"
whileInView= "show"

>
  <motion.div variants={itemVariant}> <Image src={"/myImage/html.png"} alt='html' width={96} height={96}></Image></motion.div>
   
   <motion.div variants={itemVariant}> <Image src={"/myImage/css.png"} alt='css' width={96} height={96}></Image></motion.div>

   <motion.div variants={itemVariant}> <Image src={"/myImage/typescript.png"} alt='typescript' width={70} height={70}></Image></motion.div>

   <motion.div variants={itemVariant}> <Image src={"/myImage/git.png"} alt='git' width={96} height={96}></Image></motion.div>

   <motion.div variants={itemVariant}> <Image src={"/myImage/figma.png"} alt='figma' width={96} height={96}></Image></motion.div>

   <motion.div variants={itemVariant}> <Image src={"/myImage/react.png"} alt='react' width={96} height={96}></Image></motion.div>

   <motion.div variants={itemVariant}> <Image src={"/myImage/node.png"} alt='node' width={96} height={96}></Image></motion.div>

   <motion.div variants={itemVariant}> <Image src={"/myImage/next.png"} alt='next' width={96} height={96}></Image></motion.div>

</motion.section>
    </>
  )
}

export default Aboutbottomimage
