import React from 'react'
import styles from "app/project/style.module.css";
import Image from 'next/image'
import Link from 'next/link'

export default function Coursesproj() {
  return (
    <div className={styles.grid}>
        <div className={styles.card} >
          <figure className={styles.item_img} style={{width: 'auto', height: 'auto'}}>
              <a href='/project/courses/thesis'>
                <Image src="/ai-root-cause-analysis-categorical-metrics-2.png" alt="thumbnail" layout='fill' objectFit='contain' />
              </a>
          </figure>
          <p><span>Thesis</span></p>
          <h2>Xây dựng hệ thống quản lý sản xuất tích hợp khai phá quy trình</h2>
          <br></br>
          <Link href="/project/courses/thesis" className={styles.arrow}> </Link>
        </div>
    </div>
  )
}
