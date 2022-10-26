import {createContext, ReactNode, useContext} from 'react';
import {createWatchListStore} from './watchList.store';
import {createGenerStore} from './gener.store';
type storeTypes = {
  createWatchListStore: typeof createWatchListStore;
  createGenerStore: typeof createGenerStore;
};

const createStore: () => storeTypes = () => {
  return {
    createWatchListStore,
    createGenerStore,
  };
};
const store = createStore();
store.createGenerStore.fetchGeners();

const StoreContext = createContext({});
const StoreProvider: React.FC<any> = ({children}: {children: ReactNode}) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
//@ts-ignore
const useStore: () => storeTypes = () => {
  let context = useContext(StoreContext);
  if (!context) {
    throw new Error('check app context');
  }
  return context;
};

export {StoreProvider, useStore};
