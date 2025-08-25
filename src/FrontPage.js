
// FrontPage.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./FrontPage.css";
import FadeInSection from './fadeIn'

const FrontPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // for programmatic navigation

  const [navActive, setNavActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);

  // smooth-scrolling helper
  const scrollToSection = (e, id) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      if (history && history.pushState) {
        history.pushState(null, "", `#${id}`);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // handle newsletter subscription
  const handleSubscribe = () => {
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }
    setMessage("🎉 Thank you for subscribing!");
    setEmail("");
    setTimeout(() => setMessage(""), 3500);
  };

  // Logout function
  const handleLogout = () => {
    // Remove auth token if any
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div className="frontpage">
      {/* Navbar */}
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="logo">TravelPlan Pro</div>

        <div className="nav-links">
          <a href="#home" onClick={(e) => scrollToSection(e, "home")}>Home</a>
          <a href="#about" onClick={(e) => scrollToSection(e, "about")}>About</a>
          <a href="#destinations" onClick={(e) => scrollToSection(e, "destinations")}>Destinations</a>
          <a href="#features" onClick={(e) => scrollToSection(e, "features")}>Features</a>
          <a href="#testimonials" onClick={(e) => scrollToSection(e, "testimonials")}>Testimonials</a>
          {/* <a href="#satisfied-customers" onClick={(e) => scrollToSection(e, "satisfied-customers")}>Satisfied Customers</a> */}
          <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>Contact Us</a>

          <Link to="/login" className="login-btn">Login</Link>

          {/* <button onClick={handleLogout} className="logout-btn">Logout</button> */}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="home">
       <FadeInSection> 
          <div className="hero-overlay">
            <h1>Explore the World with Ease</h1>
            <p>Plan your perfect trip, track your bookings, and discover amazing destinations.</p>
            <Link to="/register" className="cta-btn">Start Planning</Link>
          </div>
        </FadeInSection> 
      </header>
  

    

      {/* About Section */}
       <FadeInSection> 
      <section id="about" className="about">
       
        <h2>About TravelPlan Pro</h2>
        <p>
          TravelPlan Pro is your personal travel assistant. Whether you're a casual
          traveler or an adventure seeker, our platform helps you plan trips, manage
          budgets, keep track of bookings, and explore new places — all in one place.
        </p>
        
      </section>
      </FadeInSection> 

      {/* Destinations Section */}
      <section id="destinations" className="destinations">
        <FadeInSection> 
        <h2>Popular Destinations</h2>
        <div className="destinations-grid">
          {/* Example destination cards */}
          <div className="destination-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzO1LaopB--Ioe5ekaNXQsGfB2rYdPoVlFjw&s" alt="Paris" />
            <h3>Paris, France</h3>
            <p>The city of lights, art, culture, and romantic architecture.</p>
          </div>

          <div className="destination-card">
            <img src="https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_Bali_tv_destination_img_1_l_771_1158.jpg" alt="Bali" />
            <h3>Bali, Indonesia</h3>
            <p>Beautiful beaches, lush jungles, and vibrant culture await you.</p>
          </div>
        
          <div className="destination-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8T65Uo1laywFZIqKM3sspog91cu5LF-fT8g&s" alt="Tokyo" />
            <h3>Tokyo, Japan</h3>
            <p>A bustling metropolis blending tradition with futuristic innovation.</p>
          </div>
          <div className="destination-card">
            <img src="https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_3840,g_auto/f_auto/q_auto/v1/gc-v1/new-york/shutterstock_2142178205_yxfbc3?_a=BAVAZGE70" alt="New York" />
            <h3>New York City, USA</h3>
            <p>The city that never sleeps — iconic landmarks and endless possibilities.</p>
          </div>
                    <div className="destination-card">
            <img src="https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=400,height=265,dpr=2/tour_img/d93de77b90be8d29c2aa95893cbe0a46ca3b178d9d5efe3953aae6e5416128a0.jpg" alt="Sydney" />
            <h3>Sydney, Australia</h3>
            <p>Iconic Opera House, beautiful beaches, and an adventurous lifestyle.</p>
          </div>

          <div className="destination-card">
            <img src="https://static1.evcdn.net/images/reduction/355607_w-3840_h-2160_q-70_m-crop.jpg" alt="Maldives" />
            <h3>Maldives</h3>
            <p>Crystal-clear waters, white sandy beaches, and serene island resorts.</p>
          </div>

          <div className="destination-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXGeu0_mqp-5LGUWgnsc7pP5XBR0I3Ki9_qQ&s" alt="Rome" />
            <h3>Rome, Italy</h3>
            <p>Historic ruins, stunning architecture, and mouthwatering Italian cuisine.</p>
          </div>

          <div className="destination-card">
            <img src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/897c1fab01ff5ebb3a4b370d52efac89f6c83f37/big-c6fe29388e86817077d33f3bdbba7ed8.jpg" alt="Santorini" />
            <h3>Santorini, Greece</h3>
            <p>White-washed buildings, stunning sunsets, and crystal-clear waters.</p>
          </div>

          <div className="destination-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLU4JUpEA1DG5z8dN_SBVtvc8UmTQNkL2m1A&s" alt="Machu Picchu" />
            <h3>Machu Picchu, Peru</h3>
            <p>Ancient Incan city set high in the Andes, a must-visit wonder.</p>
          </div>

          <div className="destination-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiYU9ApDrtiTrT1WNbP6AUgXCAOO9I9t8w_vCCRd8WmS9iRpKlkJu8i1q0bEUxOwBH1Yg&usqp=CAU" alt="Cape Town" />
            <h3>Cape Town, South Africa</h3>
            <p>Majestic mountains, coastal adventures, and rich cultural heritage.</p>
          </div>
        </div>
        </FadeInSection> 
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <FadeInSection> 
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span>✈️</span>
            <h3>Smart Trip Planning</h3>
            <p>Organize your journey with interactive tools and custom itineraries.</p>
          </div>
          <div className="feature-card">
            <span>📅</span>
            <h3>Easy Booking Management</h3>
            <p>Track all your flights, hotels, and activities in one dashboard.</p>
          </div>
          <div className="feature-card">
            <span>🌍</span>
            <h3>Personalized Recommendations</h3>
            <p>Discover top destinations based on your preferences and budget.</p>
          </div>
          <div className="feature-card">
            <span>💰</span>
            <h3>Budget Tracking</h3>
            <p>Monitor your travel expenses and stay within budget effortlessly.</p>
          </div>
        </div>
        </FadeInSection> 
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <FadeInSection> 
        <h2>What Our Travelers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>"TravelPlan Pro made my honeymoon planning stress-free and fun!"</p>
            <h4>— Priya S.</h4>
          </div>
          <div className="testimonial-card">
            <p>"Best travel app I’ve ever used. The recommendations are spot on."</p>
            <h4>— Raj K.</h4>
          </div>
          <div className="testimonial-card">
            <p>"The budget tracking feature saved me from overspending in Europe!"</p>
            <h4>— Anjali P.</h4>
          </div>
        </div>
        </FadeInSection> 
      </section>

{/* Satisfied Customers Section */}
<section id="satisfied-customers" className="satisfied-customers">
  <FadeInSection>
    <h2>Satisfied Customers</h2>

    {/* Stats Section */}
    <div className="stats">
      <div className="stat-card">
        <h3>100+</h3>
        <p>Total Tours Organized</p>
      </div>
      <div className="stat-card">
        <h3>20+</h3>
        <p>Countries Visited</p>
      </div>
      <div className="stat-card">
        <h3>10+</h3>
        <p>All over India</p>
      </div>
    </div>

    {/* Customers Section */}
    <div className="customer-cards">
      <div className="customer-card">
        <blockquote>
          "I’ve never felt more prepared and excited for a trip. TravelPlan Pro is a game-changer!"
        </blockquote>
        <cite>— Michael T.</cite>
      </div>

      <div className="customer-card">
        <blockquote>
          "Customer service was fantastic when I needed help adjusting my itinerary."
        </blockquote>
        <cite>— Emily R.</cite>
      </div>

      <div className="customer-card">
        <blockquote>
          "The intuitive budget tracker helped me save a lot on my last vacation."
        </blockquote>
        <cite>— Samuel B.</cite>
      </div>
    </div>
  </FadeInSection>
</section>



      {/* Contact Section */}
      <section id="contact" className="contact-us">
        <FadeInSection> 
        <h2>Contact Us</h2>
        <p>Have questions? We’d love to hear from you! Fill out the form below and we’ll get back shortly.</p>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        </FadeInSection> 
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <FadeInSection> 
        <h2>Join Our Travel Community</h2>
        <p>Subscribe to get the latest travel deals and tips directly to your inbox.</p>
        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="button" onClick={handleSubscribe}>Subscribe</button>
        </div>
        {message && <p className="subscribe-message">{message}</p>}
        </FadeInSection> 
      </section>

      {/* Footer */}
      <footer className="footer">
  <FadeInSection>
    <div className="footer-container">

      {/* About Section */}
      <div className="footer-section about">
        <h3>About TravelPlan Pro</h3>
        <p>
          TravelPlan Pro is your all-in-one travel assistant, helping you plan trips, track bookings, and explore amazing destinations worldwide.
        </p>
      </div>

      {/* Quick Links */}
      <div className="footer-section links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#home" onClick={(e) => scrollToSection(e, "home")}>Home</a></li>
          <li><a href="#about" onClick={(e) => scrollToSection(e, "about")}>About</a></li>
          <li><a href="#destinations" onClick={(e) => scrollToSection(e, "destinations")}>Destinations</a></li>
          <li><a href="#features" onClick={(e) => scrollToSection(e, "features")}>Features</a></li>
          <li><a href="#testimonials" onClick={(e) => scrollToSection(e, "testimonials")}>Testimonials</a></li>
          <li><a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>Contact</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="footer-section contact">
        <h3>Contact Info</h3>
        <p>123 Travel Lane, Wanderlust City, World</p>
        <p>Email: support@travelplanpro.com</p>
        <p>Phone: +1 (234) 567-8901</p>
      </div>

      {/* Social Media */}
      <div className="footer-section social">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i> Facebook</a>
          <a href="#"><i className="fab fa-twitter"></i> Twitter</a>
          <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
          <a href="#"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
        </div>
      </div>

      {/* Newsletter */}
      <div className="footer-section newsletter">
        <h3>Join Our Newsletter</h3>
        <p>Get the latest travel deals and tips straight to your inbox.</p>
      
      </div>

    </div>

    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} TravelPlan Pro. All Rights Reserved.</p>
    </div>
  </FadeInSection>
</footer>

      
    </div>
  );
};

export default FrontPage;




