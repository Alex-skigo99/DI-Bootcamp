import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { fetchData, setCurrentUser } from "./userSlice";

function AuthorChoice(props) {
    const users = useSelector((state) => state.userReducer.data);
    const loading = useSelector((state) => state.userReducer.loading);
    const error = useSelector((state) => state.userReducer.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData())
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    };

    return (
        <div>
            <h3>Authors</h3>
            <select onChange={(e) => dispatch(setCurrentUser(e.target.value))} id="authors">
                <option value={-1}>Choose author...</option>
                {users.map(user => {
                    return (
                        <option key={user.id} value={user.id} >{user.name}</option>
                    )
                })}
            </select>
        </div>
    )
};

export default AuthorChoice;