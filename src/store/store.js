import {configureStore} from '@reduxjs/toolkit';
import useReducer from './userSlice';
import movieReducer from './Movie';
import selectedMovieReducer from './selectedMovieSlice';
export default configureStore({
    reducer: {
        user:useReducer,
        movie:movieReducer,
        selectedMovie:selectedMovieReducer
    }
})