import { configureStore } from '@reduxjs/toolkit'
import reducer from '../slide/CartSlice'

const rootReducer = {
    carts: reducer,
}

const store = configureStore({
    reducer: rootReducer
})

export default store;