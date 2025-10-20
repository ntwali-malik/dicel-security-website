import React from 'react'

function Home() {
    return (
        <div>
            {/* <!-- Topbar Start --> */}
            <div className="container-fluid bg-dark py-2">
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
                                <a href="/" className="nav-item nav-link active text-secondary">Home</a>
                                <a href="/about" className="nav-item nav-link">About</a>
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
                            <div className="position-relative">
                                <img src="assets/img/3.jpeg" className="img-fluid w-100" alt="First slide" style={{ height: '100vh', objectFit: 'cover' }} />
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
                                            <i className="fas fa-shield-alt me-2"></i>TRUSTED SECURITY SOLUTIONS
                                        </span>
                                    </div>
                                    <h1 className="text-white display-1 mb-4 animated fadeInRight fw-bold" style={{ 
                                        textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                                        lineHeight: '1.1'
                                    }}>
                                        Comprehensive Security Services for Your <span className="text-warning">Peace of Mind</span>
                                    </h1>
                                    <p className="mb-4 text-white fs-5 animated fadeInDown" style={{ 
                                        textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                                        maxWidth: '800px',
                                        margin: '0 auto 2rem'
                                    }}>
                                        Professional guards, CCTV installation and monitoring, access control, and 24/7 patrols tailored to safeguard your people, property, and assets.
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
                                                <i className="fas fa-phone me-2"></i>Get a Quote
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="position-relative">
                                <img src="assets/img/4.jpeg" className="img-fluid w-100" alt="Second slide" style={{ height: '100vh', objectFit: 'cover' }} />
                                {/* Brand Color Overlay */}
                                <div className="position-absolute w-100 h-100 top-0 start-0" style={{ 
                                    background: 'linear-gradient(135deg, rgba(0, 86, 179, 0.1) 0%, rgba(0, 64, 133, 0.15) 100%)',
                                    zIndex: 1
                                }}></div>
                            </div>
                            <div className="carousel-caption">
                                <div className="container carousel-content position-relative" style={{ zIndex: 2 }}>
                                    <div className="mb-3">
                                        <span className="badge bg-white text-primary px-4 py-2 rounded-pill fs-6 fw-bold">
                                            <i className="fas fa-users me-2"></i>PROFESSIONAL GUARDS & TECHNOLOGY
                                        </span>
                                    </div>
                                    <h1 className="text-white display-1 mb-4 animated fadeInLeft fw-bold" style={{ 
                                        textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                                        lineHeight: '1.1'
                                    }}>
                                        Protecting People, Property and <span className="text-warning">Assets 24/7</span>
                                    </h1>
                                    <p className="mb-4 text-white fs-5 animated fadeInDown" style={{ 
                                        textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                                        maxWidth: '800px',
                                        margin: '0 auto 2rem'
                                    }}>
                                        From on-site guarding and rapid response to remote video surveillance and alarm systems, we deliver reliable protection around the clock.
                                    </p>
                                    <div className="d-flex flex-wrap justify-content-center gap-3">
                                        <a href="/about" className="me-2">
                                            <button type="button" className="px-5 py-3 btn btn-warning rounded-pill carousel-content-btn1 animated fadeInLeft fw-bold" style={{
                                                fontSize: '1.1rem',
                                                boxShadow: '0 8px 25px rgba(255, 193, 7, 0.4)',
                                                transition: 'all 0.3s ease'
                                            }}>
                                                <i className="fas fa-info-circle me-2"></i>Learn More
                                            </button>
                                        </a>
                                        <a href="/contact" className="ms-2">
                                            <button type="button" className="px-5 py-3 btn btn-outline-light rounded-pill carousel-content-btn2 animated fadeInRight fw-bold" style={{
                                                fontSize: '1.1rem',
                                                borderWidth: '2px',
                                                transition: 'all 0.3s ease'
                                            }}>
                                                <i className="fas fa-envelope me-2"></i>Contact Us
                                            </button>
                                        </a>
                                    </div>
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
                                    <img src="assets/img/10.jpg" 
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
                                        <img src="assets/img/1.jpeg" 
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
                                <a href="/about" className="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-semibold" style={{
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
                                    <i className="fas fa-arrow-right me-2"></i>Learn More About Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}

            {/* <!-- Why Choose Us Start --> */}
            <div className="py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-8 mx-auto text-center">
                            <div className="mb-4">
                                <span className="badge bg-primary text-white px-4 py-2 rounded-pill fs-6 fw-semibold">
                                    <i className="fas fa-star me-2"></i>WHY CHOOSE US
                                </span>
                            </div>
                            <h2 className="display-5 fw-bold text-dark mb-4" style={{ lineHeight: '1.2' }}>
                                Trusted, Licensed, and<br />
                                <span className="text-primary">Always-On Protection</span>
                            </h2>
                            <p className="lead text-muted mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                                Since 2017, Dicel Security Company delivers certified security with rapid response, 
                                advanced technology, and tailored protection plans for every client.
                            </p>
                        </div>
                    </div>
                    
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="h-100 p-4 bg-white rounded-4 shadow-lg" style={{
                                border: '1px solid rgba(13, 110, 253, 0.1)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(13, 110, 253, 0.15)';
                                e.currentTarget.style.borderColor = 'rgba(13, 110, 253, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                e.currentTarget.style.borderColor = 'rgba(13, 110, 253, 0.1)';
                            }}>
                                <div className="d-flex align-items-start">
                                    <div className="me-4 flex-shrink-0">
                                        <div className="d-inline-flex align-items-center justify-content-center rounded-3" 
                                             style={{ 
                                                 width: '60px', 
                                                 height: '60px', 
                                                 background: 'linear-gradient(135deg, #0d6efd 0%, #0056b3 100%)',
                                                 boxShadow: '0 8px 25px rgba(13, 110, 253, 0.3)'
                                             }}>
                                            <i className="fas fa-certificate text-white fa-lg"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold text-dark mb-3">Licensed & Certified</h5>
                                        <p className="text-muted mb-0" style={{ lineHeight: '1.6' }}>
                                            Registered by RDB and licensed by the Ministry of Internal Security to operate legally and professionally.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="h-100 p-4 bg-white rounded-4 shadow-lg" style={{
                                border: '1px solid rgba(13, 110, 253, 0.1)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(13, 110, 253, 0.15)';
                                e.currentTarget.style.borderColor = 'rgba(13, 110, 253, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                e.currentTarget.style.borderColor = 'rgba(13, 110, 253, 0.1)';
                            }}>
                                <div className="d-flex align-items-start">
                                    <div className="me-4 flex-shrink-0">
                                        <div className="d-inline-flex align-items-center justify-content-center rounded-3" 
                                             style={{ 
                                                 width: '60px', 
                                                 height: '60px', 
                                                 background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                                                 boxShadow: '0 8px 25px rgba(40, 167, 69, 0.3)'
                                             }}>
                                            <i className="fas fa-clock text-white fa-lg"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold text-dark mb-3">24/7 Monitoring & Response</h5>
                                        <p className="text-muted mb-0" style={{ lineHeight: '1.6' }}>
                                            Always on call with rapid incident response and continuous protection for people and assets.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="h-100 p-4 bg-white rounded-4 shadow-lg" style={{
                                border: '1px solid rgba(13, 110, 253, 0.1)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(13, 110, 253, 0.15)';
                                e.currentTarget.style.borderColor = 'rgba(13, 110, 253, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                e.currentTarget.style.borderColor = 'rgba(13, 110, 253, 0.1)';
                            }}>
                                <div className="d-flex align-items-start">
                                    <div className="me-4 flex-shrink-0">
                                        <div className="d-inline-flex align-items-center justify-content-center rounded-3" 
                                             style={{ 
                                                 width: '60px', 
                                                 height: '60px', 
                                                 background: 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)',
                                                 boxShadow: '0 8px 25px rgba(255, 193, 7, 0.3)'
                                             }}>
                                            <i className="fas fa-user-shield text-white fa-lg"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold text-dark mb-3">Experienced Professionals</h5>
                                        <p className="text-muted mb-0" style={{ lineHeight: '1.6' }}>
                                            Trained guards and specialists delivering reliable on-site and mobile security operations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="h-100 p-4 bg-white rounded-4 shadow-lg" style={{
                                border: '1px solid rgba(13, 110, 253, 0.1)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(13, 110, 253, 0.15)';
                                e.currentTarget.style.borderColor = 'rgba(13, 110, 253, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                e.currentTarget.style.borderColor = 'rgba(13, 110, 253, 0.1)';
                            }}>
                                <div className="d-flex align-items-start">
                                    <div className="me-4 flex-shrink-0">
                                        <div className="d-inline-flex align-items-center justify-content-center rounded-3" 
                                             style={{ 
                                                 width: '60px', 
                                                 height: '60px', 
                                                 background: 'linear-gradient(135deg, #6f42c1 0%, #5a32a3 100%)',
                                                 boxShadow: '0 8px 25px rgba(111, 66, 193, 0.3)'
                                             }}>
                                            <i className="fas fa-microchip text-white fa-lg"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold text-dark mb-3">Advanced Technology</h5>
                                        <p className="text-muted mb-0" style={{ lineHeight: '1.6' }}>
                                            Integration of CCTV, access control, alarms, and analytics for smarter protection.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="h-100 p-4 bg-white rounded-4 shadow-lg" style={{
                                border: '1px solid rgba(13, 110, 253, 0.1)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(13, 110, 253, 0.15)';
                                e.currentTarget.style.borderColor = 'rgba(13, 110, 253, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                e.currentTarget.style.borderColor = 'rgba(13, 110, 253, 0.1)';
                            }}>
                                <div className="d-flex align-items-start">
                                    <div className="me-4 flex-shrink-0">
                                        <div className="d-inline-flex align-items-center justify-content-center rounded-3" 
                                             style={{ 
                                                 width: '60px', 
                                                 height: '60px', 
                                                 background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
                                                 boxShadow: '0 8px 25px rgba(220, 53, 69, 0.3)'
                                             }}>
                                            <i className="fas fa-sliders-h text-white fa-lg"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold text-dark mb-3">Customized Security Plans</h5>
                                        <p className="text-muted mb-0" style={{ lineHeight: '1.6' }}>
                                            Tailored solutions that match your site, risks, and budget for maximum value.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="h-100 p-4 bg-white rounded-4 shadow-lg" style={{
                                border: '1px solid rgba(13, 110, 253, 0.1)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(13, 110, 253, 0.15)';
                                e.currentTarget.style.borderColor = 'rgba(13, 110, 253, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                e.currentTarget.style.borderColor = 'rgba(13, 110, 253, 0.1)';
                            }}>
                                <div className="d-flex align-items-start">
                                    <div className="me-4 flex-shrink-0">
                                        <div className="d-inline-flex align-items-center justify-content-center rounded-3" 
                                             style={{ 
                                                 width: '60px', 
                                                 height: '60px', 
                                                 background: 'linear-gradient(135deg, #17a2b8 0%, #138496 100%)',
                                                 boxShadow: '0 8px 25px rgba(23, 162, 184, 0.3)'
                                             }}>
                                            <i className="fas fa-handshake text-white fa-lg"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold text-dark mb-3">Client-First Approach</h5>
                                        <p className="text-muted mb-0" style={{ lineHeight: '1.6' }}>
                                            Transparent communication, measurable results, and long-term partnerships built on trust.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Why Choose Us End --> */}

            {/* <!-- Services Start --> */}
            <div className="container-fluid services py-5 mb-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)' }}>
                <style jsx>{`
                    .services-item .services-content::after {
                        display: none !important;
                    }
                    .services-item:hover .services-content::after {
                        display: none !important;
                    }
                `}</style>
                <div className="container">
                    <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: "800px" }}>
                        <div className="d-inline-block px-4 py-2 mb-3 rounded-pill" style={{ background: 'rgba(13, 110, 253, 0.1)', border: '1px solid rgba(13, 110, 253, 0.2)' }}>
                            <h6 className="text-primary mb-0 fw-semibold">OUR SERVICES</h6>
                        </div>
                        <h1 className="display-4 fw-bold text-dark mb-4" style={{ lineHeight: '1.2' }}>Professional Security Services<br />Tailored To Your Needs</h1>
                        <p className="lead text-muted mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>Choose from our comprehensive range of security solutions designed to protect what matters most to your business.</p>
                    </div>
                    <div className="row g-4 services-inner" style={{ marginTop: '2rem' }}>
                        <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".15s">
                            <div className="services-item h-100 position-relative overflow-hidden" style={{ 
                                background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)', 
                                border: '1px solid rgba(0,0,0,0.08)',
                                borderRadius: '24px',
                                padding: '2.5rem 2rem',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.06)';
                            }}>
                                <div className="services-content text-center">
                                    <div className="mb-4 position-relative">
                                        <div className="overflow-hidden rounded-4 mb-3" style={{ height: '220px' }}>
                                            <img src="assets/img/1.jpeg" alt="Guarding Service" 
                                                 className="img-fluid w-100 h-100" 
                                                 style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }} 
                                                 loading="lazy" decoding="async" 
                                                 onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                                 onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} />
                                        </div>
                                    </div>
                                    <h3 className="fw-bold text-dark mb-3" style={{ fontSize: '1.5rem', letterSpacing: '-0.02em' }}>Guarding Service</h3>
                                    <div className="d-flex align-items-center justify-content-center mb-4">
                                        <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg, #0d6efd 0%, rgba(13, 110, 253, 0.3) 100%)' }}></div>
                                        <h6 className="text-muted mx-3 mb-0 fw-medium" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>What you will get</h6>
                                        <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg, rgba(13, 110, 253, 0.3) 0%, #0d6efd 100%)' }}></div>
                                    </div>
                                    <div className="text-start mb-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="me-3 flex-shrink-0" style={{ 
                                                width: '28px', 
                                                height: '28px', 
                                                background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)', 
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)'
                                            }}>
                                                <i className="fas fa-check text-white" style={{ fontSize: '13px' }}></i>
                                            </div>
                                            <span className="text-dark fw-medium" style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>Professional Security Guards</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="me-3 flex-shrink-0" style={{ 
                                                width: '28px', 
                                                height: '28px', 
                                                background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)', 
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)'
                                            }}>
                                                <i className="fas fa-check text-white" style={{ fontSize: '13px' }}></i>
                                            </div>
                                            <span className="text-dark fw-medium" style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>24/7 Site Protection</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="me-3 flex-shrink-0" style={{ 
                                                width: '28px', 
                                                height: '28px', 
                                                background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)', 
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)'
                                            }}>
                                                <i className="fas fa-check text-white" style={{ fontSize: '13px' }}></i>
                                            </div>
                                            <span className="text-dark fw-medium" style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>Rapid Response Team</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="me-3 flex-shrink-0" style={{ 
                                                width: '28px', 
                                                height: '28px', 
                                                background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)', 
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)'
                                            }}>
                                                <i className="fas fa-check text-white" style={{ fontSize: '13px' }}></i>
                                            </div>
                                            <span className="text-dark fw-medium" style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>Incident Reporting</span>
                                        </div>
                                    </div>
                                    <a href="/guarding-services" className="btn btn-primary px-4 py-3 rounded-pill w-100 fw-semibold" style={{ 
                                        background: 'linear-gradient(135deg, #0d6efd 0%, #0056b3 100%)',
                                        border: 'none',
                                        fontSize: '0.95rem',
                                        letterSpacing: '0.3px',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 16px rgba(13, 110, 253, 0.3)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 8px 24px rgba(13, 110, 253, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = '0 4px 16px rgba(13, 110, 253, 0.3)';
                                    }}>
                                        Read More <i className="fas fa-arrow-right ms-2" style={{ fontSize: '12px' }}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".3s">
                            <div className="services-item h-100 position-relative overflow-hidden" style={{ 
                                background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)', 
                                border: '1px solid rgba(0,0,0,0.08)',
                                borderRadius: '24px',
                                padding: '2.5rem 2rem',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
                                e.currentTarget.style.borderColor = 'rgba(13, 110, 253, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.06)';
                                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)';
                            }}>
                                <div className="services-content text-center">
                                    <div className="mb-4 position-relative">
                                        <div className="overflow-hidden rounded-4 mb-3" style={{ height: '220px' }}>
                                            <img src="assets/img/alarms-system.png" alt="Security Equipment" 
                                                 className="img-fluid w-100 h-100" 
                                                 style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }} 
                                                 loading="lazy" decoding="async" 
                                                 onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                                 onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} />
                                        </div>
                                    </div>
                                    <h3 className="fw-bold text-dark mb-3" style={{ fontSize: '1.5rem', letterSpacing: '-0.02em' }}>Security Equipment</h3>
                                    <div className="d-flex align-items-center justify-content-center mb-4">
                                        <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg, #0d6efd 0%, rgba(13, 110, 253, 0.3) 100%)' }}></div>
                                        <h6 className="text-muted mx-3 mb-0 fw-medium" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>What you will get</h6>
                                        <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg, rgba(13, 110, 253, 0.3) 0%, #0d6efd 100%)' }}></div>
                                    </div>
                                    <div className="text-start mb-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="me-3 flex-shrink-0" style={{ 
                                                width: '28px', 
                                                height: '28px', 
                                                background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)', 
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)'
                                            }}>
                                                <i className="fas fa-check text-white" style={{ fontSize: '13px' }}></i>
                                            </div>
                                            <span className="text-dark fw-medium" style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>CCTV & IP Cameras</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="me-3 flex-shrink-0" style={{ 
                                                width: '28px', 
                                                height: '28px', 
                                                background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)', 
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)'
                                            }}>
                                                <i className="fas fa-check text-white" style={{ fontSize: '13px' }}></i>
                                            </div>
                                            <span className="text-dark fw-medium" style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>Alarm Systems</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="me-3 flex-shrink-0" style={{ 
                                                width: '28px', 
                                                height: '28px', 
                                                background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)', 
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)'
                                            }}>
                                                <i className="fas fa-check text-white" style={{ fontSize: '13px' }}></i>
                                            </div>
                                            <span className="text-dark fw-medium" style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>Access Control Systems</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="me-3 flex-shrink-0" style={{ 
                                                width: '28px', 
                                                height: '28px', 
                                                background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)', 
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)'
                                            }}>
                                                <i className="fas fa-check text-white" style={{ fontSize: '13px' }}></i>
                                            </div>
                                            <span className="text-dark fw-medium" style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>Metal Detectors</span>
                                        </div>
                                    </div>
                                    <a href="/security-equipment" className="btn btn-primary px-4 py-3 rounded-pill w-100 fw-semibold" style={{ 
                                        background: 'linear-gradient(135deg, #0d6efd 0%, #0056b3 100%)',
                                        border: 'none',
                                        fontSize: '0.95rem',
                                        letterSpacing: '0.3px',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 16px rgba(13, 110, 253, 0.3)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 8px 24px rgba(13, 110, 253, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = '0 4px 16px rgba(13, 110, 253, 0.3)';
                                    }}>
                                        Read More <i className="fas fa-arrow-right ms-2" style={{ fontSize: '12px' }}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".45s">
                            <div className="services-item h-100 position-relative overflow-hidden" style={{ 
                                background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)', 
                                border: '1px solid rgba(0,0,0,0.08)',
                                borderRadius: '24px',
                                padding: '2.5rem 2rem',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.06)';
                            }}>
                                <div className="services-content text-center">
                                    <div className="mb-4 position-relative">
                                        <div className="overflow-hidden rounded-4 mb-3" style={{ height: '220px' }}>
                                            <img src="assets/img/consulting-Service.jpg" alt="Security Consultancy" 
                                                 className="img-fluid w-100 h-100" 
                                                 style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }} 
                                                 loading="lazy" decoding="async" 
                                                 onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                                 onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} />
                                        </div>
                                    </div>
                                    <h3 className="fw-bold text-dark mb-3" style={{ fontSize: '1.5rem', letterSpacing: '-0.02em' }}>Security Consultancy</h3>
                                    <div className="d-flex align-items-center justify-content-center mb-4">
                                        <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg, #0d6efd 0%, rgba(13, 110, 253, 0.3) 100%)' }}></div>
                                        <h6 className="text-muted mx-3 mb-0 fw-medium" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>What you will get</h6>
                                        <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg, rgba(13, 110, 253, 0.3) 0%, #0d6efd 100%)' }}></div>
                                    </div>
                                    <div className="text-start mb-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="me-3 flex-shrink-0" style={{ 
                                                width: '28px', 
                                                height: '28px', 
                                                background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)', 
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)'
                                            }}>
                                                <i className="fas fa-check text-white" style={{ fontSize: '13px' }}></i>
                                            </div>
                                            <span className="text-dark fw-medium" style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>Risk Assessment</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="me-3 flex-shrink-0" style={{ 
                                                width: '28px', 
                                                height: '28px', 
                                                background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)', 
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)'
                                            }}>
                                                <i className="fas fa-check text-white" style={{ fontSize: '13px' }}></i>
                                            </div>
                                            <span className="text-dark fw-medium" style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>Security Planning</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="me-3 flex-shrink-0" style={{ 
                                                width: '28px', 
                                                height: '28px', 
                                                background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)', 
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)'
                                            }}>
                                                <i className="fas fa-check text-white" style={{ fontSize: '13px' }}></i>
                                            </div>
                                            <span className="text-dark fw-medium" style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>Training Programs</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="me-3 flex-shrink-0" style={{ 
                                                width: '28px', 
                                                height: '28px', 
                                                background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)', 
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)'
                                            }}>
                                                <i className="fas fa-check text-white" style={{ fontSize: '13px' }}></i>
                                            </div>
                                            <span className="text-dark fw-medium" style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>Compliance Support</span>
                                        </div>
                                    </div>
                                    <a href="/security-consultancy" className="btn btn-primary px-4 py-3 rounded-pill w-100 fw-semibold" style={{ 
                                        background: 'linear-gradient(135deg, #0d6efd 0%, #0056b3 100%)',
                                        border: 'none',
                                        fontSize: '0.95rem',
                                        letterSpacing: '0.3px',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 16px rgba(13, 110, 253, 0.3)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 8px 24px rgba(13, 110, 253, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = '0 4px 16px rgba(13, 110, 253, 0.3)';
                                    }}>
                                        Read More <i className="fas fa-arrow-right ms-2" style={{ fontSize: '12px' }}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".6s">
                            <div className="services-item h-100 position-relative overflow-hidden" style={{ 
                                background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)', 
                                border: '1px solid rgba(0,0,0,0.08)',
                                borderRadius: '24px',
                                padding: '2.5rem 2rem',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.06)';
                            }}>
                                <div className="services-content text-center">
                                    <div className="mb-4 position-relative">
                                        <div className="overflow-hidden rounded-4 mb-3" style={{ height: '220px' }}>
                                            <img src="assets/img/21.png" alt="Stewards" 
                                                 className="img-fluid w-100 h-100" 
                                                 style={{ objectFit: 'cover', objectPosition: 'center top', transition: 'transform 0.4s ease' }} 
                                                 loading="lazy" decoding="async" 
                                                 onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                                 onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} />
                                        </div>
                                    </div>
                                    <h3 className="fw-bold text-dark mb-3" style={{ fontSize: '1.5rem', letterSpacing: '-0.02em' }}>Stewards</h3>
                                    <div className="d-flex align-items-center justify-content-center mb-4">
                                        <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg, #0d6efd 0%, rgba(13, 110, 253, 0.3) 100%)' }}></div>
                                        <h6 className="text-muted mx-3 mb-0 fw-medium" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>What you will get</h6>
                                        <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg, rgba(13, 110, 253, 0.3) 0%, #0d6efd 100%)' }}></div>
                                    </div>
                                    <div className="text-start mb-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="me-3 flex-shrink-0" style={{ 
                                                width: '28px', 
                                                height: '28px', 
                                                background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)', 
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)'
                                            }}>
                                                <i className="fas fa-check text-white" style={{ fontSize: '13px' }}></i>
                                            </div>
                                            <span className="text-dark fw-medium" style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>Event Management</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="me-3 flex-shrink-0" style={{ 
                                                width: '28px', 
                                                height: '28px', 
                                                background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)', 
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)'
                                            }}>
                                                <i className="fas fa-check text-white" style={{ fontSize: '13px' }}></i>
                                            </div>
                                            <span className="text-dark fw-medium" style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>Crowd Control</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="me-3 flex-shrink-0" style={{ 
                                                width: '28px', 
                                                height: '28px', 
                                                background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)', 
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)'
                                            }}>
                                                <i className="fas fa-check text-white" style={{ fontSize: '13px' }}></i>
                                            </div>
                                            <span className="text-dark fw-medium" style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>VIP Assistance</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="me-3 flex-shrink-0" style={{ 
                                                width: '28px', 
                                                height: '28px', 
                                                background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)', 
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)'
                                            }}>
                                                <i className="fas fa-check text-white" style={{ fontSize: '13px' }}></i>
                                            </div>
                                            <span className="text-dark fw-medium" style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>Protocol Management</span>
                                        </div>
                                    </div>
                                    <a href="/stewards" className="btn btn-primary px-4 py-3 rounded-pill w-100 fw-semibold" style={{ 
                                        background: 'linear-gradient(135deg, #0d6efd 0%, #0056b3 100%)',
                                        border: 'none',
                                        fontSize: '0.95rem',
                                        letterSpacing: '0.3px',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 16px rgba(13, 110, 253, 0.3)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 8px 24px rgba(13, 110, 253, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = '0 4px 16px rgba(13, 110, 253, 0.3)';
                                    }}>
                                        Read More <i className="fas fa-arrow-right ms-2" style={{ fontSize: '12px' }}></i>
                                    </a>
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
            <div className="py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-8 mx-auto text-center">
                            <div className="mb-4">
                                <span className="badge bg-primary text-white px-4 py-2 rounded-pill fs-6 fw-semibold">
                                    <i className="fas fa-users me-2"></i>OUR TEAM
                                </span>
                            </div>
                            <h2 className="display-5 fw-bold text-dark mb-4" style={{ lineHeight: '1.2' }}>
                                Meet Our <span className="text-primary">Expert Team</span>
                            </h2>
                            <p className="lead text-muted mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                                Our experienced leadership team brings decades of security expertise to protect your business with professional excellence.
                            </p>
                        </div>
                    </div>
                    
                    {/* Team Grid */}
                    <div className="row g-4 justify-content-center">
                                    {/* Team Member 1 */}
                                    <div className="col-lg-4 col-md-6">
                            <div className="team-card bg-white h-100" style={{
                                            border: '1px solid #e9ecef',
                                            borderRadius: '12px',
                                            transition: 'all 0.3s ease',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                padding: '2rem'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.boxShadow = '0 12px 35px rgba(13, 110, 253, 0.15)';
                                            e.currentTarget.style.borderColor = 'rgba(13, 110, 253, 0.2)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                                            e.currentTarget.style.borderColor = '#e9ecef';
                                        }}>
                                <div className="text-center">
                                    {/* Icon Placeholder */}
                                    <div className="mb-4 d-flex justify-content-center">
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            background: 'linear-gradient(135deg, #0d6efd, #6f42c1)',
                                            borderRadius: '50%',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                            boxShadow: '0 8px 25px rgba(13, 110, 253, 0.3)'
                                        }}>
                                            <i className="fas fa-user text-white" style={{ fontSize: '2rem' }}></i>
                                                </div>
                                            </div>
                                            
                                    <h4 className="fw-bold text-dark mb-2" style={{ fontSize: '1.4rem', letterSpacing: '-0.02em' }}>Manzi Cedric</h4>
                                    <p className="text-primary fw-semibold mb-0" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Managing Director</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Team Member 2 */}
                                    <div className="col-lg-4 col-md-6">
                            <div className="team-card bg-white h-100" style={{
                                            border: '1px solid #e9ecef',
                                            borderRadius: '12px',
                                            transition: 'all 0.3s ease',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                padding: '2rem'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.boxShadow = '0 12px 35px rgba(13, 110, 253, 0.15)';
                                            e.currentTarget.style.borderColor = 'rgba(13, 110, 253, 0.2)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                                            e.currentTarget.style.borderColor = '#e9ecef';
                                        }}>
                                <div className="text-center">
                                    {/* Icon Placeholder */}
                                    <div className="mb-4 d-flex justify-content-center">
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            background: 'linear-gradient(135deg, #0d6efd, #6f42c1)',
                                            borderRadius: '50%',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                            boxShadow: '0 8px 25px rgba(13, 110, 253, 0.3)'
                                        }}>
                                            <i className="fas fa-user text-white" style={{ fontSize: '2rem' }}></i>
                                                </div>
                                            </div>
                                            
                                    <h4 className="fw-bold text-dark mb-2" style={{ fontSize: '1.4rem', letterSpacing: '-0.02em' }}>Sam Mwesigye</h4>
                                    <p className="text-primary fw-semibold mb-0" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Operations Manager</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Team Member 3 */}
                                    <div className="col-lg-4 col-md-6">
                            <div className="team-card bg-white h-100" style={{
                                            border: '1px solid #e9ecef',
                                            borderRadius: '12px',
                                            transition: 'all 0.3s ease',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                padding: '2rem'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.boxShadow = '0 12px 35px rgba(13, 110, 253, 0.15)';
                                            e.currentTarget.style.borderColor = 'rgba(13, 110, 253, 0.2)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                                            e.currentTarget.style.borderColor = '#e9ecef';
                                        }}>
                                <div className="text-center">
                                    {/* Icon Placeholder */}
                                    <div className="mb-4 d-flex justify-content-center">
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            background: 'linear-gradient(135deg, #0d6efd, #6f42c1)',
                                            borderRadius: '50%',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                            boxShadow: '0 8px 25px rgba(13, 110, 253, 0.3)'
                                        }}>
                                            <i className="fas fa-user text-white" style={{ fontSize: '2rem' }}></i>
                                                </div>
                                            </div>
                                            
                                    <h4 className="fw-bold text-dark mb-2" style={{ fontSize: '1.4rem', letterSpacing: '-0.02em' }}>Rwabuhungu Parfait</h4>
                                    <p className="text-primary fw-semibold mb-0" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Sales & Marketing Manager</p>
                                            </div>
                                        </div>
                                    </div>

                        {/* Team Member 4 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="team-card bg-white h-100" style={{
                                border: '1px solid #e9ecef',
                                borderRadius: '12px',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                padding: '2rem'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 12px 35px rgba(13, 110, 253, 0.15)';
                                e.currentTarget.style.borderColor = 'rgba(13, 110, 253, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                                e.currentTarget.style.borderColor = '#e9ecef';
                            }}>
                                <div className="text-center">
                                    {/* Icon Placeholder */}
                                    <div className="mb-4 d-flex justify-content-center">
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            background: 'linear-gradient(135deg, #0d6efd, #6f42c1)',
                                            borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            boxShadow: '0 8px 25px rgba(13, 110, 253, 0.3)'
                                        }}>
                                            <i className="fas fa-user text-white" style={{ fontSize: '2rem' }}></i>
                                    </div>
                                </div>
                                
                                    <h4 className="fw-bold text-dark mb-2" style={{ fontSize: '1.4rem', letterSpacing: '-0.02em' }}>Kwizera Alexis</h4>
                                    <p className="text-primary fw-semibold mb-0" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Legal & Company Secretary</p>
                                </div>
                            </div>
                        </div>

                        {/* Team Member 5 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="team-card bg-white h-100" style={{
                                border: '1px solid #e9ecef',
                                borderRadius: '12px',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                padding: '2rem'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 12px 35px rgba(13, 110, 253, 0.15)';
                                e.currentTarget.style.borderColor = 'rgba(13, 110, 253, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                                e.currentTarget.style.borderColor = '#e9ecef';
                            }}>
                                <div className="text-center">
                                    {/* Icon Placeholder */}
                                    <div className="mb-4 d-flex justify-content-center">
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            background: 'linear-gradient(135deg, #0d6efd, #6f42c1)',
                                            borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            boxShadow: '0 8px 25px rgba(13, 110, 253, 0.3)'
                                        }}>
                                            <i className="fas fa-user text-white" style={{ fontSize: '2rem' }}></i>
                                    </div>
                                </div>
                                
                                    <h4 className="fw-bold text-dark mb-2" style={{ fontSize: '1.4rem', letterSpacing: '-0.02em' }}>Nyirahabimana Germaine</h4>
                                    <p className="text-primary fw-semibold mb-0" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Ag Finance Manager</p>
                                </div>
                            </div>
                        </div>

                        {/* Team Member 6 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="team-card bg-white h-100" style={{
                                border: '1px solid #e9ecef',
                                borderRadius: '12px',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                padding: '2rem'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 12px 35px rgba(13, 110, 253, 0.15)';
                                e.currentTarget.style.borderColor = 'rgba(13, 110, 253, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                                e.currentTarget.style.borderColor = '#e9ecef';
                            }}>
                                <div className="text-center">
                                    {/* Icon Placeholder */}
                                    <div className="mb-4 d-flex justify-content-center">
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            background: 'linear-gradient(135deg, #0d6efd, #6f42c1)',
                                            borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            boxShadow: '0 8px 25px rgba(13, 110, 253, 0.3)'
                                        }}>
                                            <i className="fas fa-user text-white" style={{ fontSize: '2rem' }}></i>
                                    </div>
                                </div>
                                
                                    <h4 className="fw-bold text-dark mb-2" style={{ fontSize: '1.4rem', letterSpacing: '-0.02em' }}>Sifa Aline</h4>
                                    <p className="text-primary fw-semibold mb-0" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Ag Human Resource and Administration Manager</p>
                                </div>
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
                                        <a className="h5" href="tel:+250788313547">0788313547</a>
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
                                <a href="tel:+250788313547" className="py-3 text-light border-bottom border-primary"><i className="fas fa-phone-alt text-primary me-2"></i> 0788313547</a>
                                <a href="tel:3024" className="py-3 text-light border-bottom border-primary"><i className="fas fa-phone-alt text-primary me-2"></i> Toll Free: 3024</a>
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