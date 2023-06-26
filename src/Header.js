import React from "react";
import PropTypes from 'prop-types';

export default function Header({ title, children }) {
    return (
        <>
            <h1>{title}</h1>
            {children}
        </>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired
}

Header.defaultProps = {
    title: `Jstack's Blog`
}

