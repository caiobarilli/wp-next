import styled from 'styled-components'

export const Wrapper = styled.div``

export const Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 2rem;
`

export const PostWrapper = styled.div`
  width: 100%;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.white};
  padding: 1rem;
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
