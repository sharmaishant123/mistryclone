"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { useEffect } from 'react'
import metadata from './metadata'
import Header from './common/Header'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './common/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     import('bootstrap/dist/js/bootstrap.bundle.min.js')
  //       .catch((err) => {
  //         console.error('Error loading Bootstrap script:', err);
  //       });
  //   }
  // }, []);
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  })
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
