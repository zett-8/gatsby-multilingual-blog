import type { ImageDataLike } from 'gatsby-plugin-image'

export type BlogPostNode = {
  id: string
  html: string
  excerpt: string
  relatedPosts: BlogPostNode[]
  fields: {
    slug: string
    language: string
    path: string
  }
  headings: {
    id: string
    value: string
  }[]
  frontmatter: {
    date: string
    title: string
    description: string
    tags: string[]
    cover: ImageDataLike
  }
}
