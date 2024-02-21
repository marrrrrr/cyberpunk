/* App.css */
/* Author: @Mar Caceres Munoz*/

/* ----------------------------------------------------------- IMPORTS -------------------------------------------------------------------------------*/
import React, { useState, useEffect } from 'react';
import './App.css';
import backgroundImage from './llaves.jpg';
import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faNetworkWired, faBell } from '@fortawesome/free-solid-svg-icons';

function App() {
 {/* --------------------------------------------- TYPEWRITTER EFFECT STEPS - ONLY WHEN SEEN ---------------------------------------------------------*/}
// Select the target element
const stepContent = document.querySelectorAll('.step-content p');
// Set up the Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Apply typewriter effect when the element enters the viewport
      entry.target.style.animation = 'typing 3s steps(40, end)';
    } else {
      // Remove animation if the element is not in the viewport
      entry.target.style.animation = 'none';
    }
  });
});

// Observe each step content
stepContent.forEach(content => {
  observer.observe(content);
});

 {/* --------------------------------------------- TYPEWRITTER EFFECT DETECTS - ONLY WHEN SEEN -------------------------------------------------------*/}
// Select the target element
const detectionContent = document.querySelectorAll('.threat-item p');
// Set up the Intersection Observer
const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Apply typewriter effect when the element enters the viewport
      entry.target.style.animation = 'typing 3s steps(40, end)';
    } else {
      // Remove animation if the element is not in the viewport
      entry.target.style.animation = 'none';
    }
  });
});

// Observe each step content
detectionContent.forEach(content => {
  observer2.observe(content);
});

  /* --------------------------------------------------------- GENERAL ------------------------------------------------------------------------------*/
  const [showPopup, setShowPopup] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: 50, right: 50 }); // Initial position
  const [currentIndex, setCurrentIndex] = useState(0); // Change carouselIndex here
  const [showDetectionPopup, setShowDetectionPopup] = useState(false);
  const [selectedDetectionItem, setSelectedDetectionItem] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [sectionVisibility, setSectionVisibility] = useState({
    'hero': true,
    'aboutus': false,
    'how-it-works': false,
    'what-it-detects': false,
    'features': false
  });
  const [showPopup2, setShowPopup2] = useState(true);

  const TypingEffect = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
  
    useEffect(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        currentIndex++;
        if (currentIndex === text.length) {
          clearInterval(interval);
        }
      }, 100);
  
      return () => clearInterval(interval);
    }, [text]);
  
    return <>{displayText}</>;
  };
  
  /* --------------------------------------------------------- GOOD SCROLLING ----------------------------------------------------------------------*/
  const sectionThreshold = 0.5; // Threshold for section visibility

  const handleCloseDetectionPopup = () => {
    setShowDetectionPopup(false);
    setSelectedDetectionItem(null);
  };

