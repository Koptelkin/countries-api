import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Container } from 'components/Container';
import ThemeSwitcher from 'features/theme/ThemeSwitcher';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

// const Title = styled(Link).attrs({
//   to: '/',
// })`
//   color: var(--colors-text);
//   font-size: var(--fs-sm);
//   text-decoration: none;
//   font-weight: var(--fw-bold);
// `;

const Header = () => {
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Link to={'/'} 
            style={{color: 'var(--colors-text)', fontSize: 'var(--fs-sm)', textDecoration: 'none', fontWeight: 'var(--fw-bold)'}}>
              Where in the world?</Link>
          <ThemeSwitcher></ThemeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  )
};

export default Header;
