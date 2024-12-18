import React from 'react';

import { useGetFilmsTopQuery } from '../../../services/kinopoiskAPI.ts';

export default function MoviesListTop() {
  if (useGetFilmsTopQuery) {
    const { data, error, isLoading } = useGetFilmsTopQuery(
      'TOP_POPULAR_ALL',
      1,
    );
    console.log(data, error, isLoading);
  }

  return <div>MoviesListTop</div>;
}
