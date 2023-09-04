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
                    <p> I am currently a final year student at University of Information Technology - VNU HCM based Information Systems 
                      <br></br> with a strong interest in identifying problems, researching, and building solutions to solve them.
                      <br></br>
                      <br></br> I love to explore the world around me, always feel curious about how things work. 
                      <br></br> I &apos; m very interested in creative solutions and want to improve people &apos; s work and lives through creating valuable tools and products.
                      <br></br>
                      <br></br> In my work, my aim is to propose solutions and develop products that solve real (potential) problems for customers, markets and bring value to the business.
                      <br></br> 
                    </p>
                </div>
                <Image src="/me_00c488.svg" alt="avatar" width={323} height={327} priority/>
            </div>
            <Link href="#footer_footer" className={styles.buttonup}>Contact Me</Link>
        </div>

        <div className={styles.line}></div>

        <h3>What I Do?</h3>
        
        <div className={styles.services}>
            <div className={styles.roles}>
              <h4>Business Analyst</h4>
            </div>
            <div className={styles.roles}>
              <h4>Systems Analyst</h4>
            </div>
            <div className={styles.roles}>
              <h4>Software Deployment</h4>
            </div>
        </div>
      </div>

    </div>
  )
}
