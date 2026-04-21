import React from 'react'
import Link from 'next/link'
import styles from './button.module.css'

type ButtonProps = {
  text: string
  href?: string
  variant?: 'primary' | 'secondary'
}

function Button({ text, href, variant = 'primary' }: ButtonProps) {
  const className =
    variant === 'secondary'
      ? `${styles.button} ${styles.secondary}`
      : styles.button

  if (href) {
    return (
      <Link href={href} className={className}>
        {text}
      </Link>
    )
  }

  return <button className={className}>{text}</button>
}

export default Button
