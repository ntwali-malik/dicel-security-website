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
                        <div id="note" className="text-secondary d-none d-xl-flex"><small>Licensed Security Solutions Provider Since 2017</small></div>
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
                                <a href="/" className="nav-item nav-link">Home</a>
                                <a href="/about" className="nav-item nav-link">About</a>
                                <a href="/services" className="nav-item active nav-link">Services</a>
                                <a href="/gallery" className="nav-item nav-link">Gallery</a>
                                <a href="/contact" className="nav-item nav-link">Contact</a>
                            </div>
                            {/* Small-screen contact actions */}
                            <div className="d-lg-none border-top mt-3 pt-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <a href="tel:+250788313547" className="btn btn-secondary text-white px-4 rounded-pill"><i className="fa fa-phone-alt me-2"></i>+250 788 313 547</a>
                                    <a href="mailto:info@dicel.co.rw" className="text-white text-decoration-none ms-3"><i className="fas fa-envelope me-2"></i>info@dicel.co.rw</a>
                                </div>
                            </div>
                        </div>
                        <div className="d-none d-lg-flex flex-shirink-0 align-items-center ms-lg-3">
                            <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
                                <a href="#" className="position-relative animated tada infinite">
                                    <i className="fa fa-phone-alt text-white fa-2x"></i>
                                    <div className="position-absolute" style={{ top: "-7px", left: "20px" }}>
                                        <span><i className="fa fa-comment-dots text-secondary"></i></span>
                                    </div>
                                </a>
                            </div>
                            <div className="d-flex flex-column pe-4 gap-1">
                                <span className="text-white">Have any questions?</span>
                                <span className="text-white">Call: 3024</span>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar End --> */}
            {/* <!-- Hero Section Start --> */}
            <div className="container-fluid px-0 position-relative" style={{ height: '70vh', minHeight: '500px' }}>
                <div className="position-relative w-100 h-100">
                    <img src="assets/img/1.jpeg" className="img-fluid w-100 h-100" alt="Our Security Services" 
                         style={{ objectFit: 'cover' }} />
                    {/* Brand Color Overlay */}
                    <div className="position-absolute w-100 h-100 top-0 start-0" style={{ 
                        background: 'linear-gradient(135deg, rgba(13, 110, 253, 0.1) 0%, rgba(0, 86, 179, 0.15) 100%)',
                        zIndex: 1
                    }}></div>
                </div>
                
                <div className="carousel-caption">
                    <div className="container carousel-content position-relative" style={{ zIndex: 2 }}>
                        <div className="mb-3">
                            <span className="badge bg-white text-primary px-4 py-2 rounded-pill fs-6 fw-bold">
                                COMPREHENSIVE SECURITY SOLUTIONS
                            </span>
                        </div>
                        <h1 className="text-white display-1 mb-4 animated fadeInRight fw-bold" style={{ 
                            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                            lineHeight: '1.1'
                        }}>
                            Our Security<br />
                            <span className="text-warning">Services</span>
                        </h1>
                        <p className="mb-4 text-white fs-5 animated fadeInDown" style={{ 
                            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                            maxWidth: '800px',
                            margin: '0 auto 2rem'
                        }}>
                            Professional security solutions tailored to protect your people, property, and assets with cutting-edge technology and expert personnel.
                        </p>
                        <div className="d-flex flex-wrap justify-content-center gap-3">
                            <a href="#services" className="me-2">
                                <button type="button" className="px-5 py-3 btn btn-warning rounded-pill carousel-content-btn1 animated fadeInLeft fw-bold" style={{
                                    fontSize: '1.1rem',
                                    boxShadow: '0 8px 25px rgba(255, 193, 7, 0.4)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <i className="fas fa-shield-alt me-2"></i>Explore Services
                                </button>
                            </a>
                            <a href="/contact" className="ms-2">
                                <button type="button" className="px-5 py-3 btn btn-outline-light rounded-pill carousel-content-btn2 animated fadeInRight fw-bold" style={{
                                    fontSize: '1.1rem',
                                    borderWidth: '2px',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <i className="fas fa-phone me-2"></i>Get Quote
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Hero Section End --> */}

            {/* <!-- Services Start --> */}
            <div id="services" className="py-5 bg-white">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-8 mx-auto text-center">
                            <div className="mb-4">
                                <span className="badge bg-primary text-white px-4 py-2 rounded-pill fs-6 fw-semibold">
                                    OUR SERVICES
                                </span>
                            </div>
                            <h2 className="display-5 fw-bold text-dark mb-3">Comprehensive Security Solutions</h2>
                            <p className="lead text-muted">Choose from our range of professional security services designed to protect what matters most to you.</p>
                        </div>
                    </div>
                    
                    <div className="row g-4">
                        {/* Guarding Service */}
                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-lg h-100" style={{ 
                                transition: 'all 0.3s ease',
                                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
                            }}
                                 onMouseEnter={(e) => {
                                     e.currentTarget.style.transform = 'translateY(-10px)';
                                     e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                                 }}
                                 onMouseLeave={(e) => {
                                     e.currentTarget.style.transform = 'translateY(0)';
                                     e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                 }}>
                                <div className="position-relative overflow-hidden">
                                    <img src="assets/img/1.jpeg" className="card-img-top" alt="Guarding Service" 
                                         style={{ height: '200px', objectFit: 'cover' }} />
                                    <div className="position-absolute top-0 end-0 m-3">
                                        <div className="d-inline-flex align-items-center justify-content-center rounded-circle" 
                                             style={{ width: '50px', height: '50px', background: 'linear-gradient(45deg, #007bff, #0056b3)' }}>
                                            <i className="fas fa-shield-alt text-white fa-lg"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-4 text-center">
                                    <h4 className="card-title fw-bold mb-3 text-dark">Guarding Services</h4>
                                    <p className="card-text text-muted mb-4">Professional manned guarding for residential, commercial, industrial properties and special events.</p>
                                    <ul className="list-unstyled text-start mb-4">
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>24/7 Security Personnel</li>
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Access Control Management</li>
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Patrol Services</li>
                                    </ul>
                                    <a href="/guarding-services" className="btn btn-primary w-100 rounded-pill fw-semibold">
                                        <i className="fas fa-arrow-right me-2"></i>View Details
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Security Equipment */}
                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-lg h-100" style={{ 
                                transition: 'all 0.3s ease',
                                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
                            }}
                                 onMouseEnter={(e) => {
                                     e.currentTarget.style.transform = 'translateY(-10px)';
                                     e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                                 }}
                                 onMouseLeave={(e) => {
                                     e.currentTarget.style.transform = 'translateY(0)';
                                     e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                 }}>
                                <div className="position-relative overflow-hidden">
                                    <img src="assets/img/alarms-system.png" className="card-img-top" alt="Security Equipment" 
                                         style={{ height: '200px', objectFit: 'cover' }} />
                                    <div className="position-absolute top-0 end-0 m-3">
                                        <div className="d-inline-flex align-items-center justify-content-center rounded-circle" 
                                             style={{ width: '50px', height: '50px', background: 'linear-gradient(45deg, #28a745, #20c997)' }}>
                                            <i className="fas fa-video text-white fa-lg"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-4 text-center">
                                    <h4 className="card-title fw-bold mb-3 text-dark">Security Equipment</h4>
                                    <p className="card-text text-muted mb-4">Advanced CCTV systems, alarms, access control, metal detectors and monitoring solutions.</p>
                                    <ul className="list-unstyled text-start mb-4">
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>CCTV & Surveillance</li>
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Access Control Systems</li>
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Alarm Systems</li>
                                    </ul>
                                    <a href="/security-equipment" className="btn btn-success w-100 rounded-pill fw-semibold">
                                        <i className="fas fa-arrow-right me-2"></i>View Details
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Security Consultancy */}
                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-lg h-100" style={{ 
                                transition: 'all 0.3s ease',
                                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
                            }}
                                 onMouseEnter={(e) => {
                                     e.currentTarget.style.transform = 'translateY(-10px)';
                                     e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                                 }}
                                 onMouseLeave={(e) => {
                                     e.currentTarget.style.transform = 'translateY(0)';
                                     e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                 }}>
                                <div className="position-relative overflow-hidden">
                                    <img src="assets/img/consulting-Service.jpg" className="card-img-top" alt="Security Consultancy" 
                                         style={{ height: '200px', objectFit: 'cover' }} />
                                    <div className="position-absolute top-0 end-0 m-3">
                                        <div className="d-inline-flex align-items-center justify-content-center rounded-circle" 
                                             style={{ width: '50px', height: '50px', background: 'linear-gradient(45deg, #6f42c1, #5a32a3)' }}>
                                            <i className="fas fa-lightbulb text-white fa-lg"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-4 text-center">
                                    <h4 className="card-title fw-bold mb-3 text-dark">Security Consultancy</h4>
                                    <p className="card-text text-muted mb-4">Expert security assessments, policy development, training programs and strategic guidance.</p>
                                    <ul className="list-unstyled text-start mb-4">
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Risk Assessments</li>
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Security Policies</li>
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Training Programs</li>
                                    </ul>
                                    <a href="/security-consultancy" className="btn btn-purple w-100 rounded-pill fw-semibold" style={{ backgroundColor: '#6f42c1', borderColor: '#6f42c1' }}>
                                        <i className="fas fa-arrow-right me-2"></i>View Details
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Stewards */}
                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-lg h-100" style={{ 
                                transition: 'all 0.3s ease',
                                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
                            }}
                                 onMouseEnter={(e) => {
                                     e.currentTarget.style.transform = 'translateY(-10px)';
                                     e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                                 }}
                                 onMouseLeave={(e) => {
                                     e.currentTarget.style.transform = 'translateY(0)';
                                     e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                 }}>
                                <div className="position-relative overflow-hidden">
                                    <img src="assets/img/admin.jpg" className="card-img-top" alt="Stewards" 
                                         style={{ height: '200px', objectFit: 'cover' }} />
                                    <div className="position-absolute top-0 end-0 m-3">
                                        <div className="d-inline-flex align-items-center justify-content-center rounded-circle" 
                                             style={{ width: '50px', height: '50px', background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)' }}>
                                            <i className="fas fa-users text-white fa-lg"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-4 text-center">
                                    <h4 className="card-title fw-bold mb-3 text-dark">Event Stewards</h4>
                                    <p className="card-text text-muted mb-4">Professional stewards for events, crowd control, VIP management and guest assistance.</p>
                                    <ul className="list-unstyled text-start mb-4">
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Event Management</li>
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Crowd Control</li>
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>VIP Services</li>
                                    </ul>
                                    <a href="/stewards" className="btn btn-danger w-100 rounded-pill fw-semibold">
                                        <i className="fas fa-arrow-right me-2"></i>View Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Services End --> */}

            {/* <!-- How We Work Start --> */}
            <div className="py-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-8 mx-auto text-center">
                            <div className="mb-4">
                                <span className="badge bg-light text-primary px-4 py-2 rounded-pill fs-6 fw-semibold">
                                    OUR PROCESS
                                </span>
                            </div>
                            <h2 className="display-5 fw-bold text-white mb-3">How We Work</h2>
                            <p className="lead text-white">A proven, systematic approach to deliver comprehensive security solutions tailored to your needs.</p>
                        </div>
                    </div>
                    
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="text-center text-white">
                                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" 
                                     style={{ width: '100px', height: '100px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}>
                                    <span className="fw-bold fs-1">1</span>
                                </div>
                                <div className="mb-3">
                                    <i className="fas fa-clipboard-check fa-2x text-warning"></i>
                                </div>
                                <h4 className="fw-bold mb-3">Site Assessment</h4>
                                <p className="mb-0">Comprehensive evaluation of your property, identifying security risks, vulnerabilities, and optimal protection strategies.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="text-center text-white">
                                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" 
                                     style={{ width: '100px', height: '100px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}>
                                    <span className="fw-bold fs-1">2</span>
                                </div>
                                <div className="mb-3">
                                    <i className="fas fa-file-signature fa-2x text-warning"></i>
                                </div>
                                <h4 className="fw-bold mb-3">Custom Proposal</h4>
                                <p className="mb-0">Tailored security plan combining professional guards, advanced technology, and clear service level agreements.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="text-center text-white">
                                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" 
                                     style={{ width: '100px', height: '100px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}>
                                    <span className="fw-bold fs-1">3</span>
                                </div>
                                <div className="mb-3">
                                    <i className="fas fa-user-shield fa-2x text-warning"></i>
                                </div>
                                <h4 className="fw-bold mb-3">Professional Deployment</h4>
                                <p className="mb-0">Expert implementation by trained security personnel and certified technicians for seamless integration.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="text-center text-white">
                                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" 
                                     style={{ width: '100px', height: '100px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}>
                                    <span className="fw-bold fs-1">4</span>
                                </div>
                                <div className="mb-3">
                                    <i className="fas fa-chart-line fa-2x text-warning"></i>
                                </div>
                                <h4 className="fw-bold mb-3">Monitor & Optimize</h4>
                                <p className="mb-0">Continuous 24/7 monitoring, detailed reporting, and ongoing optimization for maximum security effectiveness.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- How We Work End --> */}

            {/* <!-- Industries Start --> */}
            <div className="py-5 bg-light">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-8 mx-auto text-center">
                            <div className="mb-4">
                                <span className="badge bg-primary text-white px-4 py-2 rounded-pill fs-6 fw-semibold">
                                    INDUSTRIES WE SERVE
                                </span>
                            </div>
                            <h2 className="display-5 fw-bold text-dark mb-3">Protection Across All Sectors</h2>
                            <p className="lead text-muted">Specialized security solutions tailored to meet the unique challenges of different industries and environments.</p>
                        </div>
                    </div>
                    
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="text-center p-4 bg-white rounded-3 shadow-sm h-100" style={{ transition: 'all 0.3s ease' }}
                                 onMouseEnter={(e) => {
                                     e.currentTarget.style.transform = 'translateY(-5px)';
                                     e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                                 }}
                                 onMouseLeave={(e) => {
                                     e.currentTarget.style.transform = 'translateY(0)';
                                     e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
                                 }}>
                                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" 
                                     style={{ width: '60px', height: '60px', background: 'linear-gradient(45deg, #007bff, #0056b3)' }}>
                                    <i className="fas fa-home text-white fa-lg"></i>
                                </div>
                                <h5 className="fw-bold mb-2 text-dark">Residential</h5>
                                <p className="text-muted small mb-0">Estates, apartments, gated communities</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="text-center p-4 bg-white rounded-3 shadow-sm h-100" style={{ transition: 'all 0.3s ease' }}
                                 onMouseEnter={(e) => {
                                     e.currentTarget.style.transform = 'translateY(-5px)';
                                     e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                                 }}
                                 onMouseLeave={(e) => {
                                     e.currentTarget.style.transform = 'translateY(0)';
                                     e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
                                 }}>
                                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" 
                                     style={{ width: '60px', height: '60px', background: 'linear-gradient(45deg, #28a745, #20c997)' }}>
                                    <i className="fas fa-building text-white fa-lg"></i>
                                </div>
                                <h5 className="fw-bold mb-2 text-dark">Commercial</h5>
                                <p className="text-muted small mb-0">Offices, malls, retail outlets</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="text-center p-4 bg-white rounded-3 shadow-sm h-100" style={{ transition: 'all 0.3s ease' }}
                                 onMouseEnter={(e) => {
                                     e.currentTarget.style.transform = 'translateY(-5px)';
                                     e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                                 }}
                                 onMouseLeave={(e) => {
                                     e.currentTarget.style.transform = 'translateY(0)';
                                     e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
                                 }}>
                                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" 
                                     style={{ width: '60px', height: '60px', background: 'linear-gradient(45deg, #ffc107, #fd7e14)' }}>
                                    <i className="fas fa-industry text-white fa-lg"></i>
                                </div>
                                <h5 className="fw-bold mb-2 text-dark">Industrial</h5>
                                <p className="text-muted small mb-0">Plants, warehouses, logistics</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="text-center p-4 bg-white rounded-3 shadow-sm h-100" style={{ transition: 'all 0.3s ease' }}
                                 onMouseEnter={(e) => {
                                     e.currentTarget.style.transform = 'translateY(-5px)';
                                     e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                                 }}
                                 onMouseLeave={(e) => {
                                     e.currentTarget.style.transform = 'translateY(0)';
                                     e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
                                 }}>
                                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" 
                                     style={{ width: '60px', height: '60px', background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)' }}>
                                    <i className="fas fa-users text-white fa-lg"></i>
                                </div>
                                <h5 className="fw-bold mb-2 text-dark">Events</h5>
                                <p className="text-muted small mb-0">Crowd control and screening</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="text-center p-4 bg-white rounded-3 shadow-sm h-100" style={{ transition: 'all 0.3s ease' }}
                                 onMouseEnter={(e) => {
                                     e.currentTarget.style.transform = 'translateY(-5px)';
                                     e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                                 }}
                                 onMouseLeave={(e) => {
                                     e.currentTarget.style.transform = 'translateY(0)';
                                     e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
                                 }}>
                                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" 
                                     style={{ width: '60px', height: '60px', background: 'linear-gradient(45deg, #6f42c1, #5a32a3)' }}>
                                    <i className="fas fa-school text-white fa-lg"></i>
                                </div>
                                <h5 className="fw-bold mb-2 text-dark">Institutions</h5>
                                <p className="text-muted small mb-0">Schools and public facilities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Industries End --> */}

            {/* <!-- CTA Section Start --> */}
            <div className="py-5 bg-dark">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <h3 className="text-white fw-bold mb-2">Ready to Secure Your Business?</h3>
                            <p className="text-white-75 mb-0">Get a comprehensive security assessment and customized protection plan tailored to your specific needs and industry requirements.</p>
                        </div>
                        <div className="col-lg-4 text-lg-end">
                            <a href="/contact" className="btn btn-warning btn-lg px-5 py-3 rounded-pill fw-semibold">
                                <i className="fas fa-phone me-2"></i>Get Free Quote
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- CTA Section End --> */}

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
        </div>
    )
}

export default Service