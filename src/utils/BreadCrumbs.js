import React from "react";
import {
    Breadcrumbs as MuiBreadCrumbs,
    Link,
    Typography,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";

function BreadCrumbs(props) {
    const {
        history,
        location: { pathname },
    } = props;

    const pathnames = pathname.split("/").filter((x) => x);

    console.log(pathnames);

    return (
        <MuiBreadCrumbs
            aria-label="breadcrumb"
            style={{
                color: "#ffffff",
                textTransform: "capitalize",
            }}
        >
            {pathnames.length > 0 ? (
                <Link
                    style={{ color: "#ffffff", cursor: "pointer" }}
                    onClick={() => history.push("/")}
                >
                    Home
                </Link>
            ) : (
                <Typography>Home</Typography>
            )}
            {pathnames.map((path, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                console.log(routeTo);
                const isLast = index === pathnames.length - 1;
                return isLast ? (
                    <Typography key={index}>{path}</Typography>
                ) : (
                    <Link
                        style={{ color: "#ffffff", cursor: "pointer" }}
                        onClick={() => history.push(routeTo)}
                        key={index}
                    >
                        {path}
                    </Link>
                );
            })}
        </MuiBreadCrumbs>
    );
}

export default withRouter(BreadCrumbs);
