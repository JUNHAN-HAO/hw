import React from 'react';
import { BarChart3, PieChart, TrendingUp, Download } from 'lucide-react';

const Reports = () => {
  return (
    <div className="reports-page">
      <div className="page-header">
        <div>
          <h1 className="page-title gradient-text">数据报表</h1>
          <p className="page-subtitle">项目进度分析和数据可视化</p>
        </div>
        <button className="btn btn-primary">
          <Download size={16} />
          导出报表
        </button>
      </div>

      <div className="reports-grid">
        <div className="report-card">
          <div className="report-icon">
            <BarChart3 size={24} />
          </div>
          <h3>项目进度报表</h3>
          <p>查看所有项目的进度情况和完成率</p>
          <button className="btn btn-secondary">查看详情</button>
        </div>

        <div className="report-card">
          <div className="report-icon">
            <PieChart size={24} />
          </div>
          <h3>任务分布统计</h3>
          <p>分析任务状态分布和团队工作量</p>
          <button className="btn btn-secondary">查看详情</button>
        </div>

        <div className="report-card">
          <div className="report-icon">
            <TrendingUp size={24} />
          </div>
          <h3>效率分析</h3>
          <p>团队效率和项目交付质量分析</p>
          <button className="btn btn-secondary">查看详情</button>
        </div>
      </div>
    </div>
  );
};

export default Reports;

