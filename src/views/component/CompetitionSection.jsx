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

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Competition Section */}
          {competitions.map((competition, index) => (
            <Link
              key={index}
              to={`/competition/${competition.id}`}
              className="bg-cover bg-center rounded-lg overflow-hidden text-black hover:opacity-90 transition-opacity"
              style={{
                backgroundImage: `url(${competition.image})`,
                height: '200px',
              }}
            >
              <div className="h-full p-6">
                <h2 className="text-2xl font-bold mb-2">Current Competition</h2>
                <h3 className="text-xl font-bold mb-2">{competition.title}</h3>
                <p className="text-xl font-bold mb-2">Starts: {competition.startDate}</p>
                <p className="text-xl font-bold mb-2">Ends: {competition.endDate}</p>
              </div>
            </Link>
          ))}

          {/* Podcast Section */}
          <div className="bg-green-100 rounded-lg">
            {podcasts.map((podcast, index) => (
              <div 
                key={index}
                className="flex items-start bg-cover bg-center rounded mb-3 px-6 pt-6 flex-col"
                style={{
                  backgroundImage: `url(${podcast.image})`,
                  height: '200px',
                }}
              >
                <h2 className="text-2xl font-bold mb-4 text-black">Latest Podcasts</h2>
                <div 
                  className="flex items-center p-4 bg-white bg-opacity-80 rounded cursor-pointer hover:bg-opacity-90 transition-colors"
                  onClick={() => openPodcastModal(podcast)}
                >
                  <Play className="mr-2 text-black" size={20} />
                  <div>
                    <h3 className="font-semibold text-black">{podcast.title}</h3>
                    <p className="text-sm text-gray-600">{podcast.duration}</p>
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
              {/* Replace this with an actual video player component */}
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
