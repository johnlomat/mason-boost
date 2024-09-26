import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Boost Your Contracting Business: More Customers, More Revenue | Mason Boost',
  description:
    'Discover how Mason Boost helps your contracting business attract more opportunities, gain new customers, and increase revenue. Get a free marketing strategy tailored to your needs. Start growing your business today without the hassle of marketing.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'text-[17px] antialiased',
          poppins.variable,
          geistSans.variable,
          geistMono.variable,
        )}
      >
        <div className="page-container font-poppins">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
