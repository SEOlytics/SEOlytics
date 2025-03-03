import React, { useState } from 'react';
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend 
} from 'recharts';
import { 
  Calendar, ChevronDown, TrendingUp, Users, Globe, Clock, 
  MousePointer, ArrowUpRight, ArrowDownRight, Filter 
} from 'lucide-react';

const Analytics = () => {
  const [dateRange, setDateRange] = useState('7d');

  const trafficData = [
    { date: '03/10', organic: 2400, direct: 1400, referral: 800 },
    { date: '03/11', organic: 1398, direct: 2210, referral: 600 },
    { date: '03/12', organic: 9800, direct: 2290, referral: 900 },
    { date: '03/13', organic: 3908, direct: 2000, referral: 1100 },
    { date: '03/14', organic: 4800, direct: 2181, referral: 1000 },
    { date: '03/15', organic: 3800, direct: 2500, referral: 1200 },
    { date: '03/16', organic: 4300, direct: 2100, referral: 1100 },
  ];

  const conversionData = [
    { name: 'Homepage', value: 400, percentage: 35 },
    { name: 'Blog', value: 300, percentage: 25 },
    { name: 'Products', value: 300, percentage: 25 },
    { name: 'Contact', value: 200, percentage: 15 },
  ];

  const metrics = [
    { 
      title: 'Total Visitors',
      value: '45.2K',
      change: '+12.5%',
      trend: 'up',
      icon: <Users className="text-[#3E7B27]" size={24} />
    },
    {
      title: 'Avg. Session Duration',
      value: '4m 32s',
      change: '+5.2%',
      trend: 'up',
      icon: <Clock className="text-[#3E7B27]" size={24} />
    },
    {
      title: 'Bounce Rate',
      value: '32.8%',
      change: '-2.4%',
      trend: 'down',
      icon: <MousePointer className="text-[#3E7B27]" size={24} />
    },
    {
      title: 'Pages/Session',
      value: '3.2',
      change: '+0.8%',
      trend: 'up',
      icon: <Globe className="text-[#3E7B27]" size={24} />
    },
  ];

  const COLORS = ['#3E7B27', '#5C9F45', '#7AC363', '#98E781'];

  return (
    <div className="space-y-6">
      {/* Header with Date Range Selector */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-[#EFE3C2]">Analytics Dashboard</h2>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#0A1F16] border border-[#3E7B27] rounded-lg text-[#EFE3C2]">
            <Calendar size={20} />
            Last 7 Days
            <ChevronDown size={16} />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#3E7B27] text-[#EFE3C2] rounded-lg">
            Export Report
          </button>
        </div>
      </div>

      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="glassmorphism p-6 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#EFE3C2] text-sm">{metric.title}</span>
              {metric.icon}
            </div>
            <div className="flex items-end justify-between">
              <div className="text-2xl font-bold text-[#EFE3C2]">{metric.value}</div>
              <div className={`flex items-center ${
                metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
              }`}>
                {metric.trend === 'up' ? 
                  <ArrowUpRight size={20} /> : 
                  <ArrowDownRight size={20} />
                }
                <span>{metric.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Traffic Overview Chart */}
      <div className="glassmorphism p-6 rounded-xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-[#EFE3C2]">Traffic Overview</h3>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-[#0A1F16] border border-[#3E7B27] rounded-lg text-[#EFE3C2]">
            <Filter size={16} />
            Filter
          </button>
        </div>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trafficData}>
              <defs>
                <linearGradient id="organic" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3E7B27" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3E7B27" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="direct" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5C9F45" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#5C9F45" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="referral" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7AC363" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#7AC363" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#2D5A1D" />
              <XAxis dataKey="date" stroke="#EFE3C2" />
              <YAxis stroke="#EFE3C2" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#123524',
                  border: '1px solid #3E7B27',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="organic"
                stackId="1"
                stroke="#3E7B27"
                fill="url(#organic)"
                name="Organic"
              />
              <Area
                type="monotone"
                dataKey="direct"
                stackId="1"
                stroke="#5C9F45"
                fill="url(#direct)"
                name="Direct"
              />
              <Area
                type="monotone"
                dataKey="referral"
                stackId="1"
                stroke="#7AC363"
                fill="url(#referral)"
                name="Referral"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Conversion Sources */}
        <div className="glassmorphism p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-[#EFE3C2] mb-6">Conversion Sources</h3>
          <div className="flex items-center justify-center h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={conversionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {conversionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ 
                    backgroundColor: '#123524',
                    border: '1px solid #3E7B27',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* User Behavior */}
        <div className="glassmorphism p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-[#EFE3C2] mb-6">User Behavior</h3>
          <div className="space-y-4">
            {conversionData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: COLORS[index] }} />
                  <span className="text-[#EFE3C2]">{item.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#EFE3C2]">{item.percentage}%</span>
                  <div className="w-32 h-2 bg-[#0A1F16] rounded-full">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${item.percentage}%`,
                        backgroundColor: COLORS[index]
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics; 