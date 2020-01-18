import React, { useEffect } from 'react';

import { Types as TypesDevList } from '@/store/ducks/devList';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './styles';

import Toast from '@/utils/toast';

import DevForm from '@/components/DevForm/index';
import ContentItem from '@/components/ContentItem/index';
import ContentLoader from '@/components/ContentLoader/index';

function Home() {
  const dispatch = useDispatch();

  const devs = useSelector((state) => state.devList);

  useEffect(() => {
    async function loadDevsData() {
      dispatch({
        type: TypesDevList.ASYNC_INDEX_DEVS,
      });
    }
    loadDevsData();
  }, [dispatch]);
  useEffect(() => {
    if (devs.error) Toast.error('Ocorreu um erro, tente novamente');
  }, [devs.error]);

  useEffect(() => {
    if (!devs.data) return;

    if (devs.data.filter((dev) => !dev.initialData).length)
      Toast.success('Usuário cadastrado com sucesso');
  }, [devs.data]);

  return (
    <S.AppWrapper>
      <S.AppContainer>
        <S.Aside>
          <DevForm />
        </S.Aside>
        <S.Main>
          <S.ContentWrapper>
            {devs.initializingData ? (
              <ContentLoader />
            ) : !devs.data.length ? (
              <h1>nao ha nenhum user cadastrado</h1>
            ) : (
              devs.data.map((dev) => <ContentItem key={dev._id} dev={dev} />)
            )}
          </S.ContentWrapper>
        </S.Main>
      </S.AppContainer>
    </S.AppWrapper>
  );
}

export default Home;
