import React, {useContext} from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "./App";


export default function Button(props) {
    const { theme } = useContext(ThemeContext);
    return (
    <button
    style={
        {
            backgroundColor: theme === 'dark' ? '#000' : '#fff',
            color: theme === 'dark' ? '#fff' : '#000',
        }
    }
    onClick={props.onClick}>
        {props.children}
    </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}