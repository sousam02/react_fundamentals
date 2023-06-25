import React from "react";
import Post from "./Post";

const category = 'Facebook';

function App() {
    return (
        <>
            <h1>Jstack Blog</h1>
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