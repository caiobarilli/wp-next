import styled, { css } from 'styled-components'

export const Wrapper = styled.nav`
  display: flex;
`

export const MenuContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`

export const MenuItem = styled.li`
  margin: 0 20px;
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    ${({ theme }) => css`
      color: ${theme.colors.secondary};
    `}
  }
`
