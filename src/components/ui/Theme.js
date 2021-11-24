import { createTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

const theme = createTheme({
  palette: {
    common: {
      arcBlue: arcBlue,
      arcOrange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    tab: {
      marginLeft: "29px",
      fontFamily: "Raleway",
      fontSize: "1rem",
      textTransform: "none",
      minWidth: "10",
      color: "#fff",
    },
    estimate: {
      fontFamily: "Roboto",
      fontSize: "1rem",
      textTransform: "none",
      fontWeight: "bold",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: `${arcBlue}`,
      lineHeight: "1.5",
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: arcBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: `${arcBlue}`,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: `${arcGrey}`,
    },
    subTitle2: {
      color: "#fff",
      fontSize: "1.25rem",
      fontWeight: 300,
    },
    body1: {
      fontWeight: 300,
      fontSize: "1.25rem",
    },
    learnMore: {
      borderColor: arcBlue,
      borderRadius: 49,
      textTransform: "none",
      marginRight: 39,
      fontFamily: "Roboto",
      color: arcBlue,
      borderWidth: "1px",
      fontWeight: "bold",
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: arcGrey,
    },
    learnButton: {
      borderColor: arcBlue,
      borderWidth: 2,
      textTransform: "none",
      color: arcBlue,
      borderRadius: 50,
      fontFamily: "Raleway",
      fontWeight: "bold",
    },
  },
  appBar: {
    display: "block",
  },
});

export default theme;
