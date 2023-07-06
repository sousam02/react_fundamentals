import React, {useContext} from "react";
import PropTypes from 'prop-types';
import Button from "./Button";

import { ThemeContext } from "./App";

export default function Header({ title, children }) {
    const {onToogleTheme} = useContext(ThemeContext);
    return (
        <>
        <Button onClick={onToogleTheme}>Toogle Theme</Button>
            <h1>{title}</h1>
            {children}
        </>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
}

Header.defaultProps = {
    title: `Jstack's Blog`,
}

