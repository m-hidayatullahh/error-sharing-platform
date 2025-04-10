import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ThumbsUp, Share2 } from 'lucide-react';
import { ErrorPost } from '../data';

interface ErrorListProps {
  searchQuery: string;
  posts: ErrorPost[];
}

export function ErrorList({ searchQuery, posts }: ErrorListProps) {
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      {filteredPosts.map((post) => (
        <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
          <Link to={`/error/${post.id}`}>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400">
              {post.title}
            </h2>
          </Link>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{post.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400">
                <Share2 size={18} />
                Share
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-900 dark:text-white">{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}