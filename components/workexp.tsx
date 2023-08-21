import React from 'react'
import styles from "app/project/style.module.css";
import Image from 'next/image'
import Link from 'next/link'

export default function Workexp() {
  return (
    <div className={styles.grid}>
        <div className={styles.card} >
          <figure className={styles.item_img} style={{width: 'auto', height: 'auto'}}>
              <a href='/project/work/business-travel-management'>
                <Image src="/Minit_5_2_Root_Cause_Analysis.png" alt="thumbnail" layout='fill' objectFit='contain' />
              </a>
          </figure>
          <p><span>Product</span></p>
          <h2>Business Travel & Expenses Management<br></br>Quản lý Công tác và Chi phí công tác</h2>
          <br></br>
          <Link href="/project/work/business-travel-management" className={styles.arrow}> </Link>
        </div>

        <div className={styles.card} >
          <figure className={styles.item_img} style={{width: 'auto', height: 'auto'}}>
              <a href='/project/work/recruitment-management'>
                <Image src="/minit-analyst-business-rules-screen-device-1.png" alt="thumbnail" layout='fill' objectFit='contain' />
              </a>
          </figure>
          <p><span>Product</span></p>
          <h2>Recruitment Management<br></br>Quản lý Tuyển dụng</h2>
          <br></br>
          <Link href="/project/work/recruitment-management" className={styles.arrow}> </Link>
        </div>

        <div className={styles.card} >
          <figure className={styles.item_img} style={{width: 'auto', height: 'auto'}}>
              <a href='/project/work/mini-module'>
                <Image src="/minit-analyst-business-rules-screen-device.png" alt="thumbnail" layout='fill' objectFit='contain' />
              </a>
          </figure>
          <p><span>Product</span></p>
          <h2>Expansion module for SD Department</h2>
          <br></br>
          <Link href="/project/work/mini-module" className={styles.arrow}> </Link>
        </div>

    </div>
  )
}
