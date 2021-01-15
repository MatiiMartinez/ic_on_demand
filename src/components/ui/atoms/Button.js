import React from "react";
import PropTypes from "prop-types";
import { Button as MatBtn } from "@material-ui/core";

const Button = (props) => {
  const { label, variant, handleClick, color } = props;

  return (
    <MatBtn variant={variant} onClick={handleClick} color={color}>
      {label}
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
