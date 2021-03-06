import React from "react"
import { Link } from "gatsby"

export default function Sidebar() {
  return (
    <div class="w-60 h-full shadow-md bg-white absolute" id="sidenavSecExample">
      <div className="h-16"></div>
      <ul class="relative px-1">
        <li class="relative">
          <Link
            to="/"
            activeClassName="flex items-center text-sm  py-4 px-6 h-12 overflow-hidden text-blue-500 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-3 h-3 mr-3"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
              ></path>
            </svg>
            <span>Home</span>
          </Link>
        </li>
        <li class="relative" id="sidenavSecEx2">
          <Link
            to="/docs"
            activeClassName="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSidenavSecEx2"
            aria-expanded="false"
            aria-controls="collapseSidenavSecEx2"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-3 h-3 mr-3"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
              ></path>
            </svg>
            <span>Docs</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-3 h-3 ml-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
              ></path>
            </svg>
          </Link>
          <ul
            class="relative accordion-collapse collapse"
            id="collapseSidenavSecEx2"
            aria-labelledby="sidenavSecEx2"
            data-bs-parent="#sidenavSecExample"
          >
            <NavLinker name="Installation" to="/installation"></NavLinker>
            <NavLinker name="Configuration" to="/configuration"></NavLinker>
          </ul>
        </li>
        <li class="relative" id="sidenavSecEx3">
          <Link
            to="/more"
            activeClassName="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSidenavSecEx2"
            aria-expanded="false"
            aria-controls="collapseSidenavSecEx2"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-3 h-3 mr-3"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
              ></path>
            </svg>
            <span>More</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-3 h-3 ml-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
              ></path>
            </svg>
          </Link>
          <ul
            class="relative accordion-collapse collapse"
            id="collapseSidenavSecEx3"
            aria-labelledby="sidenavSecEx3"
            data-bs-parent="#sidenavSecExample"
          >
            <NavLinker name="Issues" to="/issues"></NavLinker>
            <NavLinker name="Upcoming" to="/upcoming"></NavLinker>
          </ul>
        </li>
        <li class="relative">
          <Link
            to="/changelog"
            activeClassName="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-3 h-3 mr-3"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"
              ></path>
            </svg>
            <span>Change Log</span>
          </Link>
        </li>
      </ul>
      <hr class="my-2"></hr>
      <ul class="relative px-1">
        <li class="relative">
          <Link
            to="/about"
            activeClassName="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-blue-500 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              data-prefix="fas"
              viewBox="0 0 24 24"
              role="img"
              class="w-3 h-3 mr-3"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
            <span>About</span>
          </Link>
        </li>
      </ul>
      <ul class="relative px-1">
        <li class="relative">
          <Link
            to="/contribution"
            activeClassName="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-blue-500 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-3 h-3 mr-3"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"
              ></path>
            </svg>
            <span>Contribution</span>
          </Link>
        </li>
      </ul>
      <ul class="relative px-1">
        <li class="relative">
          <Link
            to="/bugs"
            activeClassName="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-blue-500 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-3 h-3 mr-3"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"
              ></path>
            </svg>
            <span>Report Bug</span>
          </Link>
        </li>
      </ul>
      <div class="text-center bottom-0 absolute w-full">
        <hr class="m-0"></hr>
        <p class="py-2 text-sm text-gray-700">tailwind-elements.com</p>
      </div>
    </div>
  )
}

function NavLinker(props) {
  let to = props.to
  let name = props.name

  return (
    <li class="relative">
      <Link
        to={to}
        activeClassName="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-blue-500 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
        class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
        data-mdb-ripple="true"
        data-mdb-ripple-color="primary"
      >
        {name}
      </Link>
    </li>
  )
}

function NavLinkHead(props) {
  let to = props.to
  let name = props.name

  return (
    <li class="relative">
      <Link
        to={to}
        activeClassName="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-blue-500 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
        class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
        data-mdb-ripple="true"
        data-mdb-ripple-color="primary"
      >
        {name}
      </Link>
    </li>
  )
}
