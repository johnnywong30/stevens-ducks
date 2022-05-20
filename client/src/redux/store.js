import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter";
import layoutReducer from "./reducers/layout";


const reducer = {
    // reducers live here. they are automatically combined together in the store
    counter: counterReducer,
    layout: layoutReducer
}

export const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production'
})