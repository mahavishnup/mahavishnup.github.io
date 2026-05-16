'use client'

import Link from 'next/link'
import {
  Github,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Heart,
  Instagram,
  ExternalLink,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { env } from '@/env'
import { useState } from 'react'
export function Footer() {
  const currentYear = new Date().getFullYear()
  const [isPending, setIsPending] = useState(false)
  const [state, setState] = useState<{
    error: string | null
    success: string | null
  }>({ error: null, success: null })

  async function handleSubscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsPending(true)
    setState({ error: null, success: null })

    const form = event.currentTarget
    const formData = new FormData(form)
    const email = formData.get('email')

    try {
      const endpoint = env.NEXT_PUBLIC_NEWSLETTER_URL
      if (!endpoint) {
        // If no endpoint, we'll simulate success for now so the UI works
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setState({
          error: null,
          success: 'Successfully subscribed (Simulation)!',
        })
        form.reset()
        return
      }

      /**
       * NOTE: For now, we are using Formspree to collect emails.
       * To switch to Mailchimp or ConvertKit later:
       * 1. Get your API/Action URL from the provider.
       * 2. Update NEXT_PUBLIC_NEWSLETTER_URL in your .env.local file.
       * 3. You may need to adjust the body fields (e.g., 'EMAIL' instead of 'email')
       *    depending on the provider's API.
       */
      const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        setState({ error: null, success: 'Successfully subscribed!' })
        form.reset()
      } else {
        setState({
          error: 'Failed to subscribe. Please try again.',
          success: null,
        })
      }
    } catch (err) {
      console.error('Newsletter Error:', err)
      setState({
        error:
          'Failed to subscribe. Please check your connection and try again.',
        success: null,
      })
    } finally {
      setIsPending(false)
    }
  }

  return (
    <footer className="bg-muted/30 border-border/50 border-t pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              Mahavishnu
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Senior Full-Stack Developer specialising in Laravel, React &
              Next.js. Building scalable booking platforms, SaaS apps, and
              e-commerce solutions for tourism, travel & hospitality.
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:bg-primary/10 h-8 w-8 rounded-full"
              >
                <Link href="https://github.com/mahavishnup" target="_blank">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:bg-primary/10 h-8 w-8 rounded-full"
              >
                <Link
                  href="https://www.linkedin.com/in/developermahavishnu/"
                  target="_blank"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:bg-primary/10 h-8 w-8 rounded-full"
              >
                <Link
                  href="https://www.instagram.com/developermahavishnu/"
                  target="_blank"
                >
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:bg-primary/10 h-8 w-8 rounded-full"
              >
                <Link
                  href="https://www.youtube.com/@mahavishnu9312"
                  target="_blank"
                >
                  <Youtube className="h-4 w-4" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:bg-primary/10 h-8 w-8 rounded-full"
              >
                <Link href="https://linktr.ee/Mahavishnup" target="_blank">
                  <ExternalLink className="h-4 w-4" />
                  <span className="sr-only">Linktree</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/about-us"
                className="text-muted-foreground hover:text-primary w-fit transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/projects"
                className="text-muted-foreground hover:text-primary w-fit transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/services"
                className="text-muted-foreground hover:text-primary w-fit transition-colors"
              >
                Services
              </Link>
              <Link
                href="/blogs"
                className="text-muted-foreground hover:text-primary w-fit transition-colors"
              >
                Blogs
              </Link>
              <Link
                href="/contact-us"
                className="text-muted-foreground hover:text-primary w-fit transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:selvamvishnu25@gmail.com"
                className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"
              >
                <Mail className="h-4 w-4" />
                selvamvishnu25@gmail.com
              </a>
              <div className="text-muted-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Attur, Salem, Tamil Nadu, India
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to get the latest tutorials and tech insights.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-2">
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background"
                  required
                />
                <Button size="sm" type="submit" disabled={isPending}>
                  {isPending ? '...' : 'Subscribe'}
                </Button>
              </div>
              {state.success && (
                <p className="text-sm text-green-600">{state.success}</p>
              )}
              {state.error && (
                <p className="text-destructive text-sm">{state.error}</p>
              )}
            </form>
          </div>
        </div>

        <Separator className="bg-border/50" />

        <div className="text-muted-foreground mt-8 flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
          <p>© {currentYear} Copyrights. All rights reserved.</p>
          <div className="flex items-center gap-1">
            Made By <Heart className="h-3 w-3 fill-red-500 text-red-500" />{' '}
            Mahavishnu
          </div>
        </div>
      </div>
    </footer>
  )
}
