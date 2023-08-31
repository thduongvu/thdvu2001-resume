import React from 'react'
import styles from "app/project/style.module.css";
import Image from 'next/image'
import Link from 'next/link'

export default function Coursesproj() {
  return (
    <div className={styles.grid}>
        <div className={styles.card} >
          <figure className={styles.item_img} style={{width: 'auto', height: 'auto'}}>
              <a href='#'>
                <Image src="/project04.png" alt="thumbnail" layout='fill' objectFit='contain' />
              </a>
          </figure>
          <p><span>Thesis</span></p>
          <h2>Áp dụng kĩ thuật Khai phá quy trình (process mining) trong lĩnh vực sản xuất</h2>
          <br></br>
          <Link href="/project/courses/thesis" className={styles.arrow}> </Link>
        </div>
    </div>
  )
}
