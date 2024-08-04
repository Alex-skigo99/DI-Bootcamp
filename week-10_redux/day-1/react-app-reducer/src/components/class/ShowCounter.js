import {useContext} from 'react';
// import {AppContext} from "../App";

const ShowCounter = (props) => {
    // const {Count} = useContext(AppContext);
    return (
        <h2>ShowCounter - {props.count}</h2>
    )
}

export default ShowCounter;