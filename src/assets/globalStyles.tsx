import "modern-normalize";

import { createGlobalStyle } from "styled-components";
import Fonts from "./fontPaths";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Fira Sans';
  src: url(${Fonts.FiraSans_300}) format('woff2');
}

@font-face {
  font-family: 'Fira Sans';
  src: url(${Fonts.FiraSans_Regular}) format('woff2');
}

@font-face {
  font-family: 'Fira Sans';
  src: url(${Fonts.FiraSans_500}) format('woff2');
}

@font-face {
  font-family: 'Oswald';
  src: url(${Fonts.Oswald_Regular}) format('woff2');
}

@font-face {
  font-family: 'Oswald';
  src: url(${Fonts.Oswald_700}) format('woff2');
}

@font-face {
  font-family: 'Oswald';
  src: url(${Fonts.Oswald_500}) format('woff2');
}

@font-face {
  font-family: 'CA Saygon Text';
  src: url(${Fonts.CASaygonText_Regular}) format('woff2');
}

@font-face {
  font-family: 'FONTSPRING DEMO - All Round Gothic Thick';
  src: url(${Fonts.AllRoundGothic_Medium}) format('woff2');
}

@font-face {
  font-family: 'Inter';
  src: url(${Fonts.Inter_Regular}) format('woff2');
}

  body {
        margin: 0;
        /* font-family: 'Fira Sans', 'Oswald', 'CA Saygon Text', 'FONTSPRING DEMO - All Round Gothic Thick', 'Inter', sans-serif; */
        font-family: 'Fira Sans',  sans-serif;
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

      img {
        display: block;
        max-width: 100%;
        height: auto;
      }

      a {
        text-decoration: none;
      }
`;

export default GlobalStyles;
