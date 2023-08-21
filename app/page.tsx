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
                      <br></br> I’m very interested in creative solutions and want to improve people's work and lives through creating valuable tools and products.
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
              <Image src="/pic1.png" alt="role1" width={80} height={40} priority/>
              <h4>Business Analyst</h4>
              <h6>I offer world-class custom software development services designed specifically for your business and ready to satisfy your exclusive needs.</h6>
            </div>
            <div className={styles.roles}>
              <Image src="/pic2.png" alt="role2" width={80} height={40} priority/>
              <h4>System Analyst</h4>
              <h6>I sync Mpesa web API with websites to enable automation of payments verification, disbursements, and payment record management.</h6>
            </div>
            <div className={styles.roles}>
              <Image src="/pic3.png" alt="role3" width={80} height={40} priority/>
              <h4>Software Deployment</h4>
              <h6>I offer API integration service in existing applications or in software I create from scratch.</h6>
            </div>
        </div>
      </div>

    </div>
  )
}
