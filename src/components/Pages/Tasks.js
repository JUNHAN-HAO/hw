import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Calendar,
  User,
  CheckSquare,
  ChevronDown
} from 'lucide-react';

const Tasks = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // 模拟任务数据
  const tasks = [
    {
      id: 1,
      title: 'API接口开发',
      description: '开发用户认证相关的API接口',
      status: 'progress',
      priority: 'high',
      project: '移动端APP开发',
      assignee: '张三',
      dueDate: '2025-09-25',
      progress: 60,
      tags: ['后端开发', 'API']
    },
    {
      id: 2,
      title: 'UI界面设计',
      description: '设计主要页面的用户界面',
      status: 'completed',
      priority: 'medium',
      project: '数据分析平台',
      assignee: '李四',
      dueDate: '2025-09-20',
      progress: 100,
      tags: ['设计', 'UI']
    },
    {
      id: 3,
      title: '数据库优化',
      description: '优化查询性能，建立索引',
      status: 'pending',
      priority: 'low',
      project: '用户体验优化',
      assignee: '王五',
      dueDate: '2025-09-30',
      progress: 0,
      tags: ['数据库', '性能优化']
    }
  ];

  const getStatusText = (status) => {
    const statusMap = {
      pending: '待开始',
      progress: '进行中',
      completed: '已完成',
      review: '待审核'
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

  return (
    <div className="tasks-page">
      {/* 页面标题 */}
      <div className="page-header">
        <div>
          <h1 className="page-title gradient-text">任务管理</h1>
          <p className="page-subtitle">分配、跟踪和管理所有项目任务</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={16} />
          新建任务
        </button>
      </div>

      {/* 工具栏 */}
      <div className="toolbar">
        <div className="toolbar-left">
          <div className="search-container">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="搜索任务..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="filter-select"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">全部状态</option>
            <option value="pending">待开始</option>
            <option value="progress">进行中</option>
            <option value="completed">已完成</option>
            <option value="review">待审核</option>
          </select>
        </div>
        <div className="toolbar-right">
          <button className="btn btn-secondary">
            <Filter size={16} />
            筛选
          </button>
          <button className="btn btn-secondary">
            <Calendar size={16} />
            日历视图
          </button>
        </div>
      </div>

      {/* 任务列表 */}
      <div className="tasks-container">
        {tasks.map(task => (
          <div key={task.id} className="task-card">
            <div className="task-header">
              <div className="task-title-section">
                <h3 className="task-title">{task.title}</h3>
                <div className="task-badges">
                  <span className={`status-badge status-${task.status}`}>
                    {getStatusText(task.status)}
                  </span>
                  <span className={`priority-badge priority-${task.priority}`}>
                    {getPriorityText(task.priority)}
                  </span>
                </div>
              </div>
              <div className="task-actions">
                <button className="action-btn">
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>

            <p className="task-description">{task.description}</p>

            <div className="task-meta">
              <div className="meta-item">
                <User size={14} />
                <span>{task.assignee}</span>
              </div>
              <div className="meta-item">
                <Calendar size={14} />
                <span>{task.dueDate}</span>
              </div>
              <div className="meta-item">
                <CheckSquare size={14} />
                <span>{task.project}</span>
              </div>
            </div>

            <div className="task-progress">
              <div className="progress-header">
                <span className="progress-label">进度</span>
                <span className="progress-percentage">{task.progress}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${task.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="task-tags">
              {task.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;

