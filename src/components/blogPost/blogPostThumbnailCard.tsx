/** 1. Imports **/
import React from 'react'
import styled, { css } from 'styled-components'
import { _BlogPostThumbnailCardComponent } from './_blogPostThumbnailCardComponent'

/** 4. Styled component */
export const BlogPostThumbnailCard = styled(_BlogPostThumbnailCardComponent)<{ first: boolean }>`
  ${({ first }) =>
    first
      ? css`
          display: grid;
          grid-template-columns: 2fr 1fr;
          grid-column: span 2;
          align-items: flex-end;
        `
      : null}

  > div.img {
    aspect-ratio: 4/3;
    margin: 0 0 16px 0;

    ${({ first }) =>
      first
        ? css`
            aspect-ratio: 2 / 1.2;
            margin: 0 24px 0 0;
          `
        : null}
  }
`
