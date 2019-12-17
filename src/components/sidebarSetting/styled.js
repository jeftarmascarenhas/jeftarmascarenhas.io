import styled from 'styled-components'
import { LightbulbFlash } from 'styled-icons/remix-line/LightbulbFlash'

import { Colors } from 'styles/variables'

export const SidebarSetting = styled.aside`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  background-color: ${Colors.light};
  box-shadow: 0 0.2rem 0.6rem #222;
  padding: 1rem;
  @media (min-width: 768px) {
    box-shadow: none;
    width: 8rem;
    top: 0;
    right: 0;
    left: auto;
    height: 100%;
    padding: 0;
    flex-direction: column;
    justify-content: flex-start;
    background-color: transparent;
  }
  .copyright {
    font-size: 0.9em;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
    @media (min-width: 768px) {
      justify-content: center;
      writing-mode: vertical-rl;
      font-size: 0.8em;
    }
  }
`
export const IconLightbulbFlash = styled(LightbulbFlash)`
  color: ${props => (props.light ? Colors.dark : Colors.yellow)};
  width: 2.5rem;
  width: 2.5rem;
`
