"use client"


import './globals.css'
import { Inter } from 'next/font/google'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <BrowserRouter>
      <CacheProvider>
      <ChakraProvider>
        {children}
        </ChakraProvider>
        </CacheProvider>
        </BrowserRouter>
        </body>
    </html>
  )
}


