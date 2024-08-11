import { useDispatch } from "react-redux";
import { setCurrentGenre } from "./booksSlice";

function GenreChoice() {
    const genres = [
        'fantasy',
        'horror',
        'sciencefiction',
    ];
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Genre</h3>
            <select onChange={(e) => dispatch(setCurrentGenre(e.target.value))}>
                <option value={-1}>All genres</option>
                {genres.map(genre => {
                    return (
                        <option key={genre} value={genre} >{genre}</option>
                    )
                })}
            </select>
        </div>
    )
};

export default GenreChoice;