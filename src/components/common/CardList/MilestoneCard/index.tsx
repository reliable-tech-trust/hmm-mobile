import {Block, DashedLine, Text} from '@components';
import {useColors} from '@hooks';
import {IMilestone} from '@screens/Bottom/Home/types';
import dayjs from 'dayjs';
import React, {memo} from 'react';

interface MilestoneCardProps {
  item: IMilestone;
  isLastItem: boolean;
}

const MilestoneCard: React.FC<MilestoneCardProps> = ({item, isLastItem = false}) => {
  const {randomTextColor, randomBackgroundColor} = useColors();
  const {icon, title, milestoneTime} = item;
  const {COLORS} = useColors();

  return (
    <Block row alignCenter height={40} marginBottom={16} paddingRight={2} space="between">
      <Block flex row alignCenter marginRight={12}>
        <Block alignCenter justifyCenter radius={5} square={40} backgroundColor={randomBackgroundColor()}>
          <Text>{icon}</Text>
        </Block>
        <Text flex sm marginLeft={12} numberOfLines={1} color={randomTextColor()} type="semibold">
          {title}
        </Text>
      </Block>
      <Block>
        <Block row alignCenter>
          <Text sm marginRight={6} color="#5C7887">
            {dayjs(milestoneTime).format('DD/MM/YYYY')}
          </Text>
          <Block round={8} backgroundColor={COLORS.primary} />
          {!isLastItem && (
            <Block absolute right={2.5} top={16}>
              <DashedLine height={40} width={2} color={COLORS.primary} orientation="vertical" />
            </Block>
          )}
        </Block>
      </Block>
    </Block>
  );
};

export default memo(MilestoneCard);
