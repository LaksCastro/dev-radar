import React from 'react';

import Hello from '@/components/Hello';
import Toast from '@/utils/toast';

import * as S from './styles';

function Home() {
  Toast.success('Hello, dev! How are you?');
  return (
    <S.StyledContainer>
      <Hello />
    </S.StyledContainer>
  );
}

export default Home;
