import React from "react";
import '../style/main.css'
import Footer  from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function Layout({children}) {
    return(
        <div className="font-sans subpixel-antialiased">
            <div className="fixed w-full">
                <Navbar></Navbar>
            </div>
            <div class="w-60 fixed">
                <Sidebar></Sidebar>
            </div>
            <div className="ml-60" >
                <div className="min-h-screen mx-auto max-w-4xl">
                    <div className="h-24"></div>
                { children }
                </div>
                <Footer ></Footer>
                <div className="h-60"></div>
            </div>
        </div>
    )
}
//  