import {Block} from '@components';
import {useStore, useTranslation} from '@hooks';
import {RootStackParamList} from '@navigation/types';
import {RouteProp} from '@react-navigation/native';
import {sleep} from '@utils/date';
import {width} from '@utils/responsive';
import React, {useEffect, useRef, useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import Header from './components/Header';
import MomentImage from './components/Moment.Image';
import MomentVideo from './components/Moment.Video';

const mediaType = {
  image: 'IMAGE',
  video: 'VIDEO',
};

const STORY_WIDTH = width * 0.8;
const STORY_HEIGHT = STORY_WIDTH * 1.7;

interface ActivityDetailsProps {
  route: RouteProp<RootStackParamList, 'ACTIVITY_DETAILS_SCREEN'>;
}

const ActivityDetails: React.FC<ActivityDetailsProps> = ({route}) => {
  const {t} = useTranslation();
  const {useSelector} = useStore();
  const {data: momentsList} = useSelector('momentsList');
  const carouselRef = useRef(null);
  const {momentIdx} = route.params;
  const fakeVideoData = [
    {
      content: 'long video testing',
      media: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      thumbnail: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
      type: 'VIDEO',
    },
    {
      content: 'short video testing',
      media: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      thumbnail: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
      type: 'VIDEO',
    },
  ];
  const fakeMomentsList = [...fakeVideoData, ...momentsList];

  useEffect(() => {
    sleep(200).then(() => {
      (carouselRef.current as any)?.snapToItem(momentIdx);
    });
  }, [momentIdx]);

  const onSnapToItem = (e: number) => {
    setCurrentIndex(e);
  };

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const _renderItem = ({item, index}: any) => {
    const {type} = item;

    return (
      <>
        {type === mediaType.image ? (
          <MomentImage
            item={item}
            index={index}
            currentIndex={currentIndex}
            STORY_WIDTH={STORY_WIDTH}
            STORY_HEIGHT={STORY_HEIGHT}
          />
        ) : (
          <MomentVideo
            item={item}
            index={index}
            currentIndex={currentIndex}
            STORY_WIDTH={STORY_WIDTH}
            STORY_HEIGHT={STORY_HEIGHT}
          />
        )}
      </>
    );
  };

  return (
    <Block flex backgroundColor="background">
      <Header canGoBack title={t('moments.header')} />
      <Carousel
        useScrollView={true}
        ref={carouselRef}
        data={fakeMomentsList} //momentsList
        renderItem={({item, index}) => <_renderItem item={item} index={index} currentIndex={currentIndex} />}
        sliderWidth={width}
        itemWidth={width * 0.8}
        onSnapToItem={onSnapToItem}
      />
    </Block>
  );
};

export default ActivityDetails;
