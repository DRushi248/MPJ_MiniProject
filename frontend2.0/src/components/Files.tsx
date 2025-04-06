import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FileItem {
  name: string;
  fileSize: string;
  lastModified: string;
  sharedUsers?: number;
}

interface FolderItem {
  name: string;
  itemCount: string;
  size: string;
}

const Files: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const [files] = useState<FileItem[]>([
    {
      name: 'UX-UI.zip',
      fileSize: '242 MB',
      lastModified: 'Jan 21, 2025',
    },
    {
      name: 'UX-UI.zip',
      fileSize: '242 MB',
      lastModified: 'Jan 21, 2025',
    }
  ]);

  const [folders] = useState<FolderItem[]>([
    {
      name: 'XYZ',
      itemCount: '123 items',
      size: '160GB'
    },
    {
      name: 'ABC',
      itemCount: '231 items',
      size: '144.30 MB'
    },
    {
      name: 'MPJ',
      itemCount: '3 items',
      size: '4.50 MB'
    }
  ]);

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

      {/* Sub Navigation */}
      <div className="bg-[#2A2F8F] w-full">
        <div className="max-w-[1400px] mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-12 flex-grow">
              <button className="px-5 py-2.5 text-white font-medium border-b-2 border-white">
                My Storage
              </button>
              <button className="px-5 py-2.5 text-white/70 hover:text-white transition-colors">
                Shared With Me
              </button>
              <button className="px-5 py-2.5 text-white/70 hover:text-white transition-colors">
                Recent
              </button>
              <button className="px-5 py-2.5 text-white/70 hover:text-white transition-colors">
                Starred
              </button>
              <button className="px-5 py-2.5 text-white/70 hover:text-white transition-colors">
                Trash
              </button>
            </div>
            <div className="relative ml-auto">
              <input
                type="text"
                placeholder="Search your file here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-[320px] pl-10 pr-4 py-2.5 bg-white/10 rounded-lg text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-8 py-10 bg-[#F8F9FD] min-h-[calc(100vh-136px)]">
        <div className="grid grid-cols-3 gap-8">
          {/* Files Section - Left Side */}
          <div className="col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-xl font-semibold mb-8">Your Files</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-gray-500">
                      <th className="pb-6 font-medium">Name ↓</th>
                      <th className="pb-6 font-medium">File Size ↓</th>
                      <th className="pb-6 font-medium">Last Modified ↓</th>
                      <th className="pb-6 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {files.map((file, index) => (
                      <tr key={index} className="border-t border-gray-100">
                        <td className="py-5">
                          <div className="flex items-center gap-4">
                            <div className="w-11 h-11 bg-blue-100 rounded-lg flex items-center justify-center">
                              <span className="text-blue-600 font-semibold">UI</span>
                            </div>
                            <span className="font-medium">{file.name}</span>
                          </div>
                        </td>
                        <td className="py-5">{file.fileSize}</td>
                        <td className="py-5">{file.lastModified}</td>
                        <td className="py-5">
                          <button className="text-gray-400 hover:text-gray-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            {/* Folders Section */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-xl font-semibold mb-8">Your Folders</h2>
              <div className="space-y-4">
                {folders.map((folder, index) => (
                  <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 bg-blue-500 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">{folder.name}</p>
                        <p className="text-sm text-gray-500">{folder.itemCount} | {folder.size}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Who has access */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Who has access</h2>
              <div className="flex flex-wrap gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  AG
                </div>
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white">
                  JD
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white">
                  RK
                </div>
                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Files; 