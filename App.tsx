import React from 'react';
import SocialLink from './components/SocialLink';

const App: React.FC = () => {
  return (
    <div className="bg-white text-black min-h-screen font-sans flex items-center justify-center p-8 sm:p-12">
      <div className="w-full max-w-xl">
        <img
          src="https://i.pinimg.com/736x/50/7a/ea/507aea0b1e1028ffe21fbe0eaebed7f7.jpg"
          alt="Portrait of Kavya Arohi"
          className="w-32 h-32 object-cover rounded-full mb-8"
        />
        {/* Content */}
        <div className="font-medium">
          <div className="mb-10">
            <p className="text-xl lg:text-2xl justify-start leading-tight text-black">
              I’m Kavya Arohi, A Marketer and Copywriter. I love turning complex thoughts into simple messages that make sense and make people stop scrolling.
            </p>
            
          </div>
          
          <div className="flex items-center space-x-10 text-xl lg:text-2xl">
            <SocialLink href="https://www.linkedin.com/in/kavyaarohi/" aria-label="LinkedIn Profile">
              LinkedIn 
            </SocialLink>
            <SocialLink href="https://x.com/KavyaArohi" aria-label="Twitter Profile">
              X 
            </SocialLink>
            <SocialLink href="https://discord.gg/Ef4JST9S2E" aria-label="The Half Idea">
              Half Idea 
            </SocialLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;