// src/components/BlogPostDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../blogPosts';
import './BlogPostDetail.css';

const BlogPostDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
    return <div>Publicación no encontrada</div>;
  }

  return (
    <div className="blog-post-detail">
      <h1>{post.title}</h1>
      <div className="blog-post-content">
        <img src={post.thumbnail} alt={post.title} className="blog-post-thumbnail" />
        <p>{post.content}</p>
        {/* Aquí puedes agregar más contenido, como imágenes adicionales */}
      </div>
    </div>
  );
};

export default BlogPostDetail;