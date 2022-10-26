import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {ICast} from 'types';
import {ListHeader, Text} from 'components';
import {endpoints} from 'config';
import {spacing} from 'theme';
import {images} from 'assets';

type CastListProps = {
  cast: ICast[] | undefined;
};

const RenderHeader = () => {
  return <ListHeader style={styles.header} title="Cast" />;
};
const RenderItem = ({item}: {item: ICast}) => {
  return (
    <View style={styles.castItemContainer}>
      <Image
        source={{uri: endpoints.imagesEndPonint + item.profile_path}}
        style={styles.image}
        defaultSource={images.ProfileImagePlaceholder}
      />
      <Text tx={item.name} variant="mediumLarge" top="small" />
    </View>
  );
};
const CastList = ({cast}: CastListProps) => {
  if (!cast) {
    return null;
  }
  return (
    <View style={styles.container}>
      <RenderHeader />
      <FlashList
        data={cast}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.castList}
        renderItem={({item}) => <RenderItem item={item} />}
        estimatedItemSize={cast.length}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: spacing.small,
    width: 72,
    height: 72,
  },
  castList: {
    paddingLeft: spacing.xlarge,
    paddingRight: spacing.xlarge,
  },
  container: {
    marginHorizontal: -spacing.xlarge,
  },
  header: {
    marginTop: spacing.normal,
  },
  castItemContainer: {
    width: 72,
    marginEnd: spacing.small,
  },
});

export default CastList;
