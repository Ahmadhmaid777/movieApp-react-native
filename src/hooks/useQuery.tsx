import {useCallback, useEffect, useState} from 'react';

type QueryKeyProps = [key: string, ...rest: any];
type QueryFnProps = () => Promise<any>;
type QueryConfigProps =
  | {
      enable?: boolean;
    }
  | undefined;

const useQuery = (
  queryKey: QueryKeyProps,
  queryFn: QueryFnProps,
  config: QueryConfigProps = {enable: true},
) => {
  let [data, setDate] = useState();
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();

  const handelQueryFn = () => {
    setIsLoading(true);
    queryFn()
      .then(resData => {
        setDate(resData);
      })
      .catch(err => {
        setError(err);
      })
      .then(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    config.enable && handelQueryFn();
  }, [config]);

  const refetch = handelQueryFn;

  return {data, isLoading, refetch, error};
};

export default useQuery;
