import React, { useState } from 'react';
import SocialLink from './components/SocialLink';
import Card from './components/Card';
import Modal from './components/Modal';
import { cardData, CardData } from './data/cards';

// FIX: Exported the BlogPost type to resolve an import error in BlogPostView.tsx.
export interface BlogPost {
  title: string;
  content: string;
  imageUrl?: string;
  href: string;
}

const App: React.FC = () => {
  const [cards] = useState<CardData[]>(cardData);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (card: CardData) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay clearing selected card to allow for fade-out animations if added later
    setTimeout(() => setSelectedCard(null), 300);
  };

  return (
    <>
      <div className="bg-white text-black min-h-screen font-sans flex flex-col">
        <div className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Hero Section */}
          <header className="text-center py-16 sm:py-24">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Kavya Arohi's Space
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-gray-600">
              Co-Founder & Content Strategist at The Half Idea
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              <a 
                href="https://www.linkedin.com/in/kavyaarohi/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black shadow-sm"
                aria-label="Follow Kavya Arohi on LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 mr-2">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                Follow me on LinkedIn
              </a>
              <a 
                href="https://x.com/KavyaArohi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-black bg-white shadow-sm"
                aria-label="Follow Kavya Arohi on X"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 mr-2">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Follow me on X
              </a>
            </div>
          </header>

          {/* Card Grid */}
          <main>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cards.map(card => (
                <Card
                  key={card.id}
                  title={card.title}
                  content={card.content}
                  onClick={() => handleCardClick(card)}
                />
              ))}
            </div>
          </main>
        </div>

        {/* Footer */}
        <footer className="w-full mt-16 sm:mt-24 py-8 border-t border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center space-x-6">
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
            <p className="mt-6 text-center text-base text-gray-500">
              &copy; {new Date().getFullYear()} Kavya Arohi. All rights reserved.
            </p>
          </div>
        </footer>
      </div>

      {selectedCard && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedCard.title}
          content={selectedCard.content}
        />
      )}
    </>
  );
};

export default App;