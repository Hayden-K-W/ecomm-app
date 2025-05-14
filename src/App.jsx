import { useState } from 'react'
import ProductList from './ProductList'
import './App.css'

function App() {
  const [showContactForm, setShowContactForm] = useState(false);
  
  const products = [
    { 
      id: 1, 
      name: 'AMD Ryzen 5 7700X',
      description: 'AMD is back with another killer CPU! With the 7700x, you can expect virtually uncapped performance.', 
      price: 350.99,
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80'
    },
    { 
      id: 2, 
      name: 'Nvidia GTX 4080', 
      description: 'Play any game you can think of at 60fps and beyond! The GTX 4080 is a top-of-the-line graphics card for gamers everywhere. Work with AI with ease, built to perform', 
      price: 400.49,
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80'
    },
    { 
      id: 3, 
      name: 'MSI Atlas Mystic Case', 
      description: 'Sexy hardware deserves a sexy wrapper. Get the MSI Mystic, with RGB controller, GPU holder, and RGB lights built in. Expertly designed cooling keeps your hot hardware cool. We mean cool and Coool ;)', 
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1587202372616-b43abea06c2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80'
    },
    { 
      id: 4, 
      name: 'Intel Core i9 14900k', 
      description: 'Blazingly fast processor that can handle any task you need, with factory speeds of 4.4 Ghz, and 8 P-cores and 16 E-cores! Made for all kinds of tasks, run your favorite game while rendering a video.', 
      price: 399.99,
      image: 'https://images.unsplash.com/photo-1662221070761-2af5c07ed269?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">TechGear</div>
        <div className="nav-links">
          <button className="nav-link active">Home</button>
          <button className="nav-link" onClick={toggleContactForm}>Contact</button>
        </div>
      </nav>
      
      <header className="hero-section">
        <h1>Welcome to TechGear</h1>
        <p>Your one-stop shop for premium computer hardware</p>
      </header>
      
      <main>
        <ProductList products={products} />
      </main>
      
      {showContactForm && (
        <div className="contact-form-overlay">
          <div className="contact-form">
            <h2>Contact Us</h2>
            <button className="close-btn" onClick={toggleContactForm}>×</button>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      )}
      
      <footer>
        <p>&copy; 2023 TechGear. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
