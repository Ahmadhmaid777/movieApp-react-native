import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type HomeTapParamsList = {
  Movies: undefined;
  WatchList: undefined;
};

export type MainStackParamsList = {
  Home: NavigatorScreenParams<HomeTapParamsList>;
  MovieDetails: {
    movieId: number;
  };
};

export type MainStackScreenProps<T extends keyof MainStackParamsList> =
  NativeStackScreenProps<MainStackParamsList, T>;

export type HomeTapScreenProps<T extends keyof HomeTapParamsList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTapParamsList, T>,
    MainStackScreenProps<keyof MainStackParamsList>
  >;

export type AuthStackParamsList = {
  Login: undefined;
  SignUp: undefined;
  RecoveryPassword: {
    userId: number;
  };
};

export type AuthStackScreenProps<T extends keyof AuthStackParamsList> =
  NativeStackScreenProps<AuthStackParamsList, T>;

export type RootStackParamList = {
  auth: NativeStackScreenProps<AuthStackParamsList>;
  main: NativeStackScreenProps<MainStackParamsList>;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
