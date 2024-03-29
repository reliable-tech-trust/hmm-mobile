import {getSize, width} from '@utils/responsive';

const styles = {
  animatedHeader: ({animatedValue, opacityAnimatedValue, top}: any) => ({
    position: 'absolute',
    opacity: opacityAnimatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 1],
    }),
    width: width,
    height: top + 50,
    top: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-150, 0],
    }),
  }),
  closeButtonContainer: (top: number) => ({
    position: 'absolute',
    marginLeft: getSize.m(16),
    marginTop: top,
    padding: getSize.m(12),
    borderRadius: getSize.m(6),
  }),
  btnMenu: {
    position: 'absolute',
    height: getSize.s(42),
    justifyContent: 'center',
    right: getSize.m(16),
    bottom: 0,
  },
};

export default styles;
