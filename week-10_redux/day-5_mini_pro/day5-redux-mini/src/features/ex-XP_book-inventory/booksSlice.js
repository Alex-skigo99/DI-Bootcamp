import { createSlice } from '@reduxjs/toolkit';
import { books_data } from './books';

const bookSlice = createSlice({
    name: 'books',
    initialState: {
        books: books_data,
        currentGenre: -1,
    },
    reducers: {
        setCurrentGenre: (state, action) => {
            state.currentGenre = action.payload;
        }
    }
});

export const {setCurrentGenre} = bookSlice.actions;
export default bookSlice.reducer;
