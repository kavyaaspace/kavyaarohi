import React from 'react';
import SocialLink from './components/SocialLink';

const App: React.FC = () => {
  return (
    <div className="bg-white text-black min-h-screen font-sans flex items-center justify-center p-8 sm:p-12">
      <div className="w-full max-w-xl">
        <img
          src="https://i.pinimg.com/736x/50/7a/ea/507aea0b1e1028ffe21fbe0eaebed7f7.jpg"
          alt="Portrait of Kavya Arohi"
          className="w-32 h-32 object-cover rounded-lg mb-8"
        />
        {/* Content */}
        <div className="font-medium">
          <div className="mb-10">
            <p className="text-xl lg:text-2xl leading-tight text-black">
              I’m Kavya Arohi, A Marketer and Copywriter with a curious mind and a soft spot for good ideas. I’ve spent the past few years learning how words shape what people feel, buy, and believe. I love turning complex thoughts into simple messages that make sense and make people stop scrolling.
            </p>
            <p className="text-xl lg:text-2xl leading-tight text-black mt-4">
              After working across brands and campaigns that taught me the art of clarity and timing, I co-founded The Half Idea along with Suhas Palukuri which is a Creative Design Studio. It’s where I get to mix logic with imagination, and where ideas grow into something real.
            </p>
            <p className="text-xl lg:text-2xl leading-tight text-black mt-4">
              I believe good marketing isn’t about selling louder, it’s about speaking clearly, with purpose. That’s what I try to do in every line I write.
            </p>
          </div>
          
          <div className="flex items-center space-x-10 text-xl lg:text-2xl">
            <SocialLink href="https://www.linkedin.com/in/kavyaarohi/" aria-label="LinkedIn Profile">
              LinkedIn <span>&#10532;</span>
            </SocialLink>
            <SocialLink href="https://x.com/KavyaArohi" aria-label="Twitter Profile">
              X <span>&#10532;</span>
            </SocialLink>
            <SocialLink href="https://thehalfidea.in" aria-label="The Half Idea">
              Half Idea <span>&#10532;</span>
            </SocialLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;