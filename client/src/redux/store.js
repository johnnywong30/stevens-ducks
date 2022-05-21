import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter";
import layoutReducer from "./reducers/layout";
import rosterReducer from "./reducers/roster"


const reducer = {
    // reducers live here. they are automatically combined together in the store
    counter: counterReducer,
    layout: layoutReducer,
    roster: rosterReducer
}

export const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production'
})