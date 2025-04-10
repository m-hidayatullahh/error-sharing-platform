import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MessageSquare, ThumbsUp, Share2, Copy, Check } from 'lucide-react';
import Prism from 'prismjs';
import { ErrorPost } from '../data';

interface ErrorDetailProps {
  posts: ErrorPost[];
}

export function ErrorDetail({ posts }: ErrorDetailProps) {
  const [copied, setCopied] = useState(false);
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id)) || posts[0];
  
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{post.title}</h1>
      
      <div className="flex items-center gap-2 mb-6">
        <img
          src={`https://ui-avatars.com/api/?name=${post.author}&background=random`}
          alt={post.author}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-medium text-gray-900 dark:text-white">{post.author}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none mb-6">
        <p className="text-gray-600 dark:text-gray-300">{post.description}</p>
      </div>

      <div className="relative mb-6">
        <pre className="language-jsx rounded-lg !bg-gray-50 dark:!bg-gray-900">
          <code className="language-jsx">{post.code}</code>
        </pre>
        <button
          onClick={() => handleCopyCode(post.code)}
          className="copy-button dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
        >
          {copied ? (
            <span className="flex items-center gap-1">
              <Check size={16} />
              Copied!
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <Copy size={16} />
              Copy
            </span>
          )}
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
        <button className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400">
          <ThumbsUp size={18} />
          {post.likes}
        </button>
        <button className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400">
          <MessageSquare size={18} />
          {post.comments}
        </button>
        <button className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400">
          <Share2 size={18} />
          Share
        </button>
      </div>
    </div>
  );
}