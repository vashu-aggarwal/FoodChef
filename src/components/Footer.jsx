import React from 'react';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px 0', marginTop: '20px' }}>
      <p>&copy; 2024 Chef Food. All Rights Reserved.</p>
      <p>Follow us on:</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '10px' }}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>Facebook</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>Instagram</a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>Twitter</a>
      </div>
    </div>
  );
}

export default Footer;
