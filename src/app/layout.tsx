import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { env } from '@/env'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

import Script from 'next/script'

const BASE_URL = env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  verification: {
    google: env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  title: {
    default: 'Mahavishnu P — Full Stack Developer & Laravel Specialist',
    template: '%s | Mahavishnu P',
  },
  description:
    'Senior Full-Stack Developer with 5+ years building scalable booking platforms, SaaS apps, and e-commerce solutions. Expert in Laravel, React, Next.js & FastAPI. I help businesses grow traditionally through modern web architecture.',
  keywords: [
    'mahavishnu',
    'mahavishnup',
    'mahavishnu career',
    'Laravel Developer',
    'Full-Stack Developer',
    'PHP Developer',
    'Next.js Developer',
    'React Developer',
    'FastAPI Developer',
    'webdevelopment',
    'webdesign',
    'webdesigntips',
    'studentcareer',
    'professional design',
    'Booking Platform',
    'Tourism',
    'Tamil Nadu',
  ],
  authors: [{ name: 'Mahavishnu P', url: BASE_URL }],
  creator: 'Mahavishnu P',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Mahavishnu — Engineering Scalable Web Solutions',
    title: 'Mahavishnu P — Senior Full-Stack Developer',
    description:
      'Expert Laravel & ReactJS specialist building scalable web solutions for tourism, travel & hospitality.',
    images: [
      {
        url: '/favicon.png',
        width: 1200,
        height: 630,
        alt: 'Mahavishnu — Engineering Scalable Web Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahavishnu — Engineering Scalable Web Solutions',
    description:
      'Senior Laravel-focused Full-Stack Developer. Portfolio, tutorials, and architecture insights.',
    images: ['/favicon.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  appleWebApp: {
    title: 'Mahavishnu P',
    statusBarStyle: 'default',
    capable: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mahavishnu P',
    url: BASE_URL,
    jobTitle: 'Senior Full Stack Developer',
    description:
      'Expert Laravel & ReactJS specialist building scalable web solutions for tourism, travel & hospitality.',
    sameAs: [
      'https://github.com/mahavishnup',
      'https://www.linkedin.com/in/developermahavishnu',
      'https://www.instagram.com/developermahavishnu',
      'https://www.youtube.com/@mahavishnu9312',
      'https://linktr.ee/Mahavishnup',
      'https://wa.me/message/U6MXBH4QLX4XA1',
      'https://mahavishnup.github.io',
    ],
  }

  const contactLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Mahavishnu P',
    description:
      'Get in touch with Mahavishnu for scalable web development, Laravel consulting, or React projects.',
    url: `${BASE_URL}#Contacts`,
  }

  const gaId = env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLd) }}
        />

        {/* Google Analytics (gtag.js) */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
