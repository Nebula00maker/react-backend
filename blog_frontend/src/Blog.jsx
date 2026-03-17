import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    axios.get('/api/post?format=json')
      .then(res => {
        setBlog(res.data);
        setError('');
      })
      .catch(err => {
        console.error('Error loading posts:', err);
        setError('Failed to load posts');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ minHeight: '70vh', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', color: '#4f8cff', marginBottom: '2rem' }}>Blog Posts</h1>

      {error && <div style={{ color: '#d32f2f', background: '#ffebee', padding: '1rem', borderRadius: '4px', marginBottom: '1rem' }}>{error}</div>}

      {loading && <div style={{ textAlign: 'center', padding: '2rem' }}>Loading posts...</div>}

      {!loading && blog.length === 0 && (
        <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>No posts available. Add posts from the admin panel.</div>
      )}

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {blog.map((item) => (
          <div key={item.id} style={{ background: '#fff', padding: '1.5rem', marginBottom: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px #e0e0e0' }}>
            {item.image && (
              <img
                src={item.image.startsWith('http') ? item.image : `/static/${item.image}`}
                alt={item.title}
                style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            )}
            <h2 style={{ color: '#4f8cff', marginBottom: '0.5rem' }}>{item.title}</h2>
            <div style={{ color: '#888', fontSize: '0.9rem', marginBottom: '1rem' }}>
              <span>By: {item.poster}</span> | <span>Category: {item.category}</span> | <span>{new Date(item.created_at).toLocaleDateString()}</span>
            </div>
            <p style={{ color: '#333', lineHeight: '1.6' }}>{item.description}</p>
            {item.url && (
              <a href={item.url} style={{ color: '#4f8cff', textDecoration: 'none', fontWeight: 'bold' }} target="_blank" rel="noopener noreferrer">
                Read More →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
