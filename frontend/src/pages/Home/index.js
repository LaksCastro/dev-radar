import React from 'react';
import * as S from '@/pages/Home/styles';
import teste from '@/assets/images/teste.jpg';

import ContentItem from '@/components/ContentItem/index';

function Home() {
  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <S.AppWrapper>
      <S.AppContainer>
        <S.Aside>
          <S.FormWrapper onSubmit={handleSubmit}>
            <S.FormTitle>Cadastro</S.FormTitle>

            <S.InputBlock>
              <S.InputLabel>GitHub Username</S.InputLabel>
              <S.InputWrapper
                placeholder="LaksCastro"
                required
                type="text"
                name="github_username"
              />
            </S.InputBlock>
            <S.InputBlock>
              <S.InputLabel>Technologies</S.InputLabel>
              <S.InputWrapper
                placeholder="ReactJs, JavaScript, NodeJs"
                required
                type="text"
                name="techs"
              />
            </S.InputBlock>
            <S.InputGroup>
              <S.InputBlock>
                <S.InputLabel>Longitude</S.InputLabel>
                <S.InputWrapper required type="text" name="longitude" />
              </S.InputBlock>
              <S.InputBlock>
                <S.InputLabel>Latitude</S.InputLabel>
                <S.InputWrapper required type="text" name="latitude" />
              </S.InputBlock>
            </S.InputGroup>
            <S.ButtonSave>Concluir</S.ButtonSave>
          </S.FormWrapper>
        </S.Aside>
        <S.Main>
          <S.ContentWrapper>
            <ContentItem
              user={{
                avatar_url: teste,
                name: 'Laks Castro',
                github_username: 'lakscastro',
                techs: ['ReactJs', 'JavaScript', 'NodeJs'],
                bio: `Lorem Ipsum é simplesmente uma simulação de texto da indústria
                  tipográfica e de impressos, e vem sendo utilizado desde o
                  século XVI`,
              }}
            />
            <ContentItem
              user={{
                avatar_url: teste,
                name: 'Laks Castro',
                github_username: 'lakscastro',
                techs: ['ReactJs', 'JavaScript', 'NodeJs'],
                bio: `Lorem Ipsum é simplesmente uma simulação de texto da indústria
                  tipográfica e de impressos, e vem sendo utilizado desde o
                  século XVI`,
              }}
            />
            <ContentItem
              user={{
                avatar_url: teste,
                name: 'Laks Castro',
                github_username: 'lakscastro',
                techs: ['ReactJs', 'JavaScript', 'NodeJs'],
                bio: `Lorem Ipsum é simplesmente uma simulação de texto da indústria
                  tipográfica e de impressos, e vem sendo utilizado desde o
                  século XVI`,
              }}
            />
            <ContentItem
              user={{
                avatar_url: teste,
                name: 'Laks Castro',
                github_username: 'lakscastro',
                techs: ['ReactJs', 'JavaScript', 'NodeJs'],
                bio: `Lorem Ipsum é simplesmente uma simulação de texto da indústria
                  tipográfica e de impressos, e vem sendo utilizado desde o
                  século XVI`,
              }}
            />
            <ContentItem
              user={{
                avatar_url: teste,
                name: 'Laks Castro',
                github_username: 'lakscastro',
                techs: ['ReactJs', 'JavaScript', 'NodeJs'],
                bio: `Lorem Ipsum é simplesmente uma simulação de texto da indústria
                  tipográfica e de impressos, e vem sendo utilizado desde o
                  século XVI`,
              }}
            />
            <ContentItem
              user={{
                avatar_url: teste,
                name: 'Laks Castro',
                github_username: 'lakscastro',
                techs: ['ReactJs', 'JavaScript', 'NodeJs'],
                bio: `Lorem Ipsum é simplesmente uma simulação de texto da indústria
                  tipográfica e de impressos, e vem sendo utilizado desde o
                  século XVI`,
              }}
            />
            <ContentItem
              user={{
                avatar_url: teste,
                name: 'Laks Castro',
                github_username: 'lakscastro',
                techs: ['ReactJs', 'JavaScript', 'NodeJs'],
                bio: `Loreimpressos, e vem sendo utilizado desde o
                  século XVI`,
              }}
            />
            <ContentItem
              user={{
                avatar_url: teste,
                name: 'Laks Castro',
                github_username: 'lakscastro',
                techs: ['ReactJs', 'JavaScript', 'NodeJs'],
                bio: `Lorem Ipsum é simplesmente uma simulação de texto da indústria
                  tipográfica e de impressos, e vem sendo utilizado desde o
                  século XVI`,
              }}
            />
            <ContentItem
              user={{
                avatar_url: teste,
                name: 'Laks Castro',
                github_username: 'lakscastro',
                techs: ['ReactJs', 'JavaScript', 'NodeJs'],
                bio: `Lorem Ipsum é simplesmente uma simulação de texto da indústria
                  tipográfica e de impressos, e vem sendo utilizado desde o
                  século XVI`,
              }}
            />
          </S.ContentWrapper>
        </S.Main>
      </S.AppContainer>
    </S.AppWrapper>
  );
}

export default Home;
