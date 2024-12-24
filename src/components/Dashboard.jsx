import FinancialSummary from './FinancialSummary';
import TaskTracker from './TaskTracker';
import AISummary from './AISummary';

const Dashboard = () => {
  return (
    <main className="dashboard">
      <h2>Financial Overview</h2>
      <div className="dashboard-widgets">
        <FinancialSummary />
        <TaskTracker />
        <AISummary />
      </div>
    </main>
  );
};

export default Dashboard;

