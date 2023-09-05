 import React from 'react'
 import Image from 'next/image'
 import Link from 'next/link'
 import styles from '../app/page.module.css'
 import '../app/globals.css'



 export default function Navbar() {
   return (
     <nav className={styles.main}>
        <div className={styles.description}>
            <Link href="/">
                <Image src="/thdvu_FFFFFF.svg" alt="Logo" className={styles.resumeLogo} width={100} height={24} priority/>
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div className={styles.rssBlock}>
                <p className={styles.cnnContents}>
                    <span className={styles.marqueeStyle}>  &#10047;&nbsp; READY FOR WORK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                            &#10047;&nbsp; READY FOR WORK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                            &#10047;&nbsp; READY FOR WORK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                            &#10047;&nbsp; READY FOR WORK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
                    <span className={styles.marqueeStyle2}> &#10047;&nbsp; READY FOR WORK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                            &#10047;&nbsp; READY FOR WORK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                            &#10047;&nbsp; READY FOR WORK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                            &#10047;&nbsp; READY FOR WORK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </p>
            </div>
            
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div>
                <Link href="/"><code className={styles.code}>About</code></Link>
            </div>

            <div>
                <Link href="/project"><code className={styles.code}>Projects</code></Link>
            </div>

            <div>
                <Link href="#footer_footer"><code className={styles.code}>Contact</code></Link>
            </div>
        </div>   
     </nav>

   )
 }
 