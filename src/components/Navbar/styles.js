import styled from 'styled-components'
import Button from '@material-ui/core/Button';

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  top: 0;
  padding: 8px;
  height: 5%;
  width: 100%;
  background-color: #47286E;

  @media(min-width: 768px) {
    padding: 8px;
    height: 5%;
  }

  @media(min-width: 992px) {
    padding: 16px 64px;
    height: 5%;
  }

`;

export const Logo = styled.img`
  color: white;
  max-width: 8%;

  @media(min-width: 768px) {
    max-width: 5%
  }

  @media(min-width: 992px) {
    
  }
`
