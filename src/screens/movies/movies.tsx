import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import CommonStyles from '@utils/theme/styles';
import MovieCard from '@screens/movies/components/movieCard';
import {useGetMoviesQuery} from '@services/network/api/moviesApi';
import {Movie} from '@services/network/api/types';
import Colors from '@utils/theme/colors';
import strings from '@utils/localisation';

const Movies = () => {
  const {isLoading, data, error} = useGetMoviesQuery({
    endPoint:
      'movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
  });
  const renderItem = ({item: {poster_path, title}}: {item: Movie}) => {
    return <MovieCard poster_path={poster_path} title={title} />;
  };
  console.log(isLoading, data, error);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView />
        <Text style={styles.text}>{strings.movies}</Text>
      </View>
      <SafeAreaView style={styles.container}>
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
    justifyContent: 'space-between', // Adds gap between columns
  },
  text: {
    ...CommonStyles.h1,
    ...CommonStyles.boldText,
    fontSize: 36,
    margin: 16,
  },
});
