import React from 'react';
import { Home, BarChart2, FileText, Users } from 'lucide-react';

const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <nav>
        <ul>
          <li>
            <a href="#dashboard">
              <Home size={20} />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#analytics">
              <BarChart2 size={20} />
              <span>Analytics</span>
            </a>
          </li>
          <li>
            <a href="#reports">
              <FileText size={20} />
              <span>Reports</span>
            </a>
          </li>
          <li>
            <a href="#team">
              <Users size={20} />
              <span>Team</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

