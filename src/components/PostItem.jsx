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
                        {props.post.description}
                    </div>
                </div>
                <MyButton onClick={() => { props.remove(props.post) }} className="post__button">
                    {props.post.buttonName}
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;