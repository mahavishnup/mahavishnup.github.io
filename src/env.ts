import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z
    .string()
    .url()
    .default('https://mahavishnup.github.io'),
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  NEXT_PUBLIC_FORMSPREE_URL: z.string().url().optional(),
  NEXT_PUBLIC_NEWSLETTER_URL: z.string().url().optional(),
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: z.string().optional(),
  NEXT_PUBLIC_GA_ID: z.string().optional(),
})

const processEnv = {
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_FORMSPREE_URL: process.env.NEXT_PUBLIC_FORMSPREE_URL,
  NEXT_PUBLIC_NEWSLETTER_URL: process.env.NEXT_PUBLIC_NEWSLETTER_URL,
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
}

// Validate environment variables
const parsed = envSchema.safeParse(processEnv)

if (!parsed.success) {
  console.error(
    '❌ Invalid environment variables:',
    parsed.error.flatten().fieldErrors
  )
  throw new Error('Invalid environment variables')
}

export const env = parsed.data
