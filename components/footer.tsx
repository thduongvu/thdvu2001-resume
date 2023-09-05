'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../app/page.module.css'
import '../app/globals.css'
import { Tooltip} from '@nextui-org/react'

export default function Footer() {
  return (
    <footer id="footer_footer" className={styles.footer}>
        <div className={styles.footer_inside}>
            <p>Copyright © 2023 by Thuy Duong. This portfolio is the first product when I learn more about NextJs Framework</p>

            <Link href="mailto:thduong.contact@gmail.com">
                <Tooltip content="thduong.contact@gmail.com" placement="top">
                    <Image src="/mail.svg" alt="mail"  width={40} height={40} priority/>
                </Tooltip>
            </Link>
            &nbsp;&nbsp;
            <Link href="tel:0366866701">
                <Tooltip content="0366866701" placement="top">
                    <Image src="/phone.svg" alt="phone"  width={40} height={40} priority/>
                </Tooltip>
            </Link>
            &nbsp;&nbsp;
            <Link target="_blank" href="https://github.com/thduongvu/thdvu2001-resume">
                <Tooltip content="thduongvu" placement="top">
                    <Image src="/github.svg" alt="github"  width={40} height={40} priority/>
                </Tooltip>
            </Link>
            
        </div>

        <Link href="#top">
            <Image src="/icon-park_to-top.svg" alt="icon" width={24} height={24}/>
        </Link>
    </footer>
  )
}
