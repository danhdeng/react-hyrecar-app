import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import homePageReducer from './containers/HomePage/slicer';
import logger from 'redux-logger'

export const store = configureStore({
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
  reducer: {
    homePage: homePageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
