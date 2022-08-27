import {useEffect, useState} from "react";
import "./styles/style.scss";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import Loader from "./components/UI/Loader";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";

function App() {
    let [posts, setPost] = useState([]);

    const [modal, setModal] = useState(false)
    const [filter, setFilter] = useState({sort: '', query: ''})
    const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query)
    const [isPostsLoading, setIsPostsLoading] = useState(false)

    useEffect(() => {
        fetchPosts()
    }, [])

    async function fetchPosts() {
        setIsPostsLoading(true)
        setTimeout(async()=>{
        let posts = await PostService.getAll()
        setPost(posts)
        setIsPostsLoading(false)
        },2000)
    }

    const createPost = (newPost) => {
        setPost([...posts, newPost]);
        setModal(false)
    };

    const removePost = (post) => {
        setPost(posts.filter(
            el => el.id !== post.id
        ))
    };

    return (
        <div className="App">
            <button onClick={fetchPosts}>Get</button>
            <button onClick={() => setModal(true)}>MODAL</button>
            <MyModal
                visible={modal}
                setVisible={setModal}
            >
                Модалка
                <PostForm create={createPost}/>
            </MyModal>
            <div>
                <hr style={{margin: '10px'}}/>
                <PostFilter
                    filter={filter}
                    setFilter={setFilter}
                />
            </div>
            {isPostsLoading
                ?<Loader/>
                :<PostList posts={sortedAndSearchedPost} remove={removePost} title={"post list 1"}/>
            }
        </div>
    );
}

export default App;
