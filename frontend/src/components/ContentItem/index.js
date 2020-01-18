import React from 'react';
import api from '@/services/api';
import * as S from './styles';

export default function ContentItem({
  dev: { avatar_url, name, github_username, techs, bio, _id },
}) {
  //temp function
  async function testeDpsDeleta() {
    await api.delete('/devs/' + _id);
  }
  return (
    <S.ContentItemContainer>
      <S.MainContent>
        <S.ContentHeader>
          <img src={avatar_url} alt={`Avatar Developer: ${name}`} />
          <div>
            <strong>{name}</strong>
            <p>
              {techs.map((tech, i) => {
                return i === techs.length - 1
                  ? tech
                      .substring(0, 1)
                      .toUpperCase()
                      .concat(tech.substring(1))
                  : `${tech
                      .substring(0, 1)
                      .toUpperCase()
                      .concat(tech.substring(1))}, `;
              })}
            </p>
          </div>
        </S.ContentHeader>
        <S.ContentBody>
          <S.ContentBio light={bio === null}>
            {bio ? bio : 'Este usuário não tem nada a dizer...'}
          </S.ContentBio>
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
      <button onClick={testeDpsDeleta}>del</button>
    </S.ContentItemContainer>
  );
}
