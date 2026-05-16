'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { BlogCard } from '@/components/blog/blog-card'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import type { Blog } from '@/lib/blog-data'

interface BlogFilterProps {
  blogs: Blog[]
  allTags: string[]
}

export function BlogFilter({ blogs, allTags }: BlogFilterProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [search, setSearch] = useState('')

  const filtered = blogs.filter((post) => {
    const matchesTag =
      !selectedTag ||
      (Array.isArray(post.tags) &&
        (post.tags as string[]).includes(selectedTag))
    const matchesSearch =
      !search ||
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      (post.excerpt || '').toLowerCase().includes(search.toLowerCase())
    return matchesTag && matchesSearch
  })

  return (
    <div>
      {/* Search + Filter Bar */}
      <div className="mb-10 space-y-6">
        {/* Search */}
        <div className="relative mx-auto max-w-md">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <Input
            placeholder="Search posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Tag Filter */}
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
              selectedTag === null
                ? 'bg-primary text-primary-foreground border-primary shadow-md'
                : 'bg-muted/50 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                selectedTag === tag
                  ? 'bg-primary text-primary-foreground border-primary shadow-md'
                  : 'bg-muted/50 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-muted-foreground py-20 text-center">
          <p>No posts found matching your filters.</p>
          <button
            onClick={() => {
              setSelectedTag(null)
              setSearch('')
            }}
            className="text-primary mt-2 underline underline-offset-4"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  )
}
