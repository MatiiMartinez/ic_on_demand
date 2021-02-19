import React from "react";
import styled from "styled-components";

import { makeStyles, Popover } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    popover: {
        pointerEvents: "none",
    },
    paper: {
        boxShadow: "0 2px 4px #00000020",
        border: "1px solid #dcdacb",
        padding: "1rem",
        maxWidth: "300px",
        display: "flex",
        flexDirection: "column",
        rowGap: ".5rem",
    },
}));

const HoverCard = (props) => {
    const { isOpen, anchorEl, handlePopoverClose, item } = props;
    const classes = useStyles();

    return (
        <Popover
            id="mouse-over-popover"
            className={classes.popover}
            classes={{
                paper: classes.paper,
            }}
            open={isOpen}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "center",
                horizontal: "right",
            }}
            transformOrigin={{
                vertical: "center",
                horizontal: "left",
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
            container={anchorEl}
        >
            <PopoverTitle>{item.title}</PopoverTitle>
            <PopoverSubtitle>
                2 horas &middot; Material &middot; Multimedia
            </PopoverSubtitle>
            <MiniCardDescription>{item.description}</MiniCardDescription>
        </Popover>
    );
};

export default HoverCard;

const PopoverTitle = styled.h1`
    font-size: 1rem;
    font-weight: 900;
    text-transform: capitalize;
    margin: 0;
`;

const PopoverSubtitle = styled.span`
    font-size: 0.75rem;
    font-weight: 700;
    margin: 0;
    color: #28a745;
`;

const MiniCardDescription = styled.p`
    font-size: 0.9rem;
    font-weight: 300;
    margin: 0;
`;
