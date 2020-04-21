import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/tasksSlice';
import nameReducer from '../features/nameSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  tasks: tasksReducer,
  name: nameReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store =  configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store)
