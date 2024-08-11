import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [
            {
                id: 1,
                name: 'Dreams',
                // comment: 'What do you want in your life.'
            },
        ],
    },
    reducers: {
        addCategory: (state, action) => {
            state.categories.push({
                id: state.categories.length + 1,
                name: action.payload,
                // comment: action.payload[1],
            })
        },
        removeCategory: (state, action) => {
            if (state.currentCategory == 1) return alert('Its an unremovable category!');
            state.categories = state.categories.filter((item) => item.id !== action.payload);
        },
    }
});

export const {addCategory, removeCategory} = categoriesSlice.actions;
export default categoriesSlice.reducer;
