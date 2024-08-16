import { memo } from "react";
import { useDispatch } from "react-redux";
import { removeTask } from "./taskSlice";
import { ItemType } from "../../model/listItems";


function TaskRemove(props: Pick<ItemType, 'id'>) {
    const dispatch = useDispatch();
    console.log('render TaskRemove-', props.id);

    return (
        <button onClick={() => dispatch(removeTask(props.id))}>X</button>
    )
};

export default memo(TaskRemove);