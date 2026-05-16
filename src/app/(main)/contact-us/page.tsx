import { ContactForm } from '@/components/contact/contact-form'
import { Button } from '@/components/ui/button'
import { Mail, MapPin, Github, Linkedin, Instagram } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Mahavishnu for web development projects, consulting, or collaboration opportunities.',
  openGraph: {
    title: 'Contact Mahavishnu',
    description:
      'Reach out for web development projects, consulting, or collaboration.',
  },
}

export default function ContactPage() {
  return (
    <div className="container mx-auto min-h-screen px-4 py-20 md:px-6">
      <div className="mb-12 space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter md:text-6xl">
          Get in Touch
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl md:text-xl/relaxed">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-12 lg:grid-cols-2">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p className="text-muted-foreground">
              Feel free to reach out via email or connect with me on social
              media. I typically respond within 24 hours.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:selvamvishnu25@gmail.com"
                className="hover:text-primary flex items-center gap-3 text-lg transition-colors"
              >
                <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
                  <Mail className="h-5 w-5" />
                </div>
                selvamvishnu25@gmail.com
              </a>

              <div className="flex items-center gap-3 text-lg">
                <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
                  <MapPin className="h-5 w-5" />
                </div>
                Attur, Salem, Tamil Nadu, India
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Follow Me</h3>
            <div className="flex gap-4">
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <Link href="https://github.com/mahavishnup" target="_blank">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <Link
                  href="https://www.linkedin.com/in/developermahavishnu/"
                  target="_blank"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <Link
                  href="https://www.instagram.com/developermahavishnu/"
                  target="_blank"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
