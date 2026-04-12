import profile from "./profile.jpg";
import { FiMail, FiGithub, FiLinkedin, FiEdit, FiFolder } from "react-icons/fi";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
  
    const handleScroll = () => {
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
  
        if (elementTop < windowHeight - 100) {
          el.classList.add("active");
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
  
    handleScroll(); // run once
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ===== PROJECT CARD STYLES =====
  const cardStyle = {
    backgroundColor: "#112240",
    padding: "25px",
    borderRadius: "10px",
    transition: "0.3s",
    cursor: "pointer",
  };

  const cardTop = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  };

  const titleStyle = {
    color: "#ccd6f6",
    fontSize: "18px",
  };

  const descStyle = {
    color: "#8892b0",
    fontSize: "14px",
    marginTop: "10px",
  };

  const techStyle = {
    color: "#8892b0",
    fontSize: "12px",
    marginTop: "10px",
  };

  const cardHover = (e) => {
    e.currentTarget.style.transform = "translateY(-10px)";
  };

  const cardLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0px)";
  };

  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "white", fontFamily: "Arial" }}>

      {/* NAVBAR */}
      <div style={{
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#0a0a0a",
        zIndex: 1000,
      }}>
        <div style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 60px",
        }}>

          {/* LEFT */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <h2 style={{ fontWeight: "400", fontSize: window.innerWidth < 768 ? "14px" : "18px"}}>
              Eashwar Jayanth Yadav
            </h2>

            <div style={{ display: "flex", gap: "20px" }}>
              {["home", "about", "projects"].map((id) => (
                <button
                  key={id}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#aaa",
                    cursor: "pointer",
                    fontSize: "14px",
                    transition: "all 0.3s ease",  
                  }}
                  onClick={() =>
                    document.getElementById(id).scrollIntoView({ behavior: "smooth" })
                  }
                  onMouseEnter={(e) => (e.target.style.color = "#64ffda")}
                  onMouseLeave={(e) => (e.target.style.color = "#aaa")}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT ICONS */}
          <div style={{ display: "flex", gap: "18px" }}>
            <a href="mailto:geashwarjayanthyadav@gmail.com">
              <FiMail size={18} color="#ccd6f6" />
            </a>
            <a href="https://github.com/Eashwar0708" target="_blank" rel="noreferrer">
              <FiGithub size={18} color="#ccd6f6" />
            </a>
            <a href="https://www.linkedin.com/in/g-eashwar-jayanth-yadav-74957a312/" target="_blank" rel="noreferrer">
              <FiLinkedin size={18} color="#ccd6f6" />
            </a>
            <a href="https://medium.com/@geashwarjayanthyadav" target="_blank" rel="noreferrer">
              <FiEdit size={18} color="#ccd6f6" />
            </a>
          </div>

        </div>
      </div>

      {/* HERO */}
      <div id="home" style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: window.innerWidth < 768 ? "column" : "row",
        justifyContent: "center",
        gap: window.innerWidth < 768 ? "20px" : "100px",
textAlign: window.innerWidth < 768 ? "center" : "left",
padding: "40px 20px",
        
      }}>
        <div
  style={{
    width: window.innerWidth < 768 ? "200px" : "300px",
height: window.innerWidth < 768 ? "200px" : "300px",
marginBottom: "20px",
    borderRadius: "50%",
    background: "radial-gradient(circle, #64ffda, transparent)",
    animation: "pulse 3s infinite ease-in-out",
  }}
/>

<div
  style={{
    opacity: 0,
    transform: "translateY(40px)",
    animation: "fadeUp 1s ease forwards",
  }}
>
          <h1 style={{ fontSize: "50px" }}>
            hi, <span style={{ color: "#64ffda" }}>eashwar</span> here.
          </h1>

          <p style={{
            marginTop: "15px",
            color: "#aaa",
            maxWidth: "400px",
            lineHeight: "1.6",
          }}>
            I’m a software developer passionate about building AI-driven
            applications and solving real-world problems through hands-on
            projects and continuous learning.
          </p>
          <a 
  href="mailto:geashwarjayanthyadav@gmail.com"
  style={{ textDecoration: "none" }}
>
  <button
    style={{
      marginTop: "20px",
      padding: "12px 18px",
      backgroundColor: "transparent",
      border: "1px solid #64ffda",
      color: "#64ffda",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    }}
  >
    <FiMail size={18} />
    say hi!
  </button>
</a>
        </div>
      </div>

      {/* ABOUT SECTION */}
