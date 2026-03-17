import React, { useContext } from 'react';
import Footer from './Footer';
import { AppContext } from '../usecontext/AppContext.jsx';

const Cart = () => {
  const { cart, setCart } = useContext(AppContext);

  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleEdit = (id, newQty) => {
    setCart(cart.map(item => item.id === id ? { ...item, qty: newQty } : item));
  };

  const total = cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);

  return (
    <div className='cart' style={{ minHeight: '80vh', padding: '2rem' }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <div>No items in cart.</div>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {cart.map(item => (
            <li key={item.id} style={{ marginBottom: '1rem', background: '#f0f4ff', padding: '1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <strong>{item.name}</strong> - ${item.price} x
                <input type='number' min='1' value={item.qty || 1} onChange={e => handleEdit(item.id, parseInt(e.target.value))} style={{ width: '50px', marginLeft: '0.5rem' }} />
              </div>
              <button style={{ background: '#ff4f4f', color: '#fff', border: 'none', borderRadius: '4px', padding: '0.5rem 1rem' }} onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div style={{ fontWeight: 'bold', marginTop: '2rem' }}>Total: ${total}</div>
      <button style={{ marginTop: '2rem', background: '#4f8cff', color: '#fff', border: 'none', borderRadius: '4px', padding: '0.5rem 1rem' }}>
        Pay with Stripe
      </button>
      <Footer />
    </div>
  );
};

export default Cart;
