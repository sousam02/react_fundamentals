import React, {useState} from "react";
import Post from "./Post";
import Header from "./Header";

function App() {

    const [posts, setPosts] = useState([
        {
            id: Math.random(),
            title: "Title#01",
            subtitle: "Subtitle#01",
        },
        {
            id: Math.random(),
            title: "Title#02",
            subtitle: "Subtitle#02",
        },
        {
            id: Math.random(),
            title: "Title#03",
            subtitle: "Subtitle#03",
        }
    ])

    function handlePost() {
        setPosts((prevState) => [
            ...prevState,
            {
                id: Math.random(),
                title: `Title#0${prevState.length + 1}`,
                subtitle: `Subtitle#0${prevState.length + 1}`,
            }
        ])
    }

    function handleRemove(postId) {
        setPosts((prevState) => (
            prevState.filter((post) => post.id !== postId)
        ));
    }

    return (
        <>
            <Header title="JStack's Blog">
                <h4>
                    Week posts
                    <button onClick={handlePost}>Atualizar</button>    
                </h4>
            </Header>
            <hr />

            {
                posts.map( post => (
                    <Post
                        onRemove={handleRemove}
                        key={post.id}
                        post={{
                            id: post.id,
                            title: post.title,
                            subtitle: post.subtitle
                        }}
                    />
                ))
            }
        </>
    )
}

export default App;