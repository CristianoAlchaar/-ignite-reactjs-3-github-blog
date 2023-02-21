import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a:link, a:visited, a:hover, a:active {
      color: inherit;
      text-decoration: none;
    }

    :focus{
        outline: 0;
    }

    body{
        background: #071422;
        color: #AFC2D4;
        -webkit-font-smoothing:antialiased;
    }
    
    body, input, textarea, button{
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 160%;
    }
`
