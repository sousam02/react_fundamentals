import React from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";
import styles from "./Post.scss"
import { Subtitle, Container } from "./styles";

export default function Post(props) {
    return (
        <>
            <Container removed={props.post.removed}>
                <PostHeader
                    onRemove={props.onRemove}
                    post={{
                        id: props.post.id,
                        title: props.post.title,
                        read: props.post.read
                    }}
                />
                <Subtitle>{props.post.subtitle}</Subtitle>
            </Container>
        </>
    )
}

Post.propTypes = {
    onRemove: PropTypes.func.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        read: PropTypes.bool.isRequired,
        removed: PropTypes.bool.isRequired
    }).isRequired,

}