import React, {useRef} from "react";
import {useState} from "react";
import "./styles/style.scss";
import PostList from "./components/PostList";
import MyButton from "./components/UI/MyButton";
import MyInput from "./components/UI/MyInput";

function App() {
    let [posts, setPost] = useState([
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet.",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem corporis enim fugit ipsam maiores nesciunt nostrum officiis optio, quibusdam!",
            buttonName: "delete"
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit.",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem corporis enim fugit ipsam maiores nesciunt nostrum officiis optio, quibusdam!",
            buttonName: "delete"
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet. ipsum dolor sit.",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem corporis enim fugit ipsam maiores nesciunt nostrum officiis optio, quibusdam!",
            buttonName: "delete"
        }
    ]);
    let [posts2, setPost2] = useState([
        {
            id: 1,
            title: "Lorem ipsum consectetur adipisicing dolor sit amet.",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem corporis enim fugit ipsam maiores nesciunt nostrum officiis optio, quibusdam!",
            buttonName: "delete"
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit.",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem corporis enim fugit ipsam maiores nesciunt nostrum officiis optio, quibusdam!",
            buttonName: "delete"
        },
        {
            id: 3,
            title: "Lorem ipsum.",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem corporis enim fugit ipsam maiores nesciunt nostrum officiis optio, quibusdam!",
            buttonName: "delete"
        }
    ]);

    let [post, setPostState] = useState({
        title:'',
        description:''
    });

    const addNewPost = (e) => {
        e.preventDefault();

        setPost( [...posts, {...post, id: Date.now()}])
        setPostState( {title: '', description: ''})
    };

    return (
        <div className="App">
            <form>
                <MyInput
                    value={post.title}
                    type="text"
                    placeholder="Name"
                    onChange={e => setPostState({...post, title: e.target.value})} // изменяем нужное нам поле а весь остальной объект оставляем в прежнем виде
                />
                <MyInput
                    value={post.description}
                    onChange={e => setPostState({...post, description: e.target.value})}
                    type="text"
                    placeholder="Description"
                />
                <MyButton onClick={addNewPost}>Create</MyButton>
            </form>
            <PostList posts={posts} title={"post list 1"}/>
            <PostList posts={posts2} title={"post list 2"}/>
        </div>
    );
}

export default App;
