import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'

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
	background: ${({ theme }) => theme.background};
	padding: 3rem 0;
`

const SectionContainer = styled.div`
	max-width: 1100px;
	margin: 0 auto;
	padding: 0 20px;
`

const SectionCard = styled(motion.div)`
	background: ${({ theme }) => theme.card};
	border-radius: 20px;
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
	padding: 2rem;
	margin-top: -60px;
	position: relative;
	z-index: 2;
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

const FeatureGrid = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1.25rem;

	@media (max-width: 992px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 576px) {
		grid-template-columns: 1fr;
	}
`

const FeatureCard = styled(motion.div)`
	background: ${({ theme }) => theme.background};
	border: 1px solid rgba(0,0,0,0.06);
	border-radius: 16px;
	padding: 1.25rem;
	transition: transform 0.2s ease, box-shadow 0.2s ease;

	&:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 24px rgba(0,0,0,0.08);
	}

	.image-container {
		width: 100%;
		height: 160px;
		border-radius: 12px;
		overflow: hidden;
		margin-bottom: 0.9rem;
		background: #e9edf3;
		border: 1px solid rgba(0,0,0,0.06);
	}

	.image-container img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.35s ease;
	}

	&:hover .image-container img {
		transform: scale(1.05);
	}

	h4 {
		color: ${({ theme }) => theme.text};
		margin-bottom: 0.5rem;
		font-weight: 600;
	}

	p {
		color: ${({ theme }) => theme.subtleText};
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.5;
	}
`
// Info content styles for CCTV service page
const InfoBlock = styled(motion.div)`
	color: ${({ theme }) => theme.text};
	font-size: 1rem;
	line-height: 1.7;
	margin-top: 0.5rem;

	ul {
		margin: 0.75rem 0 0 1.1rem;
		color: ${({ theme }) => theme.subtleText};
	}

	li { margin-bottom: 0.4rem; }
`

const HighlightsGrid = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 0.9rem;
	margin-top: 1rem;

	@media (max-width: 992px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 576px) {
		grid-template-columns: 1fr;
	}
`

const HighlightCard = styled(motion.div)`
	background: ${({ theme }) => theme.background};
	border: 1px solid rgba(0,0,0,0.06);
	border-radius: 12px;
	padding: 14px;

	.title { font-weight: 600; color: ${({ theme }) => theme.text}; margin-bottom: 4px; }
	.desc { color: ${({ theme }) => theme.subtleText}; font-size: 0.95rem; }
`

const ServicesList = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 0.75rem 1rem;
	margin-top: 0.75rem;

	@media (max-width: 576px) {
		grid-template-columns: 1fr;
	}
