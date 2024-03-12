function Header() {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg main-nav">
            <div className="container-fluid">
              <a className="navbar-brand logo" href="#">
                Belleville <em>Running</em> Club
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link scroll-to-section" href="#features">
                      Weekly Group Runs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#call-to-action">
                      Couch 2 5K Training
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://teamlocker.squadlocker.com/#/lockers/belleville-running-club" target="_blank">
                      BRC Gear
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
