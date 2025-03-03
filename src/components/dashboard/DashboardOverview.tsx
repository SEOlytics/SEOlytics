import React from 'react';
import { BarChart3, Users, Globe, FileText, TrendingUp, Eye, Clock, Target } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const DashboardOverview = () => {
  const stats = [
    { title: 'SEO Score', value: '85/100', icon: <BarChart3 size={24} className="text-[#3E7B27]" />, trend: '+5%' },
    { title: 'Site Traffic', value: '12.5K', icon: <Users size={24} className="text-[#3E7B27]" />, trend: '+12%' },
    { title: 'Keywords Ranked', value: '250+', icon: <Globe size={24} className="text-[#3E7B27]" />, trend: '+25' },
    { title: 'Content Generated', value: '45', icon: <FileText size={24} className="text-[#3E7B27]" />, trend: '+3' },
  ];

  const trafficData = [
    { name: 'Mon', value: 2400 },
    { name: 'Tue', value: 1398 },
    { name: 'Wed', value: 9800 },
    { name: 'Thu', value: 3908 },
    { name: 'Fri', value: 4800 },
    { name: 'Sat', value: 3800 },
    { name: 'Sun', value: 4300 },
  ];

  const keywordRankings = [
    { keyword: 'SEO Services', rank: 3, volume: '12.4K', difficulty: 67 },
    { keyword: 'Digital Marketing', rank: 5, volume: '33.2K', difficulty: 82 },
    { keyword: 'Content Strategy', rank: 2, volume: '5.5K', difficulty: 45 },
    { keyword: 'SEO Tools', rank: 4, volume: '18.7K', difficulty: 73 },
  ];

  const recentActivities = [
    { type: 'Content', message: 'New blog post generated', time: '2h ago' },
    { type: 'SEO', message: 'Keyword rankings updated', time: '4h ago' },
    { type: 'Traffic', message: 'Traffic spike detected', time: '6h ago' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-[#EFE3C2]">Dashboard Overview</h2>
        <button className="px-4 py-2 bg-[#3E7B27] text-[#EFE3C2] rounded-lg hover:bg-[#2D5A1D] transition-colors">
          Generate Report
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="glassmorphism p-6 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#EFE3C2] text-sm">{stat.title}</span>
              {stat.icon}
            </div>
            <div className="flex items-end justify-between">
              <div className="text-2xl font-bold text-[#EFE3C2]">{stat.value}</div>
              <div className="text-green-400 text-sm">{stat.trend}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Chart */}
        <div className="glassmorphism p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-[#EFE3C2] mb-4">Traffic Overview</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3E7B27" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3E7B27" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#2D5A1D" />
                <XAxis dataKey="name" stroke="#EFE3C2" />
                <YAxis stroke="#EFE3C2" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#123524',
                    border: '1px solid #3E7B27',
                    borderRadius: '8px'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3E7B27"
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Keyword Rankings */}
        <div className="glassmorphism p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-[#EFE3C2] mb-4">Top Keywords</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-[#EFE3C2] border-b border-[#3E7B27]/30">
                  <th className="py-3 text-left">Keyword</th>
                  <th className="py-3 text-left">Rank</th>
                  <th className="py-3 text-left">Volume</th>
                  <th className="py-3 text-left">Difficulty</th>
                </tr>
              </thead>
              <tbody>
                {keywordRankings.map((keyword, index) => (
                  <tr key={index} className="border-b border-[#3E7B27]/10">
                    <td className="py-3 text-[#EFE3C2]">{keyword.keyword}</td>
                    <td className="py-3 text-green-400">#{keyword.rank}</td>
                    <td className="py-3 text-[#EFE3C2]">{keyword.volume}</td>
                    <td className="py-3">
                      <div className="w-full bg-[#0A1F16] rounded-full h-2">
                        <div
                          className="bg-[#3E7B27] h-2 rounded-full"
                          style={{ width: `${keyword.difficulty}%` }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="glassmorphism p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-[#EFE3C2] mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-[#0A1F16] rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-[#3E7B27]/20 rounded-lg">
                  {activity.type === 'Content' ? (
                    <FileText size={20} className="text-[#3E7B27]" />
                  ) : activity.type === 'SEO' ? (
                    <Target size={20} className="text-[#3E7B27]" />
                  ) : (
                    <TrendingUp size={20} className="text-[#3E7B27]" />
                  )}
                </div>
                <div>
                  <p className="text-[#EFE3C2]">{activity.message}</p>
                  <p className="text-[#EFE3C2]/60 text-sm">{activity.time}</p>
                </div>
              </div>
              <button className="text-[#3E7B27] hover:text-[#2D5A1D]">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview; 