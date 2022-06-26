import React, { Children } from "react";
import '../style/main.css'
import link from 'gatsby';
import Footer  from "./footer";
import Sidebar from "./sidebar";
export default function Layout({children}) {
    return(
        <html>
            <head>

            </head>
            <header>
            <div class="sidebar">
                    <Sidebar></Sidebar>
                </div>
            </header>
            <body className="ml-64 mt-24">
            
            <div className="mx-auto  max-w-6xl" >
                <div className=" min-h-screen">
                { children }
                </div>
            <Footer ></Footer>
            <div className="h-60"></div>
            </div>
               
            </body>
 
        </html>
    )
}