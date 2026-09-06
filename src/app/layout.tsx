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

import { Analytics } from '@/components/analytics'

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
    default: 'Mahavishnu Ponnusamy — Senior Full Stack Engineer | AI & Backend',
    template: '%s | Mahavishnu Ponnusamy',
  },
  description:
    'Senior Full Stack Engineer with 6 years of experience architecting enterprise applications, REST APIs, and AI-powered systems. Expert in Laravel, FastAPI, Python, React.js, PostgreSQL, and cloud infrastructure. Experienced in AI/LLM integrations and production deployments.',
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
  authors: [{ name: 'Mahavishnu Ponnusamy', url: BASE_URL }],
  creator: 'Mahavishnu Ponnusamy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Mahavishnu — Engineering Scalable Web Solutions',
    title: 'Mahavishnu Ponnusamy — Senior Full Stack Engineer | AI & Backend',
    description:
      'Senior Full Stack Engineer specializing in Laravel, FastAPI, React.js, Python AI systems, and cloud infrastructure. Building scalable enterprise solutions.',
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
    title: 'Mahavishnu Ponnusamy',
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
    name: 'Mahavishnu Ponnusamy',
    url: BASE_URL,
    jobTitle: 'Senior Full Stack Engineer',
    description:
      'Senior Full Stack Engineer with 6 years of experience architecting enterprise applications, REST APIs, and AI-powered systems. Expert in Laravel, FastAPI, Python, React.js, PostgreSQL, and cloud infrastructure.',
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
    name: 'Contact Mahavishnu Ponnusamy',
    description:
      'Get in touch with Mahavishnu for scalable web development, Laravel consulting, or React projects.',
    url: `${BASE_URL}#Contacts`,
  }

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

        {/* Analytics: GTM + GA via @next/third-parties */}
        <Analytics />

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
