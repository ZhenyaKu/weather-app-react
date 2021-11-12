import { configureStore } from '@reduxjs/toolkit'
import cityReducer from './features/citySlice'

export default configureStore({
    reducer: {
        city: cityReducer
    }
})