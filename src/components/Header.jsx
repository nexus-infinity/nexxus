import React from 'react';
import { Menu } from 'lucide-react';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <Menu size={24} />
      </button>
      <h1>Nexxus Dashboard</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#analytics">Analytics</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

