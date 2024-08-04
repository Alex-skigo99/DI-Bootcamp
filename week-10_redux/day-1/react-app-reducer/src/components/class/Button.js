const Button = (props) => {
    return (<>
        <button onClick={() => props.setCount((count) => count+1)}>+</button>
    </>)
}

export default Button;