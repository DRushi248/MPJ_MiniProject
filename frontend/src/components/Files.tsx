import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface FileItem {
  name: string;
  sharedWith?: string;
  fileSize: string;
  lastModified: string;
}

interface FolderItem {
  name: string;
  itemCount: string;
  size: string;
}

const Files = () => {
  const [activeTab, setActiveTab] = useState('my-storage');
  const [searchQuery, setSearchQuery] = useState('');
  const [files, setFiles] = useState<FileItem[]>([
    {
      name: 'UX-UI.zip',
      fileSize: '242 MB',
      lastModified: 'Jan 21, 2025',
    },
    {
      name: 'UX-UI.zip',
      fileSize: '242 MB',
      lastModified: 'Jan 21, 2025',
    },
  ]);

  const [folders, setFolders] = useState<FolderItem[]>([
    {
      name: 'XYZ',
      itemCount: '123 items',
      size: '1.60GB',
    },
    {
      name: 'ABC',
      itemCount: '231 items',
      size: '144.30 MB',
    },
    {
      name: 'MPJ',
      itemCount: '3 items',
      size: '4.50 MB',
    },
  ]);

  const tabs = [
    { id: 'my-storage', label: 'My Storage' },
    { id: 'shared', label: 'Shared With Me' },
    { id: 'recent', label: 'Recent' },
    { id: 'starred', label: 'Starred' },
    { id: 'trash', label: 'Trash' },
  ];

  return (
    <div className="min-h-screen bg-[#2A2F8F]">
      {/* Navigation Tabs */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-4 text-white whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-b-2 border-white font-medium'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search your file here"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pl-10 bg-white/10 text-white placeholder-white/60 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60"
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
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Files Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-6">Your Files</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-white/60 text-left">
                        <th className="pb-4 font-medium">Name</th>
                        <th className="pb-4 font-medium">Shared With</th>
                        <th className="pb-4 font-medium">File Size</th>
                        <th className="pb-4 font-medium">Last Modified</th>
                      </tr>
                    </thead>
                    <tbody className="text-white">
                      {files.map((file, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="border-t border-white/10 hover:bg-white/5 transition-colors"
                        >
                          <td className="py-4">{file.name}</td>
                          <td className="py-4">{file.sharedWith || 'N/A'}</td>
                          <td className="py-4">{file.fileSize}</td>
                          <td className="py-4">{file.lastModified}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Folders Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
            >
              <h2 className="text-xl font-semibold text-white mb-6">Your Folders</h2>
              <div className="space-y-4">
                {folders.map((folder, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-medium group-hover:text-blue-400 transition-colors">
                          {folder.name}
                        </h3>
                        <p className="text-white/60 text-sm">
                          {folder.itemCount} • {folder.size}
                        </p>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                      <svg
                        className="w-5 h-5 text-white/60"
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
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Files; 