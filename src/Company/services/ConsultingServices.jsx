import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'

// Local themed styles inspired by the shared pattern
const themes = {
	light: {
		background: '#f8f9fa',
		card: '#ffffff',
		primary: '#0984e3',
		text: '#2d3436',
		subtleText: '#636e72'
	},
	dark: {
		background: '#0f1216',
		card: '#151a21',
		primary: '#74b9ff',
		text: '#f1f2f6',
		subtleText: '#b2bec3'
	}
}

const PageSection = styled.div`
	min-height: 100%;
	background: ${({ theme }) => theme.background} !important;
	padding: 3rem 0;
	display: block !important;
	visibility: visible !important;
	position: relative !important;
	z-index: 1 !important;

	@media (max-width: 768px) {
		padding: 2rem 0;
		display: block !important;
		visibility: visible !important;
		position: relative !important;
		z-index: 1 !important;
	}

	@media (max-width: 576px) {
		padding: 1.5rem 0;
		display: block !important;
		visibility: visible !important;
		position: relative !important;
		z-index: 1 !important;
	}
`

const SectionContainer = styled.div`
	max-width: 1100px;
	margin: 0 auto;
	padding: 0 20px;
	position: relative !important;
	z-index: 2 !important;

	@media (max-width: 768px) {
		padding: 0 15px;
		position: relative !important;
		z-index: 2 !important;
	}

	@media (max-width: 576px) {
		padding: 0 10px;
		position: relative !important;
		z-index: 2 !important;
	}
`

const SectionCard = styled(motion.div)`
	background: ${({ theme }) => theme.card} !important;
	border-radius: 20px;
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
	padding: 2rem;
	margin-top: -60px;
	position: relative !important;
	z-index: 2 !important;
	display: block !important;
	visibility: visible !important;
	overflow: visible !important;
	opacity: 1 !important;
	transform: none !important;

	@media (max-width: 768px) {
		margin-top: -30px;
		padding: 1.5rem;
		border-radius: 16px;
		display: block !important;
		visibility: visible !important;
		overflow: visible !important;
		opacity: 1 !important;
		transform: none !important;
	}

	@media (max-width: 576px) {
		margin-top: -20px;
		padding: 1rem;
		border-radius: 12px;
		display: block !important;
		visibility: visible !important;
		overflow: visible !important;
		opacity: 1 !important;
		transform: none !important;
	}

	/* Force visibility on all devices */
	& * {
		display: inherit !important;
		visibility: inherit !important;
	}
`

const SectionHeader = styled.div`
	text-align: center;
	margin-bottom: 2rem;

	h2 {
		color: ${({ theme }) => theme.text};
		font-weight: 700;
		margin-bottom: 0.5rem;
	}

	p {
		color: ${({ theme }) => theme.subtleText};
	}
`

// Consulting-specific styles
const ExpertiseGrid = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1.5rem;
	margin-bottom: 3rem;

	@media (max-width: 992px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 576px) {
		grid-template-columns: 1fr;
	}
`

const ExpertiseCard = styled(motion.div)`
	background: ${({ theme }) => theme.background};
	border: 1px solid rgba(0,0,0,0.06);
	border-radius: 16px;
	padding: 1.5rem;
	text-align: center;
	transition: transform 0.2s ease, box-shadow 0.2s ease;

	&:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 24px rgba(0,0,0,0.08);
	}

	.icon {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background: ${({ theme }) => theme.primary};
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1rem;
		font-size: 24px;
	}

	h4 {
		color: ${({ theme }) => theme.text};
		margin-bottom: 0.75rem;
		font-weight: 600;
	}

	p {
		color: ${({ theme }) => theme.subtleText};
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.6;
	}
`

const ProcessSection = styled(motion.div)`
	margin: 3rem 0;
`

const ProcessSteps = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1.5rem;
	margin-top: 2rem;

	@media (max-width: 992px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 576px) {
		grid-template-columns: 1fr;
	}
`

const ProcessStep = styled(motion.div)`
	text-align: center;
	position: relative;

	&:not(:last-child)::after {
		content: '';
		position: absolute;
		top: 30px;
		right: -0.75rem;
		width: 1.5rem;
		height: 2px;
		background: ${({ theme }) => theme.primary};
		opacity: 0.3;

		@media (max-width: 992px) {
			display: none;
		}
	}

	.step-number {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background: ${({ theme }) => theme.primary};
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1rem;
		font-weight: 700;
		font-size: 1.2rem;
	}

	h4 {
		color: ${({ theme }) => theme.text};
		margin-bottom: 0.5rem;
		font-weight: 600;
	}

	p {
		color: ${({ theme }) => theme.subtleText};
		font-size: 0.9rem;
		line-height: 1.5;
	}
`

