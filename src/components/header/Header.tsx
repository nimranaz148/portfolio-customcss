'use client'
import React from 'react'
import Link from 'next/link'
import { TiThMenu } from 'react-icons/ti'
import { CgClose } from 'react-icons/cg'
import { AnimatePresence, motion } from 'framer-motion'
import { caveatFont, interFont } from '@/font'
import styles from './Header.module.css'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#testimonial', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href='/' className={`${styles.brand} ${caveatFont.className}`}>
          Nimra Salahuddin
        </Link>

        <ul className={`${interFont.className} ${styles.navUl}`}>
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <button
          type='button'
          className={styles.menuButton}
          onClick={() => setIsOpen(true)}
          aria-label='Open navigation menu'
        >
          <TiThMenu size={28} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className={`${styles.mobilePanel} ${interFont.className}`}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <button
                  type='button'
                  className={styles.close}
                  onClick={() => setIsOpen(false)}
                  aria-label='Close navigation menu'
                >
                  <CgClose size={30} />
                </button>

                {navItems.map((item) => (
                  <Link key={item.label} href={item.href} onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header
