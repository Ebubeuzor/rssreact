import React, { useEffect, useState } from 'react';
import { Book, User, Calendar, FileText, X, Edit, Trash } from 'lucide-react';
import AdminLayout from '../component/admin/AdminLayout';

const EbookForm = ({ ebook, setEbook, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    pages: '',
    publicationDate: '',
    coverImage: null,
    chapters: [''],
  });

  useEffect(() => {
    if (ebook) {
      setFormData({
        ...ebook,
        chapters: ebook.chapters || [''],
      });
    }
  }, [ebook]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, coverImage: e.target.files[0] });
  };

  const handleChapterChange = (e, index) => {
    const updatedChapters = [...formData.chapters];
    updatedChapters[index] = e.target.value;
    setFormData({ ...formData, chapters: updatedChapters });
  };

  const handleAddChapter = () => {
    setFormData({ ...formData, chapters: [...formData.chapters, ''] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEbook(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
            placeholder="Enter book title"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
            placeholder="Enter author name"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          rows={3}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
          placeholder="Enter book description"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">Pages</label>
          <input
            type="number"
            name="pages"
            value={formData.pages}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Publication Date</label>
          <input
            type="date"
            name="publicationDate"
            value={formData.publicationDate}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Cover Image</label>
        <input
          type="file"
          name="coverImage"
          onChange={handleFileChange}
          accept="image/*"
          className="mt-1 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-gray-50 file:text-gray-700
            hover:file:bg-gray-100"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Chapters</label>
        <div className="mt-1 space-y-2">
          {formData.chapters.map((chapter, index) => (
            <div key={index} className="flex items-center">
              <input
                type="text"
                value={chapter}
                onChange={(e) => handleChapterChange(e, index)}
                className="flex-grow border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                placeholder="Enter chapter title"
              />
              {index === formData.chapters.length - 1 && (
                <button
                  type="button"
                  onClick={handleAddChapter}
                  className="ml-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Add
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Save Ebook
        </button>
      </div>
    </form>
  );
};

const EbookUpload = () => {
  const [ebooks, setEbooks] = useState([]);
  const [editingEbook, setEditingEbook] = useState(null);

  const handleDelete = (id) => {
    setEbooks(ebooks.filter(ebook => ebook.id !== id));
  };

  return (
    <AdminLayout>

    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-lg sm:p-20">
            <h2 className="text-2xl font-semibold mb-8 text-gray-900">Manage Ebooks</h2>
            {editingEbook ? (
                <EbookForm 
                ebook={editingEbook} 
                setEbook={(newEbook) => {
                    if (newEbook.id) {
                    setEbooks(ebooks.map(e => (e.id === newEbook.id ? newEbook : e)));
                    } else {
                    setEbooks([...ebooks, { ...newEbook, id: Date.now() }]);
                    }
                    setEditingEbook(null);
                }}
                onCancel={() => setEditingEbook(null)}
                />
            ) : (
                <>
                <button
                    onClick={() => setEditingEbook({})}
                    className="mb-6 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                    Add New Ebook
                </button>

                <ul className="space-y-4">
                    {ebooks.map(ebook => (
                    <li key={ebook.id} className="bg-gray-50 p-4 rounded-md shadow-sm">
                        <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-900">{ebook.title}</h3>
                        <div>
                            <button
                            onClick={() => setEditingEbook(ebook)}
                            className="text-gray-600 hover:text-gray-900 mr-2"
                            >
                            <Edit className="h-5 w-5" />
                            </button>
                            <button
                            onClick={() => handleDelete(ebook.id)}
                            className="text-gray-600 hover:text-gray-900"
                            >
                            <Trash className="h-5 w-5" />
                            </button>
                        </div>
                        </div>
                        <p className="text-sm text-gray-500">
                        <User className="inline h-4 w-4 mr-1" />
                        {ebook.author}
                        </p>
                        <p className="text-sm text-gray-500">
                        <FileText className="inline h-4 w-4 mr-1" />
                        {ebook.pages} pages
                        </p>
                        <p className="text-sm text-gray-500">
                        <Calendar className="inline h-4 w-4 mr-1" />
                        {ebook.publicationDate}
                        </p>
                        {ebook.coverImage && (
                        <img 
                            src={URL.createObjectURL(ebook.coverImage)} 
                            alt={ebook.title} 
                            className="mt-2 w-full h-32 object-cover rounded-md" 
                        />
                        )}
                    </li>
                    ))}
                </ul>
                </>
            )}
            </div>
        </div>
    </div>
            
    </AdminLayout>
  );
};

export default EbookUpload;