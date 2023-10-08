import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./themeSlice";
import { userReducer } from "./userSlice";
const rootReducer = combineReducers({
    theme:themeReducer,
    user:userReducer
})
const store = configureStore({
    reducer: rootReducer
})
export type RootState = ReturnType<typeof rootReducer>
export default store;

