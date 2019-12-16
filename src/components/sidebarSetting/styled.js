import styled from 'styled-components'
import { LightbulbFlash } from 'styled-icons/remix-line/LightbulbFlash'

import { Colors } from 'styles/variables'

export const SidebarSetting = styled.aside`
  width: 8rem;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .copyright {
    font-size: 0.7em;
    writing-mode: vertical-rl;
    margin-top: 3em;
  }
`
export const IconLightbulbFlash = styled(LightbulbFlash)`
  color: ${props => (props.light ? Colors.dark : Colors.yellow)};
  width: 2.5rem;
  width: 2.5rem;
`
