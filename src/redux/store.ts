import { configureStore } from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query';
import { registerApi } from './services/register/api';
import { userInfo } from './services/userInfo/api';
import { adminApi } from './services/admin/api';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [registerApi.reducerPath]: registerApi.reducer,
    [userInfo.reducerPath]: userInfo.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([
      registerApi.middleware,
      userInfo.middleware,
      adminApi.middleware
    ]),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
