---
title: 'Next.js 15 Server Components Deep Dive'
slug: 'nextjs-15-server-components-deep-dive'
excerpt: 'Understand React Server Components in Next.js 15 — when to use them, how they work, and patterns for mixing server and client components.'
date: '2024-03-10'
tags: ['Next.js', 'React', 'TypeScript', 'Frontend']
published: true
coverImage: '/assets/seo-analytics.png'
---

# Next.js 15 Server Components Deep Dive

React Server Components (RSC) fundamentally change how we think about building React applications. In Next.js 15 with the App Router, every component is a **Server Component by default**. Let's explore what this means and how to use it effectively.

## Server vs Client Components

| Feature        | Server Component | Client Component          |
| -------------- | ---------------- | ------------------------- |
| Runs on        | Server only      | Client (+ server for SSR) |
| Can use hooks  | ❌ No            | ✅ Yes                    |
| Can access DB  | ✅ Yes           | ❌ No                     |
| Can use events | ❌ No            | ✅ Yes                    |
| Bundle size    | Zero             | Adds to bundle            |

## Fetching Data in Server Components

The beauty of Server Components is that you can fetch data directly — no `useEffect`, no loading states, no client-side fetching:

```tsx
// app/posts/page.tsx — This is a Server Component by default
import { prisma } from '@/lib/prisma'

export default async function PostsPage() {
  // Direct database query — this never runs on the client!
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    take: 20,
  })

  return (
    <main className="container mx-auto py-10">
      <h1 className="mb-8 text-3xl font-bold">Blog Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="rounded-lg border p-6">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-muted-foreground mt-2">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  )
}
```

## When to Use Client Components

Add `'use client'` only when you need interactivity:

```tsx
'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'

interface LikeButtonProps {
  postId: string
  initialLikes: number
}

export function LikeButton({ postId, initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes)
  const [liked, setLiked] = useState(false)

  const handleLike = async () => {
    setLiked(!liked)
    setLikes((prev) => (liked ? prev - 1 : prev + 1))

    await fetch(`/api/posts/${postId}/like`, {
      method: 'POST',
    })
  }

  return (
    <button
      onClick={handleLike}
      className="flex items-center gap-2 transition-colors"
    >
      <Heart
        className={liked ? 'fill-red-500 text-red-500' : 'text-gray-400'}
      />
      <span>{likes}</span>
    </button>
  )
}
```

## Server Actions

Server Actions let you mutate data from the client without creating API routes:

```typescript
// app/actions/posts.ts
'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string
  const content = formData.get('content') as string

  await prisma.post.create({
    data: { title, content, published: true },
  })

  revalidatePath('/posts')
}

export async function deletePost(id: string) {
  await prisma.post.delete({ where: { id } })
  revalidatePath('/posts')
}
```

Then use them directly in your components:

```tsx
import { createPost } from '@/app/actions/posts'

export default function NewPostPage() {
  return (
    <form action={createPost} className="max-w-lg space-y-4">
      <input
        name="title"
        placeholder="Post title"
        className="w-full rounded border px-4 py-2"
        required
      />
      <textarea
        name="content"
        placeholder="Write your post..."
        className="min-h-[200px] w-full rounded border px-4 py-2"
        required
      />
      <button type="submit" className="bg-primary rounded px-6 py-2 text-white">
        Publish
      </button>
    </form>
  )
}
```

## Key Patterns

1. **Keep Server Components as parents** — pass data down as props
2. **Push `'use client'` as deep as possible** — only the interactive leaf needs it
3. **Use Server Actions for mutations** — no need for API routes
4. **Leverage `loading.tsx`** — for streaming and suspense boundaries

## Conclusion

Server Components reduce bundle size, improve performance, and simplify data fetching. The key is knowing when to reach for `'use client'` — and doing it as sparingly as possible.
