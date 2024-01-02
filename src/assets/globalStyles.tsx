import "modern-normalize";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Fira Sans';
  src: url('/src/assets/fonts/FiraSans/fira-sans-v17-latin-300.woff2') format('woff2');
}

@font-face {
  font-family: 'Fira Sans';
  src: url('/src/assets/fonts/FiraSans/fira-sans-v17-latin-regular.woff2') format('woff2');
}

@font-face {
  font-family: 'Fira Sans';
  src: url('/src/assets/fonts/FiraSans/fira-sans-v17-latin-500.woff2') format('woff2');
}

@font-face {
  font-family: 'Oswald';
  src: url('/src/assets/fonts/Oswald/oswald-v53-latin-regular.woff2') format('woff2');
}

@font-face {
  font-family: 'Oswald';
  src: url('/src/assets/fonts/Oswald/oswald-v53-latin-700.woff2') format('woff2');
}

@font-face {
  font-family: 'Oswald';
  src: url('/src/assets/fonts/Oswald/oswald-v53-latin-500.woff2') format('woff2');
}

@font-face {
  font-family: 'CA Saygon Text';
  src: url('/src/assets/fonts/CASaygonText/CASaygonText-Regular.woff2') format('woff2');
}

@font-face {
  font-family: 'FONTSPRING DEMO - All Round Gothic Thick';
  src: url('/src/assets/fonts/Fontspring-demo-AllRoundGothic/All-Round-Gothic-Medium.woff2') format('woff2');
}

@font-face {
  font-family: 'Inter';
  src: url('/src/assets/fonts/Inter/inter-v13-latin-regular.woff2') format('woff2');
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
`;

export default GlobalStyles;
