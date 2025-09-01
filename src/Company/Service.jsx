import React from 'react'

function Service() {
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
                            <span className="ms-2 text-white fw-bold d-none d-md-inline">Dicel Security Company</span>
                            <span className="ms-2 text-white fw-bold d-inline d-md-none">Dicel Sec. Comp</span>
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
            {/* <!-- Page Header Start --> */}
            <div className="container-fluid page-header py-5">
                <div className="container text-center py-5">
                    <h1 className="display-2 text-white mb-4 animated slideInDown">Services</h1>
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
                                        <a href="/security-guard" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
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
                                        <a href="/cctv-cameras" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
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
                                        <a href="/metal-detector" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
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
                                    <a href="/alarm-systems" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
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
                                        <a href="/access-control" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
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
                                        <a href="/consulting" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Services End --> */}

            {/* <!-- How We Work Start --> */}
            <div className="container-fluid py-5 bg-light">
                <div className="container">
                    <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: "700px" }}>
                        <h5 className="text-primary">Our Process</h5>
                        <h1>How We Work</h1>
                        <p className="mb-0">A proven, transparent workflow to deliver reliable protection.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".1s">
                            <div className="p-4 h-100 bg-white rounded shadow-sm text-center card-zoom">
                                <div className="mb-3 text-primary"><i className="fas fa-clipboard-check fa-2x"></i></div>
                                <h5 className="mb-2">1) Site Assessment</h5>
                                <p className="mb-0">We survey risks, access points, and coverage requirements.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".25s">
                            <div className="p-4 h-100 bg-white rounded shadow-sm text-center card-zoom">
                                <div className="mb-3 text-primary"><i className="fas fa-file-signature fa-2x"></i></div>
                                <h5 className="mb-2">2) Proposal</h5>
                                <p className="mb-0">Tailored plan combining guards and technology with clear SLAs.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".4s">
                            <div className="p-4 h-100 bg-white rounded shadow-sm text-center card-zoom">
                                <div className="mb-3 text-primary"><i className="fas fa-user-shield fa-2x"></i></div>
                                <h5 className="mb-2">3) Deployment</h5>
                                <p className="mb-0">Professional guards and certified installers implement the solution.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".55s">
                            <div className="p-4 h-100 bg-white rounded shadow-sm text-center card-zoom">
                                <div className="mb-3 text-primary"><i className="fas fa-chart-line fa-2x"></i></div>
                                <h5 className="mb-2">4) Monitor & Improve</h5>
                                <p className="mb-0">24/7 monitoring, reporting, and continuous optimization.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- How We Work End --> */}

            {/* <!-- Industries Start --> */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: "700px" }}>
                        <h5 className="text-primary">Industries We Serve</h5>
                        <h1>Protection Across Sectors</h1>
                        <p className="mb-0">Tailored guarding and technology for diverse environments.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-6 col-md-4 col-lg-2 wow fadeInUp" data-wow-delay=".1s">
                            <div className="industry-card h-100">
                                <div className="icon-circle"><i className="fas fa-home"></i></div>
                                <div className="title">Residential</div>
                                <div className="desc">Estates, apartments, gated communities</div>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2 wow fadeInUp" data-wow-delay=".2s">
                            <div className="industry-card h-100">
                                <div className="icon-circle"><i className="fas fa-building"></i></div>
                                <div className="title">Commercial</div>
                                <div className="desc">Offices, malls, retail outlets</div>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2 wow fadeInUp" data-wow-delay=".3s">
                            <div className="industry-card h-100">
                                <div className="icon-circle"><i className="fas fa-industry"></i></div>
                                <div className="title">Industrial</div>
                                <div className="desc">Plants, warehouses, logistics</div>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2 wow fadeInUp" data-wow-delay=".4s">
                            <div className="industry-card h-100">
                                <div className="icon-circle"><i className="fas fa-users"></i></div>
                                <div className="title">Events</div>
                                <div className="desc">Crowd control and screening</div>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2 wow fadeInUp" data-wow-delay=".5s">
                            <div className="industry-card h-100">
                                <div className="icon-circle"><i className="fas fa-school"></i></div>
                                <div className="title">Institutions</div>
                                <div className="desc">Schools and public facilities</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Industries End --> */}

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
            <a href="/services" className="btn btn-secondary btn-square rounded-circle back-to-top"><i
                className="fa fa-arrow-up text-white"></i></a>
        </div>
    )
}

export default Service