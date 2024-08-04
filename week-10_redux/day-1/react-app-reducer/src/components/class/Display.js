import ShowCounter from "./ShowCounter";

const Display = (props) => {
    return (<>
        <ShowCounter count={props.count} />
    </>
    )
}

export default Display;