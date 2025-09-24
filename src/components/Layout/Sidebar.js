import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FolderOpen, 
  CheckSquare, 
  BarChart3, 
  Settings,
  X,
  Zap
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose, user }) => {
  const navigation = [
    {
      name: '仪表板',
      href: '/dashboard',
      icon: LayoutDashboard,
      description: '项目概览和统计'
    },
    {
      name: '项目管理',
      href: '/projects',
      icon: FolderOpen,
      description: '创建和管理项目'
    },
    {
      name: '任务管理',
      href: '/tasks',
      icon: CheckSquare,
      description: '任务分配和跟踪'
    },
    {
      name: '数据报表',
      href: '/reports',
      icon: BarChart3,
      description: '进度分析和报告'
    },
    {
      name: '系统设置',
      href: '/settings',
      icon: Settings,
      description: '用户和系统配置'
    }
  ];

  return (
    <>
      <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        {/* 侧边栏头部 */}
        <div className="sidebar-header">
          <div className="logo">
            <div className="logo-icon">
              <Zap size={24} />
            </div>
            <div className="logo-text">
              <div className="logo-title gradient-text">TaskFlow</div>
              <div className="logo-subtitle">项目管理平台</div>
            </div>
          </div>
          
          {/* 移动端关闭按钮 */}
          <button 
            className="close-btn lg:hidden"
            onClick={onClose}
            aria-label="关闭菜单"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* 用户信息卡片 */}
        <div className="user-card">
          <div className="user-card-avatar">
            {user.name.charAt(0)}
          </div>
          <div className="user-card-info">
            <div className="user-card-name">{user.name}</div>
            <div className="user-card-role">{user.role}</div>
            <div className="user-card-department">{user.department}</div>
          </div>
          <div className="user-status online"></div>
        </div>
        
        {/* 导航菜单 */}
        <nav className="sidebar-nav">
          <div className="nav-section">
            <div className="nav-section-title">主要功能</div>
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) => 
                    `nav-item ${isActive ? 'nav-item-active' : ''}`
                  }
                  onClick={onClose}
                >
                  <div className="nav-item-icon">
                    <Icon size={20} />
                  </div>
                  <div className="nav-item-content">
                    <div className="nav-item-name">{item.name}</div>
                    <div className="nav-item-desc">{item.description}</div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </nav>
        
        {/* 底部信息 */}
        <div className="sidebar-footer">
          <div className="version-info">
            <div className="version-text">Version 1.0.0</div>
            <div className="copyright">© 2025 TaskFlow</div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

