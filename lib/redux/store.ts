import { configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist'

import { FakeForemostApi } from "./FakeForemostApi";

export const store = configureStore({
  reducer: {
    [FakeForemostApi.reducerPath]: FakeForemostApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      FakeForemostApi.middleware,
    ),
})