<div
  id="about"
  className="reveal"
  style={{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ccc",
  }}
>
<div
  style={{
    display: "flex",
    flexDirection: window.innerWidth < 768 ? "column" : "row",
    alignItems: "center",
    gap: "20px",
    maxWidth: "1000px",
    width: "100%",
  }}
>
    {/* LEFT TEXT */}
    <div style={{ flex: 1 }}>
      <h2 style={{ fontSize: "32px", color: "white", marginBottom: "20px" }}>
        / about me
      </h2>

      <p style={{ lineHeight: "1.8" }}>
        I’m a <span style={{ color: "#64ffda" }}>B.Tech student</span> specializing in{" "}
        <span style={{ color: "#64ffda" }}>
          Artificial Intelligence and Machine Learning
        </span>, graduating in 2026. I focus on building real-world software solutions that solve practical problems.
      </p>

      <p style={{ marginTop: "20px", lineHeight: "1.8" }}>
        I have developed projects such as an{" "}
        <span style={{ color: "#64ffda" }}>
          AI-based Meeting Summary Generator
        </span>{" "}
        and an{" "}
        <span style={{ color: "#64ffda" }}>
          AI-powered Accident Detection System
        </span>, combining machine learning with application development.
      </p>

      <p style={{ marginTop: "25px" }}>
        Here are some technologies I have been working with:
      </p>

      {/* TECH LIST */}
      <div style={{ display: "flex", gap: "60px", marginTop: "15px" }}>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
          <li><span style={{ color: "#64ffda" }}>▹</span> C++</li>
          <li><span style={{ color: "#64ffda" }}>▹</span> Python</li>
          <li><span style={{ color: "#64ffda" }}>▹</span> HTML & CSS</li>
        </ul>

        <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
          <li><span style={{ color: "#64ffda" }}>▹</span> MySQL</li>
          <li><span style={{ color: "#64ffda" }}>▹</span> Git & GitHub</li>
        </ul>
      </div>

      <p style={{ marginTop: "25px", lineHeight: "1.8" }}>
        Outside of development, I’m passionate about animation, emerging technologies, and enjoy gaming.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div>
      <img
        src={profile}
        alt="profile"
        style={{
          width: window.innerWidth < 768 ? "100%" : "260px",
height: "auto",
borderRadius: "12px",
        }}
      />
    </div>
  </div>
</div>

      {/* PROJECTS */}
      <div id="projects" className="reveal" style={{
  minHeight: "100vh",
  padding: window.innerWidth < 768 ? "60px 20px" : "100px 120px",
  color: "#ccc",
  backgroundColor: "#0a0a0a", 
}}>
        <h2 style={{ fontSize: "30px", marginBottom: "40px" }}>/ projects</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: window.innerWidth < 768 ? "1fr" : "1fr 1fr",
          gap: "25px",
        }}>

          {/* PROJECT 1 */}
          <div style={cardStyle} onMouseEnter={cardHover} onMouseLeave={cardLeave}>
            <div style={cardTop}>
              <FiFolder size={24} color="#64ffda" />
              <a
  href="https://github.com/Eashwar0708/AI-Based-Meeting-Summary-Generator"
  target="_blank"
  rel="noreferrer"
>
  <FiGithub size={20} />
</a>
            </div>
            <h3 style={titleStyle}>AI Meeting Summary</h3>
            <p style={descStyle}>Summarizes meetings using AI</p>
            <p style={techStyle}>Python • NLP</p>
          </div>

          {/* PROJECT 2 */}
          <div style={cardStyle} onMouseEnter={cardHover} onMouseLeave={cardLeave}>
            <div style={cardTop}>
              <FiFolder size={24} color="#64ffda" />
              <a
  href="https://github.com/Eashwar0708/Accident-Detection-System"
  target="_blank"
  rel="noreferrer"
>
  <FiGithub size={20} />
</a>
            </div>
            <h3 style={titleStyle}>Accident Detection</h3>
            <p style={descStyle}>Detects accidents and alerts emergency</p>
            <p style={techStyle}>OpenCV • ML</p>
          </div>




        </div>
      </div>
      <div
  style={{
    textAlign: "center",
    color: "#666",
    fontSize: "13px",
    marginTop: "40px",
    marginBottom: "20px",
  }}
>
  <p>Built & designed by Eashwar Jayanth Yadav. G</p>
  <p>All rights reserved. © {new Date().getFullYear()}</p>
</div>

    </div>
  );
}

export default App;