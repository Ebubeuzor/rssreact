import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

const CompetitionSection = ({ competitions, podcasts, isLoading }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPodcast, setSelectedPodcast] = useState(null);

  if (isLoading) return <div>Loading...</div>;

  const openPodcastModal = (podcast) => {
    setSelectedPodcast(podcast);
    setIsModalOpen(true);
  };

  const textShadowStyle = {
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
  };

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Competition Section */}
          {competitions.map((competition, index) => (
            <Link
              key={index}
              to={`/competition/${competition.id}`}
              className="relative bg-cover bg-center rounded-lg overflow-hidden text-white hover:opacity-90 transition-opacity"
              style={{
                backgroundImage: `url(${competition.image})`,
                height: '200px',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-50 transition-all">
                <div className="h-full p-6" style={textShadowStyle}>
                  <h2 className="text-2xl font-bold mb-2">Current Competition</h2>
                  <h3 className="text-xl font-bold mb-2">{competition.title}</h3>
                  <p className="text-xl font-bold mb-2">Starts: {competition.startDate}</p>
                  <p className="text-xl font-bold mb-2">Ends: {competition.endDate}</p>
                </div>
              </div>
            </Link>
          ))}

          {/* Podcast Section */}
          <div className="relative rounded-lg overflow-hidden">
            {podcasts.map((podcast, index) => (
              <div 
                key={index}
                className="relative bg-cover bg-center h-[200px]"
                style={{
                  backgroundImage: `url(${podcast.image})`,
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-50 transition-all">
                  <div className="h-full px-6 pt-6 flex flex-col">
                    <h2 className="text-2xl font-bold mb-4 text-white" style={textShadowStyle}>
                      Latest Podcasts
                    </h2>
                    <div 
                      className="flex items-center p-4 bg-black bg-opacity-60 hover:bg-opacity-70 rounded cursor-pointer transition-all"
                      onClick={() => openPodcastModal(podcast)}
                    >
                      <Play className="mr-2 text-white" size={20} />
                      <div>
                        <h3 className="font-semibold text-white" style={textShadowStyle}>
                          {podcast.title}
                        </h3>
                        <p className="text-sm text-gray-200">
                          {podcast.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Podcast Modal */}
      <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className="fixed bg-white p-6 rounded-md shadow-md max-w-4xl w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Dialog.Title className="text-2xl font-bold mb-4">{selectedPodcast?.title}</Dialog.Title>
            <div className="mt-4">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={selectedPodcast?.videoUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-96"
                ></iframe>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
};

export default CompetitionSection;