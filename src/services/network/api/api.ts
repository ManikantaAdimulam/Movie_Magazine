import {
  BaseQueryFn,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

interface IBaseAPIResponse {
  page: number;
  total_pages: number;
  total_results: number;
  results: object | null;
}

const serviceHandler = () => {
  const customBaseQuery: BaseQueryFn = async (args, api, extraOptions) => {
    const apiToken =
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGYzZTdjMGVjZTUyMmM5NjIzNWViNjdhYWZkNDZiMSIsIm5iZiI6MTczMzEyMDI3OC44NjksInN1YiI6IjY3NGQ1MTE2MTNhN2YyZGQzNTgwNTQzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uq8DiErjyUCCHDt_isxtEXWH2LYsr3S32wv__3rrmJg';
    const apiKey = '7df3e7c0ece522c96235eb67aafd46b1';
    const baseQuery = fetchBaseQuery({
      baseUrl: 'https://api.themoviedb.org/3/discover/',
      headers: {Authorization: `Bearer ${apiToken}`},
    });
    try {
      const result = await baseQuery(args, api, extraOptions);
      let _response = {};
      if (result.meta?.response?.status == 200) {
        if (result.data && typeof result.data == 'object') {
          const response = result.data as IBaseAPIResponse;
          if (response.results) {
            _response = {data: response};
          } else {
            _response = {error: 'Error in API'};
          }
        } else if (result.error?.data) {
          _response = {error: result.error.data};
        } else {
          _response = {error: 'unknown'};
        }
      } else {
        _response = {error: result.error as FetchBaseQueryError};
      }
      if ('data' in _response) {
        return {data: _response};
      } else {
        return {error: 'Unknown'};
      }
    } catch (error) {
      return {
        error: error as FetchBaseQueryError,
      };
    }
  };
  return customBaseQuery;
};

export default serviceHandler;
