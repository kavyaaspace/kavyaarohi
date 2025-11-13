import React from 'react';

interface BlogCardProps {
  onClick: () => void;
  imageUrl: string;
  title: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ onClick, imageUrl, title }) => {
  return (
    <button
      onClick={onClick}
      aria-label={`Read blog post: ${title}`}
      className="group block text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black rounded-lg"
    >
      <div className="overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={`Featured image for ${title}`}
          className="w-full aspect-[4/3] object-cover transform transition-transform duration-300"
        />
      </div>
      <h3 className="mt-4 text-base font-semibold text-gray-700 transition-colors duration-300">
        {title}
      </h3>
    </button>
  );
};

export default BlogCard;