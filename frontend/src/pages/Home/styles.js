import styled from 'styled-components';
import colors from '@/styles/colors';
import media from 'styled-media-query';
import { Form, Input } from '@rocketseat/unform';

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
export const FormWrapper = styled(Form)`
  display: block;
  padding: 2rem;
  background: ${colors.white};
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 4px;
`;
export const FormTitle = styled.strong`
  margin-bottom: 2rem;
  display: block;
  text-align: center;
  font-size: 1.2em;
`;
export const InputBlock = styled.div`
  flex: 1;
  min-width: 150px;
`;
export const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
export const InputLabel = styled.label`
  margin-bottom: 0.5rem;
  display: block;
  color: ${colors.dark};
`;
export const InputWrapper = styled(Input)`
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${colors.lighter};
  &::placeholder {
    color: ${colors.light};
  }
`;
export const ButtonSave = styled.button`
  padding: 1rem 1.5rem;
  border-radius: 4px;
  width: 100%;
  max-width: 450px;
  background: ${colors.primary};
  color: ${colors.white};
  font-weight: bolder;
`;

export const ContentWrapper = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  grid-gap: 12px;
`;
