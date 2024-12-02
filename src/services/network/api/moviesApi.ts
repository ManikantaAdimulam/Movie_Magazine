import {createApi} from '@reduxjs/toolkit/query/react';
import serviceHandler from '@services/network/api/api';
import {MovieList, MovieRequest} from '@services/network/api/types';

const customBaseQuery = serviceHandler();
const moviesAPI = createApi({
  reducerPath: 'moviesAPI',
  baseQuery: customBaseQuery,
  endpoints: builder => ({
    getMovies: builder.query<MovieList, MovieRequest>({
      query: ({endPoint}) => ({
        url: endPoint,
      }),
      transformResponse: (response: MovieList) => response,
    }),
  }),
});

export const {useGetMoviesQuery} = moviesAPI;

export default moviesAPI;
