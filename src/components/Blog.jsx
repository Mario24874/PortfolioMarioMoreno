// src/components/Blog.jsx
import React, { useState, useEffect } from 'react';
import supabase from '../supabase';

const Blog = () => {
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

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
        .insert([{ text: newComment, user_id: user.id, user_email: user.email }]);

      if (error) {
        console.error(error);
      } else {
        setComments([...comments, { text: newComment, user_email: user.email, created_at: new Date().toLocaleDateString() }]);
        setNewComment('');
      }
    }
  };

  return (
    <div className="blog">
      <h2>Blog</h2>
      <div className="posts">
        {/* Aquí puedes listar tus posts */}
        <div className="post">
          <h3>Título del Post</h3>
          <p>Contenido del post...</p>
          <p>Publicado el: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
      <div className="comments">
        <h3>Comentarios</h3>
        {user ? (
          <div>
            <form onSubmit={handleCommentSubmit}>
              <textarea value={newComment} onChange={handleCommentChange} placeholder="Escribe un comentario..." />
              <button type="submit">Enviar</button>
            </form>
            <button onClick={handleLogout}>Cerrar Sesión</button>
          </div>
        ) : (
          <button onClick={handleLogin}>Iniciar Sesión con Google</button>
        )}
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <strong>{comment.user_email}</strong> ({comment.created_at}): {comment.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;