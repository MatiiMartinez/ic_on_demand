import React, { useState } from "react";
import styled from "styled-components";

import { Button, makeStyles, Popover } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    popover: {
        pointerEvents: "none",
    },
    paper: {
        boxShadow: "none",
        border: "1px solid #dcdacb",
        padding: "1rem",
        maxWidth: "300px",
        display: "flex",
        flexDirection: "column",
        rowGap: ".5rem",
    },
}));

const ContentCard = (props) => {
    const { item } = props;
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    function handlePopoverOpen(e) {
        setAnchorEl(e.currentTarget);
    }

    function handlePopoverClose() {
        setAnchorEl(null);
    }

    const isOpen = Boolean(anchorEl);

    return (
        <>
            <MiniCard
                aria-owns={isOpen ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                <Category>Marketing</Category>
                <MiniCardImage src={item.image} alt="" />
                <MiniCardBody>
                    <MiniCardTitle>{item.title}</MiniCardTitle>
                    <MiniCardDescription>
                        {item.description}
                    </MiniCardDescription>
                    <MiniCardFooter>
                        <MiniCardAutor>
                            Por <span>Leandro Suárez</span>
                        </MiniCardAutor>
                        <Button
                            variant="contained"
                            size="small"
                            color="primary"
                        >
                            Agregar curso
                        </Button>
                    </MiniCardFooter>
                </MiniCardBody>
            </MiniCard>
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
        </>
    );
};

const MiniCard = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: 4fr 6fr;
    background-color: #ffffff;
    box-shadow: 0 2px 4px #00000020;
`;

const Category = styled.span`
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;
    background-color: #cd1f17;
    border-radius: 5px;
    padding: 0.25rem 0.5rem;
`;

const MiniCardImage = styled.div`
    background-size: cover;
    background-image: url(${(props) => props.src});
    background-position: center;
    background-repeat: no-repeat;
`;

const MiniCardBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    row-gap: 1rem;
`;

const MiniCardTitle = styled.h2`
    font-size: 1rem;
    text-transform: capitalize;
    margin: 0;
    color: #cd1f17;
`;

const MiniCardDescription = styled.p`
    font-size: 0.9rem;
    font-weight: 300;
    margin: 0;
`;

const MiniCardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`;

const MiniCardAutor = styled.p`
    font-size: 0.9rem;
    font-weight: 300;

    span {
        color: #cd1f17;
    }
`;

// POPOVER
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

export default ContentCard;
