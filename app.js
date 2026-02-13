// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <div className="logo">🤖 AI CREATIVE ASSISTANT</div>
        <nav>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#dashboard">Dashboard</a>
          <button className="signup">Sign Up</button>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h1>Your Creative Sidekick</h1>
          <p>Helps creatives with streaming and some AI magic for content creation.</p>
          <button className="cta">Start Free Trial</button>
        </div>
        <div className="hero-image">
          <img src="https://via.placeholder.com/300x200" alt="AI Assistant" />
        </div>
      </section>

      <section className="features" id="features">
        <div className="feature-card">
          <h3>🎥 Streaming Support</h3>
          <p>Enhance your live streams with real-time overlays and insights.</p>
        </div>
        <div className="feature-card">
          <h3>✨ Content Creation Magic</h3>
          <p>Generate captivating ideas and transform them into content.</p>
        </div>
        <div className="feature-card">
          <h3>💰 Monetization Tools</h3>
          <p>Unlock new revenue streams and optimize your income.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
