import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Github } from 'lucide-react'
import { projects } from '@/lib/static-data'
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

export default function Projects() {
  const featured = projects.filter((p) => p.featured).slice(0, 6)

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-xl md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A showcase of my recent work, featuring full-stack applications,
            open-source contributions, and technical experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <Card
              key={project.id}
              className="group border-border/50 bg-card/50 hover:bg-card/80 overflow-hidden transition-colors"
            >
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
              <CardHeader>
                <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
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

        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
