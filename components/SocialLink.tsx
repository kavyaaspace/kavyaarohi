import React from 'react';

interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
  'aria-label': string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, children, 'aria-label': ariaLabel }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="text-gray-600 hover:text-black transition-colors duration-300 hover:underline"
    >
      {children}
    </a>
  );
};

export default SocialLink;