import React from 'react'

function Contact() {
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
                                <a href="/services" className="nav-item nav-link">Services</a>
                                <a href="/gallery" className="nav-item nav-link">Gallery</a>
                                <a href="/contact" className="nav-item active nav-link">Contact</a>
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
                    <img src="assets/img/3.jpeg" className="img-fluid w-100 h-100" alt="Contact - Dicel Security" 
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
                                <i className="fas fa-envelope me-2"></i>GET IN TOUCH
                            </span>
                        </div>
                        <h1 className="text-white display-1 mb-4 animated fadeInRight fw-bold" style={{ 
                            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                            lineHeight: '1.1'
                        }}>
                            Contact <span className="text-warning">Dicel Security</span>
                        </h1>
                        <p className="mb-4 text-white fs-5 animated fadeInDown" style={{ 
                            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                            maxWidth: '800px',
                            margin: '0 auto 2rem'
                        }}>
                            Ready to secure your business? Get in touch with our expert team for personalized 
                            security solutions, quotes, and professional consultations.
                        </p>
                        <div className="d-flex flex-wrap justify-content-center gap-3">
                            <a href="tel:+250788313547" className="me-2">
                                <button type="button" className="px-5 py-3 btn btn-warning rounded-pill carousel-content-btn1 animated fadeInLeft fw-bold" style={{
                                    fontSize: '1.1rem',
                                    boxShadow: '0 8px 25px rgba(255, 193, 7, 0.4)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <i className="fas fa-phone me-2"></i>Call Now
                                </button>
                            </a>
                            <a href="mailto:info@dicel.co.rw" className="ms-2">
                                <button type="button" className="px-5 py-3 btn btn-outline-light rounded-pill carousel-content-btn2 animated fadeInRight fw-bold" style={{
                                    fontSize: '1.1rem',
                                    borderWidth: '2px',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <i className="fas fa-envelope me-2"></i>Send Email
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Hero Section End --> */}

            {/* <!-- Contact Start --> */}
            <div className="py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)' }}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-8 mx-auto text-center">
                            <div className="mb-4">
                                <span className="badge bg-primary text-white px-4 py-2 rounded-pill fs-6 fw-semibold">
                                    <i className="fas fa-envelope me-2"></i>CONTACT INFORMATION
                                </span>
                            </div>
                            <h2 className="display-5 fw-bold text-dark mb-4" style={{ lineHeight: '1.2' }}>
                                Get In Touch With <span className="text-primary">Our Team</span>
                            </h2>
                            <p className="lead text-muted mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                                Ready to secure your business? Contact our expert team for personalized security solutions, 
                                quotes, and professional consultations tailored to your needs.
                            </p>
                        </div>
                    </div>
                    
                    <div className="row g-4 mb-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="h-100 p-4 bg-white rounded-4 shadow-lg text-center" style={{
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
                                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)';
                                e.currentTarget.style.borderColor = 'rgba(13, 110, 253, 0.1)';
                            }}>
                                <div className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3" 
                                     style={{ 
                                         width: '70px', 
                                         height: '70px', 
                                         background: 'linear-gradient(135deg, #0d6efd 0%, #0056b3 100%)',
                                         boxShadow: '0 8px 25px rgba(13, 110, 253, 0.3)'
                                     }}>
                                    <i className="fas fa-map-marker-alt text-white fa-lg"></i>
                                </div>
                                <h5 className="fw-bold text-dark mb-3">Our Address</h5>
                                <p className="text-muted mb-3" style={{ lineHeight: '1.6' }}>
                                    KK 467 St, Kagarama Sector<br />
                                    (Kanserege Cell), Kicukiro, Kigali
                                </p>
                                <a href="https://maps.google.com/?q=KK%20467%20St%2C%20Kagarama%20Sector%20(Kanserege%20Cell)%2C%20Kigali%2C%20Rwanda" 
                                   target="_blank" 
                                   className="btn btn-outline-primary btn-sm rounded-pill">
                                    <i className="fas fa-directions me-2"></i>Get Directions
                                </a>
                            </div>
                                    </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="h-100 p-4 bg-white rounded-4 shadow-lg text-center" style={{
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
                                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)';
                                e.currentTarget.style.borderColor = 'rgba(13, 110, 253, 0.1)';
                            }}>
                                <div className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3" 
                                     style={{ 
                                         width: '70px', 
                                         height: '70px', 
                                         background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                                         boxShadow: '0 8px 25px rgba(40, 167, 69, 0.3)'
                                     }}>
                                    <i className="fas fa-phone text-white fa-lg"></i>
                                    </div>
                                <h5 className="fw-bold text-dark mb-3">Call Us</h5>
                                <div className="mb-3">
                                    <a href="tel:+250788313547" className="d-block text-decoration-none text-dark fw-medium mb-2">
                                        <i className="fas fa-phone text-primary me-2"></i>0788313547
                                    </a>
                                    <a href="tel:3024" className="d-block text-decoration-none text-dark fw-medium">
                                        <i className="fas fa-phone text-primary me-2"></i>Toll Free: 3024
                                    </a>
                                </div>
                                <a href="tel:+250788313547" className="btn btn-outline-success btn-sm rounded-pill">
                                    <i className="fas fa-phone me-2"></i>Call Now
                                </a>
                            </div>
                                    </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="h-100 p-4 bg-white rounded-4 shadow-lg text-center" style={{
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
                                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)';
                                e.currentTarget.style.borderColor = 'rgba(13, 110, 253, 0.1)';
                            }}>
                                <div className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3" 
                                     style={{ 
                                         width: '70px', 
                                         height: '70px', 
                                         background: 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)',
                                         boxShadow: '0 8px 25px rgba(255, 193, 7, 0.3)'
                                     }}>
                                    <i className="fas fa-envelope text-white fa-lg"></i>
                                </div>
                                <h5 className="fw-bold text-dark mb-3">Email Us</h5>
                                <p className="text-muted mb-3" style={{ lineHeight: '1.6' }}>
                                    Send us an email for quotes,<br />
                                    consultations, or inquiries
                                </p>
                                <a href="mailto:info@dicel.co.rw" className="btn btn-outline-warning btn-sm rounded-pill">
                                    <i className="fas fa-envelope me-2"></i>Send Email
                                </a>
                            </div>
                                    </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="h-100 p-4 bg-white rounded-4 shadow-lg text-center" style={{
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
                                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)';
                                e.currentTarget.style.borderColor = 'rgba(13, 110, 253, 0.1)';
                            }}>
                                <div className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3" 
                                     style={{ 
                                         width: '70px', 
                                         height: '70px', 
                                         background: 'linear-gradient(135deg, #6f42c1 0%, #5a32a3 100%)',
                                         boxShadow: '0 8px 25px rgba(111, 66, 193, 0.3)'
                                     }}>
                                    <i className="fas fa-clock text-white fa-lg"></i>
                                    </div>
                                <h5 className="fw-bold text-dark mb-3">Business Hours</h5>
                                <p className="text-muted mb-3" style={{ lineHeight: '1.6' }}>
                                    Monday – Friday<br />
                                    07:30 AM – 05:30 PM
                                </p>
                                <span className="badge bg-primary text-white px-3 py-2 rounded-pill">
                                    <i className="fas fa-check me-1"></i>Licensed
                                </span>
                                </div>
                            </div>
                        </div>
                        <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="h-100 p-4 bg-white rounded-4 shadow-lg" style={{
                                border: '1px solid rgba(13, 110, 253, 0.1)'
                            }}>
                                <div className="mb-4">
                                    <h4 className="fw-bold text-dark mb-3">
                                        <i className="fas fa-map-marker-alt text-primary me-2"></i>Find Us
                                    </h4>
                                    <p className="text-muted mb-0">Visit our office or get directions to our location in Kigali.</p>
                                </div>
                                <div className="position-relative rounded-3 overflow-hidden" style={{ height: '400px' }}>
                                    <iframe className="w-100 h-100"
                                        src="https://www.google.com/maps?q=Kicukiro%20Kagarama%20Kigali%20Rwanda&output=embed"
                                        style={{ border: "0" }} loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <div className="mt-3 text-center">
                                    <a href="https://maps.google.com/?q=KK%20467%20St%2C%20Kagarama%20Sector%20(Kanserege%20Cell)%2C%20Kigali%2C%20Rwanda" 
                                       target="_blank" 
                                       className="btn btn-primary btn-sm rounded-pill">
                                        <i className="fas fa-directions me-2"></i>Get Directions
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <div className="h-100 p-4 bg-white rounded-4 shadow-lg" style={{
                                border: '1px solid rgba(13, 110, 253, 0.1)'
                            }}>
                                    <div className="mb-4">
                                    <h4 className="fw-bold text-dark mb-3">
                                        <i className="fas fa-envelope text-primary me-2"></i>Send Us a Message
                                    </h4>
                                    <p className="text-muted mb-0">Get in touch with our team for quotes, consultations, or any inquiries.</p>
                                </div>
                                
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" 
                                                       className="form-control" 
                                                       id="name" 
                                                       placeholder="Your Name" 
                                                       required 
                                                       style={{
                                                           border: '2px solid #e9ecef',
                                                           borderRadius: '12px',
                                                           transition: 'all 0.3s ease'
                                                       }}
                                                       onFocus={(e) => {
                                                           e.target.style.borderColor = '#0d6efd';
                                                           e.target.style.boxShadow = '0 0 0 0.2rem rgba(13, 110, 253, 0.25)';
                                                       }}
                                                       onBlur={(e) => {
                                                           e.target.style.borderColor = '#e9ecef';
                                                           e.target.style.boxShadow = 'none';
                                                       }} />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" 
                                                       className="form-control" 
                                                       id="email" 
                                                       placeholder="Your Email" 
                                                       required 
                                                       style={{
                                                           border: '2px solid #e9ecef',
                                                           borderRadius: '12px',
                                                           transition: 'all 0.3s ease'
                                                       }}
                                                       onFocus={(e) => {
                                                           e.target.style.borderColor = '#0d6efd';
                                                           e.target.style.boxShadow = '0 0 0 0.2rem rgba(13, 110, 253, 0.25)';
                                                       }}
                                                       onBlur={(e) => {
                                                           e.target.style.borderColor = '#e9ecef';
                                                           e.target.style.boxShadow = 'none';
                                                       }} />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" 
                                                       className="form-control" 
                                                       id="subject" 
                                                       placeholder="Subject" 
                                                       style={{
                                                           border: '2px solid #e9ecef',
                                                           borderRadius: '12px',
                                                           transition: 'all 0.3s ease'
                                                       }}
                                                       onFocus={(e) => {
                                                           e.target.style.borderColor = '#0d6efd';
                                                           e.target.style.boxShadow = '0 0 0 0.2rem rgba(13, 110, 253, 0.25)';
                                                       }}
                                                       onBlur={(e) => {
                                                           e.target.style.borderColor = '#e9ecef';
                                                           e.target.style.boxShadow = 'none';
                                                       }} />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                    </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" 
                                                          id="message" 
                                                          placeholder="Message" 
                                                          rows="4" 
                                                          required 
                                                          style={{
                                                              border: '2px solid #e9ecef',
                                                              borderRadius: '12px',
                                                              transition: 'all 0.3s ease',
                                                              minHeight: '120px'
                                                          }}
                                                          onFocus={(e) => {
                                                              e.target.style.borderColor = '#0d6efd';
                                                              e.target.style.boxShadow = '0 0 0 0.2rem rgba(13, 110, 253, 0.25)';
                                                          }}
                                                          onBlur={(e) => {
                                                              e.target.style.borderColor = '#e9ecef';
                                                              e.target.style.boxShadow = 'none';
                                                          }}></textarea>
                                                <label htmlFor="message">Your Message</label>
                                    </div>
                                    </div>
                                        <div className="col-12">
                                            <button type="submit" 
                                                    className="btn btn-primary btn-lg w-100 rounded-pill fw-semibold" 
                                                    style={{
                                                        background: 'linear-gradient(135deg, #0d6efd 0%, #0056b3 100%)',
                                                        border: 'none',
                                                        padding: '12px 24px',
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
                                                <i className="fas fa-paper-plane me-2"></i>Send Message
                                            </button>
                                    </div>
                                    </div>
                                </form>
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
            <a href="/contact" className="btn btn-secondary btn-square rounded-circle back-to-top"><i
                className="fa fa-arrow-up text-white"></i></a>
        </div>
    )
}

export default Contact