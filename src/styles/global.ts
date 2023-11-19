import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  body {
    -webkit-font-smoothing: antialiased;

    background-color: ${(props) => props.theme.colors['base-background']};
    color: ${(props) => props.theme.colors['base-text']};

    overflow-x: hidden;
  }

  body, input, textarea, input {
    font-family: ${(props) => props.theme.fonts.regular};
    font-weight: 400;
    font-size: ${(props) => props.theme.textSizes['text-regular-m']}
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`
