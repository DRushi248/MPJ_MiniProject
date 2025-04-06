import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FileItem {
  name: string;
  type: string;
  size: string;
  lastModified: string;
  sharedWith?: string;
}

interface SharedUser {
  id: number;
  avatar: string;
  name: string;
}

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const recentFiles: FileItem[] = [
    {
      name: 'MPJ Project Brief.docx',
      type: 'W',
      size: '8.2 MB',
      lastModified: 'Edited 8m ago'
    },
    {
      name: 'xyzaa.xls',
      type: 'X',
      size: '2.4 MB',
      lastModified: 'Edited 8m ago'
    },
    {
      name: 'photo.png',
      type: 'P',
      size: '4.8 MB',
      lastModified: 'Edited 8m ago'
    }
  ];

  const storageData = {
    total: 256,
    used: {
      documents: 2.8,
      video: 16.8,
      audio: 4.4,
      photos: 9
    }
  };

  const sharedUsers: SharedUser[] = [
    { id: 1, avatar: '/avatar1.jpg', name: 'User 1' },
    { id: 2, avatar: '/avatar2.jpg', name: 'User 2' },
    { id: 3, avatar: '/avatar3.jpg', name: 'User 3' },
    { id: 4, avatar: '/avatar4.jpg', name: 'User 4' },
    { id: 5, avatar: '/avatar5.jpg', name: 'User 5' }
  ];

  const handleFilesNavigation = () => {
    navigate('/files');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FD]">
      {/* Header */}
      <header className="bg-[#2A2F8F] text-white">
        <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Cloudrand</h1>
          <div className="flex items-center gap-8">
            <button className="p-2 hover:bg-[#232873] rounded-full transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </button>
            <button className="p-2 hover:bg-[#232873] rounded-full transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-white/10">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                AG
              </div>
              <div>
                <p className="text-sm font-medium">Aditya Garg</p>
                <p className="text-xs text-white/60">adityag@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-8 py-8">
        <div className="flex flex-col gap-8">
          {/* Welcome Section with Search */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">Welcome Back, Aditya</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search your files"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-[320px] pl-10 pr-4 py-2.5 bg-[#F8F9FD] rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-200"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="col-span-2 space-y-8">
              {/* Recently Edited Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-medium text-gray-900">Recently Edited</h3>
                  <button className="px-4 py-2 bg-[#0A1E44] text-white text-sm rounded-lg hover:bg-opacity-90 transition-colors">
                    View All
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  {recentFiles.map((file, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 flex items-start gap-4 shadow-sm">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        file.type === 'W' ? 'bg-blue-100 text-blue-600' :
                        file.type === 'X' ? 'bg-green-100 text-green-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>
                        {file.type}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{file.name}</h4>
                        <p className="text-sm text-gray-500">{file.lastModified}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upload Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-medium text-gray-900">Upload Files</h3>
                </div>
                <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full mx-auto flex items-center justify-center">
                      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">Drag and drop files, or Browse</p>
                  <p className="text-sm text-gray-500">Support zip and rar files</p>
                </div>
              </div>

              {/* Your Files Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-medium text-gray-900">Your Files</h3>
                  <button 
                    onClick={handleFilesNavigation}
                    className="px-4 py-2 bg-[#0A1E44] text-white text-sm rounded-lg hover:bg-opacity-90 transition-colors"
                  >
                    View All
                  </button>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="space-y-4">
                    {recentFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            file.type === 'W' ? 'bg-blue-100 text-blue-600' :
                            file.type === 'X' ? 'bg-green-100 text-green-600' :
                            'bg-purple-100 text-purple-600'
                          }`}>
                            {file.type}
                          </div>
                          <span className="font-medium">{file.name}</span>
                        </div>
                        <div className="flex items-center gap-16">
                          <span>{file.size}</span>
                          <span>{file.lastModified}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Storage Usage */}
              <div className="bg-[#0A1E44] text-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-medium mb-1">Storage</h3>
                    <p className="text-sm text-white/60">{storageData.used.documents + storageData.used.video + storageData.used.audio + storageData.used.photos} gb / {storageData.total} gb</p>
                  </div>
                  <button className="px-4 py-2 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition-colors">
                    Back Up Now
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <span>Documents</span>
                    </div>
                    <span>{storageData.used.documents} gb</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span>Video</span>
                    </div>
                    <span>{storageData.used.video} gb</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.828-2.828" />
                        </svg>
                      </div>
                      <span>Audio</span>
                    </div>
                    <span>{storageData.used.audio} gb</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span>Photos</span>
                    </div>
                    <span>{storageData.used.photos} gb</span>
                  </div>
                </div>
              </div>

              {/* Who has access */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-6">Who has access</h3>
                <div className="flex items-center gap-2">
                  {sharedUsers.map((user) => (
                    <div key={user.id} className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                      <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <button className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-200 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;