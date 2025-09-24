import React from 'react';
import { Menu, Search, Bell, User, Settings } from 'lucide-react';
import './Header.css';

const Header = ({ onMenuClick, user }) => {
  return (
    <header className="header">
      <div className="header-content">
        {/* 左侧 - 菜单按钮和搜索 */}
        <div className="header-left">
          <button 
            className="menu-btn lg:hidden"
            onClick={onMenuClick}
            aria-label="打开菜单"
          >
            <Menu size={20} />
          </button>
          
          <div className="search-container hidden-mobile">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="搜索项目、任务..." 
              className="search-input"
            />
          </div>
        </div>
        
        {/* 右侧 - 通知和用户信息 */}
        <div className="header-right">
          {/* 通知按钮 */}
          <button className="notification-btn">
            <Bell size={20} />
            <span className="notification-badge">3</span>
          </button>
          
          {/* 用户信息 */}
          <div className="user-menu">
            <div className="user-avatar">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} />
              ) : (
                <User size={20} />
              )}
            </div>
            <div className="user-info hidden-mobile">
              <div className="user-name">{user.name}</div>
              <div className="user-role">{user.role}</div>
            </div>
          </div>
          
          {/* 设置按钮 */}
          <button className="settings-btn hidden-mobile">
            <Settings size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
