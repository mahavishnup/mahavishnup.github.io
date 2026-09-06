import { ProjectGrid } from '@/components/projects/project-grid'
import { projects } from '@/lib/static-data'

export const metadata = {
  title: 'Projects',
  description:
    'A showcase of full-stack web development projects built with Laravel, Next.js, React, and modern technologies.',
  openGraph: {
    title: 'Projects — Mahavishnu',
    description:
      'Explore real-world projects from booking platforms to AI chatbots.',
  },
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-20 pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter md:text-6xl">
            My Projects
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl md:text-xl/relaxed">
            Production applications I&apos;ve built across AI, logistics,
            tourism, e-commerce, and enterprise automation.
          </p>
        </div>

        <ProjectGrid projects={projects} />
      </div>
    </main>
  )
}
