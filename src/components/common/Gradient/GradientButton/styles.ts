import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: getSize.s(48),
    borderRadius: getSize.s(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
