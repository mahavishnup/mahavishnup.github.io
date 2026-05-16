import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CalendarIcon, Clock } from 'lucide-react'
import type { Blog } from '@/lib/blog-data'

interface BlogCardProps {
  post: Blog
}

export function BlogCard({ post }: BlogCardProps) {
  // Format date
  const date = new Date(post.createdAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  // Calculate read time (rough estimate)
  const wordsPerMinute = 200
  const words = post.content.split(/\s+/).length
  const readTime = Math.ceil(words / wordsPerMinute)

  return (
    <Link href={`/blogs/${post.slug}`}>
      <Card className="hover:border-primary/50 group bg-card/50 h-full overflow-hidden transition-colors">
        <div className="bg-muted relative aspect-video overflow-hidden">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="from-primary/10 text-muted-foreground absolute inset-0 flex items-center justify-center bg-linear-to-br to-purple-500/10">
              <span>No Cover Image</span>
            </div>
          )}
        </div>
        <CardHeader className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {post.tags &&
              Array.isArray(post.tags) &&
              (post.tags as string[]).map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs font-normal"
                >
                  {tag}
                </Badge>
              ))}
          </div>
          <CardTitle className="group-hover:text-primary line-clamp-2 transition-colors">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3 text-sm">
            {post.excerpt}
          </p>
        </CardContent>
        <CardFooter className="text-muted-foreground mt-auto flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1">
            <CalendarIcon className="h-3 w-3" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{readTime} min read</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
