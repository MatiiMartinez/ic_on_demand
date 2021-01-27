import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#B31D15",
        },
        secondary: {
            main: "#c2c0cc",
        },
    },
    typography: {
        fontFamily: ["Lato", "sans-serif"].join(","),
    },
});
