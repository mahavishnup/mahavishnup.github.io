import { getBlogs, getBlogBySlug } from '@/lib/blog-data'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import 'highlight.js/styles/github-dark.min.css'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, CalendarIcon, Clock } from 'lucide-react'
import type { Metadata } from 'next'
import { env } from '@/env'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const blogs = await getBlogs()
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt || 'Read this article on my portfolio.',
    openGraph: {
      title: post.title,
      description: post.excerpt || '',
      type: 'article',
      publishedTime: post.createdAt,
      authors: ['Mahavishnu'],
      images: post.coverImage ? [post.coverImage] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || '',
      images: post.coverImage ? [post.coverImage] : [],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogBySlug(slug)

  if (!post) {
    notFound()
  }

  // Format date
  const date = new Date(post.createdAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  // Calculate read time
  const wordsPerMinute = 200
  const words = post.content.split(/\s+/).length
  const readTime = Math.ceil(words / wordsPerMinute)

  const BASE_URL = env.NEXT_PUBLIC_SITE_URL

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || '',
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Person',
      name: 'Mahavishnu P',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: 'Mahavishnu P',
      url: BASE_URL,
    },
    url: `${BASE_URL}/blogs/${slug}`,
    ...(post.coverImage && {
      image: [post.coverImage],
    }),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen px-4 py-20 md:px-6">
        <div className="mx-auto max-w-4xl">
          <Button
            variant="ghost"
            asChild
            className="mb-8 transition-transform hover:-translate-x-2.5"
          >
            <Link href="/blogs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <article className="space-y-8">
            <div className="space-y-4 text-center">
              <div className="flex flex-wrap justify-center gap-2">
                {post.tags &&
                  Array.isArray(post.tags) &&
                  (post.tags as string[]).map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
              </div>
              <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                {post.title}
              </h1>
              <div className="text-muted-foreground flex items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{readTime} min read</span>
                </div>
              </div>
            </div>

            <div className="bg-muted relative aspect-video w-full overflow-hidden rounded-xl border">
              {post.coverImage ? (
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="from-primary/10 text-muted-foreground absolute inset-0 flex items-center justify-center bg-linear-to-br to-purple-500/10">
                  No Cover Image
                </div>
              )}
            </div>

            <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}
