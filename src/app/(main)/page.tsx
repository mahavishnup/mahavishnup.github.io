import Hero from '@/components/home/hero'
import About from '@/components/home/about'
import Projects from '@/components/home/projects'
import SkillsServices from '@/components/home/skills-services'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mahavishnu P — Senior Full Stack Developer & Laravel Specialist',
  description:
    'Senior Full-Stack Developer with 5+ years building scalable booking platforms, SaaS apps, and e-commerce solutions. Expert in Laravel, React, Next.js & FastAPI.',
  openGraph: {
    title: 'Mahavishnu P — Senior Full Stack Developer',
    description:
      'Senior Full-Stack Developer specializing in Laravel, Next.js, and modern web architecture. Building scalable web solutions for tourism, travel & hospitality.',
  },
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <Projects />
      <SkillsServices />
    </main>
  )
}
