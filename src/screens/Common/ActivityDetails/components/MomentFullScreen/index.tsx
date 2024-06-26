import {Block, Text} from '@components';
import {useBackHandler} from '@hooks';
import {goBack} from '@navigation/NavigationServices';
import {RootStackParamList} from '@navigation/types';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {getSize, height, width} from '@utils/responsive';
import dayjs from 'dayjs';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, DeviceEventEmitter, PanResponder} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AnimatedHeader from './components/AnimatedHeader';
import ImageFullScreen from './components/ImageFullScreen';
import VideoFullScreen from './components/VideoFullScreen';
import styles from './styles';

const mediaType = {
  image: 'IMAGE',
  video: 'VIDEO',
};

const SWIPING_BOUND = {x: width / 4, y: height / 4};
const VELOCITY_BOUND = 1;

interface MomentFullScreenProps {
  route: RouteProp<RootStackParamList, 'MOMENT_FULL_SCREEN'>;
}

const MomentFullScreen: React.FC<MomentFullScreenProps> = ({route}) => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const pan = useRef(new Animated.ValueXY()).current;
  const originalDimensions = {
    topOffset: top + 50 + getSize.m(24),
    leftOffset: width * 0.1,
  };
  const opacityAnimatedValue = useRef(new Animated.Value(1)).current;
  const [isOpenBottom, setIsOpenBottom] = useState<boolean>(false);
  const {item, STORY_WIDTH, STORY_HEIGHT} = route.params;
  const {media, content, createdAt, type} = item;

  useEffect(() => {
    navigation.setOptions({gestureEnabled: false});
    return () => navigation.setOptions({gestureEnabled: true});
  }, [navigation]);

  const handleToggle = () =>
    setIsVisible((currentState): boolean => {
      return !currentState;
    });

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [animatedValue]);

  const handleClose = () => {
    DeviceEventEmitter.emit('closeFullModeVideo');
    goBack();
  };

  const closeAnimation = {
    animatedValue: Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }),
    pan: Animated.timing(pan, {
      toValue: {x: 0, y: 0},
      duration: 300,
      useNativeDriver: false,
    }),
  };
  const handleCloseAnimation = () => {
    closeAnimation.animatedValue.start(() => handleClose());
  };

  useBackHandler({enabled: true, callback: handleCloseAnimation});

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderTerminate: () => true,

      onPanResponderMove: (_, gestureState) => {
        pan.setValue({x: gestureState.dx, y: gestureState.dy});
        setIsVisible(false);
      },

      onPanResponderRelease: (_, gestureState) => {
        if (
          Math.abs(gestureState.dx) >= SWIPING_BOUND.x ||
          Math.abs(gestureState.dy) >= SWIPING_BOUND.y ||
          Math.abs(gestureState.vx) >= VELOCITY_BOUND ||
          Math.abs(gestureState.vy) >= VELOCITY_BOUND
        ) {
          Animated.parallel([closeAnimation.animatedValue, closeAnimation.pan]).start(() => handleClose());
        } else if (Math.abs(gestureState.dx) > 0 || Math.abs(gestureState.dy) > 0) {
          closeAnimation.pan.start(() => handleToggle());
        }

        if (gestureState.dx === 0 && gestureState.dy === 0) {
          handleToggle();
        }
      },
    }),
  ).current;

  return (
    <Block absolute width={width} height={height}>
      <Animated.View
        style={
          styles.animatedImageContainer({animatedValue, STORY_WIDTH, STORY_HEIGHT, originalDimensions, pan}) as any
        }
        {...panResponder.panHandlers}>
        {type === mediaType.image ? (
          <ImageFullScreen media={media} />
        ) : (
          <VideoFullScreen
            media={media}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            opacityAnimatedValue={opacityAnimatedValue}
            isOpenBottom={isOpenBottom}
          />
        )}
      </Animated.View>
      {isVisible && (
        <>
          <AnimatedHeader
            animatedValue={animatedValue}
            onCloseAnimation={handleCloseAnimation}
            opacityAnimatedValue={opacityAnimatedValue}
            isOpenBottom={isOpenBottom}
            setIsOpenBottom={setIsOpenBottom}
          />
          <Animated.View
            style={
              {...styles.animatedDetailText(animatedValue), ...styles.animatedOpacity(opacityAnimatedValue)} as any
            }>
            <Block
              absolute
              width={width}
              height={height / 4}
              bottom={0}
              paddingHorizontal={24}
              paddingVertical={1}
              safeBottom
              justifyCenter
              backgroundColor="moment_full_screen">
              <Text center size={24} marginBottom={15} color="text" type="semibold">
                {content}
              </Text>
              <Text sm center size={24} numberOfLines={1} color="sub_text">
                {dayjs(createdAt).format('DD/MM/YYYY')}
              </Text>
            </Block>
            <Block alignCenter width={width} top={12}>
              <Block width={50} height={2} radius={2} backgroundColor="text" />
            </Block>
          </Animated.View>
        </>
      )}
    </Block>
  );
};

export default MomentFullScreen;
