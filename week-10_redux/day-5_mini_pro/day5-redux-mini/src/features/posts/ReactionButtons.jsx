import { useSelector, useDispatch } from "react-redux";
import { memo } from 'react';
import { addreaction } from "./fetchSlice";

const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
};

const ReactionButtons = (props) => {
    const { id, reactions } = props.post;
    console.log(`ReactionButton ${id}`);
    const dispatch = useDispatch();

    const renderReaction = Object.entries(reactionEmoji).map(([name, emoji]) => (
        <button
            onClick={() => dispatch(addreaction({ id, name }))}
            className="reactionButton"
            key={name}>
            {emoji} {reactions[name]}
        </button>
    ))
    return (
        <div>{renderReaction}</div>
    )
}

export default memo(ReactionButtons);