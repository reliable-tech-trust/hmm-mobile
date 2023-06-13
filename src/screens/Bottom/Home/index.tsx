import {Block, Text} from '@components';
import {useStore, useTranslation} from '@hooks';
import React from 'react';

const Home = () => {
  const {t} = useTranslation();
  const {dispatch, useSelector} = useStore();

  return (
    <Block flex backgroundColor="#22343C">
      <Text />
    </Block>
  );
};

export default Home;
