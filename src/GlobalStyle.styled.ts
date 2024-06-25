import { createGlobalStyle } from "styled-components";
import LatoBold from "./shared/assets/fonts/Lato-Bold.ttf";
import LatoItalic from "./shared/assets/fonts/Lato-Italic.ttf";
import LatoBoldItalic from "./shared/assets/fonts/Lato-BoldItalic.ttf";
import LatoRegular from "./shared/assets/fonts/Lato-Regular.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Lato';
        src: url(${LatoBold});
        font-weight: bold;
    }

    @font-face {
        font-family: 'Lato';
        src: url(${LatoItalic});
        font-style: italic;
    }

    @font-face {
        font-family: 'Lato';
        src: url(${LatoBoldItalic});
        font-weight: bold;
        font-style: italic;
    }

    @font-face {
        font-family: 'Lato';
        src: url(${LatoRegular});
    }

  body {
    margin: 0;
    font-family: 'Lato';
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

   input[type=number] {
   -moz-appearance: textfield;
   }

  * {
      box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
