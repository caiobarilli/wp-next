import Image from 'next/image'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import * as S from './styles'

// Install Swiper modules
SwiperCore.use([Navigation, Pagination])

export type SlideProps = {
  id: number
  imageUrl: string
}

type Props = {
  slides: SlideProps[]
}

const Slider: React.FC<Props> = ({ slides }) => {
  return (
    <S.Wrapper>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        navigation={true}
        pagination={{
          clickable: true
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              src={slide.imageUrl}
              alt={`Slide ${slide.id}`}
              width={1080}
              height={600}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Wrapper>
  )
}

export default Slider
