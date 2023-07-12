import React from 'react'
import styles from "app/project/style.module.css";
import Image from 'next/image'
import Link from 'next/link'

export default function Workexp() {
  return (
    <workexp>
        <div className={styles.grid}>
        <div href="/" className={styles.card} >
          <figure className={styles.item_img} style={{width: 'auto', height: 'auto'}}>
              <a href='/'>
                <Image src="/Minit_5_2_Root_Cause_Analysis.png" layout='fill' objectFit='contain' />
              </a>
          </figure>
          <p><span>Product</span></p>
          <h2>Expansion module for SD Department</h2>
          <br></br>
          <Link href="/" className={styles.arrow}> </Link>
        </div>

        <div href="/" className={styles.card} >
          <figure className={styles.item_img} style={{width: 'auto', height: 'auto'}}>
              <a href='/'>
                <Image src="/minit-analyst-business-rules-screen-device-1.png" layout='fill' objectFit='contain' />
              </a>
          </figure>
          <p><span>Product</span></p>
          <h2>Minit Product Updates: New Data Sources, Data Refresh, Root Cause Analysis Update & More</h2>
          <br></br>
          <Link href="/" className={styles.arrow}> </Link>
        </div>

        <div href="/" className={styles.card} >
          <figure className={styles.item_img} style={{width: 'auto', height: 'auto'}}>
              <a href='/'>
                <Image src="/minit-analyst-business-rules-screen-device.png" layout='fill' objectFit='contain' />
              </a>
          </figure>
          <p><span>Product</span></p>
          <h2>Minit Product Updates: New Data Sources, Data Refresh, Root Cause Analysis Update & More</h2>
          <br></br>
          <Link href="/" className={styles.arrow}> </Link>
        </div>
        </div>
    </workexp>
  )
}
