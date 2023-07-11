import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../app/page.module.css'
import '../app/globals.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <Link href="/">
            <Image src="/facebook.png" alt="facebook"  width={55} height={55} priority/>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="/">
            <Image src="/linkedin.png" alt="linkedin"  width={55} height={55} priority/>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="/">
            <Image src="/twitter.png" alt="twitter"  width={55} height={55} priority/>
        </Link>
        <p>Copyright © 2023 by Thuy Duong. All rights reserved.</p>
    </footer>
  )
}
