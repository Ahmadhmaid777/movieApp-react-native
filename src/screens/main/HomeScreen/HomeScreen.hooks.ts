/* eslint-disable @typescript-eslint/no-unused-vars */
import {endpoints} from 'config';
import {IMovie, PeginateResponse} from 'types';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {useQuery} from 'hooks';
type MoviesResponse = {
  data: PeginateResponse<IMovie>;
};
const getNowShowingMovies = async ({pageParam = 1}) => {
  let response = await axios
    .get<unknown, MoviesResponse>(endpoints.nowShowingMovies, {
      params: {
        page: pageParam,
      },
    })
    .catch(err => {
      err;
    });
  return response.data;
};

type GetGenersResponse = {
  data: {genres: any[]};
};
const getGeners = async () => {
  let response = await axios.get<unknown, GetGenersResponse>(
    endpoints.genersList,
  );
  return response.data.genres;
};

const getPopularMovies = async ({pageParam = 1}) => {
  let response = await axios.get<unknown, MoviesResponse>(
    endpoints.popularMovies,
    {
      params: {
        page: pageParam,
      },
    },
  );
  return response.data;
};
const getPopularMoviesTest = () => {
  return axios
    .get<unknown, MoviesResponse>(endpoints.popularMovies, {
      params: {
        page: 1,
      },
    })
    .then(res => {
      return res;
    });
};

const usePopularMoviesTest = () => {
  return useQuery([endpoints.popularMovies], getPopularMoviesTest);
};

const usePopularMovies = () => {
  let [data, setData] = useState<IMovie[]>([]);
  let [error, setError] = useState();
  let [loading, setLoading] = useState<boolean>(false);
  let [page, setPage] = useState(1);

  const fetchNextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    setLoading(true);
    getPopularMovies({pageParam: page})
      .then(data => {
        setData(data.results);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [page]);

  return {data, error, loading, fetchNextPage};
};
// const useNowShowingMovies = () =>
//   useInfiniteQuery(
//     [endpoints.nowShowingMovies],
//     ({}) => getNowShowingMovies({pageParam: 1}),
//     {
//       onSuccess: data => {
//         console.log('success', data);
//       },
//       getNextPageParam: lastpage => {
//         if (lastpage) {
//           if (lastpage.page >= lastpage.total_pages) {
//             return undefined;
//           }
//           return lastpage.page + 1;
//         }
//       },
//     },
//   );

export {
  getNowShowingMovies,
  getGeners,
  getPopularMovies,
  usePopularMovies,
  usePopularMoviesTest,
};
