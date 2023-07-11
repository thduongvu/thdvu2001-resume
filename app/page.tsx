import Image from 'next/image'
import styles from './page.module.css'
import { Metadata } from 'next'
import Link from 'next/link'
 
export const metadata: Metadata = {
  title: 'Thdvu resume homepage',
}

export default function Home() {
  return (
    <div className={styles.center}>
      <h1>Seamless Processes<br></br>Start Here.</h1>

      <p>Check your process reality as it is.<br></br>
      Unbiased, objective, exact.</p>

      <Link id="btn">View my projects</Link>

      <h2>My Projects</h2>

    </div>

    
  )
}
