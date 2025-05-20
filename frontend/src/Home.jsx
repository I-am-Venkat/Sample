import React from 'react';

const Home = () => {
  return (
    
    <div style={styles.container}>
        {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navLogo}>MyApp</div>
        <ul style={styles.navLinks}>
          <li><a href="/Home" style={styles.navLink}>Home</a></li>
          <li><a href="#Users" style={styles.navLink}>Users</a></li>
          <li><a href="#about" style={styles.navLink}>About</a></li>
          <li><a href="/Login" style={styles.navLink}>Logout</a></li>
        </ul>
      </nav>
        
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>Welcome to MyApp</h1>
        <p style={styles.subtitle}>A simple and universal homepage for your application.</p>
      </header>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <div style={styles.featureCard}>
          <h3>Fast</h3>
          <p>Quick and responsive for smooth user experience.</p>
        </div>
        <div style={styles.featureCard}>
          <h3>Secure</h3>
          <p>Your data is protected with top-level security.</p>
        </div>
        <div style={styles.featureCard}>
          <h3>Easy to Use</h3>
          <p>Designed with simplicity for everyone.</p>
        </div>
      </section>

      {/* Footer */}
      {/* <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', sans-serif",
    padding: '0',
    margin: '0',
    textAlign: 'center',
    color: '#333',
    // backgroundColor:'white'
  },
   navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: '10px 20px',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  navLogo: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.5em',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1em',
  },
  header: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '60px 20px',
  },
  title: {
    fontSize: '3em',
    margin: '0',
  },
  subtitle: {
    fontSize: '1.2em',
    marginTop: '10px',
  },
  featuresSection: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: '40px 20px',
    flexWrap: 'wrap',
  },
  featureCard: {
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderRadius: '10px',
    width: '250px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  },
  
};

export default Home;
