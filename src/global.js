import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color:  rgba(0, 0, 0, 0)!important; 
  }

  nav {
    border-bottom: 1px solid #e2e8f0;
  }

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }

  h1 {
      font-size: 3 rem;
  }
  
  h2 {
      font-size: 2 rem;
      color: #f7ac2b;
      padding-bottom: 15px;
  }
  
  h3 {
      padding-bottom: 1em;
  }
  
  h4 {
      color: #707070;
      padding: 0 1em 0 1em;
      justify-self: end;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
    font-family: 'Montserrat', sans-serif;
    min-height: 100vh;
    min-width: 250px;
    margin: 0;
  }
`;