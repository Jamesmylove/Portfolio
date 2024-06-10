import aboutImg from './img/mode.png';
import heroImg from './img/model.png';

function About () {
    return(
        <div>

    <div id='header' className="container-fluid title-box">
            <div className="row">
                <div className="col-lg-7">
                    <div>
                        <h1 className="header-text">
                            Hey! I am chijindu
                        </h1>
                        <p className="title-text">
                            I'm a Fullstack Web Developer & Ui/UX Designer. I've been in the business of building websites for over 5 years and I am good at what I do. I have majorly worked with small businesses and startups or sometimes, a one time freelancing job that helps the clients to structure out wireframes or mock-ups for their businesses. You can find out more about my skill-set by scrolling down and checking out the rest of my portfolio or following any of my social media handles.
                        </p>
                        <a href="#projects"><button type="button" className="btn btn-primary body-btn">Learn More</button></a>
                    </div>
                </div>
                <div className="col-lg-5 title-image-box justify-content-end">
                    <img src={heroImg} alt="Hero-text" />
                </div>
            </div>
        </div>
            <section id="About">
            <div className="px-4 pt-5 my-5 text-center border-bottom">
                <h1 className="display-4 fw-bold">Who I am</h1>
                <div className="col-lg-6 mx-auto">
                  <p className="lead mb-4">At Ironic, we develop innovative and creative products and services that provide total information solutions.
                    Among a plethora of services such as web design and development, tailor made applications, e-commerce solutions, business-to-business applications, business-to-client applications, 
                    are few that we offer. Satisfied clients around the globe bear testimony to the quality of our work.
                    Ironic's business philosophy is to assure the highest quality product, total client satisfaction, timely delivery of solutions and the best quality/price ratio found in the industry.
                    Our emphasis is on offering a high degree of product user friendliness through a positive, creative and focused company staff.</p>
                </div>
                <div className="overflow-hidden">
                  <div className="container px-5">
                    <img src={aboutImg} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example" width="700" height="500" loading="lazy" />
                  </div>
                </div>
              </div>
        </section>
        </div>

    );
};

export default About;