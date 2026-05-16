'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Loader2, Send } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { env } from '@/env'

export function ContactForm() {
  const [isPending, setIsPending] = useState(false)
  const [state, setState] = useState<{
    error: string | null
    success: boolean
  }>({ error: null, success: false })

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsPending(true)
    setState({ error: null, success: false })

    const form = event.currentTarget
    const formData = new FormData(form)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    }

    try {
      const endpoint = env.NEXT_PUBLIC_FORMSPREE_URL
      if (!endpoint) {
        throw new Error('Formspree endpoint not configured')
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        setState({ error: null, success: true })
        form.reset()
      } else {
        const errorData = await response.json()
        setState({
          error: errorData.error || 'Failed to send message. Please try again.',
          success: false,
        })
      }
    } catch (err) {
      console.error('Contact Form Error:', err)
      setState({
        error:
          'Failed to send message. Please check your connection and try again.',
        success: false,
      })
    } finally {
      setIsPending(false)
    }
  }

  return (
    <Card className="mx-auto w-full max-w-lg">
      <CardHeader>
        <CardTitle>Send a Message</CardTitle>
        <CardDescription>
          Have a project in mind or just want to say hi? Fill out the form
          below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {state.success ? (
          <div className="rounded-md bg-green-500/15 p-4 text-center text-green-600 dark:text-green-400">
            <h3 className="mb-1 font-semibold">Message Sent!</h3>
            <p className="text-sm">
              Thanks for reaching out. I&apos;ll get back to you soon.
            </p>
            <Button
              variant="link"
              onClick={() => setState({ error: null, success: false })}
              className="mt-2"
            >
              Send another message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your Name" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
              />
            </div>

            {state.error && (
              <p className="text-destructive text-sm font-medium">
                {state.error}
              </p>
            )}

            <Button className="w-full" type="submit" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
