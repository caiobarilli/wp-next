import styled from 'styled-components'

export const Header = styled.header`
  position: relative;
  z-index: ${({ theme }) => theme.layers.menu};
`

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  padding: 2rem 0;
`
