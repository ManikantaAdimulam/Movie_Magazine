import {ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import Colors from '@utils/theme/colors';
import CommonStyles from '@utils/theme/styles';
import {Movie} from '@services/network/api/types';
import MZText from '@components/text';

const MovieCard = (item: Movie) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: item?.poster_path
            ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
            : 'https://via.placeholder.com/150',
        }}>
        <View style={styles.titleBG}>
          <MZText text={item.title} textProps={{style: styles.text}} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    aspectRatio: 0.75,
    borderRadius: 10,
    backgroundColor: Colors.white,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.disabled,
  },
  image: {
    flex: 1,
  },
  text: {
    ...CommonStyles.h2,
    ...CommonStyles.boldText,
    paddingHorizontal: 8,
    paddingBottom: 8,
    color: Colors.text_primary,
    backgroundColor: Colors.text_primary_2 + '90',
  },
  titleBG: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
