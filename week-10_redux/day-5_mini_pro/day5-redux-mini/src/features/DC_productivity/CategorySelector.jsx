import { useDispatch } from "react-redux";
import { setCurrentCategory } from "./tasksSlice";
import { useSelectCategory } from "./hooks";

function CategorySelector() {
    const categories = useSelectCategory();
    console.log('CategorySelector: ', categories);
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Category</h3>
            <select onChange={(e) => dispatch(setCurrentCategory(e.target.value))}>
                <option value={-1}>All categories</option>
                {categories.map(category => {
                    return (
                        <option key={category.id} value={category.id} >{category.name}</option>
                    )
                })}
            </select>
        </div>
    )
};

export default CategorySelector;