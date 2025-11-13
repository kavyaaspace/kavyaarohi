import React from 'react';

interface CardProps {
  title: string;
  content: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, content, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group text-left tracking-tight w-full bg-gray-50 p-6 rounded-lg shadow-sm  flex flex-col justify-start"
      aria-label={`View details for ${title}`}
    >
      <div>
        <h2 className="text-xl font-semibold text-gray-900 truncate">{title}</h2>
        <p className="mt-2 text-base text-gray-600 line-clamp-2">
          {content}
        </p>
      </div>
    </button>
  );
};

export default Card;