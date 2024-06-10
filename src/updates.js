import jaytech from './img/jaytech-designs-logo.png'
import century from './img/century.png';
import crunch from './img/TechCrunch.png';
import logo from './img/logo-transparent.png';
function Updates () {
    return (
        <div>
                <section id="New-Update">
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">Latest Updates</h1>
                <p className="lead">We Have recently just started developing our own music App with the name <strong>AudioWave</strong> It would be released before the close of july
                or the first week of August. We have taken a great deal of time to put together an easy to use compact and lightweght music application, 
              so it wil be able to function on 99.98%<b>*</b> of devices. Development starts on The 15th of April, 2022.</p>
              </div>
            </div>
        </div>
    </section>
    <section id="responsive-images-breakpoints" className="partna">
      <div className="container">
      <a href="http://jaytechdesigns.com.ng/"><img className="breakpoint" alt='logo' src={jaytech}  /></a>
      <a href="https://www.instagram.com/thekidcentury/"><img className="breakpoint" src={century} alt='logo' /></a>
      <a href="https://techcrunch.com/"><img className="breakpoint" src={crunch} alt='logo' /></a>
      <a href="#index.html"><img className="breakpoint" src={logo} alt='logo'/></a>
      </div>
    </section>
    <footer className="footer-distributed" id="footer">

			<div className="footer-left">
				<h3>James<span>Holyseed</span></h3>

				<p className="footer-links">
					<a href="#introduction">Home</a>
					|
					<a href="#About">About</a>
					|
					<a href="#New-Update">Update</a>
					|
					<a href="#index">Contact</a>
				</p>

				<p className="footer-company-name">© 2021 Ironic Software</p>
			</div>

			<div className="footer-center">
				<div>
					<i className="fa fa-map-marker"></i>
					  <p><span>unity Estate,Amuwo-odofin, Lagos</span>
            </p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+234 907 672 6449</p>
				</div>
				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:message.ironic@gmail.com">message.Nchijindu522@gmail.com</a></p>
				</div>
			</div>
			<div className="footer-right">
				<p className="footer-company-about">
					<span>About Me</span>
					We develop innovative and creative products and services that provide total information solutions.</p>
				<div className="footer-icons">
					<a href="#index"><i className="fa fa-facebook"></i></a>
					<a href="#index"><i className="fa fa-twitter"></i></a>
					<a href="https://www.instagram.com/ironic_software/"><i className="fa fa-instagram"></i></a>
					<a href="#index"><i className="fa fa-linkedin"></i></a>
					<a href="#index"><i className="fa fa-youtube"></i></a>
				</div>
			</div>
		</footer>
        </div>
    );
};

export default Updates;