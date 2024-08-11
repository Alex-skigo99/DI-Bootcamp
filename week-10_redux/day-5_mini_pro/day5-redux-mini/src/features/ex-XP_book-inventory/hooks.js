import {createSelector} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';

const selectAllBooks = (state) => state.bookReducer.books;
const selectCurrentGenre = (state) => state.bookReducer.currentGenre;

export const useSelectBooks = () => useSelector(
    createSelector([selectAllBooks, selectCurrentGenre], (books, genre) => {
        if (genre == -1) return books;
        return books.filter((book) => book.genre == genre)
    })
);
