import React, { useEffect, useState } from 'react';

import { Types as TypesDevList } from '@/store/ducks/devList';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './styles';

import Toast from '@/utils/toast';

import Loader from '@/assets/icons/loader.svg';

export default function DevForm() {
  const dispatch = useDispatch();
  const devs = useSelector((state) => state.devList);

  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);

  const initialData = {
    longitude,
    latitude,
  };

  async function handleSubmit(data, { resetForm }) {
    if (
      devs.data.filter(
        (dev) =>
          dev.github_username.toLowerCase() ===
          data.github_username.toLowerCase(),
      ).length
    ) {
      Toast.info('Este usuário já está cadastrado');
      return;
    }

    dispatch({
      type: TypesDevList.ASYNC_STORE_DEV,
      payload: {
        dev: data,
      },
    });

    resetForm(initialData);
  }
  function getDevPosition() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { longitude, latitude } = position.coords;
        setLongitude(longitude);
        setLatitude(latitude);
      },
      (error) => {
        console.log(error);
      },
      {
        timeout: 30000,
      },
    );
  }
  useEffect(() => {
    getDevPosition();
  }, []);
  return (
    <S.FormWrapper initialData={initialData} onSubmit={handleSubmit}>
      <S.FormLoader className={devs.storingData ? 'visible' : 'hidden'}>
        <img src={Loader} alt="Loader" />
      </S.FormLoader>
      <S.FormTitle>Cadastro</S.FormTitle>

      <S.InputBlock>
        <S.InputLabel>Usuário do GitHub</S.InputLabel>
        <S.InputWrapper
          placeholder="LaksCastro"
          required
          type="text"
          name="github_username"
        />
      </S.InputBlock>
      <S.InputBlock>
        <S.InputLabel>Tecnologias</S.InputLabel>
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
  );
}
