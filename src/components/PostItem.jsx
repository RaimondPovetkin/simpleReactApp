import React from "react";

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
                <button className="post__button">
                    {props.post.buttonName}
                </button>
            </div>
        </div>
    );
};

export default PostItem;