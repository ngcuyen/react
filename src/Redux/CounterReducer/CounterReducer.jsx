import { createSlice } from '@reduxjs/toolkit'

// const initialState = { value: 10 }

// const counterReducer = createSlice({
//     name: 'counterReducer',
//     initialState,
//     reducers: {
//         increment(state) {
//             state.value++
//         },
//         decrement(state) {
//             state.value !== 0 ? state.value-- : null
//         },
//         incrementByAmount(state, action) {
//             state.value += action.payload
//         },
//     },
// })

// export const { increment, decrement, incrementByAmount } = counterReducer.actions
// export default counterReducer.reducer

const initialState = {
    listMovie: [],
    upcomingMovie: [],
    genres: [],
}

const counterReducer = createSlice({
    name: 'movieData',
    initialState,
    reducers: {

        getMovieAction(state, action) {
            state.listMovie = action.payload
        },
        getUpcomingAction(state, action) {
            state.upcomingMovie = action.payload

        },
        getGenresAction(state, action) {
            state.genres = action.payload
        }
    }
})

export const { getMovieAction, getUpcomingAction, getGenresAction } = counterReducer.actions
export default counterReducer.reducer