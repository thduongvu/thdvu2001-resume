import React from 'react'
import styles from "app/project/style.module.css";
import Image from 'next/image'
import Link from 'next/link'

export default function Workexp() {
  return (
    <workexp>
        <div className={styles.grid}>
        <div href="/project/work/business-travel-management" className={styles.card} >
          <figure className={styles.item_img} style={{width: 'auto', height: 'auto'}}>
              <a href='/project/work/business-travel-management'>
                <Image src="/Minit_5_2_Root_Cause_Analysis.png" layout='fill' objectFit='contain' />
              </a>
          </figure>
          <p><span>Product</span></p>
          <h2>Business Travel And Expenses Management</h2>
          <br></br>
          <Link href="/project/work/business-travel-management" className={styles.arrow}> </Link>
        </div>

        <div href="/project/work/asset-and-tools-management" className={styles.card} >
          <figure className={styles.item_img} style={{width: 'auto', height: 'auto'}}>
              <a href='/project/work/asset-and-tools-management'>
                <Image src="/minit-analyst-business-rules-screen-device-1.png" layout='fill' objectFit='contain' />
              </a>
          </figure>
          <p><span>Product</span></p>
          <h2>Asset and Tools Management</h2>
          <br></br>
          <Link href="/project/work/asset-and-tools-management" className={styles.arrow}> </Link>
        </div>

        <div href="/project/work/mini-module" className={styles.card} >
          <figure className={styles.item_img} style={{width: 'auto', height: 'auto'}}>
              <a href='/project/work/mini-module'>
                <Image src="/minit-analyst-business-rules-screen-device.png" layout='fill' objectFit='contain' />
              </a>
          </figure>
          <p><span>Product</span></p>
          <h2>Expansion module for SD Department</h2>
          <br></br>
          <Link href="/project/work/mini-module" className={styles.arrow}> </Link>
        </div>
        </div>
    </workexp>
  )
}
