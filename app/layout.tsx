import './globals.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Porfolio of Thdvu',
  description: 'On my way',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
