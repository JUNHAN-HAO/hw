import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  Activity,
  Calendar,
  Target
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
  // 模拟数据
  const stats = [
    {
      title: '总项目数',
      value: '24',
      change: '+12%',
      trend: 'up',
      icon: Target,
      color: 'var(--accent-primary)'
    },
    {
      title: '进行中任务',
      value: '156',
      change: '+8%',
      trend: 'up',
      icon: Activity,
      color: 'var(--info)'
    },
    {
      title: '团队成员',
      value: '32',
      change: '+3',
      trend: 'up',
      icon: Users,
      color: 'var(--success)'
    },
    {
      title: '本月完成',
      value: '89',
      change: '+15%',
      trend: 'up',
      icon: CheckCircle,
      color: 'var(--warning)'
    }
  ];

  const projectData = [
    { name: '1月', completed: 12, inProgress: 8, planned: 5 },
    { name: '2月', completed: 15, inProgress: 12, planned: 7 },
    { name: '3月', completed: 18, inProgress: 15, planned: 9 },
    { name: '4月', completed: 22, inProgress: 18, planned: 12 },
    { name: '5月', completed: 25, inProgress: 20, planned: 15 },
    { name: '6月', completed: 28, inProgress: 24, planned: 18 }
  ];

  const taskStatusData = [
    { name: '已完成', value: 45, color: 'var(--success)' },
    { name: '进行中', value: 30, color: 'var(--info)' },
    { name: '待开始', value: 20, color: 'var(--warning)' },
    { name: '已逾期', value: 5, color: 'var(--error)' }
  ];

  const recentProjects = [
    {
      id: 1,
      name: '移动端APP开发',
      progress: 75,
      status: 'progress',
      dueDate: '2025-10-15',
      team: ['张三', '李四', '王五'],
      priority: 'high'
    },
    {
      id: 2,
      name: '数据分析平台',
      progress: 45,
      status: 'progress',
      dueDate: '2025-11-20',
      team: ['赵六', '孙七'],
      priority: 'medium'
    },
    {
      id: 3,
      name: '用户体验优化',
      progress: 90,
      status: 'review',
      dueDate: '2025-09-30',
      team: ['周八', '吴九', '郑十'],
      priority: 'low'
    }
  ];

  const upcomingTasks = [
    {
      id: 1,
      title: '完成API文档编写',
      project: '移动端APP开发',
      dueDate: '今天 18:00',
      priority: 'high',
      assignee: '张三'
    },
    {
      id: 2,
      title: '用户界面设计评审',
      project: '数据分析平台',
      dueDate: '明天 14:00',
      priority: 'medium',
      assignee: '李四'
    },
    {
      id: 3,
      title: '性能测试报告',
      project: '用户体验优化',
      dueDate: '9月25日 10:00',
      priority: 'low',
      assignee: '王五'
    }
  ];

  return (
    <div className="dashboard">
      {/* 页面标题 */}
      <div className="dashboard-header">
        <div>
          <h1 className="page-title gradient-text">项目仪表板</h1>
          <p className="page-subtitle">实时掌控项目进度，提升团队协作效率</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-secondary">
            <Calendar size={16} />
            查看日历
          </button>
          <button className="btn btn-primary">
            <Target size={16} />
            新建项目
          </button>
        </div>
      </div>

      {/* 统计卡片 */}
      <div className="stats-grid">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="stat-card">
              <div className="stat-icon" style={{ color: stat.color }}>
                <Icon size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-title">{stat.title}</div>
                <div className={`stat-change ${stat.trend}`}>
                  <TrendingUp size={14} />
                  {stat.change}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 图表区域 */}
      <div className="charts-grid">
        {/* 项目进度趋势 */}
        <div className="chart-card">
          <div className="chart-header">
            <h3>项目进度趋势</h3>
            <p>过去6个月项目完成情况</p>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={projectData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
                <XAxis dataKey="name" stroke="var(--text-muted)" />
                <YAxis stroke="var(--text-muted)" />
                <Bar dataKey="completed" fill="var(--success)" name="已完成" />
                <Bar dataKey="inProgress" fill="var(--info)" name="进行中" />
                <Bar dataKey="planned" fill="var(--warning)" name="计划中" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 任务状态分布 */}
        <div className="chart-card">
          <div className="chart-header">
            <h3>任务状态分布</h3>
            <p>当前所有任务的状态概览</p>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={taskStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {taskStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="pie-legend">
              {taskStatusData.map((item, index) => (
                <div key={index} className="legend-item">
                  <div 
                    className="legend-color" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="legend-text">{item.name}</span>
                  <span className="legend-value">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 项目和任务列表 */}
      <div className="content-grid">
        {/* 最近项目 */}
        <div className="content-card">
          <div className="content-header">
            <h3>最近项目</h3>
            <button className="btn btn-ghost">查看全部</button>
          </div>
          <div className="projects-list">
            {recentProjects.map((project) => (
              <div key={project.id} className="project-item">
                <div className="project-info">
                  <div className="project-name">{project.name}</div>
                  <div className="project-meta">
                    <span className={`priority-badge priority-${project.priority}`}>
                      {project.priority === 'high' ? '高优先级' : 
                       project.priority === 'medium' ? '中优先级' : '低优先级'}
                    </span>
                    <span className="due-date">
                      <Clock size={12} />
                      {project.dueDate}
                    </span>
                  </div>
                  <div className="project-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="progress-text">{project.progress}%</span>
                  </div>
                </div>
                <div className="project-team">
                  {project.team.slice(0, 3).map((member, idx) => (
                    <div key={idx} className="team-avatar">
                      {member.charAt(0)}
                    </div>
                  ))}
                  {project.team.length > 3 && (
                    <div className="team-more">+{project.team.length - 3}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 即将到期任务 */}
        <div className="content-card">
          <div className="content-header">
            <h3>即将到期</h3>
            <button className="btn btn-ghost">查看全部</button>
          </div>
          <div className="tasks-list">
            {upcomingTasks.map((task) => (
              <div key={task.id} className="task-item">
                <div className="task-info">
                  <div className="task-title">{task.title}</div>
                  <div className="task-project">{task.project}</div>
                  <div className="task-meta">
                    <span className={`priority-badge priority-${task.priority}`}>
                      {task.priority === 'high' ? '紧急' : 
                       task.priority === 'medium' ? '普通' : '低'}
                    </span>
                    <span className="task-assignee">负责人: {task.assignee}</span>
                  </div>
                </div>
                <div className="task-due">
                  <AlertTriangle size={16} className="due-icon" />
                  <span className="due-text">{task.dueDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

