import React from "react";
import MyButton from "./UI/MyButton";

const PostItem = (props) => {

    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <div className="post__title">
                        {props.index}. {props.post.title}
                    </div>
                    <div className="post__description">
                        {props.post.body}
                    </div>
                </div>
                <MyButton onClick={() => { props.remove(props.post) }} className="post__button">
                    DELETE
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;