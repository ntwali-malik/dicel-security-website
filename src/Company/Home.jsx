import React from 'react'

function Home() {
    return (
        <div>
            {/* <!-- Topbar Start --> */}
            <div className="container-fluid bg-dark py-2 d-none d-md-flex">
                <div className="container">
                    <div className="d-flex justify-content-between topbar">
                        <div className="top-info">
                            <small className="me-3 text-white-50"><a href="#"><i
                                className="fas fa-map-marker-alt me-2 text-secondary"></i></a>KK 467 St, Kagarama Sector (Kanserege Cell)</small>
                            <small className="me-3 text-white-50"><a href="#"><i
                                className="fas fa-envelope me-2 text-secondary"></i></a>info@dicel.co.rw</small>
                        </div>
                        <div id="note" className="text-secondary d-none d-xl-flex"><small>Note : We help you to Grow your
                            Business</small></div>
                        <div className="top-link">
                            <a href="#" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i
                                className="fab fa-facebook-f text-primary"></i></a>
                            <a href="#" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i
                                className="fab fa-twitter text-primary"></i></a>
                            <a href="#" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i
                                className="fab fa-instagram text-primary"></i></a>
                            <a href="#" className="bg-light nav-fill btn btn-sm-square rounded-circle me-0"><i
                                className="fab fa-linkedin-in text-primary"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}
            {/* <!-- Navbar Start --> */}
            <div id="site-navbar" className="container-fluid bg-primary sticky-top">
                <div className="container">
                    <nav className="navbar navbar-dark navbar-expand-lg py-0">
                        <a href="/" className="navbar-brand d-flex align-items-center">
                            <img src="assets/img/logo.png" alt="Company Logo" style={{ height: "48px", width: "auto" }} />
                            <span className="ms-2 text-white fw-bold">Dicel Security Company</span>
                        </a>
                        <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse bg-transparent" id="navbarCollapse">
                            <div className="navbar-nav ms-auto mx-xl-auto p-0">
                                <a href="/" className="nav-item nav-link active text-secondary">Home</a>
                                <a href="/about" className="nav-item nav-link">About</a>
                                <a href="/services" className="nav-item nav-link">Services</a>
                                <a href="/gallery" className="nav-item nav-link">Gallery</a>
                                <a href="/contact" className="nav-item nav-link">Contact</a>
                            </div>
                        </div>
                        <div className="d-none d-xl-flex flex-shirink-0">
                            <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
                                <a href="#" className="position-relative animated tada infinite">
                                    <i className="fa fa-phone-alt text-white fa-2x"></i>
                                    <div className="position-absolute" style={{ top: "-7px", left: "20px" }}>
                                        <span><i className="fa fa-comment-dots text-secondary"></i></span>
                                    </div>
                                </a>
                            </div>
                            <div className="d-flex flex-column pe-4 border-end">
                                <span className="text-white-50">Have any questions?</span>
                                <span className="text-secondary">Call: +250 788 313 547</span>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar End --> */}
            {/* <!-- Carousel Start --> */}
            <div className="container-fluid px-0">
                <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true"
                            aria-label="First slide"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img src="assets/img/t.JPG" className="img-fluid" alt="First slide" />
                            <div className="carousel-caption">
                                <div className="container carousel-content">
                                    <h6 className="text-secondary h4 animated fadeInUp">Trusted Security Solutions</h6>
                                    <h1 className="text-white display-1 mb-4 animated fadeInRight">Comprehensive Security Services for Your Peace of Mind
                                    </h1>
                                    <p className="mb-4 text-white fs-5 animated fadeInDown">Professional guards, CCTV installation and monitoring, access control, and 24/7 patrols tailored to safeguard your people, property, and assets.</p>
                                    <a href="#services" className="me-2"><button type="button"
                                        className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft">Our
                                        Services</button></a>
                                    <a href="#contact" className="ms-2"><button type="button"
                                        className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">Get a
                                        Quote</button></a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/img/t.JPG" className="img-fluid" alt="Second slide" />
                            <div className="carousel-caption">
                                <div className="container carousel-content">
                                    <h6 className="text-secondary h4 animated fadeInUp">Professional Guards & Technology</h6>
                                    <h1 className="text-white display-1 mb-4 animated fadeInLeft">Protecting People, Property and Assets 24/7</h1>
                                    <p className="mb-4 text-white fs-5 animated fadeInDown">From on-site guarding and rapid response to remote video surveillance and alarm systems, we deliver reliable protection around the clock.</p>
                                    <a href="#about" className="me-2"><button type="button"
                                        className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft">Learn
                                        More</button></a>
                                    <a href="#contact" className="ms-2"><button type="button"
                                        className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">Contact
                                        Us</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* <!-- Carousel End --> */}
            {/* <!-- Fact Start --> */}
            <div className="container-fluid bg-secondary py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 wow fadeInUp" data-wow-delay=".1s" data-wow-duration="1s">
                            <div className="d-flex counter">
                                <h1 className="me-3 text-white counter-value">350</h1>
                                <h5 className="text-white mt-1">Sites secured across residential & commercial</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                            <div className="d-flex counter">
                                <h1 className="me-3 text-white counter-value">1200</h1>
                                <h5 className="text-white mt-1">Incidents responded to in the last year</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                            <div className="d-flex counter">
                                <h1 className="me-3 text-white counter-value">180</h1>
                                <h5 className="text-white mt-1">Corporate clients under active protection</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 wow fadeInUp" data-wow-delay=".7s" data-wow-duration="1s">
                            <div className="d-flex counter">
                                <h1 className="me-3 text-white counter-value">4.9</h1>
                                <h5 className="text-white mt-1">Average customer rating out of 5 stars</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Fact End --> */}

            {/* <!-- About Start --> */}
            <div className="container-fluid py-5 my-5">
                <div className="container pt-5">
                    <div className="row g-5">
                        <div className="col-lg-5 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="1s">
                            <div className="h-100 position-relative">
                                <img src="assets/img/10.jpg" className="img-fluid w-75 rounded wow zoomIn" data-wow-delay=".4s" alt="" style={{ marginBottom: "25%" }} />
                                <div className="position-absolute w-75" style={{ top: "25%", left: "25%" }}>
                                    <img src="assets/img/1.jpeg" className="img-fluid w-100 rounded wow zoomIn" data-wow-delay=".6s" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay=".5s" data-wow-duration="1s">
                            <h5 className="text-primary">About Us</h5>
                            <h1 className="mb-4">About Dicel Security Company Ltd</h1>
                            <p>Dicel Security Company Ltd is a security company established since 2017 to provide security services with advanced SECURITY solutions to local and international organizations. It was registered by the Rwanda Development Board the same year and officially accepted by the Honorable Minister of Internal Security by issuing it the License to operate No. 422/0809 in accordance with the law No.46/2010 of 14/12/2010 determining the responsibility, mission, organization and functioning of the Rwanda National Police, especially in its article No.41.</p>
                            <h5 className="mt-4">Mission</h5>
                            <p>One driving force behind Dicel Security Company Ltd philosophy is to provide security to organizations in the region with leading innovative security solutions at affordable cost for their competitiveness.</p>
                            <h5 className="mt-3">Vision</h5>
                            <p className="mb-4">The vision of the Dicel Security Company Ltd is to grow and become a leading security company at national and International level by extending its services in all areas of the Country and abroad.</p>
                            <a href="#about" className="btn btn-secondary rounded-pill px-5 py-3 text-white">More Details</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}

            {/* <!-- Why Choose Us Start --> */}
            <div className="container-fluid py-5 bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-4">
                        <div className="col-lg-8 text-center wow fadeIn" data-wow-delay=".1s">
                            <h5 className="text-primary">Why Choose Us</h5>
                            <h1 className="mb-3">Trusted, Licensed, and Always-On Protection</h1>
                            <p className="mb-0">Since 2017, Dicel Security Company delivers certified security with rapid response, advanced technology, and tailored protection plans for every client.</p>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay=".1s" data-wow-duration="1s">
                            <div className="p-4 h-100 bg-white rounded shadow-sm card-zoom">
                                <div className="d-flex align-items-start">
                                    <div className="me-3 text-primary"><i className="fas fa-certificate fa-2x"></i></div>
                                    <div>
                                        <h5 className="mb-2">Licensed & Certified</h5>
                                        <p className="mb-0">Registered by RDB and licensed by the Ministry of Internal Security to operate legally and professionally.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay=".25s" data-wow-duration="1s">
                            <div className="p-4 h-100 bg-white rounded shadow-sm card-zoom">
                                <div className="d-flex align-items-start">
                                    <div className="me-3 text-primary"><i className="fas fa-clock fa-2x"></i></div>
                                    <div>
                                        <h5 className="mb-2">24/7 Monitoring & Response</h5>
                                        <p className="mb-0">Always on call with rapid incident response and continuous protection for people and assets.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">
                            <div className="p-4 h-100 bg-white rounded shadow-sm card-zoom">
                                <div className="d-flex align-items-start">
                                    <div className="me-3 text-primary"><i className="fas fa-user-shield fa-2x"></i></div>
                                    <div>
                                        <h5 className="mb-2">Experienced Professionals</h5>
                                        <p className="mb-0">Trained guards and specialists delivering reliable on‑site and mobile security operations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay=".55s" data-wow-duration="1s">
                            <div className="p-4 h-100 bg-white rounded shadow-sm card-zoom">
                                <div className="d-flex align-items-start">
                                    <div className="me-3 text-primary"><i className="fas fa-microchip fa-2x"></i></div>
                                    <div>
                                        <h5 className="mb-2">Advanced Technology</h5>
                                        <p className="mb-0">Integration of CCTV, access control, alarms, and analytics for smarter protection.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay=".7s" data-wow-duration="1s">
                            <div className="p-4 h-100 bg-white rounded shadow-sm card-zoom">
                                <div className="d-flex align-items-start">
                                    <div className="me-3 text-primary"><i className="fas fa-sliders-h fa-2x"></i></div>
                                    <div>
                                        <h5 className="mb-2">Customized Security Plans</h5>
                                        <p className="mb-0">Tailored solutions that match your site, risks, and budget for maximum value.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay=".85s" data-wow-duration="1s">
                            <div className="p-4 h-100 bg-white rounded shadow-sm card-zoom">
                                <div className="d-flex align-items-start">
                                    <div className="me-3 text-primary"><i className="fas fa-handshake fa-2x"></i></div>
                                    <div>
                                        <h5 className="mb-2">Client‑First Approach</h5>
                                        <p className="mb-0">Transparent communication, measurable results, and long‑term partnerships built on trust.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Why Choose Us End --> */}

            {/* <!-- Services Start --> */}
            <div className="container-fluid services py-5 mb-5">
                <div className="container">
                    <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: "700px" }}>
                        <h5 className="text-primary">Our Services</h5>
                        <h1>Professional Security Services Tailored To Your Needs</h1>
                        <p className="mb-0">We offer a wide range of solutions. Below are a few highlights — click the button to view the full list of services.</p>
                    </div>
                    <div className="row g-5 services-inner">
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay=".2s">
                            <div className="services-item bg-light h-100">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <img src="assets/img/1.jpeg" alt="Security Guard" className="service-thumb img-fluid rounded mb-4 img-animate" />
                                        <h4 className="mb-3">Security Guard</h4>
                                        <p className="mb-4">Patrols and inspects property against fire, theft, vandalism, terrorism, and illegal activity.</p>
                                        <a href="service.html" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay=".35s">
                            <div className="services-item bg-light h-100">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <img src="assets/img/camera.png" alt="CCTV Cameras" className="service-thumb img-fluid rounded mb-4 img-animate" />
                                        <h4 className="mb-3">CCTV Cameras</h4>
                                        <p className="mb-4">Continuous image capture transmitted to recording devices and display monitors for real-time viewing.</p>
                                        <a href="service.html" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay=".5s">
                            <div className="services-item bg-light h-100">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <img src="assets/img/metaldetectors.png" alt="Metal Alarm Detector" className="service-thumb img-fluid rounded mb-4 img-animate" />
                                        <h4 className="mb-3">Metal Alarm Detector</h4>
                                        <p className="mb-4">Designed to detect metal objects such as guns, knives, and tools for safe entry screening.</p>
                                        <a href="service.html" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay=".2s">
                            <div className="services-item bg-light h-100">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <img src="assets/img/alarms-system.png" alt="Alarm Systems" className="service-thumb img-fluid rounded mb-4 img-animate" />
                                        <h4 className="mb-3">Alarm Systems</h4>
                                        <p className="mb-4">Systems that detect intrusion or unauthorized entry into buildings, homes, or facilities.</p>
                                        <a href="service.html" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay=".35s">
                            <div className="services-item bg-light h-100">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <img src="assets/img/access_controls.jpg" alt="Access Control" className="service-thumb img-fluid rounded mb-4 img-animate" />
                                        <h4 className="mb-3">Access Control</h4>
                                        <p className="mb-4">Regulates who can view or use resources — includes biometric access and time & attendance.</p>
                                        <a href="service.html" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay=".5s">
                            <div className="services-item bg-light h-100">
                                <div className="p-4 text-center services-content">
                                    <div className="services-content-icon">
                                        <img src="assets/img/consulting-Service.jpg" alt="Consulting Services" className="service-thumb img-fluid rounded mb-4 img-animate" />
                                        <h4 className="mb-3">Consulting Services</h4>
                                        <p className="mb-4">Expert guidance and strategic advice for informed decision‑making and risk reduction.</p>
                                        <a href="service.html" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Services End --> */}

            {/* <!-- Case Studies Start --> */}
            <div className="container-fluid project py-5 mb-5 d-none">
                <div className="container">
                    <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: "700px" }}>
                        <h5 className="text-primary">Case Studies</h5>
                        <h1>Real‑World Security Outcomes</h1>
                        <p className="mb-0">A few examples of how Dicel Security Company protects people, property, and assets using guards, CCTV, access control, and alarms.</p>
                    </div>
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src="assets/img/project-1.jpg" className="img-fluid w-100 rounded" alt="Retail Mall Surveillance Upgrade" loading="lazy" />
                                    <div className="project-content">
                                        <a href="#" className="text-center">
                                            <h4 className="text-secondary">Retail Mall Surveillance Upgrade</h4>
                                            <p className="m-0 text-white">CCTV + 24/7 Monitoring</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src="assets/img/project-2.jpg" className="img-fluid w-100 rounded" alt="Corporate Access Control" loading="lazy" />
                                    <div className="project-content">
                                        <a href="#" className="text-center">
                                            <h4 className="text-secondary">Corporate Access Control</h4>
                                            <p className="m-0 text-white">Biometric + Time & Attendance</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src="assets/img/project-3.jpg" className="img-fluid w-100 rounded" alt="Industrial Perimeter Security" loading="lazy" />
                                    <div className="project-content">
                                        <a href="#" className="text-center">
                                            <h4 className="text-secondary">Industrial Perimeter Security</h4>
                                            <p className="m-0 text-white">Guards + Patrol + Alarms</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src="assets/img/project-4.jpg" className="img-fluid w-100 rounded" alt="Residential Estate Protection" loading="lazy" />
                                    <div className="project-content">
                                        <a href="#" className="text-center">
                                            <h4 className="text-secondary">Residential Estate Protection</h4>
                                            <p className="m-0 text-white">Gate Control + CCTV</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src="assets/img/project-5.jpg" className="img-fluid w-100 rounded" alt="Event Security Deployment" loading="lazy" />
                                    <div className="project-content">
                                        <a href="#" className="text-center">
                                            <h4 className="text-secondary">Event Security Deployment</h4>
                                            <p className="m-0 text-white">Crowd Control + Screening</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src="assets/img/project-6.jpg" className="img-fluid w-100 rounded" alt="VIP & Executive Protection" loading="lazy" />
                                    <div className="project-content">
                                        <a href="#" className="text-center">
                                            <h4 className="text-secondary">VIP & Executive Protection</h4>
                                            <p className="m-0 text-white">Close Protection Detail</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-5 wow fadeIn" data-wow-delay=".3s">
                        <a href="project.html" className="btn btn-primary text-white px-5 py-3 rounded-pill">View All Case Studies</a>
                    </div>
                </div>
            </div>
            {/* <!-- Case Studies End --> */}
            {/* <!-- FAQ Start --> */}
            <div className="container-fluid py-5 mb-5 d-none">
                <div className="container">
                    <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: "700px" }}>
                        <h5 className="text-primary">FAQs</h5>
                        <h1>Frequently Asked Questions</h1>
                        <p className="mb-0">Quick answers about our guards, technology, response, and compliance.</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="accordion" id="faqAccordion">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="faqOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Do you operate 24/7 and how fast is your response?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="faqOne" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            Yes, we provide 24/7 monitoring and rapid incident response. Our dispatch coordinates guards, patrols, and emergency contacts as needed.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="faqTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Are your guards licensed and trained?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="faqTwo" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            All guards are vetted, trained, and deployed under our operating license, with refreshers on access control, CCTV, and incident procedures.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="faqThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            What technologies do you install and support?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="faqThree" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            We integrate CCTV, alarm systems, and access control (including biometrics), and provide maintenance with remote monitoring options.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="faqFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Can you customize a plan for my site and budget?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="faqFour" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            Absolutely. We begin with a site assessment to understand risks and tailor a right‑sized mix of guards and technology.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-5 wow fadeIn" data-wow-delay=".3s">
                        <a href="#contact" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Request a Site Assessment</a>
                    </div>
                </div>
            </div>
            {/* <!-- FAQ End --> */}
            {/* <!-- Team Start --> */}
            <div className="container-fluid py-5 mb-5 team">
                <div className="container">
                    <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: "600px" }}>
                        <h5 className="text-primary">Our Team</h5>
                        <h1>Meet our expert Team</h1>
                    </div>
                    <div className="owl-carousel team-carousel wow fadeIn" data-wow-delay=".5s">
                        <div className="team-card team-item bg-white rounded shadow-sm">
                            <div className="team-photo position-relative">
                                <img src="assets/img/team-1.jpg" className="img-fluid w-100" alt="Team Member" loading="lazy" />
                                <div className="team-overlay d-flex align-items-center justify-content-center">
                                    <a className="btn btn-square btn-primary text-white rounded-circle m-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary text-white rounded-circle m-1" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary text-white rounded-circle m-1" href="#"><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-primary text-white rounded-circle m-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-3">
                                <h4 className="mb-1">Full Name</h4>
                                <p className="m-0 text-secondary">Designation</p>
                            </div>
                        </div>
                        <div className="team-card team-item bg-white rounded shadow-sm">
                            <div className="team-photo position-relative">
                                <img src="assets/img/team-2.jpg" className="img-fluid w-100" alt="Team Member" loading="lazy" />
                                <div className="team-overlay d-flex align-items-center justify-content-center">
                                    <a className="btn btn-square btn-primary text-white rounded-circle m-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary text-white rounded-circle m-1" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary text-white rounded-circle m-1" href="#"><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-primary text-white rounded-circle m-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-3">
                                <h4 className="mb-1">Full Name</h4>
                                <p className="m-0 text-secondary">Designation</p>
                            </div>
                        </div>
                        <div className="team-card team-item bg-white rounded shadow-sm">
                            <div className="team-photo position-relative">
                                <img src="assets/img/team-3.jpg" className="img-fluid w-100" alt="Team Member" loading="lazy" />
                                <div className="team-overlay d-flex align-items-center justify-content-center">
                                    <a className="btn btn-square btn-primary text-white rounded-circle m-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary text-white rounded-circle m-1" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary text-white rounded-circle m-1" href="#"><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-primary text-white rounded-circle m-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-3">
                                <h4 className="mb-1">Full Name</h4>
                                <p className="m-0 text-secondary">Designation</p>
                            </div>
                        </div>
                        <div className="team-card team-item bg-white rounded shadow-sm">
                            <div className="team-photo position-relative">
                                <img src="assets/img/team-4.jpg" className="img-fluid w-100" alt="Team Member" loading="lazy" />
                                <div className="team-overlay d-flex align-items-center justify-content-center">
                                    <a className="btn btn-square btn-primary text-white rounded-circle m-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary text-white rounded-circle m-1" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary text-white rounded-circle m-1" href="#"><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-primary text-white rounded-circle m-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-3">
                                <h4 className="mb-1">Full Name</h4>
                                <p className="m-0 text-secondary">Designation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Team End --> */}
            {/* <!-- Contact Start --> */}
            <div className="container-fluid py-5 mb-5">
                <div className="container">
                    <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: "600px" }}>
                        <h5 className="text-primary">Get In Touch</h5>
                        <h1 className="mb-3">Contact Dicel Security Company</h1>
                        <p className="mb-2">Reach out for quotes, site assessments, or any questions about our guarding, CCTV, access control, and alarm solutions.</p>
                    </div>
                    <div className="contact-detail position-relative p-5">
                        <div className="row g-5 mb-5 justify-content-center">
                            <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".3s">
                                <div className="d-flex bg-light p-3 rounded">
                                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle"
                                        style={{ width: "64px", height: "64px" }}>
                                        <i className="fas fa-map-marker-alt text-white"></i>
                                    </div>
                                    <div className="ms-3">
                                        <h4 className="text-primary">Address</h4>
                                        <a href="https://maps.google.com/?q=Kicukiro%2C%20Kagarama%2C%20Kigali%2C%20Rwanda" target="_blank" className="h5">Kicukiro, Kagarama, Kigali</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".5s">
                                <div className="d-flex bg-light p-3 rounded">
                                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle"
                                        style={{ width: "64px", height: "64px" }}>
                                        <i className="fa fa-phone text-white"></i>
                                    </div>
                                    <div className="ms-3">
                                        <h4 className="text-primary">Call Us</h4>
                                        <a className="h5" href="tel:+250000000000">+250 788 313 546</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".7s">
                                <div className="d-flex bg-light p-3 rounded">
                                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle"
                                        style={{ width: "64px", height: "64px" }}>
                                        <i className="fa fa-envelope text-white"></i>
                                    </div>
                                    <div className="ms-3">
                                        <h4 className="text-primary">Email Us</h4>
                                        <a className="h5" href="mailto:info@dicel.co.rw">info@dicel.co.rw</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-5">
                            <div className="col-lg-6 wow fadeIn" data-wow-delay=".3s">
                                <div className="p-5 h-100 rounded contact-map">
                                    <iframe className="rounded w-100 h-100"
                                        src="https://www.google.com/maps?q=Kicukiro%20Kagarama%20Kigali%20Rwanda&output=embed"
                                            style={{ border: "0" }} loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay=".5s">
                                <div className="p-5 rounded contact-form">
                                    <div className="mb-4">
                                        <input type="text" className="form-control border-0 py-3" placeholder="Your Name" name="name" required />
                                    </div>
                                    <div className="mb-4">
                                        <input type="email" className="form-control border-0 py-3" placeholder="Your Email" name="email" required />
                                    </div>
                                    <div className="mb-4">
                                        <input type="text" className="form-control border-0 py-3" placeholder="Subject" name="subject" />
                                    </div>
                                    <div className="mb-4">
                                        <textarea className="w-100 form-control border-0 py-3" rows="6" cols="10"
                                            placeholder="Message" name="message" required></textarea>
                                    </div>
                                    <div className="text-start">
                                        <button className="btn bg-primary text-white py-3 px-5" type="button">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact End --> */}

            {/* <!-- Footer Start --> */}
            <div className="container-fluid footer bg-dark wow fadeIn" data-wow-delay=".3s">
                <div className="container pt-5 pb-4">
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6">
                            <a href="#top">
                                <h1 className="text-white fw-bold d-block">Dicel<span className="text-primary"> Security</span></h1>
                            </a>
                            <p className="mt-4 text-light">Since 2017, Dicel Security Company provides licensed guarding, CCTV, access control and alarm solutions to protect people, property and assets across Rwanda.</p>
                            <div className="d-flex hightech-link">
                                <a href="#" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-facebook-f text-primary"></i></a>
                                <a href="#" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-twitter text-primary"></i></a>
                                <a href="#" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-instagram text-primary"></i></a>
                                <a href="#" className="btn-light nav-fill btn btn-square rounded-circle me-0"><i className="fab fa-linkedin-in text-primary"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <a href="#" className="h4 text-primary">Quick Links</a>
                            <div className="mt-4 d-flex flex-column short-link">
                                <a href="#about" className="mb-2 text-white"><i className="fas fa-angle-right text-primary me-2"></i>About Us</a>
                                <a href="#services" className="mb-2 text-white"><i className="fas fa-angle-right text-primary me-2"></i>Services</a>
                                <a href="#contact" className="mb-2 text-white"><i className="fas fa-angle-right text-primary me-2"></i>Contact</a>
                                <a href="service.html" className="mb-2 text-white"><i className="fas fa-angle-right text-primary me-2"></i>Request Quote</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="h4 text-primary">Our Solutions</a>
                            <div className="mt-4 d-flex flex-column help-link">
                                <a href="service.html" className="mb-2 text-white"><i className="fas fa-check text-primary me-2"></i>Security Guarding</a>
                                <a href="service.html" className="mb-2 text-white"><i className="fas fa-check text-primary me-2"></i>CCTV & Monitoring</a>
                                <a href="service.html" className="mb-2 text-white"><i className="fas fa-check text-primary me-2"></i>Access Control</a>
                                <a href="service.html" className="mb-2 text-white"><i className="fas fa-check text-primary me-2"></i>Alarm Systems</a>
                                <a href="service.html" className="mb-2 text-white"><i className="fas fa-check text-primary me-2"></i>Consulting</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <a href="#" className="h4 text-primary">Contact Us</a>
                            <div className="text-white mt-4 d-flex flex-column contact-link">
                                <span className="pb-3 text-light border-bottom border-primary"><i className="fas fa-map-marker-alt text-primary me-2"></i> KK 467 St, Kagarama Sector (Kanserege Cell), Kicukiro, Kigali, Rwanda</span>
                                <a href="tel:+250788313547" className="py-3 text-light border-bottom border-primary"><i className="fas fa-phone-alt text-primary me-2"></i> +250 788 313 547</a>
                                <a href="tel:+250788313546" className="py-3 text-light border-bottom border-primary"><i className="fas fa-phone-alt text-primary me-2"></i> +250 788 313 546</a>
                                <a href="mailto:info@dicel.co.rw" className="py-3 text-light border-bottom border-primary"><i className="fas fa-envelope text-primary me-2"></i> info@dicel.co.rw</a>
                                <span className="pt-3 text-light"><i className="fas fa-clock text-primary me-2"></i> Opening Hours: Mon–Fri 07:30–17:30</span>
                            </div>
                        </div>
                    </div>
                    <hr className="text-light mt-5 mb-4" />
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start">
                            <span className="text-light"><i className="far fa-copyright text-primary me-2"></i>Dicel Security Company. All rights reserved.</span>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <span className="text-light">Developed by <a href="#" className="text-primary text-decoration-none">Maliki Ntwali</a></span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}

            {/* <!-- Back to Top --> */}
            <a href="/" className="btn btn-secondary btn-square rounded-circle back-to-top"><i
                className="fa fa-arrow-up text-white"></i></a>

        </div>
    )
}

export default Home