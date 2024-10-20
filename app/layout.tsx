
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/components/header/Index"
import Footer from '@/components/homeContent/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SAYAN'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
      <link rel="icon" href="icons/logosmall.png" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}