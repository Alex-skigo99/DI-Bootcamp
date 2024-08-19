import { memo, FC } from "react";
import { useDispatch } from "react-redux";
import { removeTask } from "./taskSlice";
import { ItemType } from "../../model/listItems";


const TaskRemove: FC<Pick<ItemType, 'id'>> = (props) => {
    const dispatch = useDispatch();
    console.log('render TaskRemove-', props.id);

    return (
        <button onClick={() => dispatch(removeTask(props.id))}>X</button>
    )
};

export default memo(TaskRemove);