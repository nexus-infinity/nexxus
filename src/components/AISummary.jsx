import React, { useState } from 'react';
import { Bot } from 'lucide-react';

const AISummary = () => {
  const [input, setInput] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement actual AI API call
    setTimeout(() => {
      setSummary(`AI-generated summary for: "${input}"`);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="widget ai-summary">
      <h3>
        <Bot size={20} />
        AI-Powered Insights
      </h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter financial data or question for AI analysis..."
          rows="3"
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Analyzing...' : 'Generate Insights'}
        </button>
      </form>
      {summary && (
        <div className="ai-insights">
          <h4>AI Insights:</h4>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default AISummary;

