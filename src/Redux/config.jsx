import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './CounterReducer/CounterReducer'



export const store = configureStore({ reducer: CounterReducer })
// The store now has redux-thunk added and the Redux DevTools Extension is turned on