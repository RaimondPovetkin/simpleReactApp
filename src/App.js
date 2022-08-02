import {useState} from "react";
import "./styles/style.scss";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

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

    const createPost = (newPost) => {
        setPost([...posts, newPost]);
    };

    const removePost = (post) => {
        setPost(posts.filter(
            el => el.id !== post.id
        ))
    };

    return (
        <div className="App">
            <PostForm create={createPost}/>
            {posts.length !== 0
                ?
                <PostList posts={posts} remove={removePost} title={"post list 1"}/>
                :
                <h2 style={{textAlign: 'center'}}>
                    Посты не найдены!
                </h2>
            }
            <PostList posts={posts2} remove={removePost} title={"post list 2"}/>
        </div>
    );
}

export default App;
