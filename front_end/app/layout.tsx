import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export const metadata: Metadata = {
  title: 'Mg Marketing Agency',
  description: 'Mg Marketing ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-Montserrat bg-body-white'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
