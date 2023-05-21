import createSagaMiddleware from 'redux-saga'
import userSlice from './user/userSlice'
import postSlice from './posts/postSlice'
import commentsSlice from './comments/commentsSlice';
import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { rootWatcher } from './saga';
import { useDispatch } from 'react-redux';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    userSlice,
    postSlice,
    commentsSlice
  });


  export const store =
     configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
    });
   
sagaMiddleware.run(rootWatcher)


// export type RootState = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof store.getState>
export const useStoreDispatch = () => useDispatch<typeof store.dispatch>()

// export type AppStore = ReturnType<typeof setupStore>;
// export type AppDispatch = AppStore["dispatch"];
