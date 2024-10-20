import React, { useState, useEffect } from 'react';
import AdminLayout from '../component/admin/AdminLayout';

const BlogPost = ({ blog, onEdit, onDelete, onAddComment }) => {
  const [comment, setComment] = useState('');

  return (
    <div className="bg-white shadow-md rounded-lg mb-6 overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{blog.title}</h2>
          <div>
            <button onClick={() => onEdit(blog)} className="text-blue-500 mr-2">Edit</button>
            <button onClick={() => onDelete(blog.id)} className="text-red-500">Delete</button>
          </div>
        </div>
        <p className="mb-4">{blog.content}</p>
        {blog.imageUrl && (
          <img src={blog.imageUrl} alt="Blog" className="w-full h-64 object-cover rounded mb-4" />
        )}
        <h4 className="font-semibold mt-4 mb-2">Comments</h4>
        <ul className="space-y-2 mb-4">
          {blog.comments.map((comment, index) => (
            <li key={index} className="bg-gray-100 p-2 rounded">{comment}</li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-50 px-6 py-4">
        <form onSubmit={(e) => {
          e.preventDefault();
          onAddComment(blog.id, comment);
          setComment('');
        }} className="flex space-x-2">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment"
            className="flex-grow px-3 py-2 border rounded"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Comment
          </button>
        </form>
      </div>
    </div>
  );
};

const BlogForm = ({ blog, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState(blog || { title: '', content: '', imageUrl: '' });
  const [imagePreview, setImagePreview] = useState(blog?.imageUrl || null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData({ ...formData, imageUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(formData);
    }} className="space-y-4">
      <input
        type="text"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        placeholder="Blog Title"
        className="w-full px-3 py-2 border rounded"
      />
      <textarea
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        placeholder="Blog Content"
        rows="5"
        className="w-full px-3 py-2 border rounded"
      />
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full"
        />
      </div>
      {imagePreview && (
        <img src={imagePreview} alt="Preview" className="w-full h-64 object-cover rounded" />
      )}
      <div className="flex justify-end space-x-2">
        <button type="button" onClick={onCancel} className="px-4 py-2 border rounded">
          Cancel
        </button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {blog ? 'Update' : 'Create'} Blog
        </button>
      </div>
    </form>
  );
};

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const fetchedBlogs = await new Promise((resolve) =>
        setTimeout(() =>
          resolve([
            {
              id: 1,
              title: 'First Blog',
              content: 'This is the content of the first blog.',
              imageUrl: 'https://via.placeholder.com/150',
              comments: ['Great post!'],
            },
          ]), 1000)
      );
      setBlogs(fetchedBlogs);
    };
    fetchBlogs();
  }, []);

  const addOrUpdateBlog = (blogData) => {
    if (editingBlog) {
      setBlogs(blogs.map(blog => blog.id === editingBlog.id ? { ...blogData, id: editingBlog.id } : blog));
    } else {
      setBlogs([...blogs, { id: blogs.length + 1, ...blogData, comments: [] }]);
    }
    setEditingBlog(null);
    setIsFormVisible(false);
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const addComment = (id, comment) => {
    setBlogs(blogs.map(blog => {
      if (blog.id === id) {
        return { ...blog, comments: [...blog.comments, comment] };
      }
      return blog;
    }));
  };

  return (

    <AdminLayout>

    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog Management</h1>
      
      <button
        onClick={() => {
          setEditingBlog(null);
          setIsFormVisible(true);
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-6"
      >
        Create New Blog
      </button>

      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">{editingBlog ? 'Edit Blog' : 'Create New Blog'}</h2>
            <BlogForm
              blog={editingBlog}
              onSubmit={addOrUpdateBlog}
              onCancel={() => {
                setEditingBlog(null);
                setIsFormVisible(false);
              }}
            />
          </div>
        </div>
      )}

      {blogs.map((blog) => (
        <BlogPost
          key={blog.id}
          blog={blog}
          onEdit={(blog) => {
            setEditingBlog(blog);
            setIsFormVisible(true);
          }}
          onDelete={deleteBlog}
          onAddComment={addComment}
        />
      ))}
    </div>
        
    </AdminLayout>

  );
};

export default Blog;