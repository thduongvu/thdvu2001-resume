import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../app/page.module.css'
import '../app/globals.css'

export default function Footer() {
  return (
    <footer id="footer_footer" className={styles.footer}>
        <div className={styles.footer_inside}>
            <p>Copyright © 2023 by Thuy Duong. All rights reserved.</p>
          
            <Link href="/">
                <Image src="/facebook.png" alt="facebook"  width={40} height={40} priority/>
            </Link>
            &nbsp;&nbsp;
            <Link href="/">
               <Image src="/linkedin.png" alt="linkedin"  width={40} height={40} priority/>
            </Link>
            &nbsp;&nbsp;
            <Link href="/">
                <Image src="/twitter.png" alt="twitter"  width={40} height={40} priority/>
            </Link>
        </div>

        <Link href="#top">
            <Image src="/icon-park_to-top.svg" width={24} height={24}/>
        </Link>
    </footer>
  )
}
