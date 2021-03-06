import styled from 'styled-components';
import { baseTheme } from '../../utils';
import logoRsschool from '../../assets/png/logoRsschool.png';

export const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: ${baseTheme.colors.bg};
  z-index: 3;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  border: 1px solid ${baseTheme.colors.secondary};
  padding: 0 40px;
  @media (max-width: 1000px) {
    padding: 0 5px;
  }
`;

export const Logo = styled.a`
  height: 50px;
  width: 60px;
  background-image: url(${logoRsschool});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  cursor: pointer;
`;

export const StyledLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const StyledLink = styled.a<{ logoLink: string }>`
  height: 40px;
  width: 40px;
  background-image: url(${(props) => props.logoLink});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  margin: 0 22px;
  @media (max-width: 1000px) {
    width: 30px;
  }
`;

export const Year = styled.p`
  font-size: ${baseTheme.fonts.footerSize}px;
  color: ${baseTheme.colors.primary};
  @media (max-width: 1000px) {
    font-size: 15px;
  }
`;
