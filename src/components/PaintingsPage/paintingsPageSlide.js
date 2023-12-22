import {createSlice} from '@reduxjs/toolkit';
import {data} from '../data/data'

export const paintingsPageSlice = createSlice({
    name:'targetIndex',
    initialState:data,
    reducers:{
        setTargetArray:(state, action) => {
           return state[action.payload]
        }
    }
})

export const paintingsPageReducer = paintingsPageSlice.reducer;
export const {setTargetArray} = paintingsPageSlice.actions;
export const selectedTargetArray= (state) => state.paintingsPage