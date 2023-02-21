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
        background: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing:antialiased;
    }
    
    body, input, textarea, button{
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 160%;
    }
`