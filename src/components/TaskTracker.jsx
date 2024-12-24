import React from 'react';
import { CheckCircle, Clock, AlertTriangle } from 'lucide-react';

const TaskTracker = () => {
  const tasks = [
    { id: 1, title: 'Review Q2 Financial Statements', status: 'completed' },
    { id: 2, title: 'Analyze Intercompany Loans', status: 'in-progress' },
    { id: 3, title: 'Update Bank Account Information', status: 'pending' },
  ];

  return (
    <div className="widget task-tracker">
      <h3>Priority Tasks</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={`task ${task.status}`}>
            {task.status === 'completed' && <CheckCircle size={16} color="green" />}
            {task.status === 'in-progress' && <Clock size={16} color="orange" />}
            {task.status === 'pending' && <AlertTriangle size={16} color="red" />}
            <span>{task.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskTracker;

