import Image from 'next/image'
import styles from './page.module.css'
import { Metadata } from 'next'
import Link from 'next/link'
 
export const metadata: Metadata = {
  title: 'Home | Thuy Duong Portfolio',
}

export default function Home() {
  return (
    <div>
      <div className={styles.center}>
        <h1>hi! my name is <span>Thuy Duong</span></h1>
        <p> Welcome to my portfolio!  
        </p>
        <Link href="/project" className={styles.button}>Check Out My Projects </Link>

        <div className={styles.line}></div>

        <div className={styles.aboutme}>
            <div className={styles.aboutme_inside}>
                <div className={styles.aboutme_des}>
                    <h3>About me</h3>
                    <Image src="/abtme_1227x294.svg" alt="avatar" width={1227} height={294} priority/>
                </div>
            </div>
            <br></br>
            <br></br>
            <Link href="#footer_footer" className={styles.buttonup}>Contact Me</Link>
        </div>

        <div className={styles.line}></div>

        <h3>What I can do?</h3>
        
        <div className={styles.services}>
            <div className={styles.roles}>
                <Link href="#detail_role"><Image src="/1_283x42.svg" alt="avatar" width={283} height={42} priority/></Link>
            </div>
            <div className={styles.roles}>
                <Link href="#detail_role"><Image src="/2_283x42.svg" alt="avatar" width={283} height={42} priority/></Link>
            </div>
            <div className={styles.roles}>
                <Link href="#footer_footer"><Image src="/3_283x42.svg" alt="avatar" width={283} height={42} priority/></Link>
            </div>
        </div>
        <div id="detail_role" className={styles.section3}>
        <Image src="/detail_1227x1140.svg" alt="img" width={1227} height={1140} priority/> 
    </div>
      </div>

    </div>
  )
}
