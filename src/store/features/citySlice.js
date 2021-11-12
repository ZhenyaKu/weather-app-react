import { createSlice } from '@reduxjs/toolkit'

export const citySlice = createSlice({
    name: 'city',
    initialState: {
        value: 'Kyiv'
    },
    reducers: {
        changeCity: (state, action) => {
            console.log(
                { action }
            );

            state.value = action.payload
        }
    }
})

export const { changeCity } = citySlice.actions

export const getCity = state => state.city.value;

export default citySlice.reducer