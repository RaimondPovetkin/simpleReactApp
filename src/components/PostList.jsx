import React from "react";
import PostItem from "./PostItem";

const PostList = (props) => {
    return (
        <div>
            <strong className="title">{props.title}</strong>
            <div className="App">
                {props.posts.map((post, index) =>
                    <PostItem
                        post={post} index={index + 1} key={post.id}
                    />
                )}
            </div>
        </div>
    );
};

export default PostList;