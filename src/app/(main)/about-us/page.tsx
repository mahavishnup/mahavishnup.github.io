import { ExperienceTimeline } from '@/components/about/experience-timeline'
import { Button } from '@/components/ui/button'
import { Download, Mail, Award } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About',
  description:
    'Senior Full Stack Engineer with 6+ years of experience in PHP/Laravel, React.js, TypeScript, and FastAPI. Based in Salem, Tamil Nadu, India.',
  openGraph: {
    title: 'About Mahavishnu',
    description:
      'Senior Full Stack Engineer with 6+ years building production web applications, REST APIs, and business platforms.',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 pb-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tighter md:text-6xl">
            About Me
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg md:text-xl">
            6+ years of experience building production web applications, REST
            APIs, and business platforms. Based in Salem, Tamil Nadu, India.
          </p>
        </div>

        {/* Profile Section */}
        <div className="mb-24 grid items-center gap-12 md:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="from-primary absolute inset-0 rotate-3 rounded-3xl bg-linear-to-tr to-purple-500 opacity-20 blur-2xl"></div>
            <div className="border-muted bg-muted relative h-full w-full overflow-hidden rounded-3xl border-2">
              {/* Placeholder for actual profile image */}
              <Image
                src="/profile-1.jpeg" // Ensure this exists or fallback
                alt="Mahavishnu"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">The Journey</h2>
            <div className="text-muted-foreground space-y-4 text-lg">
              <p>
                I&apos;m Mahavishnu, a Senior Full Stack Engineer based in
                Salem, Tamil Nadu, India. I completed my B.Tech in Information
                Technology at Paavai Engineering College (2017–2021) and have
                been building production web applications since 2020.
              </p>
              <p>
                At Byrut Business Solutions LLP, I delivered 20+ production
                applications across tourism, booking, e-commerce, and business
                automation — including a platform supporting 25,000+ users
                across hotel, ferry, cab, and boat services.
              </p>
              <p>
                Since July 2024 at Hectadata India Technology Consulting Pvt
                Ltd, I&apos;ve been building AI-assisted legal analysis systems,
                vehicle monitoring and overload detection platforms, and
                logistics data extraction workflows using OCR, LLM APIs,
                LangChain, and Qdrant.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact-us">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <Link href="/Mahavishnu_P_CV.pdf" target="_blank" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mx-auto mb-24 max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:ml-[15%] md:text-left">
            Professional Experience
          </h2>
          <ExperienceTimeline />
        </div>

        {/* Education Section */}
        <div className="mx-auto mb-24 max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-left">
            Education
          </h2>
          <div className="space-y-8">
            <div className="bg-secondary/20 rounded-2xl border p-6 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold">
                    B.Tech in Information Technology
                  </h3>
                  <p className="text-primary font-medium">
                    Paavai Engineering College, Namakkal
                  </p>
                  <p className="text-muted-foreground mt-2">CGPA: 7.75/10</p>
                </div>
                <div className="bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium whitespace-nowrap">
                  Aug 2017 — June 2021
                </div>
              </div>
            </div>

            <div className="bg-secondary/20 rounded-2xl border p-6 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold">
                    Class XII Mathematical Biology
                  </h3>
                  <p className="text-primary font-medium">
                    Maruthi Higher Secondary School, Salem
                  </p>
                  <p className="text-muted-foreground mt-2">
                    State Board · Percentage: 81.75%
                  </p>
                </div>
                <div className="bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium whitespace-nowrap">
                  2017
                </div>
              </div>
            </div>

            <div className="bg-secondary/20 rounded-2xl border p-6 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold">Class X</h3>
                  <p className="text-primary font-medium">
                    Maruthi Higher Secondary School, Salem
                  </p>
                  <p className="text-muted-foreground mt-2">
                    State Board · Percentage: 84.8%
                  </p>
                </div>
                <div className="bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium whitespace-nowrap">
                  2015
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-left">
            Awards & Certifications
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Conference paper published on blockchain-based invoice factoring & secure credit-based training',
              '2nd Place — National Level Technical Symposium Paper Presentation on Artificial Intelligence',
              'Certificate of Participation — Smart India Hackathon 2020',
            ].map((award, i) => (
              <div
                key={i}
                className="bg-secondary/10 flex items-center gap-4 rounded-xl border p-5"
              >
                <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                  <Award className="h-5 w-5" />
                </div>
                <p className="text-sm leading-tight font-medium">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
