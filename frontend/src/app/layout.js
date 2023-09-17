import './globals.css'
import { Open_Sans } from 'next/font/google'

const myFont = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Purdue Class Finder',
  description: 'Explore Purdue Courses Easily',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  )
}
