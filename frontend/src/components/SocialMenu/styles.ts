import styled, { css } from 'styled-components'

export const Wrapper = styled.nav`
  margin: 1.5rem 0;
`

export const listWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`

export const MenuItem = styled.li`
  ${({ theme }) => css`
    margin: 0 0.5rem;
    list-style-type: none;
    display: inline;

    a {
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 600;

      svg {
        width: 2rem;
        color: ${theme.colors.defaultText};
      }
    }
  `}
`
