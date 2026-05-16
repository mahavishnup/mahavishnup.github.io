'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ArrowUpRight, Github, Search } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import type { Project } from '@/lib/static-data'

interface ProjectGridProps {
  projects: Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [search, setSearch] = useState('')
  const [selectedTech, setSelectedTech] = useState<string | null>(null)

  // Extract all unique tech stacks
  const allTechs = Array.from(
    new Set(
      projects.flatMap((p) =>
        Array.isArray(p.techStack) ? (p.techStack as string[]) : []
      )
    )
  ).sort()

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(search.toLowerCase())
    const matchesTech = selectedTech
      ? Array.isArray(project.techStack) &&
        (project.techStack as string[]).includes(selectedTech)
      : true
    return matchesSearch && matchesTech
  })

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:w-96">
          <Search className="text-muted-foreground absolute top-2.5 left-3 h-4 w-4" />
          <Input
            placeholder="Search projects..."
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedTech === null ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedTech(null)}
          >
            All
          </Button>
          {allTechs.map((tech) => (
            <Button
              key={tech}
              variant={selectedTech === tech ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedTech(tech)}
            >
              {tech}
            </Button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="group border-border/50 bg-card/50 hover:bg-card/80 flex flex-col overflow-hidden transition-colors"
          >
            <Link href={`/projects/${project.slug}`} className="block">
              <div className="bg-muted relative aspect-video overflow-hidden">
                {project.coverImage ? (
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <>
                    <div className="from-primary/20 absolute inset-0 bg-linear-to-br to-purple-500/20 transition-transform duration-500 group-hover:scale-105" />
                    <div className="text-muted-foreground absolute inset-0 flex items-center justify-center font-medium">
                      {project.title} Preview
                    </div>
                  </>
                )}
              </div>
            </Link>
            <CardHeader>
              <Link href={`/projects/${project.slug}`}>
                <CardTitle className="hover:text-primary line-clamp-1 transition-colors">
                  {project.title}
                </CardTitle>
              </Link>
              <CardDescription className="line-clamp-2">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2">
                {Array.isArray(project.techStack) &&
                  (project.techStack as string[]).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              {project.githubUrl && (
                <Button variant="ghost" size="sm" asChild>
                  <Link href={project.githubUrl} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
              )}
              {project.liveUrl ? (
                <Button size="sm" asChild>
                  <Link href={project.liveUrl} target="_blank">
                    Live Demo
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <Button size="sm" variant="secondary" asChild>
                  <Link href={`/projects/${project.slug}`}>
                    Details
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-muted-foreground text-lg">
            No projects found matching your criteria.
          </p>
          <Button
            variant="link"
            onClick={() => {
              setSearch('')
              setSelectedTech(null)
            }}
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  )
}
