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
          
            <Link href="mailto:thduong.contact@gmail.com">
                <Image src="/mail.svg" alt="mail"  width={40} height={40} priority/>
            </Link>
            &nbsp;&nbsp;
            <Link href="tel:0366866701">
               <Image src="/phone.svg" alt="phone"  width={40} height={40} priority/>
            </Link>
            &nbsp;&nbsp;
            <Link target="_blank" href="https://github.com/thduongvu/thdvu2001-resume">
               <Image src="/github.svg" alt="github"  width={40} height={40} priority/>
            </Link>
            
        </div>

        <Link href="#top">
            <Image src="/icon-park_to-top.svg" alt="icon" width={24} height={24}/>
        </Link>
    </footer>
  )
}
