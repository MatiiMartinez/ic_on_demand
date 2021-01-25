import React from "react";

import Admin from "../../ui/organisms/main-home/Admin";
import Analytics from "../../ui/organisms/main-home/Analytics";
import Company from "../../ui/organisms/main-home/Company";
import Content from "../../ui/organisms/main-home/Content";
import Team from "../../ui/organisms/main-home/Team";

export default function MainHome(props) {
    const { page } = props;

    if (page === "admin") {
        return <Admin />;
    }

    if (page === "company") {
        return <Company />;
    }

    if (page === "team") {
        return <Team />;
    }

    if (page === "content") {
        return <Content />;
    }

    if (page === "analytics") {
        return <Analytics />;
    }

    return <div></div>;
}
