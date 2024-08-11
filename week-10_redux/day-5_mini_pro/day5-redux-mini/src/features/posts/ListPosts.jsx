import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { fetchData, removeUser } from "./fetchSlice";
import ReactionButtons from "./ReactionButtons";
import { usePostsSelector, usePostsLoading, usePostsError, useFetchPosts } from "./postHooks";

function ListPosts(props) {
    const posts = usePostsSelector();
    const loading = usePostsLoading();
    const error = usePostsError();
    const dispatch = useDispatch();

    const callFetchPosts = useFetchPosts();

    useEffect(() => {
        callFetchPosts()
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    };

    return (
        <div className="list">
            <section>
                {posts ? posts.map((data) => (
                    <article key={data.id}>
                        <h4>{data.title}</h4>
                        <p>{data.body}</p>
                        <button onClick={() => dispatch(removeUser(data.id))}>Remove</button>
                        <ReactionButtons post={data} />
                    </article>
                )) : null}
            </section>
        </div>
    )
};

export default ListPosts;