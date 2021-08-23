import { combineReducers, configureStore } from '@reduxjs/toolkit'
import CartReducer from '../slide/CartSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    carts: CartReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer
})


export const persistor = persistStore(store)
export default store;