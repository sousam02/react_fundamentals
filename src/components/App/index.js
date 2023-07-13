import React, { useState, createContext } from "react";
import Post from "../Post";
import Header from "../Header";
import Title from "./styles";
import { ThemeProvider } from "../../contexts/ThemeContext";


function App() {

    const [posts, setPosts] = useState([
        {
            id: Math.random(),
            title: "Title#01",
            subtitle: "Subtitle#01",
            read: false,
            removed: true
        },
        {
            id: Math.random(),
            title: "Title#02",
            subtitle: "Subtitle#02",
            read: true,
            removed: false
        },
        {
            id: Math.random(),
            title: "Title#03",
            subtitle: "Subtitle#03",
            read: false,
            removed: false
        }
    ]);

    

    function handlePost() {
        setPosts((prevState) => [
            ...prevState,
            {
                id: Math.random(),
                title: `Title#0${prevState.length + 1}`,
                subtitle: `Subtitle#0${prevState.length + 1}`,
                read: true,
                removed: false
            }
        ])
    }

    function handleRemove(postId) {
        setPosts((prevState) => (
            prevState.map(
                post => (
                    post.id === postId
                        ? { ...post, removed: true }
                        : post
                )
            )
        ));
    }

    return (
        <ThemeProvider>
            <Header title="JStack's Blog">
                <Title as="h4"> Week Posts </Title>
                <button onClick={handlePost}>Atualizar</button>
            </Header>
            <hr />

            {
                posts.map(post => (
                    <Post
                        onRemove={handleRemove}
                        key={post.id}
                        post={post}
                    />
                ))
            }
        </ThemeProvider>
    )
}

export default App;