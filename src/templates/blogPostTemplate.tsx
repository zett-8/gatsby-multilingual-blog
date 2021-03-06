/** 1. Imports **/
import React, { useEffect } from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/layout/layout'
import { MetaTag } from '../components/layout/metaTag'
import { WithSideBar } from '../components/withSideBar'
import { BlogPost } from '../components/blogPost/blogPost'

import { LocaleData } from '../providers/types/localeData'
import { BlogPostNode } from '../providers/types/blogPostNode'
import { getRandomEmoji } from '../providers/utils/getRandomEmoji'
import { useStateHandler } from '../providers/hooks/useStateHandler'

/** 2. Types **/
type ContainerProps = {
  className?: string
  data: {
    locales: LocaleData
    markdownRemark: BlogPostNode
  }
}

type Props = ContainerProps & {
  emoji: string[]
}

/** 3. Base component **/
const Component = ({ data, emoji }: Props) => (
  <Layout>
    <MetaTag
      title={data.markdownRemark.frontmatter.title}
      description={data.markdownRemark.frontmatter.description}
    />
    <WithSideBar blogPostData={data.markdownRemark}>
      <BlogPost data={data.markdownRemark} emoji={emoji} />
    </WithSideBar>
  </Layout>
)

/** 5. Container **/
const BlogPostTemplate = (props: ContainerProps) => {
  const emojiHandler = useStateHandler<string[]>([])

  useEffect(() => {
    emojiHandler.setValue(getRandomEmoji())
  }, [])

  return <Component {...props} data={props.data} emoji={emojiHandler.value} />
}
export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $language: String!
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
        language
      }
      headings {
        id
        value
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        cover {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP]
              placeholder: BLURRED
              webpOptions: { quality: 90 }
              width: 800
              quality: 90
            )
          }
        }
      }
      relatedPosts {
        id
        excerpt(pruneLength: 160)
        fields {
          language
          path
        }
        frontmatter {
          title
          tags
          cover {
            childImageSharp {
              gatsbyImageData(
                formats: [AUTO, WEBP]
                placeholder: BLURRED
                webpOptions: { quality: 90 }
                width: 300
                quality: 90
              )
            }
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
