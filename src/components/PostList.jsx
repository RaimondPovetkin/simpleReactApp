import React from "react";
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts,remove,title}) => {
    if(!posts.length){
        return (
            <div>
                <h2 style={{textAlign: 'center'}}>
                    Посты не найдены!
                </h2>
            </div>
        )
    }
    return (
        <div>
            <strong className="title">{title}</strong>
            <div>
                <TransitionGroup>
                    {posts.map((post, index) =>
                        <CSSTransition
                            key={post.id}
                            timeout={500}
                            classNames="post"
                        >
                            <PostItem
                                remove={remove} index={index + 1} post={post}
                            />
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        </div>
    );
};

export default PostList;