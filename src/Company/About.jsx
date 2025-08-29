import React from 'react'

function About() {
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
                                <a href="/" className="nav-item nav-link ">Home</a>
                                <a href="/about" className="nav-item active nav-link">About</a>
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
            {/* <!-- Page Header Start --> */}
            <div className="container-fluid page-header py-5">
                <div className="container text-center py-5">
                    <h1 className="display-2 text-white mb-4 animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        {/* <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="">Pages</a></li>
                            <li className="breadcrumb-item" aria-current="page">About</li>
                        </ol> */}
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}

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
                                <img src="assets/img/about-1.jpg" className="img-fluid w-75 rounded wow zoomIn" data-wow-delay=".4s" alt="" style={{ marginBottom: "25%" }} />
                                <div className="position-absolute w-75" style={{ top: "25%", left: "25%" }}>
                                    <img src="assets/img/about-2.jpg" className="img-fluid w-100 rounded wow zoomIn" data-wow-delay=".6s" alt="" />
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
                                <span className="pt-3 text-light"><i className="fas fa-id-badge text-primary me-2"></i> License No. 422/0809</span>
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
            <a href="/about" className="btn btn-secondary btn-square rounded-circle back-to-top"><i
                className="fa fa-arrow-up text-white"></i></a>

        </div>
    )
}

export default About