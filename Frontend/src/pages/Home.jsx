import React, { useState } from "react";
import Modal from "react-modal";
import backgroundImage from "../assets/pexels-photo-6169663.webp";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh", // Use minHeight instead of height
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: `url(${backgroundImage})`,
};

const greetingsStyle = {
  fontSize: "3rem",
  marginBottom: "1rem",
  color: "#000",
  fontFamily: "'Montserrat', sans-serif",
};

const descriptionStyle = {
  fontSize: "2.5rem",
  textAlign: "center",
  marginBottom: "2rem",
  color: "#000",
  fontFamily: "'Montserrat', sans-serif",
};

const buttonContainerStyle = {
  display: "flex",
  gap: "1rem",
};

const buttonStyle = {
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  fontFamily: "'Montserrat', sans-serif",
};
const footerStyle = {
  fontSize: "1.5rem",
  padding: "1rem",
  backgroundColor: "transparent",
  textAlign: "center",
  color: "#000",
  width: "100%",
  position: "fixed",
  bottom: 0,
};
const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "400px",
    width: "100%",
    maxHeight:"400px",
    padding: "2rem",
    borderRadius: "4px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#007bff", // Add this line to set the modal background color
  },
};
const inputStyle = {
  padding: "10px", // Add padding to the input fields
  marginBottom: "15px", // Add some spacing between inputs
  width: "100%",
  border: "1px solid #ccc",
  borderRadius: "4px",
};
const buttonPaddingStyle = {
  padding: "5px 15px ",
  marginBottom: "10px",
  textAlign: "right",
  backgroundColor: "#000",
  color: "#fff",
  borderRadius: "10px",
};
const buttonPadding = {
  padding: "10px 20px",
  marginBottom: "10px",
  textAlign: "right",
  backgroundColor: "#000",
  color: "#fff", // Change text color to white
  borderRadius: "10px",
  marginLeft: "105px",
};
const modalp = {
  
  paddingLeft: "130px",
};

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [signinModalIsOpen, setSigninModalIsOpen] = useState(false);
  const [email, setEmail] = useState(""); // Moved this line outside the functions
  const [password, setPassword] = useState(""); // Moved this line outside the functions

  // Handle email input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Handle password input change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Handle sign-up form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your sign-up logic here
    // You can use 'email' and 'password' states for further processing

    // After successful sign-up, you can close the modal
    closeModal();
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const openSigninModal = () => {
    setSigninModalIsOpen(true);
  };

  const closeSigninModal = () => {
    setSigninModalIsOpen(false);
  };
  const handleSignInSubmit = (event) => {
    event.preventDefault();
    // Add your sign-in logic here
    // You can use 'email' and 'password' states for sign-in processing

    // After successful sign-in, you can close the modal
    closeSigninModal();
    
    const handleGoogleLogin = () => {
        // Implement the logic to initiate Google login here
        // This could involve redirecting the user to Google's OAuth login page or using a library like Firebase for authentication
        // For demonstration purposes, let's log a message to the console
        console.log("Initiating Google login...");
      };
    
      const handleFacebookLogin = () => {
        // Implement the logic to initiate Facebook login here
        // This could involve using the Facebook SDK for authentication
        // For demonstration purposes, let's log a message to the console
        console.log("Initiating Facebook login...");
      };

  };
  return (
    <div style={containerStyle}>
      <h1 style={greetingsStyle}>Welcome to ShipEase!</h1>
      <p style={descriptionStyle}>
        We are a dropshipping company offering a wide range of products.
      </p>
      <p style={descriptionStyle}>
        Discover amazing deals and start shopping today!
      </p>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle} onClick={openModal}>
          Sign Up
        </button>
        <button style={buttonStyle} onClick={openSigninModal}>
          Sign In
        </button>
      </div>
      <footer style={footerStyle}>
        &copy; {new Date().getFullYear()} ShipEase. All rights reserved.
      </footer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
        contentLabel="Sign Up Modal"
      >
    
    <div style={{ ...modalp, display: "flex", justifyContent: "space-between" }}>
    <div>Sign Up</div>
    <button onClick={closeModal} style={buttonPaddingStyle}>
      x
    </button>
  </div>
       

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            style={inputStyle}
          />
          <button style={{ ...buttonPadding,  }} type="submit">
            Sign-up
          </button>
        </form>
      </Modal>
      <Modal
        isOpen={signinModalIsOpen}
        onRequestClose={closeSigninModal}
        style={customModalStyles}
        contentLabel="Sign In Modal"
      >
         <div style={{ ...modalp, display: "flex", justifyContent: "space-between" }}>
    <div>Sign In</div>
    <button onClick={closeSigninModal} style={buttonPaddingStyle}>
      x
    </button>
  </div>
  <form onSubmit={handleSignInSubmit}>
  <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={handleEmailChange}
    style={inputStyle}
  />
  <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={handlePasswordChange}
    style={inputStyle}
  />
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <button style={{ ...buttonPadding }} type="submit">
      Sign In
    </button>
    <div>
      <a href="/forgot-password" style={{ color: '#007bff', marginRight: '10px' }}>
        Forgot Password?
      </a>
      
    </div>
  </div>
</form>


      </Modal>
    </div>
  );
};

export default Home;