const ValueProposition = styled(motion.div)`
	background: linear-gradient(135deg, ${({ theme }) => theme.primary}15, ${({ theme }) => theme.primary}08);
	border: 1px solid ${({ theme }) => theme.primary}20;
	border-radius: 16px;
	padding: 2rem;
	margin: 2rem 0;
`

const ValueGrid = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1.5rem;
	margin-top: 1.5rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`

const ValueItem = styled(motion.div)`
	display: flex;
	align-items: flex-start;
	gap: 1rem;

	.icon {
		width: 40px;
		height: 40px;
		border-radius: 8px;
		background: ${({ theme }) => theme.primary};
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.content h5 {
		color: ${({ theme }) => theme.text};
		margin-bottom: 0.5rem;
		font-weight: 600;
	}

	.content p {
		color: ${({ theme }) => theme.subtleText};
		font-size: 0.95rem;
		line-height: 1.5;
		margin: 0;
	}
`

const ServicesList = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
	margin-top: 1.5rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`

const ServiceItem = styled(motion.div)`
	display: flex;
	align-items: flex-start;
	gap: 12px;
	padding: 1rem;
	border: 1px solid rgba(0,0,0,0.06);
	border-radius: 12px;
	background: ${({ theme }) => theme.background};

	.badge {
		width: 32px;
		height: 32px;
		border-radius: 8px;
		background: ${({ theme }) => theme.primary};
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		font-size: 14px;
	}

	.text {
		color: ${({ theme }) => theme.text};
		font-size: 0.95rem;
		line-height: 1.5;
	}
`

const ThemeSelector = styled.div`
	position: relative;
	display: flex;
	gap: 10px;
	justify-content: flex-end;
	margin-bottom: 1rem;
`

const ThemeDot = styled.button`
	width: 28px;
	height: 28px;
	border-radius: 50%;
	border: 2px solid #fff;
	cursor: pointer;
	box-shadow: 0 2px 8px rgba(0,0,0,0.15);
`

// Motion variants
const containerVariants = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, when: 'beforeChildren', staggerChildren: 0.12 }
	}
}

