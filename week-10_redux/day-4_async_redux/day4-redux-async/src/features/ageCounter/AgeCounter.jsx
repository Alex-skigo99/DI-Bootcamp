import { useSelector, useDispatch } from "react-redux";
import { ageDownAsync, ageUpAsync } from "./ageSlice";

function AgeCounter() {
    const age = useSelector((state) => state.rootReducer.ageReducer.age);
    const loading = useSelector((state) => state.rootReducer.ageReducer.loading);
    const error = useSelector((state) => state.rootReducer.ageReducer.error);

    console.log(age, loading, error);

    const dispatch = useDispatch();

    if (loading) {
        return (
            <div id="ageCounter">
                <button onClick={() => dispatch(ageDownAsync())}> - </button><br />
                <img src="./logo192.png" alt="react" />
                <p>Loading...</p>
                <button onClick={() => dispatch(ageUpAsync())}> + </button>
            </div>
        )
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    };

    return (
        <div id="ageCounter">
            <button onClick={() => dispatch(ageDownAsync())}> - </button>
            <p>{age}</p>
            <button onClick={() => dispatch(ageUpAsync())}> + </button>
        </div>
    )
};

export default AgeCounter;