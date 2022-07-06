import React from 'react'
import { Link } from 'gatsby-plugin-react-i18next'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { BlogPostNode } from '../../providers/types/blogPostNode'

type Props = {
  className?: string
  data: BlogPostNode
  first: boolean
}

export const BlogPostThumbnailCardComponent = ({ className, data }: Props) => (
  <Link className={className} to={data.fields.path} language={data.fields.language}>
    <GatsbyImage alt={'cover'} image={getImage(data.frontmatter.cover)!} objectFit={'cover'} />
    <div>
      <h2>{data.frontmatter.title}</h2>
      <p>{data.excerpt}</p>
    </div>
  </Link>
)