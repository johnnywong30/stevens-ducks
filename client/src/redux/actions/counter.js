import { createAction } from "@reduxjs/toolkit";

// logic should never be written inside of actions or reducers
// redux is simply there to fetch pieces of global state
// it is also there to update those pieces of state through these actions

export const increment = createAction('INCREMENT')
export const decrement = createAction('DECREMENT')
export const clear = createAction('CLEAR')