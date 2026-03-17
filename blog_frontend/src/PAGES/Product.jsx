import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../usecontext/AppContext.jsx';

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

const Product = () => {
  const [products, setProducts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { cart, setCart } = useContext(AppContext);

  useEffect(() => {
    setLoading(true);
    Promise.all([fetchProducts(), fetchPosts()])
      .then(([productsData, postsData]) => {
        setProducts(productsData);
        setPosts(postsData);
        setError('');
      })
      .catch(err => {
        setError('Failed to load data');
        console.error('Error loading data:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleAddToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(cart.map(item => item.id === product.id ? { ...item, qty: (item.qty || 1) + 1 } : item));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const categories = ['All', ...new Set(products.map(p => p.category))];
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || product.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div style={{ minHeight: '80vh', padding: '2rem' }}>
      <h2>Products</h2>

      {error && <div style={{ color: '#d32f2f', background: '#ffebee', padding: '1rem', borderRadius: '4px', marginBottom: '1rem' }}>{error}</div>}

      {loading && <div style={{ textAlign: 'center', padding: '2rem' }}>Loading products...</div>}

      {!loading && (
        <>
          <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <input
              type='text'
              placeholder='Search products...'
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #a1e3ff', fontSize: '1rem' }}
            />
            <select
              value={filter}
              onChange={e => setFilter(e.target.value)}
              style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #a1e3ff', fontSize: '1rem' }}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            {filteredProducts.map(product => (
              <div key={product.id} style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px #e0e0e0', padding: '1rem', minWidth: '200px', maxWidth: '250px', textAlign: 'center' }}>
                {product.image ? (
                  <img
                    src={product.image.startsWith('http') ? product.image : `/static/${product.image}`}
                    alt={product.name}
                    style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }}
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/200?text=' + product.name; }}
                  />
                ) : (
                  <div style={{ width: '100%', height: '200px', background: '#f0f0f0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    No Image
                  </div>
                )}
                <h3 style={{ color: '#4f8cff', margin: '0.5rem 0' }}>{product.name}</h3>
                <div style={{ fontWeight: 'bold', color: '#222', fontSize: '1.1rem' }}>${parseFloat(product.price).toFixed(2)}</div>
                <div style={{ color: '#888', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{product.category}</div>
                <p style={{ fontSize: '0.85rem', color: '#666', margin: '0.5rem 0' }}>{product.description?.substring(0, 80)}</p>
                <button
                  style={{ marginTop: '1rem', background: '#4f8cff', color: '#fff', border: 'none', borderRadius: '4px', padding: '0.5rem 1rem', cursor: 'pointer', fontWeight: 'bold' }}
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>


          {/* Additional Products from Posts */}
          {posts.length > 0 && (
            <div style={{ marginTop: '0' }}>
              {posts.map((post) => (
                <div key={post.id} style={{ background: '#fff', padding: '1.5rem', marginBottom: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px #e0e0e0' }}>
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    {post.image && (
                      <img
                        src={post.image.startsWith('http') ? post.image : `/static/${post.image}`}
                        alt={post.title}
                        style={{ width: '200px', height: '150px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }}
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    )}
                    <div style={{ flex: 1 }}>
                      <h3 style={{ color: '#4f8cff', margin: '0 0 0.5rem 0' }}>{post.title}</h3>
                      <div style={{ color: '#888', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                        <span>By: {post.poster}</span> | <span>Category: {post.category}</span> | <span>{new Date(post.created_at).toLocaleDateString()}</span>
                      </div>
                      <p style={{ color: '#333', lineHeight: '1.6', margin: '0.5rem 0' }}>{post.description}</p>
                      {post.url && (
                        <a href={post.url} style={{ color: '#4f8cff', textDecoration: 'none', fontWeight: 'bold' }} target="_blank" rel="noopener noreferrer">
                          Read More →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Product;
