import {ViewStyle} from 'react-native';
import {FastImageProps, ResizeMode} from 'react-native-fast-image';

export interface LazyImageProps extends FastImageProps {
  source: any;
  thumbnail?: string;
  width?: any;
  height?: any;
  round?: any;
  square?: any;
  resizeMode?: ResizeMode;
  style?: any;
  containerStyles?: ViewStyle;
}
