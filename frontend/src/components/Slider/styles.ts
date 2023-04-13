import styled, { css } from 'styled-components'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 600px;

    .swiper-wrapper {
      display: flex;
    }

    .swiper-slide {
      img {
        width: 100%;
      }
    }

    .swiper-button-next:after,
    .swiper-button-prev:after {
      color: ${theme.colors.white};
    }

    .swiper-pagination-bullet {
      border: 0.5rem solid ${theme.colors.white};
    }

    .swiper-pagination-bullet-active {
      background: ${theme.colors.white};
    }
  `}
`
