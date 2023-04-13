import styled, { css } from 'styled-components'

export const Wrapper = styled.nav`
  display: flex;
`

export const listWrapper = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    margin-left: ${theme.spacings.xlarge};
  `}
`

export const MenuItem = styled.li`
  margin: 0 1rem;
  list-style-type: none;
  display: inline;

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    ${({ theme }) => css`
      color: ${theme.colors.defaultText};
    `}
  }
`
