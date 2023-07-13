import React, { useContext } from "react";
import PropTypes from 'prop-types';
import Button from "../Button";
import Title from '../Title';

import { ThemeContext } from "../../contexts/ThemeContext";

export default function Header({ title, children }) {
    const { onToogleTheme } = useContext(ThemeContext);
    return (
        <div>
            <Title>{title}</Title>

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

