import Link from 'next/link'
import * as S from './styles'

import {
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Github
} from '@styled-icons/boxicons-logos/'

const SocialMenu = () => (
  <S.Wrapper>
    <S.MenuItem>
      <Link href="https://www.facebook.com/">
        <Facebook />
      </Link>
    </S.MenuItem>

    <S.MenuItem>
      <Link href="https://www.instagram.com/">
        <Instagram />
      </Link>
    </S.MenuItem>

    <S.MenuItem>
      <Link href="https://www.twitter.com/">
        <Twitter />
      </Link>
    </S.MenuItem>

    <S.MenuItem>
      <Link href="https://www.linkedin.com/">
        <Linkedin />
      </Link>
    </S.MenuItem>

    <S.MenuItem>
      <Link href="https://www.github.com/">
        <Github />
      </Link>
    </S.MenuItem>
  </S.Wrapper>
)

export default SocialMenu
