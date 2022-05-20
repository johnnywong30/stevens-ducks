import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter";


const reducer = {
    // reducers live here. they are automatically combined together in the store
    counter: counterReducer
}

export const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production'
})