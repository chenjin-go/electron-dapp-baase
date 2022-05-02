import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    
    body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #E1E1E6;
    }
  
    ::-webkit-scrollbar{
      margin-top: 35px;
            width:8px;
          }
      ::-webkit-scrollbar-track{
        margin-top: 35px;
        background: rgb(239, 239, 239);
        border-radius:10px;
      }
      ::-webkit-scrollbar-thumb{
      margin-top: 35px;
        background: #bfbfbf;
        border-radius:10px;
      }
`
