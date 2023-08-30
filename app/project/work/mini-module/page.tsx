'use client'
import React from 'react'
import styles from '../../style.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Tooltip} from '@nextui-org/react'

export default function MiniModule() {
  return (
    <div className={styles.titlespace}>
        <div className={styles.title}>
            <div className={styles.titleL}>
                <h1>SD Services <br></br> (integrated project)</h1>
                <p>Phát triển tính năng mới cho bộ phận SD (đặc thù)</p>
                <h2><span>#Fit/Gap Analysis</span>&nbsp;
                    <span>#Estimation</span>&nbsp;
                    <span>#Systems Thinking</span>&nbsp;
                </h2>
                <br></br>
                <br></br>
                <Tooltip content="Nội dung dự án vẫn được cập nhật" placement="right">
                    <h2>20-06-2023 12:01:41</h2> 
                </Tooltip>
            </div>
            <div className={styles.titleR}>
                <Image src="/sd.jpg" alt="img" width={500} height={280} priority/>
            </div>
        </div>

        <div className={styles.section1}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Link href="#problem">
                <p>EXPLORE THIS PROJECT</p>
            </Link>
            <br></br>
            <iframe width="201" height="173" frameborder="0" 
                    src="https://uithcm-my.sharepoint.com/:p:/g/personal/19521416_ms_uit_edu_vn/EYzF_tP_TPBOrjzNTtusFCABKT21l4nDuLYBBhwYTihOpw?e=6eOwMD&action=embedview&wdbipreview=true">
            </iframe>
        </div>
    </div>
  )
}
