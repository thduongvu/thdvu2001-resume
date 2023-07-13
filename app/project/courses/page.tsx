import React from 'react'
import styles from "app/project/style.module.css";
import Image from 'next/image'
import Link from 'next/link'
import Coursesproj from '../../../components/coursesproj'
import IntroProject from '../../../components/introproject'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects/ Courses Projects | Thuy Duong Portfolio',
}

export default function Courses() {
    return (
        <div>
            <div className={styles.intro}>
                <IntroProject />
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
                <Coursesproj />
            </div>
        </div>
    )
  }