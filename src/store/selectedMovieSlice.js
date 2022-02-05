import {createSlice} from '@reduxjs/toolkit';
const initialState = {
   id : '',
   backgroundImg:'',
   cardImg:'',
   description: '',
   subTitle: '',
   title: '',
   titleImg: '',
   type: '',
}
const selectedMovieSlice = createSlice({
    name:'selectedMovie',
    initialState,
    reducers:{
        setCurrentMovie:(state,action) => {
            state.id = action.payload.id;
            state.backgroundImg = action.payload.backgroundImg;
            state.cardImg = action.payload.cardImg;
            state.description = action.payload.description;
            state.subTitle = action.payload.subTitle;
            state.title = action.payload.title;
            state.titleImg = action.payload.titleImg;
            state.type = action.payload.type;
        }
    }
})
export const{setCurrentMovie} = selectedMovieSlice.actions;
export default selectedMovieSlice.reducer;