// src/components/Blog.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../supabase';
import blogPosts from '../blogPosts';
import blogIcon from '../images/blog-icon.png';
import post1 from '../posts/post1'; // Importa los archivos de contenido de los posts
import post2 from '../posts/post2'; // Importa los archivos de contenido de los posts
import './Blog.css';

const postsContent = {
  1: post1.content, // Extrae el contenido de cada post
  2: post2.content,
  // Agrega más posts aquí según sea necesario
};

const Blog = () => {
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [expandedPost, setExpandedPost] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();

    const fetchComments = async () => {
      const { data } = await supabase
        .from('comments')
        .select('*')
        .order('created_at', { ascending: false });
      setComments(data);
    };

    fetchComments();
  }, []);

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',      
    });

    if (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error);
    } else {
      setUser(null);
    }
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      const { data, error } = await supabase
        .from('comments')
        .insert([{ 
          text: newComment, 
          user_id: user.id, 
          user_email: user.email, 
          created_at: new Date().toISOString() 
        }]);

      if (error) {
        console.error(error);
      } else {
        setComments([...comments, { 
          text: newComment, 
          user_id: user.id, 
          user_email: user.email, 
          created_at: new Date().toLocaleDateString() 
        }]);
        setNewComment('');
      }
    }
  };

  const togglePost = (postId) => {
    setExpandedPost(postId === expandedPost ? null : postId);
  };

  return (
    <div className="blog-container">
      <div className="blog-header">      
        <img src={blogIcon} alt="Blog Icon" /> Technology Blog
      </div>
      <div className="blog-content">
        {blogPosts.map((post) => (
          <div key={post.id} className={`blog-item ${expandedPost === post.id ? 'expanded' : ''}`}>
            <div className="blog-thumbnail-wrapper" onClick={() => togglePost(post.id)}>
              <img src={post.thumbnail} alt={post.title} className="blog-thumbnail" />
            </div>
            <div className="blog-title" onClick={() => togglePost(post.id)}>{post.title}</div>
            <div className="blog-date">{post.date}</div>
            {expandedPost === post.id && (
              <div className="blog-content-wrapper">
                <div className="blog-content">{postsContent[post.id]}</div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="comments">
        <h3>Comments</h3>
        {user ? (
          <div>
            <form onSubmit={handleCommentSubmit}>
              <textarea value={newComment} onChange={handleCommentChange} placeholder="Write a comment..." />
              <div className="comment-buttons">
                <button type="submit">Send</button>
                <button onClick={handleLogout}>Log out</button>
              </div>
            </form>
          </div>
        ) : (
          <button className="google-signin-button" onClick={handleLogin}>
            Sign in with Google
          </button>
        )}
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <div className="comment-header">
                <span className="comment-email">{comment.user_email}</span> ({new Date(comment.created_at).toLocaleDateString()})
              </div>
              <div className="comment-text">{comment.text}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;