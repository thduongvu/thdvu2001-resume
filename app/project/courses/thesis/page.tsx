import React from 'react'
import styles from '../../style.module.css'
import Image from 'next/image';


export default function Thesis() {
  return (
    <div>
        <div className={styles.titlespace}>
            <div className={styles.title}>
                <div className={styles.titleL}>
                    <h1>Application of Process Mining technology<br></br>in the Production Industry</h1>
                    <p>Áp dụng kĩ thuật Khai phá quy trình trong lĩnh vực sản xuất</p>
                </div>
                
            </div>
        </div>
        <div className={styles.notfound}>
            <Image src="/notfound.gif" alt="my gif" height={600} width={800} />
        </div>
    </div>
  )
}
