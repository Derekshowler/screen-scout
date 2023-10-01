// styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #1C1C1C;
    color: #EAEAEA;
  }
  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: none;
    }
  }
`;

export default GlobalStyles;