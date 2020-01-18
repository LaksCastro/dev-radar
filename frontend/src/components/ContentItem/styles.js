import styled from 'styled-components';
import truncateString from '@/styles/truncateString';
import colors from '@/styles/colors';

export const ContentItemContainer = styled.article`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: ${colors.white};
  padding: 1.5rem 1rem;
  box-shadow: 0 2px 20px #f1f1f1;
  border-radius: 4px;
`;
export const MainContent = styled.div``;

export const ContentHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    border: 2px solid ${colors.primary};
    box-shadow: 0 2px 20px lightgrey;
    margin-right: 12px;
  }
  div {
    padding-top: 12px;
    display: block;
    ${truncateString};
    strong {
      display: block;
      color: ${colors.darker};
      ${truncateString};
      margin-bottom: 4px;
    }
    p {
      display: block;
      ${truncateString};
      color: ${colors.regular};
    }
  }
`;

export const ContentBody = styled.div`
  margin: 1rem 0;
  color: ${colors.dark};
  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;
export const ContentLink = styled.div`
  ${truncateString};
`;
export const ContentLinkToGithub = styled.a`
  color: ${colors.primary};
`;
