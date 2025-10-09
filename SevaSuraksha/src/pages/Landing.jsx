import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Landing.css';
import NorthEastImg from '../assets/img/NorthEastImg.jpg';
// import HeroBg from '../assets/img/herobg.png';
import AboutBg from '../assets/img/AboutBg.jpg';
import VisionBg from '../assets/img/VisionBg.png';
import AmanImg from '../assets/img/Team/AmanImg.jpg';
import AdityaImg from '../assets/img/Team/AdityaImg.jpg';
import SujalImg from '../assets/img/Team/SujalImg.jpg';
import KartikImg from '../assets/img/Team/KartikImg.jpg';
import SwayamImg from '../assets/img/Team/SwayamImg.jpg';

function Landing() {
    const [activeTab, setActiveTab] = useState('completed');
    const [activeFaq, setActiveFaq] = useState(null);
    const [showSignInModal, setShowSignInModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [userLoggedIn, setUserLoggedIn] = useState(false);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        setShowSignInModal(false);
        setUserLoggedIn(true);
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        setShowSignUpModal(false);
        setUserLoggedIn(true);
    };

    const handleEnquirySubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your enquiry! We will contact you soon.');
        e.target.reset();
    };

    const faqItems = [
        {
            question: "How will you ensure the reliability and accuracy of disease outbreak predictions?",
            answer: "We plan to use a hybrid AI/ML approach combining XGBoost, Random Forest, and Decision Tree classifiers:"
                + "\n- Train models on historical health and environmental data from Northeast India."
                + "\n- Continuously validate and update models with new data."
                + "\n- Real-time water quality sensor data (pH, turbidity, bacterial levels)"
                + "\n- Collaborate with public health experts for ground truth validation."
                + "\nThis approach will help us provide reliable, data-driven outbreak predictions to support timely interventions."
        },
        {
            question: "How will your system work in rural Northeast India where internet connectivity is poor?",
            answer: "We designed the system for low-resource environments:"
                + "\n- Offline-first mobile app: Data can be stored locally and synced when the device regains connectivity."
                + "\n- SMS-based reporting for ASHA workers and volunteers without smartphones."
                + "\n- SMS-based reporting for ASHA workers and volunteers without smartphones."
                + "\n- "
        },
        {
            question: "How does your solution stand out compared to existing disease surveillance systems?",
            answer: "Current systems (like IDSP Integrated Disease Surveillance Programme) mainly rely on manual reporting, leading to delays in detection and response."
                + "\n- 1.Combines AI/ML predictive modeling with real-time water quality monitoring."
                + "\n- 2.Supports multilingual & offline-first reporting for rural India."
                + "\n- 3.Provides early warning alerts before outbreaks escalate."
                + "\n- 4.Offers visual dashboards to help officials allocate resources efficiently."
                + "\n- 5.Bridges the last-mile gap by empowering ASHA workers and villagers directly."
        },
        {
            question: "How will your solution engage and empower local communities?",
            answer: "1.Multilingual interfaces (English, Hindi, Assamese, and local dialects)."
                + "\n- 2.Community awareness campaigns integrated in the app (infographics, audio messages, short videos)."
                + "\n- 3.Simple symptom-reporting tools (tap-based or SMS keywords) to involve people with minimal digital literacy."
                + "\n- 4.Role of ASHA workers as community liaisons, ensuring adoption and trust."
        },
        {
            question: "How will you ensure scalability and sustainability of your system beyond the hackathon?",
            answer: "1.Scalable architecture: React (frontend), Flask (backend), Spark/MySQL (database) support horizontal scaling."
                + "\n- 2.Open-source deployment on GitHub ensures adaptability by government bodies and NGOs."
                + "\n- 3.Integration with existing health schemes (like Ayushman Bharat and state health dashboards) to reduce duplication."
                + "\n- 4.Low-cost hardware options (open-source water testing kits, IoT sensors)."
                + "\n- 5.Long term: Partner with district health authorities and NGOs for adoption."
        }
    ];

    return (
        <div className="d-flex flex-column min-vh-100">
            {/* Header */}
            <header>
                <div className="container header-container">
                    <div className="logo">
                        <h1>Seva<span>Suraksha</span></h1>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/report">Report Symptoms</Link></li>
                            <li><Link to="/awareness">Awareness</Link></li>
                            <li><a href="#team">Our Team</a></li>
                            <li><a href="/alerts">Alerts</a></li>
                            <li><a href="/settings">Settings</a></li>
                        </ul>
                    </nav>
                    <div className="auth-buttons">
                        {userLoggedIn ? (
                            <div className="user-info">
                                <div className="user-avatar">K</div>
                                <button className="btn" onClick={() => setUserLoggedIn(false)}>Sign Out</button>
                            </div>
                        ) : (
                            <>
                                <button className="btn" onClick={() => setShowSignInModal(true)}>Sign In</button>
                                <button className="btn btn-outline" onClick={() => setShowSignUpModal(true)}>Create Account</button>
                            </>
                        )}
                    </div>
                </div>
            </header>

            {/* Hero Section (two-column) */}

            <section className="hero-split" id="home">
                <div className="container hero-split-container">
                    <div className="hero-left">
                        <h1>SevaSuraksha: Protecting India's Health</h1>
                        <p>A smart community health monitoring and early warning system for water-borne diseases in rural India. Report symptoms, get risk predictions, and access vital health information.</p>
                        <div className="hero-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '24px' }}>
                            <Link to="/dashboard" className="btn">Go to Dashboard</Link>
                            <Link to="/report" className="btn btn-outline">Report Symptoms</Link>
                        </div>
                    </div>
                    <div className="hero-right">
                        <img src={NorthEastImg} alt="River community" />
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="features" id="features">
                &nbsp;&nbsp;
                <div className="container">
                    {/* &nbsp;&nbsp; */}
                    <div className="features-title">Key Features</div>
                    <h2 className="features-heading">Empowering Community Health</h2>
                    <p className="features-sub">Our platform provides the tools and information necessary for communities and health officials to proactively manage public health risks related to water-borne diseases.</p>
                    <div className="features-grid">
                        <div className="feature-item">
                            <h3>Symptom Reporting & AI Risk Prediction</h3>
                            <p>Easily report symptoms and receive instant, AI-powered risk predictions for water-borne diseases.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Health Dashboard</h3>
                            <p>Visualize health trends, outbreak hotspots, and water quality data through intuitive charts and graphs.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Educational Resources</h3>
                            <p>Access multilingual educational content, including infographics and videos on preventive hygiene.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Real-time Alerts</h3>
                            <p>Receive timely notifications about potential outbreaks and important health advisories.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Multilingual Support</h3>
                            <p>Available in English, Hindi, and several regional languages of India.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Offline Functionality</h3>
                            <p>Save reports offline in low-connectivity areas, and sync automatically when you're back online.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* About Section */}
            <section className="about" id="about">
                <div className="container">
                    <div className="section-title">
                        <h1>About the Health Monitoring Initiative</h1>
                    </div>
                    <div className="about-content">
                        <div className="about-text">
                            <p>We aim to detect and prevent water-borne diseases across rural India by combining community symptom reporting, water quality tracking, and predictive analytics.</p>
                            <p>Community users, ASHA workers, and district officials collaborate using simple tools, multilingual support, and accessible content to safeguard public health.</p>
                            <div className="stats">
                                <div className="stat-item">
                                    <h3>150+</h3>
                                    <p>Villages Covered</p>
                                </div>
                                <div className="stat-item">
                                    <h3>120+</h3>
                                    <p>Outreach Sessions</p>
                                </div>
                                <div className="stat-item">
                                    <h3>50+</h3>
                                    <p>ASHA Workers</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-image">
                            <img src={AboutBg} alt="Rural health awareness" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}


            {/* Vision Section (split) */}
            <section className="vision-split" id="vision">
                <div className="container vision-split-container">
                    <div className="vision-image">
                        <img src={VisionBg} alt="Community awareness" />
                    </div>
                    <div className="vision-text">
                        <h2>Our Vision</h2>
                        <p>Our vision is a future where every community in India has access to safe drinking water and is free from the threat of preventable water-borne diseases. We believe in the power of technology to bridge healthcare gaps, foster resilient communities, and create a healthier tomorrow for generations to come.</p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team" id="team">
                <div className="container">
                    <div className="section-title">
                        <h1>NexusNovaz</h1>
                    </div>
                    <div className="team-grid">
                        <div className="team-member">
                            <div className="member-image">
                                <img src={KartikImg} alt="Raj Sharma" />
                            </div>
                            <div className="member-info">
                                <h3>Karik Chavan</h3>
                                <div className="member-position">UI Designer</div>
                                <p>Creating User Interface.</p>
                            </div>
                        </div>
                        <div className="team-member">
                            <div className="member-image">
                                <img src={AdityaImg} alt="Priya Patel" />
                            </div>
                            <div className="member-info">
                                <h3>Aditya Pandey</h3>
                                <div className="member-position">Backend Engineer</div>
                                <p>Builds outbreak prediction models and hotspot detection.</p>
                            </div>
                        </div>
                        <div className="team-member">
                            <div className="member-image">
                                <img src={SwayamImg} alt="Swayam Chaurasia" />
                            </div>
                            <div className="member-info">
                                <h3>Swayam Chaurasia</h3>
                                <div className="member-position">ML Engineer</div>
                                <p>Build outbreak prediction models and Hotspot detection</p>
                            </div>
                        </div>
                        <div className="team-member">
                            <div className="member-image">
                                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Ananya Rao" />
                            </div>
                            <div className="member-info">
                                <h3>Nandini Mourya</h3>
                                <div className="member-position">Data Analyst </div>
                                <p>Cleaning, Testing Datasets and EDA </p>
                            </div>
                        </div> 
                        <div className="team-member">
                            <div className="member-image">
                                <img src={SujalImg} alt="Amit Singh" />
                            </div>
                            <div className="member-info">
                                <h3>Sujal Ghonmode </h3>
                                <div className="member-position">Research Analyst</div>
                                <p>Reasearch and gathering the datasets and maintaining quality and reliability.</p>
                            </div>
                        </div>
                        <div className="team-member">
                            <div className="member-image">
                                <img src={AmanImg} alt="Aman Pratap Singh" />
                            </div>
                            <div className="member-info">
                                <h3>Aman Pratap Singh</h3>
                                <div className="member-position">Product Manager</div>
                                <p>Drives multilingual content and local partnerships.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq" id="faq">
                <div className="container">
                    <div className="section-title">
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <div className="faq-container">
                        {faqItems.map((faq, index) => (
                            <div className={`faq-item ${activeFaq === index ? 'active' : ''}`} key={index}>
                                <div className="faq-question" onClick={() => toggleFaq(index)}>
                                    <span>{faq.question}</span>
                                    <i className={`fas fa-chevron-${activeFaq === index ? 'up' : 'down'}`}></i>
                                </div>
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact" id="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="contact-container">
                        <div className="contact-info">
                            <div className="contact-info-item">
                                <div className="contact-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="contact-details text-white">
                                    <h3>College</h3>
                                    <p>VIT-AP University</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="contact-details">
                                    <h3>Phone</h3>
                                    <p>+91 832 1234567</p>
                                    <p>+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="contact-details">
                                    <h3>Emails</h3>
                                    <p>kartik.22bce9154@vitapstudent.ac.in</p>
                                    <p>aman.22bce8754@vitapstudent.ac.in</p>
                                    <p>sujal.22bce7461@vitapstudent.ac.in</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div className="contact-details">
                                    <h3>Working Hours</h3>
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form">
                            <form id="enquiryForm" onSubmit={handleEnquirySubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" id="subject" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea type="text" id="message" required />
                                </div>
                                <button type="submit" className="btn">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer>
                <div className="container footer-content">
                    <div className="copyright">
                        <p>&copy; 2025 SevaSuraksha. All Rights Reserved.</p>
                    </div>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </footer>

            {/* Sign In Modal */}
            {/* Connect the Authentication backend, It will be added in Feature Update */}
            {showSignInModal && (
                <div className="modal" id="signInModal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Sign In to Your Account</h3>
                            <button className="close-modal" onClick={() => setShowSignInModal(false)}>&times;</button>
                        </div>
                        <div className="modal-body">
                            <form id="signInForm" onSubmit={handleSignIn}>
                                <div className="form-group">
                                    <label htmlFor="loginEmail">Email Address</label>
                                    <input type="email" id="loginEmail" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="loginPassword">Password</label>
                                    <input type="password" id="loginPassword" required />
                                </div>
                                <button type="submit" className="btn">Sign In</button>
                                <div className="form-toggle">
                                    <p>Don't have an account? <a href="#" onClick={(e) => {
                                        e.preventDefault();
                                        setShowSignInModal(false);
                                        setShowSignUpModal(true);
                                    }}>Sign Up</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Sign Up Modal */}
            {showSignUpModal && (
                <div className="modal" id="signUpModal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Create New Account</h3>
                            <button className="close-modal" onClick={() => setShowSignUpModal(false)}>&times;</button>
                        </div>
                        <div className="modal-body">
                            <form id="signUpForm" onSubmit={handleSignUp}>
                                <div className="form-group">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input type="text" id="fullName" className='form-input' required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="signupEmail">Email Address</label>
                                    <input type="email" id="signupEmail" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="signupPhone">Phone Number</label>
                                    <input type="tel" id="signupPhone" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="signupPassword">Password</label>
                                    <input type="password" id="signupPassword" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input type="password" id="confirmPassword" required />
                                </div>
                                <button type="submit" className="btn">Create Account</button>
                                <div className="form-toggle">
                                    <p>Already have an account? <a href="#" onClick={(e) => {
                                        e.preventDefault();
                                        setShowSignUpModal(false);
                                        setShowSignInModal(true);
                                    }}>Sign In</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Landing;