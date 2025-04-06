import { motion } from 'framer-motion';
import { useState } from 'react';

interface FileItem {
  name: string;
  type: string;
  size: string;
  lastModified: string;
  sharedWith?: string;
}

const Profile = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [files, setFiles] = useState<FileItem[]>([
    {
      name: 'MPJ Project Brief.docx',
      type: 'document',
      size: '2.8 MB',
      lastModified: '8m ago',
    },
    {
      name: 'xyzaa.xls',
      type: 'spreadsheet',
      size: '242 MB',
      lastModified: '8m ago',
    },
    {
      name: 'photo.png',
      type: 'image',
      size: '1.2 MB',
      lastModified: '8m ago',
    },
  ]);

  const storageData = {
    total: 256,
    used: {
      documents: 2.8,
      video: 16.8,
      audio: 4.4,
      photos: 9,
    },
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'document':
        return (
          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
            <span className="text-purple-600 font-semibold">W</span>
          </div>
        );
      case 'spreadsheet':
        return (
          <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
            <span className="text-teal-600 font-semibold">X</span>
          </div>
        );
      case 'image':
        return (
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <span className="text-blue-600 font-semibold">I</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src="/profile-placeholder.jpg"
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Welcome Back, Aditya</h1>
              <p className="text-gray-500">aditya@gmail.com</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-[#2A2F8F] text-white rounded-lg hover:bg-[#2A2F8F]/90 transition-colors">
            Back Up Now
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search your files"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-10 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2A2F8F]/20 focus:border-[#2A2F8F]"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Files List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Recently Edited</h2>
                  <button className="text-[#2A2F8F] hover:text-[#2A2F8F]/80 transition-colors">
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {files.map((file, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        {getFileIcon(file.type)}
                        <div>
                          <h3 className="text-gray-900 font-medium">{file.name}</h3>
                          <p className="text-gray-500 text-sm">Edited {file.lastModified}</p>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                          />
                        </svg>
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Storage Info */}
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Storage</h2>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">
                    {Object.values(storageData.used).reduce((a, b) => a + b, 0)} gb
                  </span>
                  <span className="text-sm text-gray-500">{storageData.total} gb</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#2A2F8F]"
                    style={{
                      width: `${(Object.values(storageData.used).reduce((a, b) => a + b, 0) / storageData.total) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-gray-900">File Type</h3>
                {Object.entries(storageData.used).map(([type, size], index) => (
                  <motion.div
                    key={type}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          type === 'documents'
                            ? 'bg-purple-100'
                            : type === 'video'
                            ? 'bg-orange-100'
                            : type === 'audio'
                            ? 'bg-red-100'
                            : 'bg-blue-100'
                        }`}
                      >
                        <span
                          className={`text-sm font-medium ${
                            type === 'documents'
                              ? 'text-purple-600'
                              : type === 'video'
                              ? 'text-orange-600'
                              : type === 'audio'
                              ? 'text-red-600'
                              : 'text-blue-600'
                          }`}
                        >
                          {type.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <span className="text-gray-900 capitalize">{type}</span>
                    </div>
                    <span className="text-gray-500">{size} gb</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 