/** 1. Imports **/
import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby-plugin-react-i18next'
import { PopularTag } from '../../providers/types/popularTag'

/** 2. Types **/
type Props = {
  className?: string
  data: PopularTag
  emoji: string[]
}

/** 3. Base component **/
const Component = ({ className, data, emoji }: Props) =>
  useMemo(
    () => (
      <div className={className}>
        <div className={'side-title'}>Popular Tags</div>
        <div>
          {data.tags.map((t, i) => (
            <Link key={t.value} to={`/?tag=${t.value}`} language={data.language}>
              <p>
                #{t.value}
                {emoji[i]}
              </p>
            </Link>
          ))}
        </div>
      </div>
    ),
    [data]
  )

/** 4. Styled component **/
export const PopularTags = styled(Component)`
  > div:last-child {
    display: flex;
    flex-wrap: wrap;
    column-gap: 8px;

    line-height: 3.4rem;
    font-size: 1.6rem;
  }
`