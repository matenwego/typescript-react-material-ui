import * as React from "react";
import {MuiThemeProvider, createMuiTheme} from "material-ui/styles";
import purple from "material-ui/colors/purple";
import green from "material-ui/colors/green";
import CssBaseline from "material-ui/CssBaseline";

const theme = createMuiTheme({
    palette:{
        primary: purple,
        secondary: green,
    },
});

const withRoot = (Component: React.ComponentType) => {
    return (props: object) => (
        <MuiThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...props} />
        </MuiThemeProvider>
    );
}

export default withRoot;