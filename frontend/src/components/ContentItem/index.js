import React from 'react';

import * as S from '@/components/ContentItem/styles';

export default function ContentItem({
  user: { avatar_url, name, github_username, techs, bio },
}) {
  return (
    <S.ContentItemContainer>
      <S.MainContent>
        <S.ContentHeader>
          <img src={avatar_url} alt={`Avatar Developer: ${name}`} />
          <div>
            <strong>{name}</strong>
            <p>{techs.toString().replace(/,/g, ', ')}</p>
          </div>
        </S.ContentHeader>
        <S.ContentBody>
          <p>{bio}</p>
        </S.ContentBody>
      </S.MainContent>
      <S.ContentLink>
        <S.ContentLinkToGithub
          href={`https://github.com/${github_username}`}
          rel="noopener noreferrer external"
          target="_blank"
        >
          Confira este perfil no GitHub
        </S.ContentLinkToGithub>
      </S.ContentLink>
    </S.ContentItemContainer>
  );
}
