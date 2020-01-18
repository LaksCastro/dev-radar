import styled from 'styled-components';
import colors from '@/styles/colors';
import { Form, Input } from '@rocketseat/unform';

export const FormWrapper = styled(Form)`
  overflow: hidden;
  position: relative;
  display: block;
  padding: 2rem;
  background: ${colors.white};
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 4px;
  position: sticky;
  top: 2rem;
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
  cursor: pointer;
`;

export const FormLoader = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${colors.blackTransparent};
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 60px;
    height: 60px;
  }
  transition: all 0.2s ease-in-out;
  &.visible {
    visibility: visible;
    opacity: 1;
  }
  &.hidden {
    visibility: hidden;
    opacity: 0;
  }
`;
