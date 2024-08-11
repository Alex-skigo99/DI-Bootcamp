import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { fetchData, removeUser } from "./fetchSlice";

function ListData(props) {
    const datas_all = useSelector((state) => state.fetchReducer.data);
    const loading = useSelector((state) => state.fetchReducer.loading);
    const error = useSelector((state) => state.fetchReducer.error);
    const dispatch = useDispatch();
    let datas = datas_all;

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
        <div className="list">
            <ul>
                {datas_all.map((data) => (
                    <li key={data.id}>
                        {data.name}
                        {data.email}
                        <button onClick={() => dispatch(removeUser(data.id))}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default ListData;