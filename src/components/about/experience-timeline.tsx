'use client'

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

const experiences = [
  {
    year: 'Jul 2024 – Present',
    title: 'PHP Developer',
    company: 'Hectadata Pvt Ltd · Remote, Malaysia',
    description:
      'Architecting enterprise-grade applications using Laravel, PHP, and FastAPI. Developing sophisticated AI workflows using LangChain and LangGraph for complex legal analysis and automated summarization. Managing high-throughput message processing with RabbitMQ and database systems with MySQL/PostgreSQL.',
    tech: [
      'Laravel',
      'FastAPI',
      'LangChain',
      'LangGraph',
      'RabbitMQ',
      'Pinecone',
      'React.js',
    ],
  },
  {
    year: 'Nov 2020 – Jun 2024',
    title: 'Web Developer',
    company: 'Byrut Business Solutions · Remote, Andaman',
    description:
      'Delivered 20+ client-facing tourism and e-commerce projects using Laravel, React.js, MySQL, and Next.js. Built a tourism booking platform with hotel, ferry, cab, and boat modules — used by 25,000+ users/month. Integrated payment gateway and WhatsApp automation for confirmations.',
    tech: ['Laravel', 'React.js', 'Next.js', 'MySQL', 'Razorpay'],
  },
  {
    year: 'Sep 2020 – Nov 2020',
    title: 'Web Designer & Web Developer Intern',
    company: 'Byrut Business Solutions · Remote, Andaman',
    description:
      'Developed a Quiz Portal and redesigned client websites using Laravel, JS, HTML/CSS. Improved user experience, reduced page load times, and deployed via GitHub & Heroku.',
    tech: ['Laravel', 'JavaScript', 'HTML/CSS', 'Heroku'],
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
