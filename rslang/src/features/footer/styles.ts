import styled from 'styled-components';
import { baseTheme } from '../../utils';
import logoRsschool from '../../assets/png/logoRsschool.png';

export const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${baseTheme.sizes.footer.height}px;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  width: ${baseTheme.sizes.container.width}px;
  border: 1px solid ${baseTheme.colors.secondary};
  padding: 0 40px;
`;

export const Logo = styled.a`
  height: 50px;
  width: 140px;
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
  height: 80px;
  width: 80px;
  background-image: url(${(props) => props.logoLink});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  margin: 0 22px;
`;

export const Year = styled.p`
  font-size: ${baseTheme.fonts.footerSize}px;
  color: ${baseTheme.colors.primary};
`;
