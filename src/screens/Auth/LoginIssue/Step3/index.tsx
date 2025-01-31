import {ICONS} from '@assets';
import {Block, GradientButton, Image, TextInput} from '@components';
import {useTranslation} from '@hooks';
import {reset} from '@navigation/NavigationServices';
import routes from '@navigation/routes';
import Header from '@screens/Auth/components/Header';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const LoginIssueStep3: React.FC = () => {
  const {top} = useSafeAreaInsets();
  const {t} = useTranslation();

  return (
    <Block flex padding={24} backgroundColor="background">
      <Block justifyCenter paddingTop={top} marginBottom={60} space="between">
        <Pressable onPress={() => reset(routes.LOGIN_SCREEN)}>
          <Block marginBottom={40}>
            <Image source={ICONS.close} square={14} tintColor="sub_text" resizeMode="contain" />
          </Block>
        </Pressable>
        <Header content={t('LOGIN_ISSUE.step_three_header')} />
      </Block>
      <Block marginBottom={40}>
        <TextInput
          shadow
          isSecure
          placeholder={t('placeholder.password')}
          color="text"
          containerInputStyle={{marginBottom: getSize.m(16)}}
        />
        <TextInput
          shadow
          isSecure
          placeholder={t('placeholder.confirm_password')}
          color="text"
          containerInputStyle={{marginBottom: getSize.m(16)}}
        />
      </Block>
      <GradientButton
        title={t('validate.create_password')}
        onPress={() => {
          reset(routes.LOGIN_ISSUE_STEP4_SCREEN);
        }}
      />
    </Block>
  );
};

export default LoginIssueStep3;
