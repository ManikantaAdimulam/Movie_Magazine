import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import CommonStyles from '@utils/theme/styles';
import MovieCard from '@screens/movies/components/movieCard';
import {useGetMoviesQuery} from '@services/network/api/moviesApi';
import {Movie} from '@services/network/api/types';
import Colors from '@utils/theme/colors';
import Language from '@components/language';
import MZText from '@components/text';

const Movies = () => {
  const {isLoading, data, error} = useGetMoviesQuery({
    endPoint:
      'movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
  });

  const renderItem = ({item: {poster_path, title}}: {item: Movie}) => {
    return <MovieCard poster_path={poster_path} title={title} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView />
        <MZText localisedKey={'movies'} textProps={{style: styles.text}} />
      </View>
      <SafeAreaView style={styles.container}>
        <Language />
        {isLoading ? (
          <ActivityIndicator size={'large'} animating={isLoading} />
        ) : (
          <FlatList
            data={data?.data.results}
            renderItem={renderItem}
            numColumns={2}
            contentContainerStyle={styles.contentContainer}
            columnWrapperStyle={styles.columnWrapper}
          />
        )}
      </SafeAreaView>
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({
  container: {
    ...CommonStyles.bg_primary,
  },
  header: {
    backgroundColor: Colors.primary_2,
  },
  contentContainer: {
    paddingTop: 16,
    paddingHorizontal: 8,
    gap: 12,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  text: {
    ...CommonStyles.h1,
    ...CommonStyles.boldText,
    fontSize: 36,
    margin: 16,
  },
});
