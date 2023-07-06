import React, {useState, createContext} from "react";
import Post from "./Post";
import Header from "./Header";
export const ThemeContext = createContext();


function App() {


    const [theme, setTheme] = useState('dark');

    const [posts, setPosts] = useState([
        {
            id: Math.random(),
            title: "Title#01",
            subtitle: "Subtitle#01",
            read: false,
        },
        {
            id: Math.random(),
            title: "Title#02",
            subtitle: "Subtitle#02",
            read: true,
        },
        {
            id: Math.random(),
            title: "Title#03",
            subtitle: "Subtitle#03",
            read: false,
        }
    ]);

    function handleToogleTheme() {
        setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark'
        );
    }

    function handlePost() {
        setPosts((prevState) => [
            ...prevState,
            {
                id: Math.random(),
                title: `Title#0${prevState.length + 1}`,
                subtitle: `Subtitle#0${prevState.length + 1}`,
                read: true,
            }
        ])
    }

    function handleRemove(postId) {
        setPosts((prevState) => (
            prevState.filter((post) => post.id !== postId)
        ));
    }

    return (
        <ThemeContext.Provider value={ {
            theme,
            onToogleTheme: handleToogleTheme
            } }>
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
                        post={post}
                    />
                ))
            }
        </ThemeContext.Provider>
    )
}

export default App;