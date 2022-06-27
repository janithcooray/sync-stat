import React from "react";

export default function Navbar(){
    return(<nav className="relative flex w-screen flex-wrap items-center justify-between px-0 py-3 bg-white mb-3">
    <div className=" px-4 mx-auto w-screen flex flex-wrap items-center justify-between">
      <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
      <div class="pt-0 pb-0 px-0">
            <a href="#!">
            <div class="flex items-center">
                <div class="shrink-0">
                <img src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" class=" w-10" alt="Avatar"></img>
                </div>
                <div class="grow ml-3">
                <p class="text-sm font-semibold text-blue-600">SYNC STAT</p>
                </div>
            </div>
            </a>
        </div>
        <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
          <span className="block relative w-6 h-px rounded-sm bg-white"></span>
          <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        </button>
      </div>
      <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
        <ul className="flex flex-col lg:flex-row list-none mr-auto">
          <li className="nav-item">
            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="#pablo">
              <i className="fab fa-facebook-square text-lg leading-lg text-black opacity-75" /> 
            </a>
          </li>
          <li className="nav-item">
            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="#pablo">
              <i className="fab fa-twitter text-lg leading-lg text-black opacity-75" /> <span className="ml-2">Github</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="#pablo">
              <i className="fab fa-twitter text-lg leading-lg text-black opacity-75" /> <span className="ml-2">Discord</span>
            </a>
          </li>
        </ul>
        <div className="relative flex w-full sm:w-7/12 md:w-3/12 px-4 w-11 rounded-full flex-wrap items-stretch lg:ml-auto">
          <input type="text" className="px-2 py-1 h-8 border border-solid  border-stone-600 rounded-full text-sm leading-snug text-stone-700 bg-stone-100 shadow-none outline-none focus:outline-none w-24 font-normal flex-1 placeholder-stone-300 text-center" placeholder="Search" />
        </div>
      </div>
    </div>
  </nav>)
}