import React from "react";
import PostItem from "./PostItem";

const PostList = (props) => {
    return (
        <div>
            <strong className="title">{props.title}</strong>
            <div>
                {props.posts.map((post, index) =>
                    <PostItem
                        post={post} index={index + 1} key={post.id} remove={props.remove}
                    />
                )}
            </div>
        </div>
    );
};

export default PostList;