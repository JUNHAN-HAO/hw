import React from 'react';
import { User, Bell, Shield, Palette } from 'lucide-react';

const Settings = () => {
  return (
    <div className="settings-page">
      <div className="page-header">
        <div>
          <h1 className="page-title gradient-text">系统设置</h1>
          <p className="page-subtitle">管理用户账户和系统配置</p>
        </div>
      </div>

      <div className="settings-grid">
        <div className="settings-card">
          <div className="settings-icon">
            <User size={24} />
          </div>
          <h3>个人资料</h3>
          <p>管理个人信息和账户设置</p>
          <button className="btn btn-secondary">编辑资料</button>
        </div>

        <div className="settings-card">
          <div className="settings-icon">
            <Bell size={24} />
          </div>
          <h3>通知设置</h3>
          <p>配置通知方式和提醒频率</p>
          <button className="btn btn-secondary">管理通知</button>
        </div>

        <div className="settings-card">
          <div className="settings-icon">
            <Shield size={24} />
          </div>
          <h3>安全设置</h3>
          <p>密码修改和安全验证设置</p>
          <button className="btn btn-secondary">安全配置</button>
        </div>

        <div className="settings-card">
          <div className="settings-icon">
            <Palette size={24} />
          </div>
          <h3>界面主题</h3>
          <p>个性化界面风格和布局</p>
          <button className="btn btn-secondary">主题设置</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;

