import React from 'react'

function Stewards() {
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
                    <img src="assets/img/3.jpeg" className="img-fluid w-100 h-100" alt="Event Stewardship" style={{ objectFit: 'cover' }} />
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
                                PROFESSIONAL EVENT MANAGEMENT
                            </span>
                        </div>
                        <h1 className="text-white display-1 mb-4 animated fadeInRight fw-bold" style={{ 
                            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                            lineHeight: '1.1'
                        }}>
                            Event Stewardship<br />
                            <span className="text-warning">Services</span>
                        </h1>
                        <p className="mb-4 text-white fs-5 animated fadeInDown" style={{ 
                            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                            maxWidth: '800px',
                            margin: '0 auto 2rem'
                        }}>
                            Professional stewards ensuring smooth, safe, and successful events through expert crowd management and guest assistance.
                        </p>
                        <div className="d-flex flex-wrap justify-content-center gap-3">
                            <a href="#services" className="me-2">
                                <button type="button" className="px-5 py-3 btn btn-warning rounded-pill carousel-content-btn1 animated fadeInLeft fw-bold" style={{
                                    fontSize: '1.1rem',
                                    boxShadow: '0 8px 25px rgba(255, 193, 7, 0.4)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <i className="fas fa-users me-2"></i>Our Services
                                </button>
                            </a>
                            <a href="/contact" className="ms-2">
                                <button type="button" className="px-5 py-3 btn btn-outline-light rounded-pill carousel-content-btn2 animated fadeInRight fw-bold" style={{
                                    fontSize: '1.1rem',
                                    borderWidth: '2px',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <i className="fas fa-calendar-alt me-2"></i>Book Stewards
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Floating Elements */}
                <div className="position-absolute" style={{ top: '20%', right: '10%', opacity: '0.1' }}>
                    <i className="fas fa-users text-white" style={{ fontSize: '8rem' }}></i>
                </div>
                <div className="position-absolute" style={{ bottom: '20%', left: '5%', opacity: '0.1' }}>
                    <i className="fas fa-calendar-check text-white" style={{ fontSize: '6rem' }}></i>
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
                                    <i className="fas fa-calendar-alt text-white fa-lg"></i>
                                </div>
                                <h3 className="fw-bold text-white mb-1 counter-value" style={{ fontSize: '2.2rem' }}>200+</h3>
                                <p className="text-white mb-0 fw-medium" style={{ fontSize: '0.9rem', lineHeight: '1.3' }}>Events Managed<br />Successful Event Coordination</p>
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
                                    <i className="fas fa-users text-white fa-lg"></i>
                                </div>
                                <h3 className="fw-bold text-white mb-1 counter-value" style={{ fontSize: '2.2rem' }}>50+</h3>
                                <p className="text-white mb-0 fw-medium" style={{ fontSize: '0.9rem', lineHeight: '1.3' }}>Trained Stewards<br />Professional Event Staff</p>
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
                                    <i className="fas fa-user-tie text-white fa-lg"></i>
                                </div>
                                <h3 className="fw-bold text-white mb-1 counter-value" style={{ fontSize: '2.2rem' }}>100%</h3>
                                <p className="text-white mb-0 fw-medium" style={{ fontSize: '0.9rem', lineHeight: '1.3' }}>Professional Service<br />Excellence Guaranteed</p>
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
                                <h3 className="fw-bold text-white mb-1 counter-value" style={{ fontSize: '2.2rem' }}>5+</h3>
                                <p className="text-white mb-0 fw-medium" style={{ fontSize: '0.9rem', lineHeight: '1.3' }}>Years Experience<br />Trusted Event Management</p>
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
                                    <img src="assets/img/2.jpeg" 
                                         className="img-fluid rounded-4 shadow-lg" 
                                         alt="Event Stewardship" 
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
                                             alt="Event Management"
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
                                        <i className="fas fa-users me-2"></i>EVENT STEWARDSHIP
                                    </span>
                                </div>
                                
                                {/* Main Heading */}
                                <h2 className="display-5 fw-bold text-dark mb-4" style={{ lineHeight: '1.2' }}>
                                    Professional <span className="text-primary">Event</span><br />
                                    Stewardship
                                </h2>
                                
                                {/* Description */}
                                <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                                    Expert event management and crowd control services ensuring safe, organized, and successful events. 
                                    Our professional stewards provide comprehensive support for conferences, exhibitions, concerts, 
                                    and special occasions with meticulous attention to detail.
                                </p>
                                
                                {/* Mission */}
                                <div className="mb-4 p-4 rounded-3" style={{ background: 'rgba(13, 110, 253, 0.05)' }}>
                                    <h5 className="text-primary fw-bold mb-3">
                                        <i className="fas fa-user-friends me-2"></i>Crowd Management
                                    </h5>
                                    <p className="text-dark mb-0">
                                        Professional crowd control and guest assistance services to ensure smooth event flow, 
                                        safety compliance, and exceptional attendee experience.
                                    </p>
                                </div>
                                
                                {/* Vision */}
                                <div className="mb-4 p-4 rounded-3" style={{ background: 'rgba(255, 193, 7, 0.1)' }}>
                                    <h5 className="text-warning fw-bold mb-3">
                                        <i className="fas fa-star me-2"></i>VIP Services
                                    </h5>
                                    <p className="text-dark mb-0">
                                        Dedicated VIP management and premium guest services with personalized attention, 
                                        security protocols, and seamless event coordination for distinguished attendees.
                                    </p>
                                </div>
                                
                                {/* CTA Button */}
                                <a href="/contact" className="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-semibold" style={{
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
                                    <i className="fas fa-calendar me-2"></i>Book Event
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}

            {/* <!-- Event Process Start --> */}
            <div className="py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-8 mx-auto text-center">
                            <div className="mb-4">
                                <span className="badge bg-primary text-white px-4 py-2 rounded-pill fs-6 fw-semibold">
                                    <i className="fas fa-calendar-alt me-2"></i>EVENT PROCESS
                                </span>
                            </div>
                            <h2 className="display-5 fw-bold text-dark mb-4" style={{ lineHeight: '1.2' }}>
                                Our <span className="text-primary">Event Management</span>
                            </h2>
                            <p className="lead text-muted mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                                Professional event stewardship with comprehensive planning, seamless execution, 
                                and exceptional guest experience for all types of events.
                            </p>
                        </div>
                    </div>
                    
                    <div className="row g-4">
                        {/* Event Management */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card border-0 shadow-lg h-100" style={{ transition: 'all 0.3s ease' }}
                                 onMouseEnter={(e) => {
                                     e.currentTarget.style.transform = 'translateY(-10px)';
                                     e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                                 }}
                                 onMouseLeave={(e) => {
                                     e.currentTarget.style.transform = 'translateY(0)';
                                     e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                 }}>
                                <div className="position-relative overflow-hidden">
                                    <img src="assets/img/2.jpeg" className="card-img-top" alt="Event Management" 
                                         style={{ height: '250px', objectFit: 'cover', objectPosition: 'center top' }} />
                                    <div className="position-absolute top-0 start-0 m-3">
                                        <span className="badge bg-danger px-3 py-2 rounded-pill">EVENT MANAGEMENT</span>
                                    </div>
                                </div>
                                <div className="card-body p-4">
                                    <h4 className="card-title fw-bold mb-3">Event Management</h4>
                                    <p className="card-text text-muted mb-4">Comprehensive event coordination and management services ensuring smooth operations from start to finish.</p>
                                    <ul className="list-unstyled mb-4">
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Event Planning & Coordination</li>
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Venue Setup & Management</li>
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Timeline Management</li>
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Emergency Response Planning</li>
                                    </ul>
                                    <a href="/contact" className="btn btn-outline-danger w-100 rounded-pill">Plan Event Management</a>
                                </div>
                            </div>
                        </div>

                        {/* Crowd Control */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card border-0 shadow-lg h-100" style={{ transition: 'all 0.3s ease' }}
                                 onMouseEnter={(e) => {
                                     e.currentTarget.style.transform = 'translateY(-10px)';
                                     e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                                 }}
                                 onMouseLeave={(e) => {
                                     e.currentTarget.style.transform = 'translateY(0)';
                                     e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                 }}>
                                <div className="position-relative overflow-hidden">
                                    <img src="assets/img/5.jpeg" className="card-img-top" alt="Crowd Control" 
                                         style={{ height: '250px', objectFit: 'cover', objectPosition: 'center top' }} />
                                    <div className="position-absolute top-0 start-0 m-3">
                                        <span className="badge bg-warning px-3 py-2 rounded-pill">CROWD CONTROL</span>
                                    </div>
                                </div>
                                <div className="card-body p-4">
                                    <h4 className="card-title fw-bold mb-3">Crowd Control & Management</h4>
                                    <p className="card-text text-muted mb-4">Expert crowd management ensuring safe and orderly flow of attendees throughout your event.</p>
                                    <ul className="list-unstyled mb-4">
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Queue Management Systems</li>
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Entry & Exit Control</li>
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Crowd Flow Optimization</li>
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Safety Protocol Implementation</li>
                                    </ul>
                                    <a href="/contact" className="btn btn-outline-warning w-100 rounded-pill">Arrange Crowd Control</a>
                                </div>
                            </div>
                        </div>

                        {/* VIP Services */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card border-0 shadow-lg h-100" style={{ transition: 'all 0.3s ease' }}
                                 onMouseEnter={(e) => {
                                     e.currentTarget.style.transform = 'translateY(-10px)';
                                     e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                                 }}
                                 onMouseLeave={(e) => {
                                     e.currentTarget.style.transform = 'translateY(0)';
                                     e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                 }}>
                                <div className="position-relative overflow-hidden">
                                    <img src="assets/img/21.png" className="card-img-top" alt="VIP Services" 
                                         style={{ height: '250px', objectFit: 'cover', objectPosition: 'center top' }} />
                                    <div className="position-absolute top-0 start-0 m-3">
                                        <span className="badge bg-primary px-3 py-2 rounded-pill">VIP SERVICES</span>
                                    </div>
                                </div>
                                <div className="card-body p-4">
                                    <h4 className="card-title fw-bold mb-3">VIP & Protocol Services</h4>
                                    <p className="card-text text-muted mb-4">Specialized protocol and VIP management services for high-profile events and distinguished guests.</p>
                                    <ul className="list-unstyled mb-4">
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>VIP Escort & Assistance</li>
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Protocol Management</li>
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Special Area Access Control</li>
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Discrete Security Coordination</li>
                                    </ul>
                                    <a href="/contact" className="btn btn-outline-primary w-100 rounded-pill">Book VIP Services</a>
                                </div>
                            </div>
                        </div>

                        {/* Access Control */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card border-0 shadow-lg h-100" style={{ transition: 'all 0.3s ease' }}
                                 onMouseEnter={(e) => {
                                     e.currentTarget.style.transform = 'translateY(-10px)';
                                     e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                                 }}
                                 onMouseLeave={(e) => {
                                     e.currentTarget.style.transform = 'translateY(0)';
                                     e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                 }}>
                                <div className="position-relative overflow-hidden">
                                    <img src="assets/img/1.jpeg" className="card-img-top" alt="Access Control" 
                                         style={{ height: '250px', objectFit: 'cover', objectPosition: 'center top' }} />
                                    <div className="position-absolute top-0 start-0 m-3">
                                        <span className="badge bg-success px-3 py-2 rounded-pill">ACCESS CONTROL</span>
                                    </div>
                                </div>
                                <div className="card-body p-4">
                                    <h4 className="card-title fw-bold mb-3">Access Control & Screening</h4>
                                    <p className="card-text text-muted mb-4">Professional gate control and screening services ensuring only authorized personnel enter your event.</p>
                                    <ul className="list-unstyled mb-4">
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Ticket Validation & Scanning</li>
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>ID Verification & Registration</li>
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Bag Inspection & Security Screening</li>
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Guest List Management</li>
                                    </ul>
                                    <a href="/contact" className="btn btn-outline-success w-100 rounded-pill">Set Up Access Control</a>
                                </div>
                            </div>
                        </div>

                        {/* Emergency Response */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card border-0 shadow-lg h-100" style={{ transition: 'all 0.3s ease' }}
                                 onMouseEnter={(e) => {
                                     e.currentTarget.style.transform = 'translateY(-10px)';
                                     e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                                 }}
                                 onMouseLeave={(e) => {
                                     e.currentTarget.style.transform = 'translateY(0)';
                                     e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                 }}>
                                <div className="position-relative overflow-hidden">
                                    <img src="assets/img/4.jpeg" className="card-img-top" alt="Emergency Response" 
                                         style={{ height: '250px', objectFit: 'cover', objectPosition: 'center top' }} />
                                    <div className="position-absolute top-0 start-0 m-3">
                                        <span className="badge bg-info px-3 py-2 rounded-pill">EMERGENCY</span>
                                    </div>
                                </div>
                                <div className="card-body p-4">
                                    <h4 className="card-title fw-bold mb-3">Emergency Response</h4>
                                    <p className="card-text text-muted mb-4">Trained emergency response teams ready to handle any situation with quick and professional action.</p>
                                    <ul className="list-unstyled mb-4">
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Emergency Evacuation Procedures</li>
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>First Aid & Medical Response</li>
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Incident Management</li>
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Authority Coordination</li>
                                    </ul>
                                    <a href="/contact" className="btn btn-outline-info w-100 rounded-pill">Prepare Emergency Response</a>
                                </div>
                            </div>
                        </div>

                        {/* Customer Service */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card border-0 shadow-lg h-100" style={{ transition: 'all 0.3s ease' }}
                                 onMouseEnter={(e) => {
                                     e.currentTarget.style.transform = 'translateY(-10px)';
                                     e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                                 }}
                                 onMouseLeave={(e) => {
                                     e.currentTarget.style.transform = 'translateY(0)';
                                     e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                 }}>
                                <div className="position-relative overflow-hidden">
                                    <img src="assets/img/5.jpeg" className="card-img-top" alt="Customer Service" 
                                         style={{ height: '250px', objectFit: 'cover', objectPosition: 'center top' }} />
                                    <div className="position-absolute top-0 start-0 m-3">
                                        <span className="badge bg-secondary px-3 py-2 rounded-pill">GUEST SERVICES</span>
                                    </div>
                                </div>
                                <div className="card-body p-4">
                                    <h4 className="card-title fw-bold mb-3">Guest Assistance Services</h4>
                                    <p className="card-text text-muted mb-4">Friendly and professional guest assistance ensuring a positive experience for all event attendees.</p>
                                    <ul className="list-unstyled mb-4">
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Information & Directions</li>
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Lost & Found Management</li>
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Special Needs Assistance</li>
                                        <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Complaint Resolution</li>
                                    </ul>
                                    <a href="/contact" className="btn btn-outline-secondary w-100 rounded-pill">Enhance Guest Services</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Services Grid End --> */}

            {/* <!-- Event Process Start --> */}
            <div className="py-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="display-5 fw-bold text-white mb-3">Our Event Management Process</h2>
                            <p className="lead text-white">A systematic approach to ensure flawless event execution.</p>
                        </div>
                    </div>
                    
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="text-center text-white">
                                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" 
                                     style={{ width: '100px', height: '100px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}>
                                    <span className="fw-bold fs-1">1</span>
                                </div>
                                <h4 className="fw-bold mb-3">Pre-Event Planning</h4>
                                <p className="mb-0">Comprehensive site assessment, risk analysis, and detailed planning to ensure all aspects are covered.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="text-center text-white">
                                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" 
                                     style={{ width: '100px', height: '100px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}>
                                    <span className="fw-bold fs-1">2</span>
                                </div>
                                <h4 className="fw-bold mb-3">Team Deployment</h4>
                                <p className="mb-0">Strategic positioning of trained stewards at key locations with clear communication protocols.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="text-center text-white">
                                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" 
                                     style={{ width: '100px', height: '100px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}>
                                    <span className="fw-bold fs-1">3</span>
                                </div>
                                <h4 className="fw-bold mb-3">Live Monitoring</h4>
                                <p className="mb-0">Real-time crowd monitoring and management with immediate response to any developing situations.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="text-center text-white">
                                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" 
                                     style={{ width: '100px', height: '100px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}>
                                    <span className="fw-bold fs-1">4</span>
                                </div>
                                <h4 className="fw-bold mb-3">Post-Event Review</h4>
                                <p className="mb-0">Comprehensive debriefing and reporting to ensure continuous improvement for future events.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Event Process End --> */}

            {/* <!-- Why Choose Us Start --> */}
            <div className="py-5 bg-light">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="display-5 fw-bold text-dark mb-3">Why Choose Our Stewards?</h2>
                            <p className="lead text-muted">Professional excellence in event management and crowd control.</p>
                        </div>
                    </div>
                    
                    <div className="row g-4">
                        <div className="col-lg-6 mb-4">
                            <div className="d-flex align-items-start">
                                <div className="flex-shrink-0 me-4">
                                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle" 
                                         style={{ width: '80px', height: '80px', background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)' }}>
                                        <i className="fas fa-graduation-cap text-white fa-2x"></i>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="fw-bold mb-3">Professional Training</h4>
                                    <p className="text-muted mb-0">All stewards undergo comprehensive training in crowd management, emergency procedures, and customer service excellence.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="d-flex align-items-start">
                                <div className="flex-shrink-0 me-4">
                                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle" 
                                         style={{ width: '80px', height: '80px', background: 'linear-gradient(45deg, #28a745, #20c997)' }}>
                                        <i className="fas fa-users text-white fa-2x"></i>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="fw-bold mb-3">Experienced Team</h4>
                                    <p className="text-muted mb-0">Our team has managed events of all sizes, from intimate gatherings to large-scale public events with thousands of attendees.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="d-flex align-items-start">
                                <div className="flex-shrink-0 me-4">
                                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle" 
                                         style={{ width: '80px', height: '80px', background: 'linear-gradient(45deg, #ffc107, #fd7e14)' }}>
                                        <i className="fas fa-headset text-white fa-2x"></i>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="fw-bold mb-3">24/7 Communication</h4>
                                    <p className="text-muted mb-0">Seamless communication systems ensure coordination between all team members and event organizers throughout the event.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="d-flex align-items-start">
                                <div className="flex-shrink-0 me-4">
                                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle" 
                                         style={{ width: '80px', height: '80px', background: 'linear-gradient(45deg, #17a2b8, #138496)' }}>
                                        <i className="fas fa-shield-alt text-white fa-2x"></i>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="fw-bold mb-3">Safety First</h4>
                                    <p className="text-muted mb-0">Safety is our top priority with comprehensive risk assessments and emergency response protocols for every event.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Why Choose Us End --> */}

            {/* <!-- CTA Section Start --> */}
            <div className="py-5 bg-dark">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <h3 className="text-white fw-bold mb-2">Ready to Make Your Event a Success?</h3>
                            <p className="text-white-75 mb-0">Get professional stewardship services tailored to your event needs and ensure a memorable experience for all attendees.</p>
                        </div>
                        <div className="col-lg-4 text-lg-end">
                            <a href="/contact" className="btn btn-warning btn-lg px-5 py-3 rounded-pill fw-semibold">
                                <i className="fas fa-calendar-alt me-2"></i>Book Stewards
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
                                <a href="/guarding-services" className="mb-2 text-white"><i className="fas fa-check text-primary me-2"></i>Security Guarding</a>
                                <a href="/security-equipment" className="mb-2 text-white"><i className="fas fa-check text-primary me-2"></i>CCTV & Monitoring</a>
                                <a href="/security-equipment" className="mb-2 text-white"><i className="fas fa-check text-primary me-2"></i>Access Control</a>
                                <a href="/security-equipment" className="mb-2 text-white"><i className="fas fa-check text-primary me-2"></i>Alarm Systems</a>
                                <a href="/security-consultancy" className="mb-2 text-white"><i className="fas fa-check text-primary me-2"></i>Consulting</a>
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
        </div>
    )
}

export default Stewards


