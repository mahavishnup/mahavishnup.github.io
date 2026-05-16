import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const blogsDirectory = path.join(process.cwd(), 'src/content/blogs')

export interface Blog {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string
  coverImage: string | null
  tags: string[]
  published: boolean
  createdAt: string
  updatedAt: string
}

export async function getBlogs(): Promise<Blog[]> {
  const fileNames = fs.readdirSync(blogsDirectory)
  const allBlogsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, '')
      const fullPath = path.join(blogsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        id,
        ...matterResult.data,
        content: matterResult.content,
        createdAt: matterResult.data.date || new Date().toISOString(),
        updatedAt: matterResult.data.date || new Date().toISOString(),
      } as Blog
    })

  return allBlogsData
    .filter((blog) => blog.published)
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const blogs = await getBlogs()
  return blogs.find((blog) => blog.slug === slug) || null
}
