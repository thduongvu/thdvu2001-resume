'use client'
import React from 'react'
import styles from '../../style.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Tooltip} from '@nextui-org/react'


export default function RecruitmentMgt() {
  return (
    <div className={styles.titlespace}>
        <div className={styles.title}>
            <div className={styles.titleL}>
                <h1>Recruitment Management</h1>
                <p>Quản lý Tuyển dụng</p>
                <br></br>
                <br></br>
                <Tooltip content="Nội dung dự án vẫn được cập nhật" placement="right">
                    <h2>04-09-2023 23:09:06</h2> 
                </Tooltip>
            </div>
            <div className={styles.titleR}>
                <Image src="/hiring2.svg" alt="img" width={500} height={300} priority/>
            </div>
        </div>

        <div className={styles.title}>
                <div className={styles.titleL}>
                    <Image src="/function_941x210.svg" alt="img" width={941} height={210} priority/> 
                </div>
                <div className={styles.titleR}>
                    <p><Link href="#"><code className={styles.code}>Overview | Tổng quan</code></Link></p>
                    <p><Link href="#"><code className={styles.code}>Deliverables | Đầu ra</code></Link></p>
                    <p><Link href="#"><code className={styles.code}>Background | Hiện trạng</code></Link></p>
                    <p><Link href="#"><code className={styles.code}>Features | Chức năng</code></Link></p>
                    <p><Link href="#"><code className={styles.code}>Process | Quy trình</code></Link></p>
                    <p><Link href="#"><code className={styles.code}>Mockup | Sản phẩm</code></Link></p>
                    <br></br>
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
            <Image src="/s1_1227x347.svg" alt="img" width={1227} height={347} priority/>
        </div>

        <div id="#problem" className={styles.section2}>
            <Image src="/s2_1227x306.svg" alt="img" width={1227} height={306} priority/> 
        </div>
        <br></br>
        <div id="#problem" className={styles.section2}>
            <Image src="/h11_1227x110.svg" alt="img" width={1227} height={110} priority/> 
        </div>
        <br></br>
        <div id="#problem" className={styles.section2}>
            <Image src="/h211_1227x30.svg" alt="img" width={1227} height={30} priority/> 
        </div>
        <br></br>
        <div id="#problem" className={styles.section2}>
            <Image src="/s3_1227x389.svg" alt="img" width={1227} height={389} priority/> 
        </div>
        <br></br>
        <div id="#problem" className={styles.section2}>
            <Image src="/h212_1227x30.svg" alt="img" width={1227} height={30} priority/> 
        </div>
        <br></br>
        
        <div id="#problem" className={styles.section2}>
            <Image src="/s4_1227x1082.svg" alt="img" width={1227} height={1082} priority/> 
        </div>
        <br></br>
        <div id="#problem" className={styles.section2}>
            <Image src="/h213_1227x30.svg" alt="img" width={1227} height={30} priority/> 
        </div>
        <br></br>
        <div id="#problem" className={styles.section2}>
            <Image src="/h3_1227x30.svg" alt="img" width={1227} height={30} priority/> 
        </div>
        <br></br>
        <div id="#problem" className={styles.section2}>
            <Image src="/s6_1227x190.svg" alt="img" width={1227} height={190} priority/> 
        </div>
         
        

    </div>
  )
}
