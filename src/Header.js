

function Header() {
    return (
        <div className="header">
            <div className="header_wrapper">
                <a href="/" className="header-logo-link">
                    <img src="./img/svg/qpick-logo.svg" alt="QPICK" className="header-logo-pic" />
                </a>
                <nav className="header_nav">
                    <ul className="header_list">
                        <li className="header_item">
                            <a href="#1" className="header_link">
                                <svg /* className="favorites" */ width="23" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.487 1.654c2.584-2.282 6.577-2.206 9.066.247a6.416 6.416 0 0 1 .26 8.911L11.484 20l-9.326-9.188a6.417 6.417 0 0 1 .26-8.911c2.491-2.45 6.476-2.532 9.068-.247Zm7.508 1.776c-1.65-1.625-4.312-1.691-6.039-.166L11.488 4.56l-1.47-1.295a4.452 4.452 0 0 0-6.043.167 4.276 4.276 0 0 0-.211 5.898l7.722 7.607 7.721-7.606a4.277 4.277 0 0 0-.212-5.901Z" 
                                fill="#838383"/>
                                </svg>
                            </a>
                        </li>
                        <li className="header_item">
                            <a href="#2" className="header_link">
                                <svg width="24" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m4.086 6.046-3.6-3.54L2.056.96l3.6 3.542h16.92a1.125 1.125 0 0 1 .89.44 1.083 1.083 0 0 1 .173.965l-2.664 8.737a1.092 1.092 0 0 1-.4.563c-.192.14-.425.216-.664.216H6.306v2.184h12.211v2.184H5.196a1.12 1.12 0 0 1-.785-.32 1.083 1.083 0 0 1-.325-.772V6.046Zm2.22.64v6.553h12.78l1.998-6.553H6.306ZM5.751 24.16a1.68 1.68 0 0 1-1.177-.48 1.625 1.625 0 0 1-.488-1.158c0-.435.175-.851.488-1.159a1.68 1.68 0 0 1 1.177-.48c.442 0 .865.173 1.177.48.313.308.488.724.488 1.159 0 .434-.175.851-.488 1.158a1.68 1.68 0 0 1-1.177.48Zm13.321 0c-.441 0-.865-.173-1.177-.48a1.625 1.625 0 0 1-.488-1.158c0-.435.175-.851.488-1.159.312-.307.736-.48 1.177-.48.442 0 .865.173 1.178.48a1.625 1.625 0 0 1 0 2.317c-.313.307-.736.48-1.178.48Z" 
                                fill="#838383"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
  }
  
  export default Header;
  