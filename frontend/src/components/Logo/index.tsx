import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'

export type LogoProps = {
  small?: boolean
}

const Logo = ({ small }: LogoProps) => {
  return (
    <S.Wrapper small={small}>
      <Link href="/">
        <Image
          alt="Boilerplate logo"
          src="/icons/icon-192.png"
          width={96}
          height={96}
          style={{
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      </Link>
    </S.Wrapper>
  )
}

export default Logo
