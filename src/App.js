import {useState} from "react";
import "./styles/style.scss";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/MySelect";

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
            description: "Lorem corporis enim ipsum dolor sit amet, consectetur adipisicing elit. At autem corporis enim fugit ipsam maiores nesciunt nostrum officiis optio, quibusdam!",
            buttonName: "delete"
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet. ipsum dolor sit.",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem corporis enim fugit ipsam enim fugit maiores nesciunt nostrum officiis optio, quibusdam!",
            buttonName: "delete"
        }
    ]);
    let [posts2, setPost2] = useState([
        {
            id: 1,
            title: "Lorem ipsum consectetur adipisicing dolor sit amet.",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem corporis enim fugit ipsam maiores nesciunt nostrum officiis optio, quibusdam! consectetur adipisicing elit.",
            buttonName: "delete"
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit.",
            description: "Lorem enim fugit ipsum dolor sit amet, consectetur adipisicing elit. At autem corporis enim fugit ipsam maiores nesciunt nostrum officiis optio, quibusdam!",
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

    let [selectedSort, setSelectedSort] = useState('')

    const removePost = (post) => {
        setPost(posts.filter(
            el => el.id !== post.id
        ))
    };

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPost([...posts].sort((a,b) => a[sort].localeCompare(b[sort]))) // функция sort не возвращает отсортированный массив, а мутирует первоначальный, это недопустимо. Поэтому мы разворачиваем посты в новый массив, и его уже сортируем
    };

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <div>
                <hr style={{margin: '10px'}}/>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Sort"
                    options={
                        [
                            {value: 'title', name: 'by the name'},
                            {value: 'description', name: 'by the desc'}
                        ]
                    }
                />
            </div>
            {posts.length
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
