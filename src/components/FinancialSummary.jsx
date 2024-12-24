import React from 'react';
import { DollarSign, TrendingUp, TrendingDown } from 'lucide-react';

const FinancialSummary = () => {
  return (
    <div className="widget financial-summary">
      <h3>Financial Summary</h3>
      <div className="financial-stats">
        <div className="stat">
          <DollarSign size={24} />
          <div>
            <h4>Total Revenue</h4>
            <p>$1,234,567</p>
          </div>
        </div>
        <div className="stat">
          <TrendingUp size={24} color="green" />
          <div>
            <h4>Growth</h4>
            <p>+15.3%</p>
          </div>
        </div>
        <div className="stat">
          <TrendingDown size={24} color="red" />
          <div>
            <h4>Expenses</h4>
            <p>$567,890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialSummary;

