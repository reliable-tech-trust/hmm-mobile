import {Block, FAB, Image} from '@components';
import {useStore} from '@hooks';
import {getSize} from '@utils/responsive';
import React from 'react';
import {DeviceEventEmitter, StyleSheet} from 'react-native';

const OnTopButton: React.FC<{ bottomOffset?: number, initialBottomOffset?: number,  }> = ({bottomOffset = 120,  initialBottomOffset = 180}) => {
  const {useSelector} = useStore();
  const {userInfo} = useSelector('auth');

  if (!userInfo || Object.keys(userInfo).length === 0) return null;
  return (
    <FAB
      renderSize={75}
      topOffset={80}
      bottomOffset={bottomOffset}
      initialBottomOffset={initialBottomOffset}
      backgroundColor="transparent"
      onPress={() => {
        DeviceEventEmitter.emit('showActionModal');
      }}>
      <Block alignCenter justifyCenter square={75} style={styles.container} borderWidth={1.5}>
        <Image source={{uri: userInfo.avatar}} square={60} style={{borderRadius: getSize.s(24)}} />
      </Block>
    </FAB>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: getSize.s(28),
    borderColor: '#87A8B980',
    borderStyle: 'dashed',
  },
});

export default OnTopButton;
