import { createReducer } from "@reduxjs/toolkit"

// logic should never be written inside of actions or reducers
// redux is simply there to fetch pieces of global state
// it is also there to update those pieces of state through these actions

const INIT_STATE = {
    navSize: 'sm',
    active: '/'
}

const layoutReducer = createReducer(INIT_STATE, (builder) => {
    builder
        .addCase('SET_SM', (state, action) => {
            state.navSize = 'sm'
        })
        .addCase('SET_LG', (state, action) => {
            state.navSize = 'lg'
        })
        .addCase('SET_ACTIVE', (state, action) => {
            state.active = action.payload
        })
})

export default layoutReducer