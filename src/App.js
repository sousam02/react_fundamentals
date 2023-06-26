import React from "react";
import Post from "./Post";
import Header from "./Header";

function App() {
    return (
        <>
            <Header title="JStack's Blog">
                <h4>Week posts</h4>
            </Header>
            <hr />

            <Post
                post={{
                    title: "Title from article 1",
                    subtitle: "Subtitle from article 1"
                }}
            />
    
            <Post
                post={{
                    title: "Title from article 2",
                    subtitle: "Subtitle from article 2"
                }}
            />

            <Post
                post={{
                    title: "Title from article 3",
                    subtitle: "Subtitle from article 3"
                }}
            />
        </>
    )
}

export default App;