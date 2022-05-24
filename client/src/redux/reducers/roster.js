import { createReducer } from "@reduxjs/toolkit"

// logic should never be written inside of actions or reducers
// redux is simply there to fetch pieces of global state
// it is also there to update those pieces of state through these actions

const INIT_STATE = {
    roster : []
}

const rosterReducer = createReducer(INIT_STATE, (builder) => {
    builder
        .addCase('SETROSTER', (state, action) => {
            state.roster = action.payload;
        })

})

export default rosterReducer