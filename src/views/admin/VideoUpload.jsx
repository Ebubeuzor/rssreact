import React, { useState } from 'react';
import AdminLayout from '../component/admin/AdminLayout';

const VideoUpload = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [videos, setVideos] = useState([]);

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!videoFile || !title || !duration) {
      alert('Please complete all fields.');
      return;
    }

    // Simulate video upload and add to video list
    const newVideo = {
      id: Date.now(),
      title,
      duration,
      fileName: videoFile.name,
    };

    setVideos([...videos, newVideo]);
    setVideoFile(null);
    setTitle('');
    setDuration('');

    setTimeout(() => {
      alert(`${videoFile.name} uploaded successfully.`);
    }, 1000);
  };

  const handleDelete = (id) => {
    setVideos(videos.filter(video => video.id !== id));
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Upload Video</h2>

        {/* Video Title */}
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="border p-2 w-full rounded"
            placeholder="Enter video title"
          />
        </div>

        {/* Video Duration */}
        <div className="mb-4">
          <label className="block text-gray-700">Duration (in minutes)</label>
          <input 
            type="number" 
            value={duration} 
            onChange={(e) => setDuration(e.target.value)} 
            className="border p-2 w-full rounded" 
            placeholder="Enter duration in minutes"
          />
        </div>

        {/* Video File Input */}
        <input 
          type="file" 
          accept="video/*" 
          onChange={handleFileChange} 
          className="mb-4 border p-2 w-full rounded" 
        />

        {/* Upload Button */}
        <button 
          onClick={handleUpload} 
          className="bg-[#1F205D] text-white px-4 py-2 rounded"
        >
          Upload Video
        </button>

        {/* Video List */}
        <h3 className="text-xl font-bold mt-8">Uploaded Videos</h3>
        <div className="mt-4">
          {videos.length > 0 ? (
            <ul className="space-y-4">
              {videos.map((video) => (
                <li key={video.id} className="flex justify-between items-center p-4 bg-white rounded shadow">
                  <div>
                    <p className="text-lg font-semibold">{video.title}</p>
                    <p className="text-gray-600">Duration: {video.duration} min</p>
                    <p className="text-gray-500">File: {video.fileName}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(video.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No videos uploaded yet.</p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default VideoUpload;
