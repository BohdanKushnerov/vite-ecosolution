import "modern-normalize";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
        margin: 0;
        font-family: "Fira Sans", "CA Saygon Text", "FONTSPRING DEMO - All Round Gothic Thick", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin: 0;
      }

      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      button {
        padding: 0;
      }
`;

export default GlobalStyles;
