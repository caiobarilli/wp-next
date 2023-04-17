import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const FeaturedImage = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 30rem;
  overflow: hidden;
  margin-top: -11rem;
  z-index: ${({ theme }) => theme.layers.zero};
`

export const Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: ${({ theme }) => theme.layers.base};
`

export const PostWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    border-radius: 1rem;
    padding: 1rem;
    background: ${theme.colors.white};
  `}
`

export const PostContent = styled.div`
  color: ${({ theme }) => theme.colors.black};
`

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`

export const PostAuthor = styled.div`
  overflow: hidden;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`

export const PostDate = styled.div`
  display: flex;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
  margin-right: 1rem;

  svg {
    width: 1.5rem;
  }
`
