import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../usecontext/AppContext.jsx';

const CartIcon = () => (
  <svg width="24" height="24" fill="none" stroke="#4f8cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.6-7.39H6" />
  </svg>
);

const Header = () => {
  const { cart, user, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const tabStyle = {
    padding: '0.75rem 1rem',
    textDecoration: 'none',
    color: '#555',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap'
  };

  const activeTabStyle = {
    ...tabStyle,
    color: '#4f8cff',
    borderBottom: '3px solid #4f8cff'
  };

  return (
    <header style={{ background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 100 }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 2rem',
        maxWidth: '1400px',
        margin: '0 auto',
        minHeight: '70px',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flex: 1 }}>
          <NavLink
            to='/'
            style={({ isActive }) => isActive ? activeTabStyle : tabStyle}
          >
            Home
          </NavLink>
          <NavLink
            to='/product'
            style={({ isActive }) => isActive ? activeTabStyle : tabStyle}
          >
            Products
          </NavLink>
          <NavLink
            to='/services'
            style={({ isActive }) => isActive ? activeTabStyle : tabStyle}
          >
            Plans
          </NavLink>
          <NavLink
            to='/about'
            style={({ isActive }) => isActive ? activeTabStyle : tabStyle}
          >
            About
          </NavLink>
          <NavLink
            to='/contact'
            style={({ isActive }) => isActive ? activeTabStyle : tabStyle}
          >
            Contact
          </NavLink>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {user ? (
              <>
                <span style={{ padding: '0 1rem', fontWeight: '500', color: '#4f8cff' }}>
                  {user.username}
                </span>
                <button
                  style={{
                    ...tabStyle,
                    background: '#ff6b6b',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    padding: '0.5rem 1rem'
                  }}
                  onClick={() => {
                    setUser(null);
                    localStorage.removeItem('user');
                    localStorage.removeItem('token');
                    localStorage.removeItem('username');
                    navigate('/');
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to='/login'
                  style={({ isActive }) => isActive ? activeTabStyle : tabStyle}
                >
                  Login
                </NavLink>
                <NavLink
                  to='/signup'
                  style={({ isActive }) => isActive ? activeTabStyle : tabStyle}
                >
                  Sign Up
                </NavLink>
              </>
            )}
          </div>

          <button
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              position: 'relative',
              display: 'flex',
              alignItems: 'center'
            }}
            onClick={() => navigate('/cart')}
            title="Shopping Cart"
          >
            <CartIcon />
            {cart.length > 0 && (
              <span style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                background: '#ff6b6b',
                color: '#fff',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
                fontWeight: 'bold'
              }}>
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
