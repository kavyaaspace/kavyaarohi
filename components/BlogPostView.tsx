import React from 'react';
import type { BlogPost } from '../App';

interface BlogPostViewProps {
  post: BlogPost;
  onBack: () => void;
}

const BlogPostView: React.FC<BlogPostViewProps> = ({ post, onBack }) => {
  return (
    <div className="bg-white text-black min-h-screen font-sans flex items-start justify-center p-8 sm:p-12">
      <div className="w-full max-w-2xl mx-auto">
        <button
          onClick={onBack}
          aria-label="Back to all posts"
          className="mb-8 text-gray-600 transition-colors duration-300 font-semibold flex items-center group"
        >
          <span className="transform transition-transform duration-200">&larr;</span>
          <span className="ml-2">Back to all posts</span>
        </button>
        <article>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-black leading-tight">{post.title}</h1>
          {/* FIX: Conditionally render the image only if imageUrl is available to prevent a broken image icon. */}
          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt={`Featured image for ${post.title}`}
              className="w-full aspect-video object-cover rounded-lg mb-8"
            />
          )}
          <div className="text-lg text-gray-800 leading-relaxed whitespace-pre-wrap">
            {post.content}
          </div>
          <div className="mt-12 pt-6 border-t border-gray-200">
            <a 
              href={post.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors duration-300 font-semibold"
            >
              Read original article &rarr;
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPostView;