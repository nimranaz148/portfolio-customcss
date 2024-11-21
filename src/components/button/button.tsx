import React from 'react'
import styles from './button.module.css' 


function button(props: {text:string}) {
    const {text} = props
  return (
    <div>
      <button className={styles.button} >{text}</button>
    </div>
  )
}

export default button