`

const ServiceItem = styled(motion.div)`
	display: flex;
	align-items: flex-start;
	gap: 10px;
	padding: 10px 12px;
	border: 1px solid rgba(0,0,0,0.06);
	border-radius: 12px;
	background: ${({ theme }) => theme.background};

	.badge {
		flex: 0 0 auto;
		width: 30px;
		height: 30px;
		border-radius: 8px;
		background: ${({ theme }) => theme.primary};
		color: #fff;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-size: 16px;
	}

	.text {
		color: ${({ theme }) => theme.text};
		font-size: 0.95rem;
		line-height: 1.45;
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

function CctvCameras() {
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
            {/* <!-- Page Header Start --> */}
            <div className="container-fluid page-header py-5">
                <div className="container text-center py-5">
                    <h1 className="display-2 text-white mb-4 animated slideInDown">CCTV Cameras</h1>
                </div>
            </div>
            {/* <!-- Page Header End --> */}

			{/* Themed CCTV Section */}
			<ThemeProvider theme={themes.light}>
				<PageSection>
					<SectionContainer>
						<ThemeSelector>
							<ThemeDot style={{ background: themes.light.primary }} aria-label="Light theme" />
							<ThemeDot style={{ background: themes.dark.primary }} aria-label="Dark theme" />
						</ThemeSelector>
						<SectionCard
							variants={containerVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.25 }}
						>
							<SectionHeader>
								<motion.h2 variants={itemVariants}>CCTV & Surveillance</motion.h2>
								<motion.p variants={itemVariants}>Reliable visibility, evidence-grade footage, and proactive deterrence.</motion.p>
							</SectionHeader>
							<FeatureGrid variants={containerVariants}>
								<FeatureCard variants={itemVariants} whileHover={{ scale: 1.02 }}>
									<div className="image-container">
										<img src="assets/img/hd-ip-cameras.png" alt="HD IP Cameras" loading="lazy" />
									</div>
									<h4>HD IP Cameras</h4>
									<p>Crystal-clear 1080p/4K video with night vision and wide dynamic range.</p>
								</FeatureCard>
								<FeatureCard variants={itemVariants} whileHover={{ scale: 1.02 }}>
									<div className="image-container">
										<img src="assets/img/monitoring.jpg" alt="24/7 Monitoring" loading="lazy" />
									</div>
									<h4>24/7 Monitoring</h4>
									<p>Always-on recording and alerting to keep your premises protected day and night.</p>
								</FeatureCard>
								<FeatureCard variants={itemVariants} whileHover={{ scale: 1.02 }}>
									<div className="image-container">
										<img src="assets/img/remote-viewing.jpg" alt="Remote Viewing" loading="lazy" />
									</div>
									<h4>Remote Viewing</h4>
									<p>Secure mobile and web access from anywhere with role-based permissions.</p>
								</FeatureCard>
								<FeatureCard variants={itemVariants} whileHover={{ scale: 1.02 }}>
									<div className="image-container">
										<img src="assets/img/motion-Detection.webp" alt="Motion & Intrusion Alerts" loading="lazy" />
									</div>
									<h4>Motion & Intrusion Alerts</h4>
									<p>Smart detection triggers push notifications, sirens, and lights.</p>
								</FeatureCard>
								<FeatureCard variants={itemVariants} whileHover={{ scale: 1.02 }}>
									<div className="image-container">
										<img src="assets/img/analytics.jpg" alt="Video Analytics" loading="lazy" />
									</div>
									<h4>Video Analytics</h4>
									<p>AI-based people counting, loitering alerts, and object detection.</p>
								</FeatureCard>
								<FeatureCard variants={itemVariants} whileHover={{ scale: 1.02 }}>
									<div className="image-container">
										<img src="assets/img/installatio-maintenance.jpeg" alt="Installation & Maintenance" loading="lazy" />
									</div>
									<h4>Installation & Maintenance</h4>
									<p>Site survey, optimal placement, cabling, and proactive service plans.</p>
								</FeatureCard>
							</FeatureGrid>

							{/* Service Overview */}
							<SectionHeader style={{ marginTop: '1.5rem' }}>
								<motion.h2 variants={itemVariants}>Service Overview</motion.h2>
								<motion.p variants={itemVariants}>End-to-end CCTV solutions delivering clarity, coverage and control.</motion.p>
							</SectionHeader>
							<InfoBlock variants={containerVariants}>
								<motion.p variants={itemVariants}>
									We design and deploy surveillance systems that deter incidents and provide reliable evidence when needed. Our designs balance camera types, placement, storage and network to achieve your security objectives.
								</motion.p>
								<HighlightsGrid variants={containerVariants}>
									<HighlightCard variants={itemVariants}>
										<div className="title">Coverage Planning</div>
										<div className="desc">Lens selection, FOV, lighting and critical path mapping.</div>
									</HighlightCard>
									<HighlightCard variants={itemVariants}>
										<div className="title">Secure Storage</div>
										<div className="desc">Redundant NVR/VMS, retention policies and encryption.</div>
									</HighlightCard>
									<HighlightCard variants={itemVariants}>
										<div className="title">Smart Analytics</div>
										<div className="desc">Events, line-crossing, intrusion and people analytics.</div>
									</HighlightCard>
									<HighlightCard variants={itemVariants}>
										<div className="title">Remote Access</div>
										<div className="desc">Secure mobile/web viewing with audit logs and RBAC.</div>
									</HighlightCard>
								</HighlightsGrid>
							</InfoBlock>

							{/* What We Provide */}
							<SectionHeader style={{ marginTop: '2rem' }}>
								<motion.h2 variants={itemVariants}>What We Provide</motion.h2>
								<motion.p variants={itemVariants}>CCTV-specific deliverables from survey to support.</motion.p>
							</SectionHeader>
							<ServicesList variants={containerVariants}>
								<ServiceItem variants={itemVariants}>
									<div className="badge"><i className="fas fa-check"></i></div>
									<div className="text">Site survey, risk assessment and camera/coverage plan</div>
								</ServiceItem>
								<ServiceItem variants={itemVariants}>
									<div className="badge"><i className="fas fa-check"></i></div>
									<div className="text">VMS/NVR design, storage sizing and network topology</div>
								</ServiceItem>
								<ServiceItem variants={itemVariants}>
									<div className="badge"><i className="fas fa-check"></i></div>
									<div className="text">Camera mounting, cabling, power and weatherproofing</div>
								</ServiceItem>
								<ServiceItem variants={itemVariants}>
									<div className="badge"><i className="fas fa-check"></i></div>
									<div className="text">Recording schedules, motion rules and alert workflows</div>
								</ServiceItem>
								<ServiceItem variants={itemVariants}>
									<div className="badge"><i className="fas fa-check"></i></div>
									<div className="text">Mobile/web access setup, roles and audit logging</div>
								</ServiceItem>
								<ServiceItem variants={itemVariants}>
									<div className="badge"><i className="fas fa-check"></i></div>
									<div className="text">Integration with access control and alarm systems</div>
								</ServiceItem>
								<ServiceItem variants={itemVariants}>
									<div className="badge"><i className="fas fa-check"></i></div>
									<div className="text">User training, documentation and acceptance testing</div>
								</ServiceItem>
								<ServiceItem variants={itemVariants}>
									<div className="badge"><i className="fas fa-check"></i></div>
									<div className="text">Proactive maintenance and 24/7 support SLAs</div>
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

export default CctvCameras


