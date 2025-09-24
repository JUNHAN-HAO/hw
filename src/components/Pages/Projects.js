import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Calendar,
  Users,
  Target,
  MoreHorizontal,
  Edit
} from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // grid 或 list

  // 模拟项目数据
  const projects = [
    {
      id: 1,
      name: '移动端APP开发',
      description: '开发跨平台移动应用，支持iOS和Android系统',
      status: 'progress',
      progress: 75,
      startDate: '2025-08-01',
      endDate: '2025-10-15',
      department: '技术部',
      manager: '张三',
      members: ['张三', '李四', '王五', '赵六'],
      tasks: { total: 24, completed: 18, inProgress: 4, pending: 2 },
      priority: 'high',
      budget: '150万',
      tags: ['移动开发', 'React Native', 'API集成']
    },
    {
      id: 2,
      name: '数据分析平台',
      description: '构建企业级数据分析和可视化平台',
      status: 'progress',
      progress: 45,
      startDate: '2025-09-01',
      endDate: '2025-11-20',
      department: '数据部',
      manager: '李四',
      members: ['李四', '王五', '赵六'],
      tasks: { total: 18, completed: 8, inProgress: 6, pending: 4 },
      priority: 'medium',
      budget: '200万',
      tags: ['大数据', 'Python', 'BI工具']
    },
    {
      id: 3,
      name: '用户体验优化',
      description: '全面优化产品用户体验，提升用户满意度',
      status: 'review',
      progress: 90,
      startDate: '2025-07-15',
      endDate: '2025-09-30',
      department: '设计部',
      manager: '王五',
      members: ['王五', '周八', '吴九'],
      tasks: { total: 12, completed: 11, inProgress: 1, pending: 0 },
      priority: 'low',
      budget: '80万',
      tags: ['UI设计', '用户研究', 'A/B测试']
    },
    {
      id: 4,
      name: '云基础设施升级',
      description: '升级云服务架构，提升系统性能和稳定性',
      status: 'planning',
      progress: 15,
      startDate: '2025-10-01',
      endDate: '2025-12-31',
      department: '运维部',
      manager: '赵六',
      members: ['赵六', '孙七'],
      tasks: { total: 20, completed: 3, inProgress: 2, pending: 15 },
      priority: 'high',
      budget: '300万',
      tags: ['云计算', 'DevOps', '容器化']
    }
  ];

  const statusOptions = [
    { value: 'all', label: '全部状态' },
    { value: 'planning', label: '规划中' },
    { value: 'progress', label: '进行中' },
    { value: 'review', label: '评审中' },
    { value: 'completed', label: '已完成' },
    { value: 'paused', label: '已暂停' }
  ];

  const getStatusText = (status) => {
    const statusMap = {
      planning: '规划中',
      progress: '进行中',
      review: '评审中',
      completed: '已完成',
      paused: '已暂停'
    };
    return statusMap[status] || status;
  };

  const getPriorityText = (priority) => {
    const priorityMap = {
      high: '高优先级',
      medium: '中优先级',
      low: '低优先级'
    };
    return priorityMap[priority] || priority;
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || project.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="projects-page">
      {/* 页面标题 */}
      <div className="page-header">
        <div>
          <h1 className="page-title gradient-text">项目管理</h1>
          <p className="page-subtitle">创建、管理和跟踪所有项目进度</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={16} />
          新建项目
        </button>
      </div>

      {/* 工具栏 */}
      <div className="toolbar">
        <div className="toolbar-left">
          {/* 搜索框 */}
          <div className="search-container">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="搜索项目..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* 状态筛选 */}
          <select
            className="filter-select"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            {statusOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="toolbar-right">
          {/* 视图切换 */}
          <div className="view-toggle">
            <button
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              网格
            </button>
            <button
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              列表
            </button>
          </div>

          <button className="btn btn-secondary">
            <Filter size={16} />
            更多筛选
          </button>
        </div>
      </div>

      {/* 项目统计 */}
      <div className="project-stats">
        <div className="stat-item">
          <span className="stat-label">总项目数</span>
          <span className="stat-value">{projects.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">进行中</span>
          <span className="stat-value">
            {projects.filter(p => p.status === 'progress').length}
          </span>
        </div>
        <div className="stat-item">
          <span className="stat-label">已完成</span>
          <span className="stat-value">
            {projects.filter(p => p.status === 'completed').length}
          </span>
        </div>
        <div className="stat-item">
          <span className="stat-label">总预算</span>
          <span className="stat-value">730万</span>
        </div>
      </div>

      {/* 项目列表/网格 */}
      <div className={`projects-container ${viewMode}`}>
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            {/* 项目头部 */}
            <div className="project-header">
              <div className="project-title-section">
                <h3 className="project-title">{project.name}</h3>
                <div className="project-badges">
                  <span className={`status-badge status-${project.status}`}>
                    {getStatusText(project.status)}
                  </span>
                  <span className={`priority-badge priority-${project.priority}`}>
                    {getPriorityText(project.priority)}
                  </span>
                </div>
              </div>
              <div className="project-actions">
                <button className="action-btn">
                  <Edit size={16} />
                </button>
                <button className="action-btn">
                  <MoreHorizontal size={16} />
                </button>
              </div>
            </div>

            {/* 项目描述 */}
            <p className="project-description">{project.description}</p>

            {/* 项目进度 */}
            <div className="project-progress-section">
              <div className="progress-header">
                <span className="progress-label">项目进度</span>
                <span className="progress-percentage">{project.progress}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            {/* 任务统计 */}
            <div className="task-stats">
              <div className="task-stat">
                <Target size={14} />
                <span>总任务: {project.tasks.total}</span>
              </div>
              <div className="task-stat completed">
                <span>已完成: {project.tasks.completed}</span>
              </div>
              <div className="task-stat progress">
                <span>进行中: {project.tasks.inProgress}</span>
              </div>
            </div>

            {/* 项目信息 */}
            <div className="project-info">
              <div className="info-row">
                <div className="info-item">
                  <Calendar size={14} />
                  <span>{project.startDate} - {project.endDate}</span>
                </div>
                <div className="info-item">
                  <Users size={14} />
                  <span>{project.members.length} 人</span>
                </div>
              </div>
              <div className="info-row">
                <div className="info-item">
                  <span className="info-label">负责人:</span>
                  <span>{project.manager}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">部门:</span>
                  <span>{project.department}</span>
                </div>
              </div>
            </div>

            {/* 团队成员 */}
            <div className="project-team">
              <span className="team-label">团队成员:</span>
              <div className="team-avatars">
                {project.members.slice(0, 4).map((member, idx) => (
                  <div key={idx} className="team-avatar" title={member}>
                    {member.charAt(0)}
                  </div>
                ))}
                {project.members.length > 4 && (
                  <div className="team-more">+{project.members.length - 4}</div>
                )}
              </div>
            </div>

            {/* 标签 */}
            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 空状态 */}
      {filteredProjects.length === 0 && (
        <div className="empty-state">
          <Target size={48} className="empty-icon" />
          <h3>没有找到项目</h3>
          <p>尝试调整搜索条件或创建新项目</p>
          <button className="btn btn-primary">
            <Plus size={16} />
            创建项目
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;

