import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

const myFont = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Purdue Class Finder',
  description: 'Explore Purdue Courses Easily',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  )
}
