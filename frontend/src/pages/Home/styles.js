import styled from 'styled-components';
import media from 'styled-media-query';

export const AppWrapper = styled.div`
  min-height: 100%;
`;
export const AppContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 2rem 0;

  max-width: 1200px;

  margin: 0 auto;

  display: flex;
  justify-content: center;

  ${media.lessThan('1000px')`
    flex-direction: column;
  `}
`;
export const Aside = styled.aside`
  flex: 0.5;
  padding: 1rem;
  ${media.lessThan('1000px')`
    flex: 1;
  `};
`;
export const Main = styled.main`
  flex: 1;
  padding: 1rem;
`;
export const ContentWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
