import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const fetchProducts = async () => {
  try {
    const response = await axios.get('/api/product?format=json');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

const fetchPosts = async () => {
  try {
    const response = await axios.get('/api/post?format=json');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

const Home = () => {
  const [products, setProducts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    Promise.all([fetchProducts(), fetchPosts()])
      .then(([productsData, postsData]) => {
        setProducts(productsData);
        setPosts(postsData);
      })
      .catch(err => console.error('Error loading data:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className='homepage'>
      <div className='homepage-intro'>
        <h1 className='homepage-title'>Welcome to E-Commerce</h1>
        <p className='homepage-desc'>Discover amazing products and deals. Shop now and enjoy a seamless shopping experience!</p>
        <button className='homepage-all-btn' onClick={() => navigate('/product')}>View All Products</button>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>Loading...</div>
      ) : (
        <>
          {/* Featured Products */}
          <div>
            <h2 style={{ textAlign: 'center', color: '#4f8cff', marginBottom: '2rem' }}>Featured Products</h2>
            <div className='homepage-products'>
              {products.slice(0, 3).map(product => (
                <div key={product.id} className='homepage-product-card'>
                  {product.image ? (
                    <img
                      src={product.image.startsWith('http') ? product.image : `/static/${product.image}`}
                      alt={product.name}
                      className='homepage-product-img'
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=' + product.name; }}
                    />
                  ) : (
                    <div style={{ width: '100%', height: '150px', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>No Image</div>
                  )}
                  <h3 className='homepage-product-name'>{product.name}</h3>
                  <div className='homepage-product-price'>${parseFloat(product.price).toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Products/Posts */}
          {posts.length > 0 && (
            <div style={{ marginTop: '3rem', paddingTop: '0', paddingBottom: '2rem' }}>
              <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                {posts.slice(0, 2).map(post => (
                  <div key={post.id} style={{ background: '#fff', padding: '1.5rem', marginBottom: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px #e0e0e0' }}>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                      {post.image && (
                        <img
                          src={post.image.startsWith('http') ? post.image : `/static/${post.image}`}
                          alt={post.title}
                          style={{ width: '150px', height: '120px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }}
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      )}
                      <div style={{ flex: 1 }}>
                        <h3 style={{ color: '#4f8cff', margin: '0 0 0.5rem 0' }}>{post.title}</h3>
                        <div style={{ color: '#888', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                          <span>By: {post.poster}</span> | <span>{new Date(post.created_at).toLocaleDateString()}</span>
                        </div>
                        <p style={{ color: '#333', lineHeight: '1.6', margin: '0.5rem 0' }}>{post.description?.substring(0, 100)}...</p>
                        {post.url && (
                          <a href={post.url} style={{ color: '#4f8cff', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }} target="_blank" rel="noopener noreferrer">
                            Read More →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
