import { createTheme } from "@mui/material/styles";
// import popinsBold from "../Fonts/Poppins-Bold.ttf";
// import popinsSemiBold from "../Fonts/Poppins-SemiBold.ttf";
// import popinsMedium from "../Fonts/Poppins-Medium.ttf";
// import popinsRegular from "../Fonts/Poppins-Regular.ttf";
// import popinsLight from "../Fonts/Poppins-Light.ttf";
export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      100: "#D4E5F2",
      200: "#B7D3EA",
      300: "#93BDDF",
      400: "#6FA7D5",
      main: "#4B91CA",
      500: "#277BC0",
      600: "#2167A0",
      700: "1A5280",
      800: "#143E60",
      900: "#0D2940",
    },
    error: {
      100: "#F8D4D2",
      200: "#F3B8B4",
      300: "#EC948F",
      400: "#E6716A",
      main: "#E04E44",
      500: "#DA2A1F",
      600: "#B6231A",
      700: "#911C15",
      800: "#6D1510",
      900: "#490E0A",
    },
    success: {
      100: "#CDE2D6",
      200: "#ACCFBA",
      300: "#83B798",
      400: "#5A9F76",
      main: "#308753",
      500: "#076F31",
      600: "#065D29",
      700: "#054A21",
      800: "#043819",
      900: "#022510",
    },
    secondary: {
      100: "#FFF0CC",
      200: "#FFE5AA",
      300: "#FFD880",
      400: "#FFCC55",
      main: "#FFBF2B",
      500: "#FFB200",
      600: "#D49400",
      700: "#AA7700",
      800: "#805900",
      900: "#553B00",
    },
    text: {
      primary: "rgba(42, 60, 87, 0.87)",
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
  // typography: {
  //   fontFamily: "Raleway, Arial",
  // },
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: `
  //       @font-face {
  //         font-family: 'Raleway';
  //         font-style: normal;
  //         font-display: swap;
  //         font-weight: 700;
  //         src: local('Raleway'), local('Raleway-Regular'), url(${popinsBold}) format('woff2');
  //         unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
  //       }
  //       @font-face {
  //         font-family: 'Raleway';
  //         font-style: normal;
  //         font-display: swap;
  //         font-weight: 600;
  //         src: local('Raleway'), local('Raleway-Regular'), url(${popinsSemiBold}) format('woff2');
  //         unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
  //       }
  //       @font-face {
  //         font-family: 'Raleway';
  //         font-style: normal;
  //         font-display: swap;
  //         font-weight: 500;
  //         src: local('Raleway'), local('Raleway-Regular'), url(${popinsMedium}) format('woff2');
  //         unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
  //       }
  //       @font-face {
  //         font-family: 'Raleway';
  //         font-style: normal;
  //         font-display: swap;
  //         font-weight: 400;
  //         src: local('Raleway'), local('Raleway-Regular'), url(${popinsRegular}) format('woff2');
  //         unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
  //       }
  //       @font-face {
  //         font-family: 'Raleway';
  //         font-style: normal;
  //         font-display: swap;
  //         font-weight: 300;
  //         src: local('Raleway'), local('Raleway-Regular'), url(${popinsLight}) format('woff2');
  //         unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
  //       }
  //     `,
  //   },
  // },
});
