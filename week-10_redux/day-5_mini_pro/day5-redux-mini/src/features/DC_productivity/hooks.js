import {createSelector} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';

const selectAllTasks = (state) => state.taskReducer.tasks;
const selectCurrentCategory = (state) => state.taskReducer.currentCategory;
const selectCategories = (state) => state.categoryReducer.categories;


export const useSelectTasksByCategory = () => useSelector(
    createSelector([selectAllTasks, selectCurrentCategory], (tasks, category) => {
        if (category == -1) return tasks;
        return tasks.filter((task) => task.category == category)
    })
);

export const useSelectCategory = () => useSelector(selectCategories);

export const useSelectCategoryById = (id) => useSelector(
    createSelector([selectCategories], (categories) => {
        return categories.filter((category) => category.id == id)
    })
);
