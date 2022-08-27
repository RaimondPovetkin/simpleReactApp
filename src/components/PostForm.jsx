import React from "react";
import MyInput from "./UI/MyInput";
import MyButton from "./UI/MyButton";
import {useState} from "react";

const PostForm = ({create}) => {
    let [post, setPostState] = useState({
        title:'',
        description:''
    });

    const addNewPost = (e) => {
        e.preventDefault();
        let newPost = {
            ...post, id:Date.now(), buttonName: "delete"
        }
        create(newPost)
        setPostState( {title: '', description: ''})
    };

    return (
        <form>
            <MyInput
                value={post.title}
                type="text"
                placeholder="Name"
                onChange={e => setPostState({...post, title: e.target.value})} // изменяем нужное нам поле а весь остальной объект оставляем в прежнем виде. Передаём прямо в пропсах, поэтому onChange писать в инпуте уже не надо
            />
            <MyInput
                value={post.description}
                onChange={e => setPostState({...post, description: e.target.value})}
                type="text"
                placeholder="Description"
            />
            <MyButton onClick={addNewPost}>Create</MyButton>
        </form>
    );
};

export default PostForm;