import styled, { css } from 'styled-components'
import { Linkedin } from 'styled-icons/boxicons-logos/Linkedin'
import { Github } from 'styled-icons/boxicons-logos/Github'
import { Twitter } from 'styled-icons/boxicons-logos/Twitter'

import { Colors } from 'styles/variables'

const iconStyle = css`
  width: 2.3rem;
  height: 2.3rem;
`

export const ListSocial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`
export const IconLinkedin = styled(Linkedin)`
  ${iconStyle}
`
export const IconGithub = styled(Github)`
  ${iconStyle}
`
export const IconTwitter = styled(Twitter)`
  ${iconStyle}
`

export const ListSocialItem = styled.a.attrs({
  target: '_black',
})`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 4.6rem;
  height: 4.6rem;
  border-radius: 50%;
  background-color: ${Colors.yellow};
  margin-bottom: 2rem;
`
