import { linksData } from './footer.constants';
import { Container, Logo, StyledLink, StyledLinksContainer, Wrapper, Year } from './styles';

export const Footer: React.FC = () => (
  <Wrapper>
    <Container>
      <Logo href="https://rs.school/" target="_blank" />
      <StyledLinksContainer>
        {linksData.map(({ href, logoLink }) => (
          <StyledLink key={href} target="_blank" href={href} logoLink={logoLink} />
        ))}
      </StyledLinksContainer>
      <Year>2022</Year>
    </Container>
  </Wrapper>
);
