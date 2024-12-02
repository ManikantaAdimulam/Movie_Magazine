export type MovieList = {
  data: {
    page: number;
    results: Movie[];
  };
};

export type Movie = {
  poster_path: string;
  title: string;
};

export type MovieRequest = {
  endPoint: string;
};
