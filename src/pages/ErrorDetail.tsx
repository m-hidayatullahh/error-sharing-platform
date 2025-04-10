import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Share2, Copy, Check } from 'lucide-react';
import Prism from 'prismjs';
import { ErrorPost } from '../data';

interface ErrorDetailProps {
  posts: ErrorPost[];
}

export function ErrorDetail({ posts }: ErrorDetailProps) {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug) || posts[0];

  const currentUrl = window.location.href;
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(post.title);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        {post.title}
      </h1>

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

      {post.descriptionBefore && (
        <div
          className="text-gray-800 dark:text-gray-100 mb-6"
          dangerouslySetInnerHTML={{ __html: post.descriptionBefore }}
        />
      )}

      <div className="relative mb-6">
        <pre className="language-jsx rounded-lg !bg-gray-50 dark:!bg-gray-900">
          <code className="language-jsx">{post.code}</code>
        </pre>
        <button
          onClick={() => handleCopyCode(post.code)}
          className="absolute top-2 right-2 px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          {copiedCode ? (
            <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
              <Check size={16} />
              Copied!
            </span>
          ) : (
            <span className="flex items-center gap-1 text-gray-700 dark:text-gray-300">
              <Copy size={16} />
              Copy
            </span>
          )}
        </button>
      </div>

      {post.descriptionAfter && (
        <div
          className="text-gray-800 dark:text-gray-100 mb-6"
          dangerouslySetInnerHTML={{ __html: post.descriptionAfter }}
        />
      )}

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

      <div className="mt-6">
        <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
          Bagikan:
        </h2>
        <div className="flex items-center gap-4 text-sm">
          <a
            href={`https://wa.me/?text=${encodedTitle}%0A${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-green-600"
          >
            WhatsApp
          </a>

          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
          >
            Facebook
          </a>

          <a
            href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-sky-500"
          >
            Twitter
          </a>

          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            <Copy size={16} />
            {copiedLink ? 'Link Copied!' : 'Copy Link'}
          </button>
        </div>
      </div>
    </div>
  );
}