const carouselItems = []

  useEffect(() => {
    const handleScroll = () => {
      // Determine which section is currently in view based on scroll position
      const sections = ['hero', 'how-it-works', 'what-it-detects', 'features'];
      const newVisibility = { ...sectionVisibility };
      let visibleSection = null;
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          const isVisible = top <= window.innerHeight * sectionThreshold && bottom >= window.innerHeight * (1 - sectionThreshold);
          newVisibility[sectionId] = isVisible;
          if (isVisible) visibleSection = sectionId;
        }
      }

      setSectionVisibility(visibleSection);
      setSectionVisibility(visibleSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionVisibility]);

  const handleClosePopup = () => {
    setShowPopup2(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* ------------------------------------------------ WHAT CAN IT DETECT: ITEMS -----------------------------------------------------------------------*/
  const threatTypes = [
    {
      title: 'Hacking',
      description: 'We monitor for hacking including reconnaissance, network and application exploits as well as lateral movement.'
    },
    {
      title: 'Malware',
      description: 'We use methods including machine learning to detect malicious executables, command and control activity as well as network propagation.'
    },
    {
      title: 'Vulnerabilities',
      description: 'We monitor for weaknesses in technology systems and business processes that may be used to steal data and commit fraud.'
    },
    {
      title: 'Insider Threats',
      description: 'We monitor logins, authorisation changes, access reach, electronic communications and data transfers to detect insider threats.'
    }
  ];

  /* ------------------------------------------------- HOW DOES IT WORK: ITEMS ------------------------------------------------------------------------*/
  const stepsItems = [
    {title: '1', description: 'You install our application on your workstations and servers.'},
    {title: '2', description: 'Using our cloud platform, we monitor your network 24/7 for threats and vulnerabilities.'},
    {title: '3', description: 'We alert you in real time and work with you to secure your network using automated security controls.'}
  ]

    /* -------------------------------------------- THREATSPIKE FEATURES: ITEMS -----------------------------------------------------------------------*/
const featuresItems = [
  {
    title: 'Forensics',
    description: 'ThreatSpike delivers deep insight into activity on the network.',
    details: [
      'Metadata is generated for activities such as HTTP requests, file copies and print jobs',
      'A built-in flight recorder captures every network packet sent and received',
      'Packet captures and files can be instantly recalled from devices to assist investigations',
      'Metadata is held for one month with the option to extend if required'
    ],
    image: require('./forensics.png')
  },
  {
    title: 'Data Loss Prevention',
    description: 'ThreatSpike can be used to protect against data leakage.',
    details: [
      'Sensitive information is detected in network communications, allowing proactive controls to be applied',
      'SSL/TLS inspection allows information pasted into forms and webmail to be detected',
      'Granular restrictions can be applied to control the files that can be uploaded to the Internet or USB drives',
      'Standing, case-by-case and time-bound exceptions can be granted to users who need to upload files'
    ],
    image: require('./prevention.png')
  },
  {
    title: 'Web Filtering',
    description: 'Web browsing can be restricted to ensure compliance with corporate policies.',
    details: [
      'Specific URLs and page classifications can be blocked',
      'Restrictions can be applied to Active Directory groups and users',
      'Web pages are classified at the device at the point of access, improving performance and accuracy',
      'Custom pages can be displayed when pages are blocked'
    ],
    image: require('./filtering.png')
  },
  {
    title: 'Asset Inventory',
    description: 'Information about devices is collected and presented through dashboards and reports.',
    details: [
      'Location of device and current logged-in user',
      'Serial number, operating system, and version',
      'Installed applications and running processes',
      'Installed and missing patches'
    ],
    image: require('./inventory.png')
  },
  {
    title: 'Network Firewall',
    description: 'Access to internal systems on the network can be restricted.',
    details: [
      'Internal applications can be imported and mapped to specific users and groups requiring access',
      'Connections not permitted by policy are stopped, reducing the surface area of the network',
      'Automatic sandboxing mitigates the risk of ransomware outbreaks'
    ],
    image: require('./firewall.png')
  }
];

  /* --------------------------------------------------------- NI IDEA --------------------------------------------------------------------------------*/
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  /* -------------------------------------------------- FREE TRIAL BUTTON MOVEMENT -------------------------------------------------------------------*/
  // Use useEffect to start the interval when the component mounts
  useEffect(() => {
    const interval = setInterval(moveButton, 1000); // Move the button every second
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []); // Empty dependency array to make sure this effect runs only once

  // Function to move the button continuously
  const moveButton = () => {
    // Calculate new position based on current position
    const newPosition = {
      top: Math.max(50, Math.min(window.innerHeight - 130, buttonPosition.top + 20)), // Keep button within visible vertical range
      right: Math.max(50, Math.min(window.innerWidth - 130, buttonPosition.right - 20)), // Keep button within visible horizontal range
    };

    // Update position
    setButtonPosition(newPosition);
  };

  /*------------------------------------------------ WHAT IT DETECTS - ARROWS -----------------------------------------------------------------------*/
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };
  
  return (
    <div className="App">
      {/* -------------------------------------------------------- NAV BAR --------------------------------------------------------------------------*/}
      <div className="navbar">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#pricing">FAQs</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </nav>
      </div>
      {/* ------------------------------------------------------ LOGO SECTION ------------------------------------------------------------------------*/}
      <section className="hero">
      <video className="video-background" autoPlay loop muted>
        <source src={require('./hacker.mp4')} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
        <div className="hero-content" style={{ backgroundPositionY: -scrollPosition * 0.5 + 'px' }}>
        <img src={logo} alt="ThreatSpike Labs Logo" className="hero-logo" />
          <p>Managed Detection and Response.<br />One Platform. One Partner. Complete Security.</p>
          {/*<div className="section-buttons">
            <button onClick={() => scrollToSection('how-it-works')}>How does it work?</button>
            <button onClick={() => scrollToSection('what-it-detects')}>What can ThreatSpike detect?</button>
            <button onClick={() => scrollToSection('features')}>Features</button>
          </div>*/}
        </div>
      </section>

      {/* ---------------------------------------------------- ABOUT US SECTION ----------------------------------------------------------------------*/}
      <section id="aboutsection" className="about" style={{ 
  position: 'relative',
  backgroundImage: `url(${backgroundImage})`, 
  backgroundPositionY: -scrollPosition * 0.5 + 'px',
}}>
  {/* Overlay div */}
  <div className="overlay" style={{ 
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    filter: 'brightness(-20%)',
    filter: 'opacity(-20%)' 
  }}></div>

  <div className="aboutus" style={{ zIndex: 1 }}>
    <div className="main-title">
      <p>About us</p>
    </div>
    <div className="content">
      <p>ThreatSpike Labs provides the first end-to-end fully managed security service for companies of all sizes.
        ThreatSpike's software-defined security platform takes only a few hours to install after which time all activity on the network
        is monitored by a team of highly trained analysts and penetration testers. Companies are alerted in real-time to any active threats,
        as well as weaknesses that could be used by attackers at a later time.</p>
    </div>
  </div>
</section>

 {/* ----------------------------------------------------- HOW DOES IT WORK SECTION ------------------------------------------------------------------*/}
<section id="how-it-works" className="random-section" >
  <div className="random-content">
    <div className="main-title"> <p>How does it work?</p> </div>
    <div className="steps-and-wireframes">
      {/* Wireframes Image */}
      <img src={require('./wireframe.png')} alt="Wireframes" className="wireframes-image" />
      {/* Steps */}
      <div className="steps-container">
        {stepsItems.map((item, index) => (
          <div key={index} className={`step-item ${index === currentIndex ? 'current' : ''}`}>
            <div className="step-content">
              {index === 0 && <FontAwesomeIcon icon={faDownload} className="step-icon" />}
              {index === 1 && <FontAwesomeIcon icon={faNetworkWired} className="step-icon" />}
              {index === 2 && <FontAwesomeIcon icon={faBell} className="step-icon" />}
              <p className="step-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* ----------------------------------------------What can ThreatSpike detect section ----------------------------------------------------------------*/}
<section id="what-it-detects" className="random-section" >
<div className="random-content">
  <div className="detect-title"><p>What can ThreatSpike detect?</p></div>
  <div className="detect-sentence">We monitor networks for a broad range of security issues, <br /> tailoring our monitoring for the specific industry and requirements of each customer.</div>
  <div className="container">
    {/*Image */}
    <img src={logo} alt="Logo" className="logo" />
        {/*Detections */}
    <div className="threat-container">
      {threatTypes.map((threat, index) => (
          <div key={index} className={`threat-item ${index === currentIndex ? 'current' : ''}`}>
          <div className="detection-content">
              <p className="threat-title">{threat.title}</p>
        </div>
        </div>
      ))}
      </div>
    </div>
    </div>
</section>

{/* --------------------------------------------------------- FEATURES SECTION -----------------------------------------------------------------------*/}
<section id="features" className="random-section">
  <div className="random-content">
  <div className="main-title"> <p>What features does ThreatSpike provide?</p></div>
    <p>We provide extensive functionality that our customers can use to secure their environments and all functionality is provided as part of a single license.</p>
    <div className="tab-container">
      <div className="tabs">
        {featuresItems.map((item, index) => (
          <div key={index} className={`tab ${activeTab === index ? 'active' : ''}`} onClick={() => setActiveTab(index)}>
            {item.title} </div>
        ))}
      </div>
      <div className="tab-content">
        <div className="description"> <img src={featuresItems[activeTab].image} alt="Feature" className="feature-image" /></div>
        <div className="details">
          <p className="description-text">{featuresItems[activeTab].description}</p>
          <ul className="feature-details">
            {featuresItems[activeTab].details.map((detail, index) => (
              <li key={index}>
                <span className="detail-symbol"></span> {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ----------------------------------------- FEATURES ITEMS DETAILS POPUPS -------------------------------------------------------------------------*/}
{showDetectionPopup && selectedDetectionItem && (
  <div className="detection-popup-overlay" onClick={handleCloseDetectionPopup}>
    <div className="detection-popup">
      <button className="detection-close-button" onClick={handleCloseDetectionPopup}>X</button>
      <h2>{selectedDetectionItem.title}</h2>
      <p>{selectedDetectionItem.description}</p>
      <div className="popup-details">
        {selectedDetectionItem.details.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
    </div>
  </div>
)}

{/*---------------------------------------------------- POPUP FOR HELP -----------------------------------------------------------------------------*/}
<div className="help">
      {showPopup2 && (
        <div className="popup-container">
          <div className="helppopup">
            <div className="person">
              <div className="face"></div>
              <div className="status-dot"></div>
            </div>
            <div className="speech-bubble">
            Hi, do you need any advice?<br />
            Talk to me!
          </div>
            <button className="close-btn" onClick={handleClosePopup}>
              &times;
            </button>
          </div>
        </div>
      )}
</div>

      {/* ---------------------------------------------- Floating button for Free Trial ------------------------------------------------------------*/}
      <div
        className="floating-button"
        style={{ top: `${buttonPosition.top}px`, right: `${buttonPosition.right}px`, animation: 'floatAnimation 3s infinite' }}
        onClick={() => {
          togglePopup();
        }}
      >
        {showPopup && (
          <div className="popup">
            <h2>FREE TRIAL</h2>
            <p>Start Your Free 7 Day Trial To Experience Next Generation Managed Security!</p>
          </div>
        )}
        <p>FREE TRIAL</p>
      </div>

      {/* -------------------------------------------------------- Footer ---------------------------------------------------------------------------*/}
      <footer className="footer">
        <div className="footer-content">
          <p>Contact us: info@threatspike.com</p>

          {/* -----------------------------------------------Social media links ---------------------------------------------------------------------*/}
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;