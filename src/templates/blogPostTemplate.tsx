/** 1. Imports **/
import React from 'react'
import { graphql } from 'gatsby'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { Layout } from '../components/layout'
import { MetaTag } from '../components/metaTag'
import { WithSideBar } from '../components/withSideBar'

import { LocaleData } from '../providers/types/localeData'
import { BlogPostNode } from '../providers/types/blogPostNode'
import styled from 'styled-components'

/** 2. Types **/
type Props = {
  className?: string
  data: {
    locales: LocaleData
    markdownRemark: BlogPostNode
  }
}

type ComponentProps = Props & {
  language: string
}

/** 3. Base component **/
const Component = ({ className, data, language }: ComponentProps) => (
  <Layout>
    <MetaTag />
    <WithSideBar>
      <article className={className}>
        <GatsbyImage alt={'cover'} image={getImage(data.markdownRemark.frontmatter.cover)!} />
        <h2>{data.markdownRemark.frontmatter.title}</h2>
        <ul>
          {data.markdownRemark.frontmatter.tags.map((t) => (
            <Link key={t} to={`/?tag=${t}`} language={language}>
              <li>#{t}</li>
            </Link>
          ))}
        </ul>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </article>
    </WithSideBar>
  </Layout>
)

/** 4. Styled component **/
const StyledComponent = styled(Component)`
  > h2 {
    width: max-content;
    max-width: fit-content;
    padding: 8px 0;

    font-size: 4rem;
    font-weight: bold;
    background: ${({ theme }) => theme.highlight};
  }

  > ul {
    display: flex;
    flex-wrap: wrap;
    margin: 16px 0;

    font-size: 1.8rem;
    color: ${({ theme }) => theme.color.subGreyText};

    > a:not(:last-child) {
      margin-right: 16px;
      padding: 1px 0;
    }
  }

  > div:last-child {
    font-size: 1.8rem;
  }
`

const BlogPostTemplate = (props: Props) => {
  const { language } = useI18next()

  return <StyledComponent {...props} language={language} />
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
              width: 700
              height: 400
              quality: 90
            )
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
