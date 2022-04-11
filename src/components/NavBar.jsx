function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light position-relative p-0">
      <div className="">
        <button
          className="navbar-toggler own-mbtn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="bars"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-bars fa-w-14 fa-3x"
          >
            <path
              fill="white"
              d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
              className=""
            ></path>
          </svg>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <button
            type="button"
            className="own-mbtn offcanvas-header"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="times"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="svg-inline--fa fa-times fa-w-10 fa-5x"
            >
              <path
                fill="white"
                d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
                className=""
              ></path>
            </svg>
          </button>

          <div className="offcanvas-body px-0 d-flex flex-column justify-content-between own-main-menu">
            <div className=" d-flex justify-content-center own-dicNavLogo">
              <a href="#home">
                <img
                  src="./images/Logo Fondo Oscuro.svg"
                  alt="Logo Jymmy Murillo"
                  className="offcanvas-title own-navLogo"
                  id="offcanvasNavbarLabel"
                ></img>
              </a>
            </div>

            <ul className="navbar-nav flex-column d-flex justify-content-around">
              <li className="nav-item ">
                <a
                  className="nav-link active d-flex justify-content-center"
                  aria-current="page"
                  href="#home"
                >
                  Inicio
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link active d-flex justify-content-center"
                  aria-current="page"
                  href="#about"
                >
                  Acerca de Mí
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link active d-flex justify-content-center"
                  aria-current="page"
                  href="#skills"
                >
                  Mis Habilidades
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link active d-flex justify-content-center"
                  aria-current="page"
                  href="#work"
                >
                  Mis Desarrollos
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link active d-flex justify-content-center"
                  aria-current="page"
                  href="#contact"
                >
                  Contáctame
                </a>
              </li>
            </ul>
            <div className="d-flex justify-content-arround">
              <a
                href="https://www.linkedin.com/in/murillojymmy/"
                target="_blank"
                className="mx-3 "
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40px"
                  height="40px"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path
                    className="own-iconLinkedinGithubNavBar"
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/JymmyMurillo"
                target="_blank"
                rel="noreferrer"
                className="mx-3 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40px"
                  height="40px"
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path
                    className="own-iconLinkedinGithubNavBar"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
