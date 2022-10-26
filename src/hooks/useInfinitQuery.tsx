import {useEffect, useState} from 'react';

type QueryKeyProps = [key: string, ...rest: any];
type QueryFnProp = ({pageParams = 1}: {pageParams?: number}) => Promise<any>;
type QueryConfigProps<T = unknown> =
  | {
      enable: boolean;
      getNextPage: (lastPage: T) => number;
    }
  | undefined;

function useInfinitQuery<R = any[]>(
  queryKey: QueryKeyProps,
  queryFn: QueryFnProp,
  config: QueryConfigProps<R>,
) {
  // config = {enable = true, getNextPage}
  let [data, setDate] = useState<R[]>([]);
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [isFetchingNext, setIsFetchingNext] = useState(false);
  const nextPage = data ? config?.getNextPage(data[data.length - 1]) : 0;
  const hasNextPate = data && !nextPage ? false : true;
  const handelQueryFn = () => {
    setIsLoading(true);
    queryFn({})
      .then(resData => {
        setDate(prev => [resData]);
      })
      .catch(err => {
        setError(err);
      })
      .then(() => {
        setIsLoading(false);
      });
  };

  const fetchNextPage = () => {
    setIsFetchingNext(true);
    queryFn({pageParams: nextPage})
      .then(resData => {
        setDate(prevData => {
          let newData = prevData;
          newData?.push(resData);
          return newData;
        });
      })
      .catch(err => {
        setError(err);
      })
      .then(() => {
        setIsFetchingNext(false);
      });
  };

  useEffect(() => {
    config?.enable && handelQueryFn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config?.enable, nextPage]);
  const refetch = handelQueryFn;
  return {
    data,
    isLoading,
    refetch,
    error,
    hasNextPate,
    fetchNextPage,
    isFetchingNext,
  };
}

export default useInfinitQuery;