const itemVariants = {
	hidden: { opacity: 0, y: 16 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.45 } }
}

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
					<h1 className="display-2 text-white mb-4 animated slideInDown">Security Consulting</h1>
				</div>
			</div>
			{/* <!-- Page Header End --> */}

			{/* Global CSS Override for Mobile Compatibility */}
			<style jsx global>{`
				@media (max-width: 768px) {
					/* Force themed section visibility on all mobile devices */
					.themed-section-container,
					.themed-section-container * {
						display: block !important;
						visibility: visible !important;
						opacity: 1 !important;
						overflow: visible !important;
						position: relative !important;
						z-index: 1 !important;
					}
					
					/* Override any Bootstrap or framework hiding */
					.d-none,
					.invisible,
					.hidden {
						display: block !important;
						visibility: visible !important;
						opacity: 1 !important;
					}
				}
			`}</style>

			{/* Themed Section */}
			<div 
				className="themed-section-container"
				style={{ 
					position: 'relative', 
					zIndex: 1,
					display: 'block',
					visibility: 'visible',
					overflow: 'visible'
				}}
			>
				<ThemeProvider theme={themes.light}>
					<PageSection style={{ 
						position: 'relative', 
						zIndex: 1,
						display: 'block',
						visibility: 'visible',
						overflow: 'visible'
					}}>
						<SectionContainer style={{
							position: 'relative',
							zIndex: 2,
							display: 'block',
							visibility: 'visible'
						}}>
							<ThemeSelector>
								<ThemeDot style={{ background: themes.light.primary }} aria-label="Light theme" />
								<ThemeDot style={{ background: themes.dark.primary }} aria-label="Dark theme" />
							</ThemeSelector>
							<SectionCard
								variants={containerVariants}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.25 }}
								style={{ 
									position: 'relative', 
									zIndex: 2,
									display: 'block',
									visibility: 'visible',
									overflow: 'visible'
								}}
							>
							<SectionHeader>
								<motion.h2 variants={itemVariants}>Strategic Security Consulting</motion.h2>
								<motion.p variants={itemVariants}>Expert guidance to transform your security posture and protect your business assets.</motion.p>
							</SectionHeader>

							{/* Areas of Expertise */}
							<SectionHeader style={{ marginTop: '2rem' }}>
								<motion.h2 variants={itemVariants}>Areas of Expertise</motion.h2>
								<motion.p variants={itemVariants}>Specialized knowledge across all aspects of security management and risk mitigation.</motion.p>
							</SectionHeader>
							<ExpertiseGrid variants={containerVariants}>
								<ExpertiseCard variants={itemVariants} whileHover={{ scale: 1.02 }}>
									<div className="icon">
										<i className="fas fa-shield-alt"></i>
									</div>
									<h4>Risk Management</h4>
									<p>Comprehensive threat assessment, vulnerability analysis, and risk mitigation strategies tailored to your industry.</p>
								</ExpertiseCard>
								<ExpertiseCard variants={itemVariants} whileHover={{ scale: 1.02 }}>
									<div className="icon">
										<i className="fas fa-cogs"></i>
									</div>
									<h4>Security Operations</h4>
									<p>Optimization of security processes, procedures, and operational efficiency for maximum protection.</p>
								</ExpertiseCard>
								<ExpertiseCard variants={itemVariants} whileHover={{ scale: 1.02 }}>
									<div className="icon">
										<i className="fas fa-gavel"></i>
									</div>
									<h4>Compliance & Standards</h4>
									<p>Regulatory compliance, industry standards, and certification support for security frameworks.</p>
								</ExpertiseCard>
								<ExpertiseCard variants={itemVariants} whileHover={{ scale: 1.02 }}>
									<div className="icon">
										<i className="fas fa-microchip"></i>
									</div>
									<h4>Technology Integration</h4>
									<p>Strategic planning for security technology deployment and system integration optimization.</p>
								</ExpertiseCard>
								<ExpertiseCard variants={itemVariants} whileHover={{ scale: 1.02 }}>
									<div className="icon">
										<i className="fas fa-users"></i>
									</div>
									<h4>Human Resources</h4>
									<p>Security training programs, awareness campaigns, and personnel development strategies.</p>
								</ExpertiseCard>
								<ExpertiseCard variants={itemVariants} whileHover={{ scale: 1.02 }}>
									<div className="icon">
										<i className="fas fa-exclamation-triangle"></i>
									</div>
									<h4>Crisis Management</h4>
									<p>Emergency response planning, incident management protocols, and business continuity strategies.</p>
								</ExpertiseCard>
							</ExpertiseGrid>

							{/* Our Process */}
							<ProcessSection variants={containerVariants}>
								<SectionHeader>
									<motion.h2 variants={itemVariants}>Our Consulting Process</motion.h2>
									<motion.p variants={itemVariants}>A structured approach to delivering strategic security solutions and measurable results.</motion.p>
								</SectionHeader>
								<ProcessSteps variants={containerVariants}>
									<ProcessStep variants={itemVariants}>
										<div className="step-number">1</div>
										<h4>Assessment</h4>
										<p>Comprehensive analysis of your current security posture, risks, and business objectives.</p>
									</ProcessStep>
									<ProcessStep variants={itemVariants}>
										<div className="step-number">2</div>
										<h4>Strategy</h4>
										<p>Development of customized security strategies aligned with your business goals and risk tolerance.</p>
									</ProcessStep>
									<ProcessStep variants={itemVariants}>
										<div className="step-number">3</div>
										<h4>Implementation</h4>
										<p>Guided execution of security initiatives with ongoing support and project management.</p>
									</ProcessStep>
									<ProcessStep variants={itemVariants}>
										<div className="step-number">4</div>
										<h4>Optimization</h4>
										<p>Continuous monitoring, evaluation, and refinement of security measures for sustained effectiveness.</p>
									</ProcessStep>
								</ProcessSteps>
							</ProcessSection>

							{/* Value Proposition */}
							<ValueProposition variants={containerVariants}>
								<SectionHeader>
									<motion.h2 variants={itemVariants}>Why Choose Our Consulting?</motion.h2>
									<motion.p variants={itemVariants}>Strategic advantages that deliver measurable security improvements and business value.</motion.p>
								</SectionHeader>
								<ValueGrid variants={containerVariants}>
									<ValueItem variants={itemVariants}>
										<div className="icon">
											<i className="fas fa-graduation-cap"></i>
										</div>
										<div className="content">
											<h5>Expert Knowledge</h5>
											<p>Certified security professionals with extensive industry experience and specialized expertise.</p>
										</div>
									</ValueItem>
									<ValueItem variants={itemVariants}>
										<div className="icon">
											<i className="fas fa-chart-line"></i>
										</div>
										<div className="content">
											<h5>Measurable Results</h5>
											<p>Data-driven approach with clear metrics and ROI tracking for all security initiatives.</p>
										</div>
									</ValueItem>
									<ValueItem variants={itemVariants}>
										<div className="icon">
											<i className="fas fa-handshake"></i>
										</div>
										<div className="content">
											<h5>Partnership Approach</h5>
											<p>Long-term collaboration focused on building sustainable security capabilities within your organization.</p>
										</div>
									</ValueItem>
									<ValueItem variants={itemVariants}>
										<div className="icon">
											<i className="fas fa-clock"></i>
										</div>
										<div className="content">
											<h5>Ongoing Support</h5>
											<p>Continuous guidance and support to adapt security strategies as your business evolves.</p>
										</div>
									</ValueItem>
								</ValueGrid>
							</ValueProposition>

							{/* Services Offered */}
							<SectionHeader style={{ marginTop: '2rem' }}>
								<motion.h2 variants={itemVariants}>Services We Offer</motion.h2>
								<motion.p variants={itemVariants}>Comprehensive consulting solutions to address all your security challenges.</motion.p>
							</SectionHeader>
							<ServicesList variants={containerVariants}>
								<ServiceItem variants={itemVariants}>
									<div className="badge"><i className="fas fa-check"></i></div>
									<div className="text">Security audits and vulnerability assessments</div>
								</ServiceItem>
								<ServiceItem variants={itemVariants}>
									<div className="badge"><i className="fas fa-check"></i></div>
									<div className="text">Security strategy and policy development</div>
								</ServiceItem>
								<ServiceItem variants={itemVariants}>
									<div className="badge"><i className="fas fa-check"></i></div>
									<div className="text">Regulatory compliance and certification support</div>
								</ServiceItem>
								<ServiceItem variants={itemVariants}>
									<div className="badge"><i className="fas fa-check"></i></div>
									<div className="text">Technology roadmap and system integration planning</div>
								</ServiceItem>
								<ServiceItem variants={itemVariants}>
									<div className="badge"><i className="fas fa-check"></i></div>
									<div className="text">Security awareness and training programs</div>
								</ServiceItem>
								<ServiceItem variants={itemVariants}>
									<div className="badge"><i className="fas fa-check"></i></div>
									<div className="text">Incident response and crisis management planning</div>
								</ServiceItem>
								<ServiceItem variants={itemVariants}>
									<div className="badge"><i className="fas fa-check"></i></div>
									<div className="text">Performance monitoring and optimization</div>
								</ServiceItem>
								<ServiceItem variants={itemVariants}>
									<div className="badge"><i className="fas fa-check"></i></div>
									<div className="text">Ongoing strategic security guidance</div>
								</ServiceItem>
							</ServicesList>

							{/* Floating decorative accents */}
							<motion.div
								aria-hidden
								style={{ position: 'absolute', top: -20, right: -20, width: 80, height: 80, borderRadius: 16, background: 'rgba(9,132,227,0.15)', zIndex: 1 }}
								initial={{ y: -6, opacity: 0.6 }}
								animate={{ y: 6, opacity: 0.9 }}
								transition={{ repeat: Infinity, repeatType: 'reverse', duration: 3 }}
							/>
							<motion.div
								aria-hidden
								style={{ position: 'absolute', bottom: -24, left: -24, width: 100, height: 100, borderRadius: '50%', background: 'rgba(116,185,255,0.18)', zIndex: 1 }}
								initial={{ y: 0, opacity: 0.5 }}
								animate={{ y: -10, opacity: 0.8 }}
								transition={{ repeat: Infinity, repeatType: 'mirror', duration: 4 }}
							/>
						</SectionCard>
					</SectionContainer>
				</PageSection>
			</ThemeProvider>
			</div>

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
            <a href="/contact" className="btn btn-secondary btn-square rounded-circle back-to-top"><i
                className="fa fa-arrow-up text-white"></i></a>
        </div>
    )
}

export default ConsultingServices


