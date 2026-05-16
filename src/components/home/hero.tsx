'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Youtube,
  Instagram,
} from 'lucide-react'
import HeroScene from '@/components/3d/HeroScene'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      {/* Ambient Glow Blobs */}
      <div className="animate-blob absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-purple-500 opacity-15 mix-blend-multiply blur-3xl filter md:h-96 md:w-96 dark:opacity-20" />
      <div className="animate-blob animation-delay-2000 absolute top-1/4 -right-20 h-72 w-72 rounded-full bg-blue-500 opacity-15 mix-blend-multiply blur-3xl filter md:h-96 md:w-96 dark:opacity-20" />
      <div className="animate-blob animation-delay-4000 absolute bottom-1/4 left-1/3 h-72 w-72 rounded-full bg-pink-500 opacity-10 mix-blend-multiply blur-3xl filter md:h-96 md:w-96 dark:opacity-20" />

      {/* 3D Scene as subtle background — lower opacity on light mode for readability */}
      <div className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-60">
        <HeroScene />
      </div>

      {/* Subtle overlay gradient to improve text readability on desktop */}
      <div className="from-background/60 to-background/80 dark:from-background/40 dark:to-background/60 pointer-events-none absolute inset-0 bg-linear-to-b via-transparent" />

      {/* Content — fully centered stack */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center space-y-6 rounded-2xl p-6 md:space-y-8 md:p-12 lg:p-16"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="bg-primary/10 text-primary border-primary/20 shadow-primary/5 inline-block rounded-full border px-5 py-2 text-sm font-medium shadow-lg backdrop-blur-md">
              🚀 Senior Full-Stack Developer · 5+ Years · 20+ Projects
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="from-foreground via-primary bg-linear-to-r to-purple-600 bg-clip-text text-5xl font-bold tracking-tighter text-transparent drop-shadow-sm sm:text-6xl md:text-8xl lg:text-9xl"
          >
            Mahavishnu
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed font-light sm:text-lg md:text-xl lg:text-2xl"
          >
            Architecting scalable SaaS platforms,{' '}
            <span className="text-foreground font-semibold">
              AI-assisted workflows
            </span>{' '}
            & enterprise booking systems with{' '}
            <span className="text-foreground decoration-primary/50 font-semibold underline decoration-2 underline-offset-4">
              Laravel
            </span>
            ,{' '}
            <span className="text-foreground font-semibold underline decoration-blue-500/50 decoration-2 underline-offset-4">
              React / Next.js
            </span>{' '}
            &{' '}
            <span className="text-foreground font-semibold underline decoration-purple-500/50 decoration-2 underline-offset-4">
              FastAPI
            </span>
            .
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 pt-2"
          >
            <Button
              size="lg"
              className="group rounded-full px-6 md:px-8"
              asChild
            >
              <Link href="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-6 backdrop-blur-sm md:px-8"
              asChild
            >
              <Link href="/Mahavishnu_P_CV.pdf" target="_blank" download>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Link>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-muted-foreground flex justify-center gap-3 pt-4 md:gap-5"
          >
            {[
              {
                href: 'https://github.com/mahavishnup',
                icon: Github,
                label: 'GitHub',
              },
              {
                href: 'https://www.linkedin.com/in/developermahavishnu/',
                icon: Linkedin,
                label: 'LinkedIn',
              },
              {
                href: 'https://www.youtube.com/@mahavishnu9312',
                icon: Youtube,
                label: 'YouTube',
              },
              {
                href: 'https://www.instagram.com/developermahavishnu/',
                icon: Instagram,
                label: 'Instagram',
              },
            ].map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                className="hover:text-primary hover:border-primary/20 hover:bg-primary/5 rounded-full border border-transparent p-2.5 backdrop-blur-sm transition-all md:p-3"
              >
                <Icon className="h-5 w-5 md:h-6 md:w-6" />
                <span className="sr-only">{label}</span>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-muted-foreground text-xs tracking-widest uppercase">
            Scroll
          </span>
          <div className="border-muted-foreground/30 h-8 w-5 rounded-full border-2 p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="bg-muted-foreground h-1.5 w-1.5 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
