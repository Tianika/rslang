import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducer';
import { rootSaga } from './saga';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const sagaMiddleware = createSagaMiddleware();
//const middleware = (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware);
//const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export { store };
