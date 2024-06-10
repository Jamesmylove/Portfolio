function Navigation () {
    return (
        <section id="introduction">
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
              <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span className="fs-4">Nwankwo chijindu Holyseed</span>
              </a>
        
              <ul className="nav nav-pills">
                <li className="nav-item"><a href="#index" className="nav-link active" aria-current="page">Home</a></li>
                <li className="nav-item"><a href="#About" className="nav-link">About</a></li>
                <li className="nav-item"><a href="#New-Update" className="nav-link">Latest Update</a></li>
                <li className="nav-item"><a href="#footer" className="nav-link">Contact</a></li>
              </ul>
            </header>
          </div>
    </section>
    );
};

export default Navigation;