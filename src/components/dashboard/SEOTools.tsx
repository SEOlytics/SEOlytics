import React, { useState } from 'react';
import { Search, Globe, ArrowUp, AlertCircle, RefreshCcw } from 'lucide-react';

const SEOTools = () => {
  const [url, setUrl] = useState('');

  const seoMetrics = [
    { label: 'Domain Authority', value: '65/100', trend: '+5', status: 'good' },
    { label: 'Page Speed', value: '89/100', trend: '+2', status: 'good' },
    { label: 'Backlinks', value: '1.2K', trend: '+123', status: 'good' },
    { label: 'SEO Issues', value: '12', trend: '-3', status: 'warning' },
  ];

  const seoIssues = [
    { severity: 'high', issue: 'Missing meta descriptions', pages: 3 },
    { severity: 'medium', issue: 'Images without alt text', pages: 8 },
    { severity: 'low', issue: 'Long URLs', pages: 12 },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#EFE3C2]">SEO Tools</h2>

      {/* URL Analysis Tool */}
      <div className="glassmorphism p-6 rounded-xl">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Enter URL to analyze..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 px-4 py-2 bg-[#0A1F16] border border-[#3E7B27] rounded-lg text-[#EFE3C2]"
          />
          <button className="px-6 py-2 bg-[#3E7B27] text-[#EFE3C2] rounded-lg hover:bg-[#2D5A1D] transition-colors">
            Analyze
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {seoMetrics.map((metric, index) => (
          <div key={index} className="glassmorphism p-6 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#EFE3C2] text-sm">{metric.label}</span>
              <span className={`text-sm ${metric.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                {metric.trend}
              </span>
            </div>
            <div className="text-2xl font-bold text-[#EFE3C2]">{metric.value}</div>
          </div>
        ))}
      </div>

      {/* SEO Issues Table */}
      <div className="glassmorphism p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-[#EFE3C2] mb-4">SEO Issues</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-[#EFE3C2] border-b border-[#3E7B27]/30">
                <th className="py-3 text-left">Severity</th>
                <th className="py-3 text-left">Issue</th>
                <th className="py-3 text-left">Affected Pages</th>
                <th className="py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {seoIssues.map((issue, index) => (
                <tr key={index} className="border-b border-[#3E7B27]/10">
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      issue.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                      issue.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {issue.severity}
                    </span>
                  </td>
                  <td className="py-3 text-[#EFE3C2]">{issue.issue}</td>
                  <td className="py-3 text-[#EFE3C2]">{issue.pages}</td>
                  <td className="py-3">
                    <button className="text-[#3E7B27] hover:text-[#2D5A1D]">
                      Fix Issue
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button className="glassmorphism p-6 rounded-xl hover:bg-[#3E7B27]/10 transition-colors group">
          <RefreshCcw className="h-6 w-6 text-[#3E7B27] mb-2 group-hover:rotate-180 transition-transform" />
          <h3 className="text-lg font-semibold text-[#EFE3C2]">Refresh Analysis</h3>
          <p className="text-sm text-[#EFE3C2]/70">Update your SEO metrics</p>
        </button>
        {/* Add more quick actions */}
      </div>
    </div>
  );
};

export default SEOTools; 