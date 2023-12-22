import {configureStore} from '@reduxjs/toolkit';
import { paintingsPageReducer } from './components/PaintingsPage/paintingsPageSlide';

const store = configureStore({
    reducer:{
        paintingsPage : paintingsPageReducer
    }
})

export default store