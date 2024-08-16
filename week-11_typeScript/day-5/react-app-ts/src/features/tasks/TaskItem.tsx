import { memo } from "react";
import { useDispatch } from "react-redux";
import { toggleTask } from "./taskSlice";
import { ItemType } from "../../model/listItems";


function TaskItem(props: ItemType) {
    const dispatch = useDispatch();
    console.log('render TaskItem-', props.id);
    return (
        <>
            <input
                type="checkbox"
                checked={!props.active}
                onChange={() => dispatch(toggleTask(props.id))}
            />
            {props.text}
        </>
    )
};

export default memo(TaskItem);