import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './component/header';
import Footer from './component/Footer';

const CompetitionDetails = ({ competitions }) => {
  const { id } = useParams();
  const competition = {
    id: "comp3",
    title: "Cooking Challenge",
    description: "Come showcase your skills. Open to teams from all high schools.",
    startDate: "2024-07-20",
    endDate: "2024-07-22",
    image: "https://thumbs.dreamstime.com/z/cooking-master-competition-vector-illustration-53111191.jpg?ct=jpeg"
  }

  const [formData, setFormData] = useState({
    schoolName: '',
    phoneNumber: '',
    name: '',
  });

  if (!competition) return <div>Competition not found</div>;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (

    <>
        <Header/>

        <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{competition.title}</h1>
        <p className="mb-4">{competition.description}</p>
        <div className="mb-8">
            <p><strong>Starts:</strong> {competition.startDate}</p>
            <p><strong>Ends:</strong> {competition.endDate}</p>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Application Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
            <label htmlFor="schoolName" className="block mb-1">School Name</label>
            <input
                type="text"
                id="schoolName"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
                required
            />
            </div>
            <div>
            <label htmlFor="phoneNumber" className="block mb-1">Phone Number</label>
            <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
                required
            />
            </div>
            <div>
            <label htmlFor="name" className="block mb-1">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
                required
            />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Submit Application
            </button>
        </form>
        </div>

        <Footer/>
    </>
  );
};

export default CompetitionDetails;