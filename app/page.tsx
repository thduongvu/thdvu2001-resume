import Image from 'next/image'
import styles from './page.module.css'
import { Metadata } from 'next'
import Link from 'next/link'
 
export const metadata: Metadata = {
  title: 'Thuy Duong Porfolio | Home',
}

export default function Home() {
  return (
    <div>
      <div className={styles.center}>
        <h1>Seamless Processes<br></br>Start Here.</h1>
        <p>Check your process reality as it is.<br></br>Unbiased, objective, exact.</p>
        <Link href="/" className={styles.button}>View my projects </Link>
        <div className={styles.line}></div>
        <h3>My Projects</h3>

      </div>

      <div className={styles.ingrid}>
        <div className={styles.grid}>
          <div href="/" className={styles.card} >
            <figure className={styles.item_img} style={{width: 'auto', height: 'auto'}}>
                <a href='/'>
                  <Image src="/ai-root-cause-analysis-categorical-metrics-2.png" layout='fill' objectFit='contain' />
                </a>
            </figure>
            <p><span>Product</span></p>
            <h2>Forget About Difficult-to-Understand Data. Minit Dashboards Are Here to Help</h2>
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

          <div href="/" className={styles.card} >
            <figure className={styles.item_img} style={{width: 'auto', height: 'auto'}}>
                <a href='/'>
                  <Image src="/Minit_5_2_Root_Cause_Analysis.png" layout='fill' objectFit='contain' />
                </a>
            </figure>
            <p><span>Product</span></p>
            <h2>Heijmans Gets to Heart of Data Gold Mine Faster with Process Mining</h2>
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
      </div>

    </div>
  )
}
