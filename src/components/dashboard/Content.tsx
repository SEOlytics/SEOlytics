import React, { useState } from 'react';
import { FileText, Plus, Search, Filter, MoreVertical, Edit3, Trash2, Eye, MessageSquare, ThumbsUp } from 'lucide-react';

const Content = () => {
  const [activeTab, setActiveTab] = useState('all');

  const contentItems = [
    {
      id: 1,
      title: "10 Essential SEO Strategies for 2024",
      status: "published",
      date: "2024-03-15",
      views: 1234,
      likes: 89,
      comments: 23,
      category: "SEO",
      author: "John Doe",
      score: 92
    },
    {
      id: 2,
      title: "Content Marketing Guide",
      status: "draft",
      date: "2024-03-14",
      category: "Marketing",
      author: "Jane Smith",
      score: 78
    },
    // Add more items...
  ];

  const categories = [
    { name: 'All', value: 'all' },
    { name: 'Published', value: 'published' },
    { name: 'Drafts', value: 'draft' },
    { name: 'Archived', value: 'archived' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-[#EFE3C2]">Content Management</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#3E7B27] text-[#EFE3C2] rounded-lg hover:bg-[#2D5A1D] transition-colors">
          <Plus size={20} />
          New Content
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div className="glassmorphism p-4 rounded-xl flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#3E7B27]" size={20} />
            <input
              type="text"
              placeholder="Search content..."
              className="w-full pl-10 pr-4 py-2 bg-[#0A1F16] border border-[#3E7B27] rounded-lg text-[#EFE3C2] placeholder-[#EFE3C2]/50"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#0A1F16] border border-[#3E7B27] rounded-lg text-[#EFE3C2]">
            <Filter size={20} />
            Filters
          </button>
          <select className="px-4 py-2 bg-[#0A1F16] border border-[#3E7B27] rounded-lg text-[#EFE3C2]">
            <option>Sort by: Latest</option>
            <option>Sort by: Popular</option>
            <option>Sort by: Score</option>
          </select>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="flex gap-4 border-b border-[#3E7B27]/30">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setActiveTab(category.value)}
            className={`px-4 py-2 text-[#EFE3C2] border-b-2 transition-colors ${
              activeTab === category.value ? 'border-[#3E7B27]' : 'border-transparent'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid gap-6">
        {contentItems.map((item) => (
          <div key={item.id} className="glassmorphism p-6 rounded-xl">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold text-[#EFE3C2]">{item.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    item.status === 'published' ? 'bg-green-500/20 text-green-400' :
                    item.status === 'draft' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-[#EFE3C2]/60">
                  <span>{item.date}</span>
                  <span>•</span>
                  <span>{item.category}</span>
                  <span>•</span>
                  <span>{item.author}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {item.status === 'published' && (
                  <div className="flex items-center gap-6 mr-6">
                    <div className="flex items-center gap-2">
                      <Eye size={18} className="text-[#3E7B27]" />
                      <span className="text-[#EFE3C2]">{item.views}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ThumbsUp size={18} className="text-[#3E7B27]" />
                      <span className="text-[#EFE3C2]">{item.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare size={18} className="text-[#3E7B27]" />
                      <span className="text-[#EFE3C2]">{item.comments}</span>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-[#3E7B27]/10 rounded-lg transition-colors">
                    <Edit3 size={20} className="text-[#3E7B27]" />
                  </button>
                  <button className="p-2 hover:bg-red-500/10 rounded-lg transition-colors">
                    <Trash2 size={20} className="text-red-400" />
                  </button>
                  <button className="p-2 hover:bg-[#3E7B27]/10 rounded-lg transition-colors">
                    <MoreVertical size={20} className="text-[#3E7B27]" />
                  </button>
                </div>
              </div>
            </div>
            {item.score && (
              <div className="mt-4 flex items-center gap-2">
                <div className="flex-1 h-2 bg-[#0A1F16] rounded-full">
                  <div
                    className="h-2 bg-[#3E7B27] rounded-full"
                    style={{ width: `${item.score}%` }}
                  />
                </div>
                <span className="text-sm text-[#EFE3C2]">Score: {item.score}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content; 