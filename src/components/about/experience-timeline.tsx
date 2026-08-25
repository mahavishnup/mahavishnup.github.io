'use client'

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

const experiences = [
  {
    year: 'Jul 2024 – Present',
    title: 'PHP Developer',
    company: 'Hectadata Pvt Ltd · Remote, Malaysia',
    description:
      'Developed applications using Laravel, React.js, FastAPI, and PostgreSQL across multiple business domains. Built AI-assisted legal analysis systems using FastAPI, React.js, LangChain, Qdrant, and RAG-based retrieval with multi-agent workflows. Built vehicle monitoring and overload detection systems using Laravel, React.js, Inertia.js, RabbitMQ, and Redis processing millions of records daily. Developed logistics data extraction workflows for scanned images, PDFs, text, and XLSX using OCR, LLM APIs, and structured data processing. Designed and deployed applications across on-premise and cloud environments using Nginx, load balancing, and Bash, while optimizing APIs, database queries, and background processing for reliability and performance.',
    tech: [
      'Laravel',
      'FastAPI',
      'React.js',
      'Inertia.js',
      'TypeScript',
      'PostgreSQL',
      'RabbitMQ',
      'Redis',
      'LangChain',
      'Qdrant',
      'OCR',
    ],
  },
  {
    year: 'Sep 2020 – Jun 2024',
    title: 'Web Developer',
    company: 'Byrut Business Solutions · Remote, Andaman',
    description:
      'Delivered 20+ applications across tourism, booking, e-commerce, management, and business automation. Developed Laravel/PHP REST APIs, booking engines, admin systems, pricing workflows, and scalable business platforms for diverse production requirements. Scaled a tourism booking platform supporting 25,000+ users across hotel, ferry, cab, and boat services. Built React.js/Next.js applications, integrated payment gateways and third-party services, and managed deployments using Nginx, Laravel Forge, and DigitalOcean.',
    tech: [
      'Laravel',
      'PHP',
      'React.js',
      'Next.js',
      'Inertia.js',
      'MySQL',
      'PostgreSQL',
      'Tailwind CSS',
      'DigitalOcean',
    ],
  },
]

export function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Vertical timeline line */}
      <div className="bg-border absolute top-0 bottom-0 left-0 hidden w-px md:left-[200px] md:block" />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-0"
          >
            <div className="relative flex flex-col md:flex-row md:items-start">
              {/* Year column (fixed width) */}
              <div className="hidden w-[200px] shrink-0 pr-10 text-right md:block">
                <span className="text-muted-foreground font-mono text-sm">
                  {exp.year}
                </span>
              </div>

              {/* Dot on the timeline */}
              <div className="bg-primary ring-background absolute top-1.5 -left-[5px] h-3 w-3 rounded-full ring-4 md:left-[194px]" />

              {/* Content */}
              <div className="flex-1 md:pl-10">
                {/* Mobile Year */}
                <div className="text-muted-foreground mb-3 ml-4 flex items-center gap-2.5 text-sm md:hidden">
                  <Calendar className="h-4 w-4" />
                  {exp.year}
                </div>

                {/* Mobile vertical line */}
                <div className="border-muted md:border-l-0">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <div className="text-primary mb-2 font-medium">
                    {exp.company}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-secondary/50 text-secondary-foreground rounded-md px-2.5 py-1 text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
