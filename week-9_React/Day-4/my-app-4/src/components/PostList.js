import posts from '../posts.json';

const PostList = () => {
    console.log(posts);

    return(
    <>
        <h1>This is a Title</h1>
        {
            posts.map(post => {
                return (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            )})
        }
    </>)
}

export default PostList