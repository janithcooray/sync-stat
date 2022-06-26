import React, { Children } from "react";
import '../style/main.css'
import link from 'gatsby';
import Footer  from "./footer";
export default function Layout({children}) {
    return(
        <html>
            <head>

            </head>
            <header>
                
            </header>
            <body>
                <div class="sidebar">
                <a href="#home">Home</a>
                <a href="#news">Updates</a>
                <a href="#contact">Docs</a>
                <a href="#about">About</a>
                </div>

            <div class="content">
            { children }
            </div>
               
            </body>
            <Footer>

            </Footer>
        </html>
    )
}