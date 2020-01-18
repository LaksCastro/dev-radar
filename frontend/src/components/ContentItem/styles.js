import styled from 'styled-components';
import truncateString from '@/styles/truncateString';
import colors from '@/styles/colors';

export const ContentItemContainer = styled.li`
  min-width: 230px;
  flex: 1;
  margin: 4px;

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
  flex-direction: column;
  width: 100%;
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    border: 2px solid ${colors.primary};
    box-shadow: 0 2px 20px lightgrey;
    margin-bottom: 0.5rem;
  }
  div {
    width: 100%;
    display: block;
    strong {
      display: block;
      color: ${colors.darker};
      margin-bottom: 4px;
      ${truncateString};
    }
    p {
      display: block;
      color: ${colors.regular};
      ${truncateString};
    }
  }
`;

export const ContentBody = styled.div`
  margin: 1rem 0;
  color: ${colors.dark};
`;
export const ContentBio = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: ${(props) => (props.light ? colors.light : colors.darker)};
`;
export const ContentLink = styled.div`
  ${truncateString};
`;
export const ContentLinkToGithub = styled.a`
  color: ${colors.primary};
`;
