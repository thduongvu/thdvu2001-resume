import React from 'react'
import styles from "app/project/style.module.css";
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Thuy Duong Porfolio | Projects',
}

export default function Courses() {
    return (
      <div>
        <div className={styles.intro}>
          <div className={styles.left}>
            <h1>Projects</h1>

            <p>Download our free materials or watch the webinars,<br></br>
            and learn how process mining can provide value for your business.</p>
          </div>
      </div>
      <div className={styles.content}>
        <ul className={styles.listing_tags}>
          <li>
            <Link href="/project" className={styles.tabs}>
              <Image src="/blog-articles.svg" width={18} height={14} priority/>
              &nbsp;
              All 
              <div className={styles.tabs_under_hover}></div>
            </Link>
          </li>
          <li>
            <Link href="/project/work" className={styles.tabs}>
              <Image src="/blog-partners.svg" width={18} height={14} priority/>
              &nbsp;
              Work Experience
              <div className={styles.tabs_under_hover}></div>
            </Link>
          </li>
          <li>
            <Link href="/project/courses" className={styles.tabs}>
              <Image src="/resources-guide.svg" width={14} height={18} priority/>
              &nbsp;
              Course Projects
              <div className={styles.tabs_under_hover}></div>
              <div className={styles.tabs_under}></div>
            </Link>
          </li>
        </ul>
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

      </div>
    </div>
      </div>
    )
  }