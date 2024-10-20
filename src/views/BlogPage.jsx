import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './component/Footer';
import Header from './component/header';

const BlogPage = () => {
  const { blogId } = useParams();
  const [comments, setComments] = useState([
    { id: 1, username: 'Alice', content: 'Great article!', timestamp: '2024-03-15T10:30:00Z', userPhoto: 'https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg?ct=jpeg' },
    { id: 2, username: 'Bob', content: 'I learned a lot, thanks!', timestamp: '2024-03-15T11:45:00Z', userPhoto: 'https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg?ct=jpeg' },
  ]);
  const [newComment, setNewComment] = useState({ username: '', content: '', userPhoto: 'https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg?ct=jpeg' });

  // In a real app, you'd fetch the blog post data based on blogId
  const blogPost = {
    title: 'How to Eat Healthy',
    content: 'Eating healthy is crucial for maintaining good health and well-being...',
    username: 'Nutritionist Jane',
    date: '2024-03-14',
    photo: 'https://as1.ftcdn.net/v2/jpg/08/28/85/04/1000_F_828850457_gG6glRcbOt7AELo7FO3seduEkHTV5uOc.jpg'
  };

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setNewComment(prev => ({ ...prev, [name]: value }));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const comment = {
      id: comments.length + 1,
      ...newComment,
      timestamp: new Date().toISOString(),
    };
    setComments(prev => [...prev, comment]);
    setNewComment({ username: '', content: '', userPhoto: '/api/placeholder/40/40' });
  };

  return (

    <>
        <Header/>
        <div className="max-w-3xl mx-auto p-4">
        <article className="mb-8">
            <h1 className="text-3xl font-bold mb-4">{blogPost.title}</h1>
            <p className="text-gray-600 mb-2">By {blogPost.username} on {blogPost.date}</p>
            <img src={blogPost.photo} alt={blogPost.title} className="w-full h-auto mb-4 rounded" />
            <div className="prose">{blogPost.content}</div>
        </article>

        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            {comments.map(comment => (
            <div key={comment.id} className="bg-gray-100 p-4 rounded mb-4 flex">
                <img src={comment.userPhoto} alt={comment.username} className="w-10 h-10 rounded-full mr-4" />
                <div>
                <p className="font-semibold">{comment.username}</p>
                <p>{comment.content}</p>
                <p className="text-sm text-gray-500">
                    {new Date(comment.timestamp).toLocaleString()}
                </p>
                </div>
            </div>
            ))}
        </section>

        <form onSubmit={handleCommentSubmit} className="bg-gray-100 p-4 rounded">
            <h3 className="text-xl font-bold mb-4">Add a Comment</h3>
            <div className="mb-4">
            <label htmlFor="username" className="block mb-2">Username:</label>
            <input
                type="text"
                id="username"
                name="username"
                value={newComment.username}
                onChange={handleCommentChange}
                required
                className="w-full p-2 border rounded"
            />
            </div>
            <div className="mb-4">
            <label htmlFor="content" className="block mb-2">Comment:</label>
            <textarea
                id="content"
                name="content"
                value={newComment.content}
                onChange={handleCommentChange}
                required
                className="w-full p-2 border rounded"
                rows="4"
            ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Submit Comment
            </button>
        </form>
        </div>
        <Footer/>
    </>
  );
};

export default BlogPage;