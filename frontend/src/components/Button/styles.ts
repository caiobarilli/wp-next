import styled, { css, FrontendTheme } from 'styled-components'

import { ButtonProps } from '.'

export type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'fullWidth' | 'minimal'
>

const WrapperModifiers = {
  small: (theme: FrontendTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,

  medium: (theme: FrontendTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.medium};
  `,

  large: (theme: FrontendTheme) => css`
    height: 4.35rem;
    font-size: ${theme.font.sizes.medium};
  `,

  withIcons: (theme: FrontendTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  minimal: (theme: FrontendTheme) => css`
    background: transparent;
    color: ${theme.colors.defaultText};

    &:hover {
      background: transparent;
    }
  `,

  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    text-decoration: none;
    cursor: pointer;

    font-family: ${theme.font.family};
    border-radius: ${theme.border.radius};

    ${!!size && WrapperModifiers[size](theme)}
    ${!!fullWidth && WrapperModifiers.fullWidth()}
    ${!!hasIcon && WrapperModifiers.withIcons(theme)}
    ${!!minimal && WrapperModifiers.minimal(theme)}
    ${disabled && WrapperModifiers.disabled()};
  `}
`
