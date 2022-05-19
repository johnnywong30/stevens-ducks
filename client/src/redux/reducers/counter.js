import { createReducer } from "@reduxjs/toolkit"

// logic should never be written inside of actions or reducers
// redux is simply there to fetch pieces of global state
// it is also there to update those pieces of state through these actions

const INIT_STATE = {
    count: 0
}

const counterReducer = createReducer(INIT_STATE, (builder) => {
    builder
        .addCase('INCREMENT', (state, action) => {
            state.count += action.payload
        })
        .addCase('DECREMENT', (state, action) => {
            state.count -= action.payload
        })
        .addCase('CLEAR', (state, action) => {
            state.count = 0
        })
})

export default counterReducer