import React, { useContext } from "react";
import PropTypes from 'prop-types';
import Button from "./Button";
import styles from'./Header.scss'

import { ThemeContext } from "./App";

export default function Header({ title, children }) {
    const { onToogleTheme } = useContext(ThemeContext);
    return (
        <div>
            <h1 className={styles.title}>{title}</h1>

            <Button onClick={onToogleTheme}>
                Toogle Theme
            </Button>

            {children}
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
}

Header.defaultProps = {
    title: `Jstack's Blog`,
}

