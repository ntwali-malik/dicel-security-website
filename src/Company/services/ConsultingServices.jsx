import React from 'react'

function ConsultingServices() {
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
                                <span className="text-white-50">Have any questions?</span>
                                <span className="text-secondary">Call: +250 788 313 547</span>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar End --> */}
			{/* <!-- Hero Section Start --> */}
			<div className="container-fluid px-0 position-relative" style={{ height: '70vh', minHeight: '500px' }}>
				<div className="position-relative w-100 h-100">
					<img src="assets/img/consulting-Service.jpg" className="img-fluid w-100 h-100" alt="Security Consulting" style={{ objectFit: 'cover' }} />
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
								STRATEGIC SECURITY EXPERTISE
							</span>
						</div>
						<h1 className="text-white display-1 mb-4 animated fadeInRight fw-bold" style={{ 
							textShadow: '0 4px 20px rgba(0,0,0,0.5)',
							lineHeight: '1.1'
						}}>
							Security<br />
							<span className="text-warning">Consulting</span>
						</h1>
						<p className="mb-4 text-white fs-5 animated fadeInDown" style={{ 
							textShadow: '0 2px 10px rgba(0,0,0,0.5)',
							maxWidth: '800px',
							margin: '0 auto 2rem'
						}}>
							Expert strategic guidance to transform your security posture, optimize operations, and protect your business assets.
						</p>
						<div className="d-flex flex-wrap justify-content-center gap-3">
							<a href="#consulting" className="me-2">
								<button type="button" className="px-5 py-3 btn btn-warning rounded-pill carousel-content-btn1 animated fadeInLeft fw-bold" style={{
									fontSize: '1.1rem',
									boxShadow: '0 8px 25px rgba(255, 193, 7, 0.4)',
									transition: 'all 0.3s ease'
								}}>
									<i className="fas fa-lightbulb me-2"></i>Our Expertise
								</button>
							</a>
							<a href="/contact" className="ms-2">
								<button type="button" className="px-5 py-3 btn btn-outline-light rounded-pill carousel-content-btn2 animated fadeInRight fw-bold" style={{
									fontSize: '1.1rem',
									borderWidth: '2px',
									transition: 'all 0.3s ease'
								}}>
									<i className="fas fa-handshake me-2"></i>Get Consultation
								</button>
							</a>
						</div>
					</div>
				</div>
				
				{/* Floating Elements */}
				<div className="position-absolute" style={{ top: '20%', right: '10%', opacity: '0.1' }}>
					<i className="fas fa-lightbulb text-white" style={{ fontSize: '8rem' }}></i>
				</div>
				<div className="position-absolute" style={{ bottom: '20%', left: '5%', opacity: '0.1' }}>
					<i className="fas fa-chart-line text-white" style={{ fontSize: '6rem' }}></i>
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
									<i className="fas fa-users text-white fa-lg"></i>
								</div>
								<h3 className="fw-bold text-white mb-1 counter-value" style={{ fontSize: '2.2rem' }}>100+</h3>
								<p className="text-white mb-0 fw-medium" style={{ fontSize: '0.9rem', lineHeight: '1.3' }}>Clients Consulted<br />Strategic Security Guidance</p>
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
									<i className="fas fa-chart-line text-white fa-lg"></i>
								</div>
								<h3 className="fw-bold text-white mb-1 counter-value" style={{ fontSize: '2.2rem' }}>250+</h3>
								<p className="text-white mb-0 fw-medium" style={{ fontSize: '0.9rem', lineHeight: '1.3' }}>Projects Completed<br />Risk Assessment & Planning</p>
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
									<i className="fas fa-certificate text-white fa-lg"></i>
								</div>
								<h3 className="fw-bold text-white mb-1 counter-value" style={{ fontSize: '2.2rem' }}>15+</h3>
								<p className="text-white mb-0 fw-medium" style={{ fontSize: '0.9rem', lineHeight: '1.3' }}>Certifications<br />Professional Qualifications</p>
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
									<i className="fas fa-handshake text-white fa-lg"></i>
								</div>
								<h3 className="fw-bold text-white mb-1 counter-value" style={{ fontSize: '2.2rem' }}>98%</h3>
								<p className="text-white mb-0 fw-medium" style={{ fontSize: '0.9rem', lineHeight: '1.3' }}>Client Satisfaction<br />Proven Track Record</p>
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
									<img src="assets/img/consulting-Service.jpg" 
										 className="img-fluid rounded-4 shadow-lg" 
										 alt="Security Consulting" 
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
											 alt="Security Strategy"
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
										<i className="fas fa-lightbulb me-2"></i>SECURITY CONSULTING
									</span>
								</div>
								
								{/* Main Heading */}
								<h2 className="display-5 fw-bold text-dark mb-4" style={{ lineHeight: '1.2' }}>
									Strategic <span className="text-primary">Security</span><br />
									Consulting
								</h2>
								
								{/* Description */}
								<p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
									Expert strategic guidance to transform your security posture, optimize operations, and protect 
									your business assets. Our consulting services help you develop comprehensive security strategies 
									tailored to your specific needs and industry requirements.
								</p>
								
								{/* Mission */}
								<div className="mb-4 p-4 rounded-3" style={{ background: 'rgba(13, 110, 253, 0.05)' }}>
									<h5 className="text-primary fw-bold mb-3">
										<i className="fas fa-chart-line me-2"></i>Risk Assessment
									</h5>
									<p className="text-dark mb-0">
										Comprehensive security audits and risk evaluations to identify vulnerabilities and develop 
										strategic protection plans for your organization.
									</p>
								</div>
								
								{/* Vision */}
								<div className="mb-4 p-4 rounded-3" style={{ background: 'rgba(255, 193, 7, 0.1)' }}>
									<h5 className="text-warning fw-bold mb-3">
										<i className="fas fa-graduation-cap me-2"></i>Training & Development
									</h5>
									<p className="text-dark mb-0">
										Professional security training programs and policy development to enhance your team's 
										capabilities and ensure compliance with industry standards.
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
									<i className="fas fa-handshake me-2"></i>Get Consultation
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- About End --> */}

			{/* <!-- Process Section Start --> */}
			<div className="py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
				<div className="container">
					<div className="row mb-5">
						<div className="col-lg-8 mx-auto text-center">
							<div className="mb-4">
								<span className="badge bg-primary text-white px-4 py-2 rounded-pill fs-6 fw-semibold">
									<i className="fas fa-lightbulb me-2"></i>CONSULTING PROCESS
								</span>
							</div>
							<h2 className="display-5 fw-bold text-dark mb-4" style={{ lineHeight: '1.2' }}>
								Our <span className="text-primary">Consulting Approach</span>
							</h2>
							<p className="lead text-muted mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
								Strategic security consulting with systematic methodology, expert analysis, 
								and actionable recommendations for enhanced protection.
							</p>
						</div>
					</div>
					
					<div className="row g-4">
						{/* Risk Management */}
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
								<div className="card-body p-4 text-center">
									<div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" 
										 style={{ width: '80px', height: '80px', background: 'linear-gradient(45deg, #6a11cb, #2575fc)' }}>
										<i className="fas fa-shield-alt text-white fa-2x"></i>
									</div>
									<h4 className="card-title fw-bold mb-3">Risk Management</h4>
									<p className="card-text text-muted mb-4">Comprehensive threat assessment, vulnerability analysis, and risk mitigation strategies tailored to your industry.</p>
									<ul className="list-unstyled mb-4 text-start">
										<li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Threat Assessment</li>
										<li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Vulnerability Analysis</li>
										<li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Risk Mitigation Plans</li>
										<li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Business Impact Analysis</li>
									</ul>
									<a href="/contact" className="btn btn-outline-primary w-100 rounded-pill">Learn More</a>
								</div>
							</div>
						</div>

						{/* Security Operations */}
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
								<div className="card-body p-4 text-center">
									<div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" 
										 style={{ width: '80px', height: '80px', background: 'linear-gradient(45deg, #28a745, #20c997)' }}>
										<i className="fas fa-cogs text-white fa-2x"></i>
									</div>
									<h4 className="card-title fw-bold mb-3">Security Operations</h4>
									<p className="card-text text-muted mb-4">Optimization of security processes, procedures, and operational efficiency for maximum protection.</p>
									<ul className="list-unstyled mb-4 text-start">
										<li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Process Optimization</li>
										<li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Standard Operating Procedures</li>
										<li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Performance Metrics</li>
										<li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Quality Assurance</li>
									</ul>
									<a href="/contact" className="btn btn-outline-success w-100 rounded-pill">Learn More</a>
								</div>
							</div>
						</div>

						{/* Compliance & Standards */}
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
								<div className="card-body p-4 text-center">
									<div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" 
										 style={{ width: '80px', height: '80px', background: 'linear-gradient(45deg, #ffc107, #fd7e14)' }}>
										<i className="fas fa-gavel text-white fa-2x"></i>
									</div>
									<h4 className="card-title fw-bold mb-3">Compliance & Standards</h4>
									<p className="card-text text-muted mb-4">Regulatory compliance, industry standards, and certification support for security frameworks.</p>
									<ul className="list-unstyled mb-4 text-start">
										<li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Regulatory Compliance</li>
										<li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Industry Standards</li>
										<li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Certification Support</li>
										<li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Audit Preparation</li>
									</ul>
									<a href="/contact" className="btn btn-outline-warning w-100 rounded-pill">Learn More</a>
								</div>
							</div>
						</div>

						{/* Technology Integration */}
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
								<div className="card-body p-4 text-center">
									<div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" 
										 style={{ width: '80px', height: '80px', background: 'linear-gradient(45deg, #dc3545, #c82333)' }}>
										<i className="fas fa-microchip text-white fa-2x"></i>
									</div>
									<h4 className="card-title fw-bold mb-3">Technology Integration</h4>
									<p className="card-text text-muted mb-4">Strategic planning for security technology deployment and system integration optimization.</p>
									<ul className="list-unstyled mb-4 text-start">
										<li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Technology Roadmap</li>
										<li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>System Integration</li>
										<li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Vendor Selection</li>
										<li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Implementation Planning</li>
									</ul>
									<a href="/contact" className="btn btn-outline-danger w-100 rounded-pill">Learn More</a>
								</div>
							</div>
						</div>

						{/* Training & Development */}
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
								<div className="card-body p-4 text-center">
									<div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" 
										 style={{ width: '80px', height: '80px', background: 'linear-gradient(45deg, #17a2b8, #138496)' }}>
										<i className="fas fa-graduation-cap text-white fa-2x"></i>
									</div>
									<h4 className="card-title fw-bold mb-3">Training & Development</h4>
									<p className="card-text text-muted mb-4">Security training programs, awareness campaigns, and personnel development strategies.</p>
									<ul className="list-unstyled mb-4 text-start">
										<li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Security Awareness Training</li>
										<li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Staff Development Programs</li>
										<li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Skills Assessment</li>
										<li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Certification Programs</li>
									</ul>
									<a href="/contact" className="btn btn-outline-info w-100 rounded-pill">Learn More</a>
								</div>
							</div>
						</div>

						{/* Crisis Management */}
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
								<div className="card-body p-4 text-center">
									<div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" 
										 style={{ width: '80px', height: '80px', background: 'linear-gradient(45deg, #6f42c1, #e83e8c)' }}>
										<i className="fas fa-exclamation-triangle text-white fa-2x"></i>
									</div>
									<h4 className="card-title fw-bold mb-3">Crisis Management</h4>
									<p className="card-text text-muted mb-4">Emergency response planning, incident management protocols, and business continuity strategies.</p>
									<ul className="list-unstyled mb-4 text-start">
										<li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Emergency Response Plans</li>
										<li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Incident Management</li>
										<li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Business Continuity</li>
										<li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>Recovery Planning</li>
									</ul>
									<a href="/contact" className="btn btn-outline-secondary w-100 rounded-pill">Learn More</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Expertise Areas End --> */}

			{/* <!-- Process Section Start --> */}
			<div className="py-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
				<div className="container">
					<div className="row mb-5">
						<div className="col-lg-8 mx-auto text-center">
							<h2 className="display-5 fw-bold text-white mb-3">Our Consulting Process</h2>
							<p className="lead text-white-75">A structured approach to delivering strategic security solutions and measurable results.</p>
						</div>
					</div>
					
					<div className="row g-4">
						<div className="col-lg-3 col-md-6">
							<div className="text-center text-white">
								<div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" 
									 style={{ width: '100px', height: '100px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}>
									<span className="fw-bold" style={{ fontSize: '2rem' }}>1</span>
								</div>
								<h4 className="fw-bold mb-3">Assessment</h4>
								<p className="mb-0">Comprehensive analysis of your current security posture, risks, and business objectives.</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="text-center text-white">
								<div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" 
									 style={{ width: '100px', height: '100px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}>
									<span className="fw-bold" style={{ fontSize: '2rem' }}>2</span>
								</div>
								<h4 className="fw-bold mb-3">Strategy</h4>
								<p className="mb-0">Development of customized security strategies aligned with your business goals and risk tolerance.</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="text-center text-white">
								<div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" 
									 style={{ width: '100px', height: '100px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}>
									<span className="fw-bold" style={{ fontSize: '2rem' }}>3</span>
								</div>
								<h4 className="fw-bold mb-3">Implementation</h4>
								<p className="mb-0">Guided execution of security initiatives with ongoing support and project management.</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="text-center text-white">
								<div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" 
									 style={{ width: '100px', height: '100px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}>
									<span className="fw-bold" style={{ fontSize: '2rem' }}>4</span>
								</div>
								<h4 className="fw-bold mb-3">Optimization</h4>
								<p className="mb-0">Continuous monitoring, evaluation, and refinement of security measures for sustained effectiveness.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Process Section End --> */}

			{/* <!-- Value Proposition Start --> */}
			<div className="py-5 bg-white">
				<div className="container">
					<div className="row mb-5">
						<div className="col-lg-8 mx-auto text-center">
							<h2 className="display-5 fw-bold text-dark mb-3">Why Choose Our Consulting?</h2>
							<p className="lead text-muted">Strategic advantages that deliver measurable security improvements and business value.</p>
						</div>
					</div>
					
					<div className="row g-4">
						<div className="col-lg-6">
							<div className="d-flex align-items-start p-4 rounded-4" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)', border: '1px solid #e9ecef' }}>
								<div className="d-inline-flex align-items-center justify-content-center rounded-circle me-4 flex-shrink-0" 
									 style={{ width: '60px', height: '60px', background: 'linear-gradient(45deg, #6a11cb, #2575fc)' }}>
									<i className="fas fa-graduation-cap text-white fa-lg"></i>
								</div>
								<div>
									<h5 className="fw-bold mb-2">Expert Knowledge</h5>
									<p className="text-muted mb-0">Certified security professionals with extensive industry experience and specialized expertise.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="d-flex align-items-start p-4 rounded-4" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)', border: '1px solid #e9ecef' }}>
								<div className="d-inline-flex align-items-center justify-content-center rounded-circle me-4 flex-shrink-0" 
									 style={{ width: '60px', height: '60px', background: 'linear-gradient(45deg, #28a745, #20c997)' }}>
									<i className="fas fa-chart-line text-white fa-lg"></i>
								</div>
								<div>
									<h5 className="fw-bold mb-2">Measurable Results</h5>
									<p className="text-muted mb-0">Data-driven approach with clear metrics and ROI tracking for all security initiatives.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="d-flex align-items-start p-4 rounded-4" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)', border: '1px solid #e9ecef' }}>
								<div className="d-inline-flex align-items-center justify-content-center rounded-circle me-4 flex-shrink-0" 
									 style={{ width: '60px', height: '60px', background: 'linear-gradient(45deg, #ffc107, #fd7e14)' }}>
									<i className="fas fa-handshake text-white fa-lg"></i>
								</div>
								<div>
									<h5 className="fw-bold mb-2">Partnership Approach</h5>
									<p className="text-muted mb-0">Long-term collaboration focused on building sustainable security capabilities within your organization.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="d-flex align-items-start p-4 rounded-4" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)', border: '1px solid #e9ecef' }}>
								<div className="d-inline-flex align-items-center justify-content-center rounded-circle me-4 flex-shrink-0" 
									 style={{ width: '60px', height: '60px', background: 'linear-gradient(45deg, #dc3545, #c82333)' }}>
									<i className="fas fa-clock text-white fa-lg"></i>
								</div>
								<div>
									<h5 className="fw-bold mb-2">Ongoing Support</h5>
									<p className="text-muted mb-0">Continuous guidance and support to adapt security strategies as your business evolves.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Value Proposition End --> */}

			{/* <!-- CTA Section Start --> */}
			<div className="py-5 bg-dark">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-8">
							<h3 className="text-white fw-bold mb-2">Ready to Transform Your Security Strategy?</h3>
							<p className="text-white-75 mb-0">Get expert consultation and strategic guidance tailored to your business needs.</p>
						</div>
						<div className="col-lg-4 text-lg-end">
							<a href="/contact" className="btn btn-warning btn-lg px-5 py-3 rounded-pill fw-semibold">
								<i className="fas fa-handshake me-2"></i>Get Consultation
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

export default ConsultingServices


