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
                                <a href="/about" className="nav-item active nav-link">About</a>
                                <a href="/services" className="nav-item nav-link">Services</a>
                                <a href="/gallery" className="nav-item nav-link">Gallery</a>
                                <a href="/contact" className="nav-item nav-link">Contact</a>
                            </div>
                            {/* Small-screen contact actions */}
                            <div className="d-lg-none border-top mt-3 pt-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <a href="tel:+250788313547" className="btn btn-secondary text-white px-4 rounded-pill"><i className="fa fa-phone-alt me-2"></i>0788313547</a>
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
                    <img src="assets/img/3.jpeg" className="img-fluid w-100 h-100" alt="About Dicel Security" 
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
                                <i className="fas fa-info-circle me-2"></i>ABOUT DICEL SECURITY
                            </span>
                        </div>
                        <h1 className="text-white display-1 mb-4 animated fadeInRight fw-bold" style={{ 
                            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                            lineHeight: '1.1'
                        }}>
                            Your Trusted Security Partner Since <span className="text-warning">2017</span>
                        </h1>
                        <p className="mb-4 text-white fs-5 animated fadeInDown" style={{ 
                            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                            maxWidth: '800px',
                            margin: '0 auto 2rem'
                        }}>
                            Licensed and certified security solutions provider delivering comprehensive protection 
                            services across Rwanda with professional excellence and innovative technology.
                        </p>
                        <div className="d-flex flex-wrap justify-content-center gap-3">
                            <a href="/services" className="me-2">
                                <button type="button" className="px-5 py-3 btn btn-warning rounded-pill carousel-content-btn1 animated fadeInLeft fw-bold" style={{
                                    fontSize: '1.1rem',
                                    boxShadow: '0 8px 25px rgba(255, 193, 7, 0.4)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <i className="fas fa-shield-alt me-2"></i>Our Services
                                </button>
                            </a>
                            <a href="/contact" className="ms-2">
                                <button type="button" className="px-5 py-3 btn btn-outline-light rounded-pill carousel-content-btn2 animated fadeInRight fw-bold" style={{
                                    fontSize: '1.1rem',
                                    borderWidth: '2px',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <i className="fas fa-phone me-2"></i>Get In Touch
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Hero Section End --> */}

            {/* <!-- Statistics Start --> */}
            <div className="py-5" style={{ 
                background: 'linear-gradient(135deg, #0d6efd 0%, #0056b3 100%)',
                position: 'relative'
            }}>
                {/* Background Pattern */}
                <div className="position-absolute w-100 h-100" style={{
                    background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                    opacity: 0.3
                }}></div>
                
                <div className="container position-relative">
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="text-center p-3 h-100" style={{
                                background: 'rgba(255,255,255,0.1)',
                                borderRadius: '16px',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                            }}>
                                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-2" 
                                     style={{ 
                                         width: '60px', 
                                         height: '60px', 
                                         background: 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)',
                                         boxShadow: '0 6px 20px rgba(255, 193, 7, 0.3)'
                                     }}>
                                    <i className="fas fa-shield-alt text-white fa-lg"></i>
                                </div>
                                <h3 className="fw-bold text-white mb-1 counter-value" style={{ fontSize: '2.2rem' }}>350</h3>
                                <p className="text-white mb-0 fw-medium" style={{ fontSize: '0.9rem', lineHeight: '1.3' }}>Sites Secured Across<br />Residential & Commercial</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="text-center p-3 h-100" style={{
                                background: 'rgba(255,255,255,0.1)',
                                borderRadius: '16px',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                            }}>
                                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-2" 
                                     style={{ 
                                         width: '60px', 
                                         height: '60px', 
                                         background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                                         boxShadow: '0 6px 20px rgba(40, 167, 69, 0.3)'
                                     }}>
                                    <i className="fas fa-exclamation-triangle text-white fa-lg"></i>
                                </div>
                                <h3 className="fw-bold text-white mb-1 counter-value" style={{ fontSize: '2.2rem' }}>1200</h3>
                                <p className="text-white mb-0 fw-medium" style={{ fontSize: '0.9rem', lineHeight: '1.3' }}>Incidents Responded<br />In The Last Year</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="text-center p-3 h-100" style={{
                                background: 'rgba(255,255,255,0.1)',
                                borderRadius: '16px',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                            }}>
                                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-2" 
                                     style={{ 
                                         width: '60px', 
                                         height: '60px', 
                                         background: 'linear-gradient(135deg, #6f42c1 0%, #5a32a3 100%)',
                                         boxShadow: '0 6px 20px rgba(111, 66, 193, 0.3)'
                                     }}>
                                    <i className="fas fa-building text-white fa-lg"></i>
                                </div>
                                <h3 className="fw-bold text-white mb-1 counter-value" style={{ fontSize: '2.2rem' }}>180</h3>
                                <p className="text-white mb-0 fw-medium" style={{ fontSize: '0.9rem', lineHeight: '1.3' }}>Corporate Clients<br />Under Active Protection</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="text-center p-3 h-100" style={{
                                background: 'rgba(255,255,255,0.1)',
                                borderRadius: '16px',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                            }}>
                                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-2" 
                                     style={{ 
                                         width: '60px', 
                                         height: '60px', 
                                         background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
                                         boxShadow: '0 6px 20px rgba(220, 53, 69, 0.3)'
                                     }}>
                                    <i className="fas fa-star text-white fa-lg"></i>
                                </div>
                                <h3 className="fw-bold text-white mb-1 counter-value" style={{ fontSize: '2.2rem' }}>4.9</h3>
                                <p className="text-white mb-0 fw-medium" style={{ fontSize: '0.9rem', lineHeight: '1.3' }}>Average Customer<br />Rating Out of 5 Stars</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Statistics End --> */}

            {/* <!-- About Start --> */}
            <div className="py-5 bg-white">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="position-relative">
                                {/* Main Image */}
                                <div className="position-relative" style={{ zIndex: 2 }}>
                                    <img src="assets/img/1.jpeg" 
                                         className="img-fluid rounded-4 shadow-lg" 
                                         alt="Dicel Security Team" 
                                         style={{ 
                                             width: '85%',
                                             transition: 'transform 0.3s ease'
                                         }}
                                         onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
                                         onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} />
                                </div>
                                
                                {/* Overlay Image */}
                                <div className="position-absolute" style={{ 
                                    top: '20%', 
                                    right: '0%', 
                                    zIndex: 3,
                                    width: '70%'
                                }}>
                                    <div className="p-3 bg-white rounded-4 shadow-lg">
                                        <img src="assets/img/2.jpeg" 
                                             className="img-fluid rounded-3" 
                                             alt="Security Operations"
                                             style={{ 
                                                 transition: 'transform 0.3s ease'
                                             }}
                                             onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                             onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} />
                                    </div>
                                </div>
                                
                                {/* Decorative Elements */}
                                <div className="position-absolute" style={{ 
                                    top: '-10px', 
                                    left: '-10px', 
                                    width: '100px', 
                                    height: '100px',
                                    background: 'linear-gradient(135deg, #0d6efd 0%, #0056b3 100%)',
                                    borderRadius: '50%',
                                    opacity: '0.1',
                                    zIndex: 1
                                }}></div>
                                
                                <div className="position-absolute" style={{ 
                                    bottom: '-20px', 
                                    right: '10%', 
                                    width: '80px', 
                                    height: '80px',
                                    background: 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)',
                                    borderRadius: '50%',
                                    opacity: '0.2',
                                    zIndex: 1
                                }}></div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <div className="ps-lg-4">
                                {/* Section Badge */}
                                <div className="mb-4">
                                    <span className="badge bg-primary text-white px-4 py-2 rounded-pill fs-6 fw-semibold">
                                        <i className="fas fa-info-circle me-2"></i>ABOUT US
                                    </span>
                                </div>
                                
                                {/* Main Heading */}
                                <h2 className="display-5 fw-bold text-dark mb-4" style={{ lineHeight: '1.2' }}>
                                    About <span className="text-primary">Dicel Security</span><br />
                                    Company Ltd
                                </h2>
                                
                                {/* Description */}
                                <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                                    Established in 2017, Dicel Security Company Ltd provides comprehensive security services with 
                                    advanced solutions to local and international organizations. Licensed by the Ministry of Internal 
                                    Security (License No. 422/0809), we deliver professional protection across Rwanda.
                                </p>
                                
                                {/* Mission */}
                                <div className="mb-4 p-4 rounded-3" style={{ background: 'rgba(13, 110, 253, 0.05)' }}>
                                    <h5 className="text-primary fw-bold mb-3">
                                        <i className="fas fa-bullseye me-2"></i>Our Mission
                                    </h5>
                                    <p className="text-dark mb-0">
                                        To provide innovative security solutions at affordable costs, helping organizations 
                                        in the region maintain their competitive edge through reliable protection services.
                                    </p>
                                </div>
                                
                                {/* Vision */}
                                <div className="mb-4 p-4 rounded-3" style={{ background: 'rgba(255, 193, 7, 0.1)' }}>
                                    <h5 className="text-warning fw-bold mb-3">
                                        <i className="fas fa-eye me-2"></i>Our Vision
                                    </h5>
                                    <p className="text-dark mb-0">
                                        To become a leading security company at national and international levels by 
                                        extending our services throughout Rwanda and beyond.
                                    </p>
                                </div>
                                
                                {/* CTA Button */}
                                <a href="/services" className="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-semibold" style={{
                                    background: 'linear-gradient(135deg, #0d6efd 0%, #0056b3 100%)',
                                    border: 'none',
                                    boxShadow: '0 8px 25px rgba(13, 110, 253, 0.3)',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-3px)';
                                    e.target.style.boxShadow = '0 12px 35px rgba(13, 110, 253, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = '0 8px 25px rgba(13, 110, 253, 0.3)';
                                }}>
                                    <i className="fas fa-shield-alt me-2"></i>Explore Our Services
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}
            {/* <!-- Clients Start --> */}
            <div className="py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-8 mx-auto text-center">
                            <div className="mb-4">
                                <span className="badge bg-primary text-white px-4 py-2 rounded-pill fs-6 fw-semibold">
                                    <i className="fas fa-handshake me-2"></i>OUR CLIENTS
                                </span>
                            </div>
                            <h2 className="display-5 fw-bold text-dark mb-4" style={{ lineHeight: '1.2' }}>
                                Trusted by <span className="text-primary">Leading Organizations</span>
                            </h2>
                            <p className="lead text-muted mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                                We've provided comprehensive security solutions to businesses across Rwanda, 
                                building lasting partnerships based on trust and reliability.
                            </p>
                        </div>
                    </div>
                    <div className="client-marquee-container" style={{ overflow: "hidden", position: "relative" }}>
                        <div className="client-marquee" style={{ 
                            display: "flex", 
                            animation: "scroll 30s linear infinite",
                            width: "max-content"
                        }}>
                            {/* First set of clients */}
                            <div className="client-item bg-white rounded shadow-sm p-3 mx-3 d-flex align-items-center justify-content-center" style={{ minWidth: "150px", height: "100px" }}>
                                <img src="assets/img/clients/a.jpg" className="img-fluid" alt="Client Logo" style={{ maxHeight: "60px", maxWidth: "100%" }} />
                            </div>
                            <div className="client-item bg-white rounded shadow-sm p-3 mx-3 d-flex align-items-center justify-content-center" style={{ minWidth: "150px", height: "100px" }}>
                                <img src="assets/img/clients/b.jpg" className="img-fluid" alt="Client Logo" style={{ maxHeight: "60px", maxWidth: "100%" }} />
                            </div>
                            <div className="client-item bg-white rounded shadow-sm p-3 mx-3 d-flex align-items-center justify-content-center" style={{ minWidth: "150px", height: "100px" }}>
                                <img src="assets/img/clients/c.png" className="img-fluid" alt="Client Logo" style={{ maxHeight: "60px", maxWidth: "100%" }} />
                            </div>
                            <div className="client-item bg-white rounded shadow-sm p-3 mx-3 d-flex align-items-center justify-content-center" style={{ minWidth: "150px", height: "100px" }}>
                                <img src="assets/img/clients/d.png" className="img-fluid" alt="Client Logo" style={{ maxHeight: "60px", maxWidth: "100%" }} />
                            </div>
                            <div className="client-item bg-white rounded shadow-sm p-3 mx-3 d-flex align-items-center justify-content-center" style={{ minWidth: "150px", height: "100px" }}>
                                <img src="assets/img/clients/e.png" className="img-fluid" alt="Client Logo" style={{ maxHeight: "60px", maxWidth: "100%" }} />
                            </div>
                            <div className="client-item bg-white rounded shadow-sm p-3 mx-3 d-flex align-items-center justify-content-center" style={{ minWidth: "150px", height: "100px" }}>
                                <img src="assets/img/clients/f.png" className="img-fluid" alt="Client Logo" style={{ maxHeight: "60px", maxWidth: "100%" }} />
                            </div>
                            <div className="client-item bg-white rounded shadow-sm p-3 mx-3 d-flex align-items-center justify-content-center" style={{ minWidth: "150px", height: "100px" }}>
                                <img src="assets/img/clients/g.jpg" className="img-fluid" alt="Client Logo" style={{ maxHeight: "60px", maxWidth: "100%" }} />
                            </div>
                            <div className="client-item bg-white rounded shadow-sm p-3 mx-3 d-flex align-items-center justify-content-center" style={{ minWidth: "150px", height: "100px" }}>
                                <img src="assets/img/clients/h.jpg" className="img-fluid" alt="Client Logo" style={{ maxHeight: "60px", maxWidth: "100%" }} />
                            </div>
                            <div className="client-item bg-white rounded shadow-sm p-3 mx-3 d-flex align-items-center justify-content-center" style={{ minWidth: "150px", height: "100px" }}>
                                <img src="assets/img/clients/j.png" className="img-fluid" alt="Client Logo" style={{ maxHeight: "60px", maxWidth: "100%" }} />
                            </div>
                            <div className="client-item bg-white rounded shadow-sm p-3 mx-3 d-flex align-items-center justify-content-center" style={{ minWidth: "150px", height: "100px" }}>
                                <img src="assets/img/clients/k.png" className="img-fluid" alt="Client Logo" style={{ maxHeight: "60px", maxWidth: "100%" }} />
                            </div>
                            <div className="client-item bg-white rounded shadow-sm p-3 mx-3 d-flex align-items-center justify-content-center" style={{ minWidth: "150px", height: "100px" }}>
                                <img src="assets/img/clients/l.png" className="img-fluid" alt="Client Logo" style={{ maxHeight: "60px", maxWidth: "100%" }} />
                            </div>
                            <div className="client-item bg-white rounded shadow-sm p-3 mx-3 d-flex align-items-center justify-content-center" style={{ minWidth: "150px", height: "100px" }}>
                                <img src="assets/img/clients/z.jpg" className="img-fluid" alt="Client Logo" style={{ maxHeight: "60px", maxWidth: "100%" }} />
                            </div>
                            {/* Duplicate set for seamless loop */}
                            <div className="client-item bg-white rounded shadow-sm p-3 mx-3 d-flex align-items-center justify-content-center" style={{ minWidth: "150px", height: "100px" }}>
                                <img src="assets/img/clients/a.jpg" className="img-fluid" alt="Client Logo" style={{ maxHeight: "60px", maxWidth: "100%" }} />
                            </div>
                            <div className="client-item bg-white rounded shadow-sm p-3 mx-3 d-flex align-items-center justify-content-center" style={{ minWidth: "150px", height: "100px" }}>
                                <img src="assets/img/clients/b.jpg" className="img-fluid" alt="Client Logo" style={{ maxHeight: "60px", maxWidth: "100%" }} />
                            </div>
                            <div className="client-item bg-white rounded shadow-sm p-3 mx-3 d-flex align-items-center justify-content-center" style={{ minWidth: "150px", height: "100px" }}>
                                <img src="assets/img/clients/c.png" className="img-fluid" alt="Client Logo" style={{ maxHeight: "60px", maxWidth: "100%" }} />
                            </div>
                            <div className="client-item bg-white rounded shadow-sm p-3 mx-3 d-flex align-items-center justify-content-center" style={{ minWidth: "150px", height: "100px" }}>
                                <img src="assets/img/clients/d.png" className="img-fluid" alt="Client Logo" style={{ maxHeight: "60px", maxWidth: "100%" }} />
                            </div>
                            <div className="client-item bg-white rounded shadow-sm p-3 mx-3 d-flex align-items-center justify-content-center" style={{ minWidth: "150px", height: "100px" }}>
                                <img src="assets/img/clients/e.png" className="img-fluid" alt="Client Logo" style={{ maxHeight: "60px", maxWidth: "100%" }} />
                            </div>
                            <div className="client-item bg-white rounded shadow-sm p-3 mx-3 d-flex align-items-center justify-content-center" style={{ minWidth: "150px", height: "100px" }}>
                                <img src="assets/img/clients/f.png" className="img-fluid" alt="Client Logo" style={{ maxHeight: "60px", maxWidth: "100%" }} />
                            </div>
                            <div className="client-item bg-white rounded shadow-sm p-3 mx-3 d-flex align-items-center justify-content-center" style={{ minWidth: "150px", height: "100px" }}>
                                <img src="assets/img/clients/g.jpg" className="img-fluid" alt="Client Logo" style={{ maxHeight: "60px", maxWidth: "100%" }} />
                            </div>
                            <div className="client-item bg-white rounded shadow-sm p-3 mx-3 d-flex align-items-center justify-content-center" style={{ minWidth: "150px", height: "100px" }}>
                                <img src="assets/img/clients/h.jpg" className="img-fluid" alt="Client Logo" style={{ maxHeight: "60px", maxWidth: "100%" }} />
                            </div>
                            <div className="client-item bg-white rounded shadow-sm p-3 mx-3 d-flex align-items-center justify-content-center" style={{ minWidth: "150px", height: "100px" }}>
                                <img src="assets/img/clients/j.png" className="img-fluid" alt="Client Logo" style={{ maxHeight: "60px", maxWidth: "100%" }} />
                            </div>
                            <div className="client-item bg-white rounded shadow-sm p-3 mx-3 d-flex align-items-center justify-content-center" style={{ minWidth: "150px", height: "100px" }}>
                                <img src="assets/img/clients/k.png" className="img-fluid" alt="Client Logo" style={{ maxHeight: "60px", maxWidth: "100%" }} />
                            </div>
                            <div className="client-item bg-white rounded shadow-sm p-3 mx-3 d-flex align-items-center justify-content-center" style={{ minWidth: "150px", height: "100px" }}>
                                <img src="assets/img/clients/l.png" className="img-fluid" alt="Client Logo" style={{ maxHeight: "60px", maxWidth: "100%" }} />
                            </div>
                            <div className="client-item bg-white rounded shadow-sm p-3 mx-3 d-flex align-items-center justify-content-center" style={{ minWidth: "150px", height: "100px" }}>
                                <img src="assets/img/clients/z.jpg" className="img-fluid" alt="Client Logo" style={{ maxHeight: "60px", maxWidth: "100%" }} />
                            </div>
                        </div>
                    </div>
                    <style>{`
                        @keyframes scroll {
                            0% {
                                transform: translateX(0);
                            }
                            100% {
                                transform: translateX(-50%);
                            }
                        }
                        .client-marquee:hover {
                            animation-play-state: paused;
                        }
                        .client-item { 
                            min-width: 200px; 
                            height: 140px; 
                            background: #ffffff; 
                            border: 1px solid rgba(13, 110, 253, 0.1);
                            border-radius: 16px;
                            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
                            transition: all 0.3s ease;
                        }
                        .client-item:hover {
                            transform: translateY(-5px);
                            box-shadow: 0 12px 35px rgba(13, 110, 253, 0.15);
                            border-color: rgba(13, 110, 253, 0.2);
                        }
                        .client-item img {
                            height: 80px;
                            width: auto;
                            object-fit: contain;
                            image-rendering: -webkit-optimize-contrast;
                            image-rendering: crisp-edges;
                            -ms-interpolation-mode: bicubic;
                            display: block;
                        }
                    `}</style>
                </div>
            </div>
            {/* <!-- Clients End --> */}

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
                                <a href="tel:+250788313547" className="py-3 text-light border-bottom border-primary"><i className="fas fa-phone-alt text-primary me-2"></i> 0788313547</a>
                                <a href="tel:3024" className="py-3 text-light border-bottom border-primary"><i className="fas fa-phone-alt text-primary me-2"></i> Toll Free: 3024</a>
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