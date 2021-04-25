import "react-toastify/dist/ReactToastify.css";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html,body{
        font-family: Lato, Helvetica,Arial, sans-serif;
        --webkit-font-smoothing: antialiased;
        --moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility !important;
        background-color: #fafafa;
        box-sizing: border-box;
        color: #333333;
        font-size: 16px;
        margin:0;
        padding:0;
        height: 100%;
       
        
    }

    

`;
