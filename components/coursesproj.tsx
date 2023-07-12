import React from 'react'
import styles from "app/project/style.module.css";
import Image from 'next/image'
import Link from 'next/link'

export default function Coursesproj() {
  return (
    <coursesproj>
        <div className={styles.grid}>
        <div href="/project/courses/thesis" className={styles.card} >
          <figure className={styles.item_img} style={{width: 'auto', height: 'auto'}}>
              <a href='/project/courses/thesis'>
                <Image src="/ai-root-cause-analysis-categorical-metrics-2.png" layout='fill' objectFit='contain' />
              </a>
          </figure>
          <p><span>Thesis</span></p>
          <h2>Xây dựng hệ thống quản lý sản xuất tích hợp khai phá quy trình</h2>
          <br></br>
          <Link href="/project/courses/thesis" className={styles.arrow}> </Link>
        </div>

        <div href="/" className={styles.card} >
          <figure className={styles.item_img} style={{width: 'auto', height: 'auto'}}>
              <a href='/'>
                <Image src="/minit-analyst-business-rules-screen-device-1.png" layout='fill' objectFit='contain' />
              </a>
          </figure>
          <p><span>Product</span></p>
          <h2>Minit Boosts Partner Program After VP of Alliances and Partners Joins the Team</h2>
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
          <h2>Minit Named a Leader in 2021 Everest Group PEAK Matrix Report for Process Mining</h2>
          <br></br>
          <Link href="/" className={styles.arrow}> </Link>
        </div>
        </div>
    </coursesproj>
  )
}
