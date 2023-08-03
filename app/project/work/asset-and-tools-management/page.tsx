'use client'
import React from 'react'
import styles from '../../style.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Tooltip} from '@nextui-org/react'


export default function AssetMgt() {
  return (
    <div className={styles.titlespace}>
    <div className={styles.title}>
        <div className={styles.titleL}>
            <h1>Asset & Tool Management</h1>
            <p>Quản lý Tài sản và Công cụ lao động</p>
            <br></br>
            <br></br>
            <Tooltip content="Nội dung dự án vẫn được cập nhật" placement="right">
                <h2>20-06-2023 12:01:41</h2> 
            </Tooltip>
        </div>
        <div className={styles.titleR}>
            <Image src="/hiring2.svg" alt="img" width={500} height={300} priority/>
        </div>
    </div>

    <div className={styles.title}>
            <div className={styles.titleL}>
                <Image src="/timelinerm.png" alt="img" width={941} height={216} priority/> 
                <h3>Quy trình thực hiện và tương tác với các bên liên quan</h3>
            </div>
            <div className={styles.titleR}>
                <p><Link href="/"><code className={styles.code}>Context</code></Link></p>
                <p><Link href="/"><code className={styles.code}>Problem Statement</code></Link></p>
                <p><Link href="/"><code className={styles.code}>Feature / Requirements</code></Link></p>
                <p><Link href="/"><code className={styles.code}>Userflow & Mocks (Interface)</code></Link></p>
                <p><Link href="/"><code className={styles.code}>Product Architecture & Components</code></Link></p>
                <p><Link href="/"><code className={styles.code}>Other Considerations</code></Link></p>
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
        <Image src="/problem.svg" alt="img" width={121} height={198} priority/> 
    </div>

    <div id="#problem" className={styles.section2}>
        <Image src="/solution.svg" alt="img" width={119} height={198} priority/> 
    </div>

    <div className={styles.section3}>
        <Image src="/others.svg" alt="img" width={100} height={198} priority/> 
    </div>
</div>
  )
}
