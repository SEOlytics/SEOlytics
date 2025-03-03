import React, { useState } from 'react';
import { 
  User, Bell, Key, Globe, Shield, Zap, Mail, Sliders,
  Toggle, Check, X, ChevronRight, AlertCircle, Trash2
} from 'lucide-react';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    rankingChanges: true,
    contentSuggestions: false,
    weeklyReports: true,
    securityAlerts: true
  });

  const [integrations] = useState([
    { name: 'Google Analytics', status: 'connected', lastSync: '2 hours ago' },
    { name: 'Google Search Console', status: 'connected', lastSync: '1 hour ago' },
    { name: 'Ahrefs', status: 'disconnected', lastSync: 'Never' },
    { name: 'Semrush', status: 'pending', lastSync: 'Pending' }
  ]);

  const [apiKeys] = useState([
    { name: 'Production API Key', last4: '8f3d', created: '2024-01-15' },
    { name: 'Development API Key', last4: '2e9a', created: '2024-02-01' }
  ]);

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-[#EFE3C2]">Settings</h2>

      {/* Profile Settings */}
      <div className="glassmorphism p-6 rounded-xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <User className="text-[#3E7B27]" size={24} />
            <h3 className="text-xl font-semibold text-[#EFE3C2]">Profile Settings</h3>
          </div>
          <button className="px-4 py-2 bg-[#3E7B27] text-[#EFE3C2] rounded-lg hover:bg-[#2D5A1D] transition-colors">
            Edit Profile
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-[#EFE3C2]/70 mb-1">Full Name</label>
              <input 
                type="text" 
                value="John Doe"
                disabled
                className="w-full px-4 py-2 bg-[#0A1F16] border border-[#3E7B27] rounded-lg text-[#EFE3C2]"
              />
            </div>
            <div>
              <label className="block text-sm text-[#EFE3C2]/70 mb-1">Email</label>
              <input 
                type="email" 
                value="john@example.com"
                disabled
                className="w-full px-4 py-2 bg-[#0A1F16] border border-[#3E7B27] rounded-lg text-[#EFE3C2]"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-[#EFE3C2]/70 mb-1">Company</label>
              <input 
                type="text" 
                value="SEO Agency Inc."
                disabled
                className="w-full px-4 py-2 bg-[#0A1F16] border border-[#3E7B27] rounded-lg text-[#EFE3C2]"
              />
            </div>
            <div>
              <label className="block text-sm text-[#EFE3C2]/70 mb-1">Role</label>
              <input 
                type="text" 
                value="Administrator"
                disabled
                className="w-full px-4 py-2 bg-[#0A1F16] border border-[#3E7B27] rounded-lg text-[#EFE3C2]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="glassmorphism p-6 rounded-xl">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="text-[#3E7B27]" size={24} />
          <h3 className="text-xl font-semibold text-[#EFE3C2]">Notification Settings</h3>
        </div>
        <div className="space-y-4">
          {Object.entries(notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between p-4 bg-[#0A1F16] rounded-lg">
              <div>
                <h4 className="text-[#EFE3C2] font-medium">{key.replace(/([A-Z])/g, ' $1').trim()}</h4>
                <p className="text-sm text-[#EFE3C2]/60">Receive notifications about {key.toLowerCase()}</p>
              </div>
              <button
                onClick={() => setNotifications(prev => ({ ...prev, [key]: !value }))}
                className={`w-12 h-6 rounded-full transition-colors ${
                  value ? 'bg-[#3E7B27]' : 'bg-[#2D5A1D]/30'
                } relative`}
              >
                <div className={`absolute top-1 w-4 h-4 rounded-full bg-[#EFE3C2] transition-transform ${
                  value ? 'right-1' : 'left-1'
                }`} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* API Keys */}
      <div className="glassmorphism p-6 rounded-xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Key className="text-[#3E7B27]" size={24} />
            <h3 className="text-xl font-semibold text-[#EFE3C2]">API Keys</h3>
          </div>
          <button className="px-4 py-2 bg-[#3E7B27] text-[#EFE3C2] rounded-lg hover:bg-[#2D5A1D] transition-colors">
            Generate New Key
          </button>
        </div>
        <div className="space-y-4">
          {apiKeys.map((key, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-[#0A1F16] rounded-lg">
              <div>
                <h4 className="text-[#EFE3C2] font-medium">{key.name}</h4>
                <p className="text-sm text-[#EFE3C2]/60">Created on {key.created}</p>
              </div>
              <div className="flex items-center gap-4">
                <code className="px-3 py-1 bg-[#123524] rounded text-[#EFE3C2]">
                  ****-****-****-{key.last4}
                </code>
                <button className="text-red-400 hover:text-red-300">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Integrations */}
      <div className="glassmorphism p-6 rounded-xl">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="text-[#3E7B27]" size={24} />
          <h3 className="text-xl font-semibold text-[#EFE3C2]">Integrations</h3>
        </div>
        <div className="space-y-4">
          {integrations.map((integration, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-[#0A1F16] rounded-lg">
              <div>
                <h4 className="text-[#EFE3C2] font-medium">{integration.name}</h4>
                <p className="text-sm text-[#EFE3C2]/60">Last synced: {integration.lastSync}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  integration.status === 'connected' ? 'bg-green-500/20 text-green-400' :
                  integration.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {integration.status}
                </span>
                <button className="p-2 hover:bg-[#3E7B27]/10 rounded-lg transition-colors">
                  <ChevronRight size={20} className="text-[#3E7B27]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings; 