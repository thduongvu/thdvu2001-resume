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
        <h1>Seamless Processes<br></br>Start Here.</h1>
        <p>Check your process reality as it is.<br></br>Unbiased, objective, exact.</p>
        <Link href="/project" className={styles.button}>Check Out My Projects </Link>

        <div className={styles.line}></div>

        <div className={styles.aboutme}>
            <div className={styles.aboutme_inside}>
                <div className={styles.aboutme_des}>
                    <h3>About me</h3>
                    <p> I am currently a final year student at University of Information Technology - VNU HCM based Information Systems 
                      <br></br>with a goal-driven creative mindset and passion for learning and innovating.
                      <br></br>Currently working as a software developer at FPT and as a Freelance Content Writer for Pepper Content.
                      <br></br>Outside work, I occasionally blog on Medium. Off-screen, I sketch my thoughts here!
                    </p>
                </div>
                <Image src="/ me_00c488.svg" alt='' width={306} height={282.573} priority/>
            </div>
            <Link href="#footer_footer" className={styles.buttonup}>Contact Me</Link>
        </div>

        <div className={styles.line}></div>

        <h3>What I Do?</h3>
        <div className={styles.services}>
            <div className={styles.roles}>
              <Image src="/pic1.png" alt='' width={80} height={40} priority/>
              <h4>Business Analyst</h4>
              <h5>I offer world-class custom software development services designed specifically for your business and ready to satisfy your exclusive needs.</h5>
            </div>
            <div className={styles.roles}>
              <Image src="/pic2.png" alt='' width={80} height={40} priority/>
              <h4>System Analyst</h4>
              <h5>I sync Mpesa web API with websites to enable automation of payments verification, disbursements, and payment record management.</h5>
            </div>
            <div className={styles.roles}>
              <Image src="/pic3.png" alt='' width={80} height={40} priority/>
              <h4>Software Deployment</h4>
              <h5>I offer API integration service in existing applications or in software I create from scratch.</h5>
            </div>
        </div>
      </div>

    </div>
  )
}
