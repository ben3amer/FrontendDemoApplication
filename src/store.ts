import { Action } from "redux";
import { createLogger } from "redux-logger";
import reducers from "./reducers";
import { persistStore } from "redux-persist";
import { configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const logger = createLogger({
  collapsed: true,
  diff: true,
  predicate: (getState: any, action: any) => {
    const type = action.type;
    return (
      type !== "@@redux-form/BLUR" &&
      type !== "@@redux-form/CHANGE" &&
      type !== "@@redux-form/FOCUS" &&
      type !== "@@redux-form/TOUCH"
    );
  },
});

export const setupStore = (preloadedState?: RootState) => {
  return configureStore({
    reducer: reducers,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }),
  });
};

export const store = setupStore();
export const persistor = persistStore(store as any);
export type RootState = ReturnType<typeof reducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;
export const useAppThunkDispatch = () => useDispatch<ThunkAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
