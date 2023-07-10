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
      <h1>Seamless Processes
      Start Here.</h1>

      <p>Check your process reality as it is.
      Unbiased, objective, exact.</p>

    </div>

    
  )
}
