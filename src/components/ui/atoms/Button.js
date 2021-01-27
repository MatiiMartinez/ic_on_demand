import React from "react";
import PropTypes from "prop-types";
import { Button as MatBtn } from "@material-ui/core";

const Button = (props) => {
    const { variant, handleClick, color, size } = props;

    return (
        <MatBtn
            variant={variant}
            onClick={handleClick}
            color={color}
            size={size}
        >
            {props.children}
        </MatBtn>
    );
};

Button.defaultProps = {
    label: "button",
    variant: "contained",
    color: "default",
};
Button.propTypes = {
    label: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(["contained", "outlined", "text"]),
    color: PropTypes.oneOf(["default", "inherit", "primary", "secondary"]),
    handleClick: PropTypes.func.isRequired,
};

export default Button;
