'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Use one of the uploaded images in a real scenario
// import profileImg from "/profile-1.jpeg" // Example path, needs configuration

export default function About() {
  return (
    <section id="about" className="bg-background/50 py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-12 md:flex-row"
        >
          <div className="relative mx-auto aspect-square w-full max-w-md flex-1 md:mx-0">
            <div className="from-primary absolute inset-0 rotate-3 rounded-2xl bg-linear-to-tr to-purple-500 opacity-20 blur-xl" />
            <div className="border-primary/20 bg-muted relative h-full w-full overflow-hidden rounded-2xl border-2">
              <Image
                src="/profile-1.jpeg"
                alt="Mahavishnu Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-3xl font-bold md:text-5xl">About Me</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I&apos;m a Senior Full Stack Engineer with{' '}
              <span className="text-primary font-medium">6 years</span> of
              experience architecting and building enterprise applications, REST
              APIs, and AI-powered systems. Strong expertise in Laravel, PHP,
              React.js, FastAPI, Python, PostgreSQL, and cloud infrastructure.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Experienced in database optimization, distributed systems,
              asynchronous processing, AI/LLM integrations, and production
              deployments — delivering{' '}
              <span className="text-primary font-medium">
                20+ production projects
              </span>{' '}
              across tourism, e-commerce, legal tech, and enterprise platforms.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {['Laravel', 'FastAPI', 'React.js / Next.js', 'Python AI'].map(
                (skill) => (
                  <div
                    key={skill}
                    className="bg-card border-border/50 hover:border-primary/50 rounded-xl border p-4 text-center font-medium transition-colors"
                  >
                    {skill}
                  </div>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
