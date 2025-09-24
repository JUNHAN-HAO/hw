import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';

// Components
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Dashboard from './components/Pages/Dashboard';
import Projects from './components/Pages/Projects';
import Tasks from './components/Pages/Tasks';
import Reports from './components/Pages/Reports';
import Settings from './components/Pages/Settings';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user] = useState({
    name: '张三',
    role: '项目经理',
    avatar: null,
    department: '技术部'
  });

  return (
    <Router>
      <div className="app">
        {/* 移动端遮罩 */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        {/* 侧边栏 */}
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)}
          user={user}
        />
        
        {/* 主内容区域 */}
        <div className="main-content">
          {/* 顶部导航 */}
          <Header 
            onMenuClick={() => setSidebarOpen(true)}
            user={user}
          />
          
          {/* 页面内容 */}
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
