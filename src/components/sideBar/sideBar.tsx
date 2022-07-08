/** 1. Imports **/
import React from 'react'
import styled from 'styled-components'
import { SearchInput } from '../searchInput'
import { YourSpace } from './yourSpace'
import { RelatedPosts } from './relatedPosts'
import { BlogPostNode } from '../../providers/types/blogPostNode'

/** 2. Types **/
type Props = {
  className?: string
  searchInput?: string
  onInputType?: (e: React.ChangeEvent<HTMLInputElement>) => void
  relatedPosts?: BlogPostNode[]
}

/** 3. Base component **/
const Component = ({ className, searchInput, onInputType, relatedPosts }: Props) => (
  <aside className={className}>
    {onInputType ? <SearchInput searchInput={searchInput} onInputType={onInputType} /> : null}
    {relatedPosts ? <RelatedPosts data={relatedPosts} /> : null}
    <YourSpace />
    <YourSpace />
  </aside>
)

/** 4. Styled component **/
export const SideBar = styled(Component)`
  height: calc(100% - 200px);
  margin: 100px 0 0 32px;
  padding-left: 40px;
  border-left: 1px solid hsl(0, 0%, 90%);

  > div:first-child {
    margin-top: -100px;
  }

  > div:not(:last-child) {
    margin-bottom: 120px;
  }
`