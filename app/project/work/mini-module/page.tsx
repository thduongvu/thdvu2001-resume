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
            <Image src="/sd1_1227x347.svg" alt="img" width={1227} height={347} priority/>
            
            <br></br>
        </div>

        <div className={styles.section2}>
            <Image src="/sd2_1227x236.svg" alt="img" width={1227} height={236} priority/> 
        </div>

        <br></br>

        <div className={styles.section2}>
            <Image src="/sd3_1227x110.svg" alt="img" width={1227} height={110} priority/> 
        </div>

        <br></br>

        <div className={styles.section2}>
            <Image src="/mohinh.png" alt="img" width={731} height={433} priority/> 
        </div>

        <div className={styles.section2}>
            <Image src="/sd4_1227x30.svg" alt="img" width={1227} height={30} priority/> 
        </div>

        <div className={styles.section2}>
            <Link className={styles.button} target="_blank" href="https://uithcm-my.sharepoint.com/:p:/g/personal/19521416_ms_uit_edu_vn/EYzF_tP_TPBOrjzNTtusFCABKT21l4nDuLYBBhwYTihOpw?e=uzYx26">
            {'>'}{'>'}{'>'} Xem nội dung đầy đủ {'>'}{'>'}{'>'}
            </Link>
        </div>

        <div className={styles.section2}>
            <Image src="/slides_800x450.png" alt="img" width={800} height={450} priority/> 
        </div>


        <br></br>
        <br></br>
        <div className={styles.section2}>
            <Image src="/sd5_1227x30.svg" alt="img" width={1227} height={30} priority/> 
        </div>

        <div className={styles.section2}>
            <Link className={styles.button} target="_blank" href="https://54b4r8.axshare.com">
            {'>'}{'>'}{'>'} Thao tác dễ dàng hơn ở tab mới {'>'}{'>'}{'>'}
            </Link>
        </div>

        <div className={styles.section2}>
            <iframe src="https://54b4r8.axshare.com" width="1440" height="800">
                <p>Your browser does not support iframes.</p>
            </iframe>
        </div>
        <br></br>
    </div>
  )
}
