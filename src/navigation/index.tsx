import {AlertDialog, NetWork} from '@components';
import {PortalProvider} from '@gorhom/portal';
import {useColors, useStore} from '@hooks';
import {NavigationContainer} from '@react-navigation/native';
import {GET_CURRENT_USER, SOCKET_CONNECT} from '@store/actions';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {navigationRef} from './NavigationServices';
import RootStack from './RootStack';
import {linking} from './routes';

const RootNavigation = () => {
  const {dispatch, useSelector} = useStore();
  const {COLORS} = useColors();
  const {isAuth} = useSelector('auth');

  useEffect(() => {
    if (isAuth) {
      dispatch({type: GET_CURRENT_USER});
      dispatch({type: SOCKET_CONNECT});
    }
  }, [dispatch, isAuth]);

  return (
    <NavigationContainer linking={linking} ref={navigationRef} onReady={() => RNBootSplash.hide()}>
      <PortalProvider>
        <StatusBar backgroundColor={COLORS.background} barStyle="dark-content" />
        <RootStack />
      </PortalProvider>
      <AlertDialog />
      <NetWork />
    </NavigationContainer>
  );
};

export default gestureHandlerRootHOC(RootNavigation);
