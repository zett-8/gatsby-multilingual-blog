/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'

import { Headings } from './headings'
import { YourSpace } from './yourSpace'
import { PopularTags } from './popularTags'
import { SearchInput } from '../searchInput'
import { RelatedPosts } from './relatedPosts'

import { PopularTag } from '../../providers/types/popularTag'
import { BlogPostNode } from '../../providers/types/blogPostNode'
import { StateHandler } from '../../providers/hooks/useStateHandler'

/** 2. Types **/
type Props = {
  className?: string
  ad?: boolean
  blogPostData?: BlogPostNode
  popularTags?: PopularTag
  searchInputHandler?: StateHandler<string>
}

/** 3. Base component **/
const Component = ({ className, ad, blogPostData, popularTags, searchInputHandler }: Props) => (
  <aside className={className}>
    {searchInputHandler ? <SearchInput searchInputHandler={searchInputHandler} /> : null}
    {blogPostData ? <RelatedPosts data={blogPostData.relatedPosts} /> : null}
    {popularTags ? <PopularTags data={popularTags} /> : null}
    {blogPostData ? <Headings data={blogPostData} /> : null}
    {ad ? <YourSpace /> : null}
    {/*<YourSpace />*/}
  </aside>
)

/** 4. Styled component **/
export const SideBar = styled(Component)`
  height: calc(100% - 200px);
  margin: 100px 0 0 40px;
  padding-left: 40px;
  border-left: 1px solid hsl(0, 0%, 90%);

  div.side-title {
    margin-bottom: 16px;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.color.subTextGrey};
  }

  > div:first-child {
    margin-top: -100px;
  }

  > div:not(:last-child) {
    margin-bottom: 80px;
  }
`
