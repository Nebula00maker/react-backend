import React from 'react';
import './Services.css';

const plans = [
  {
    name: 'Basic Plan',
    points: [
      'Free shipping on orders over $50',
      'Standard support',
      'Access to regular deals'
    ],
    price: '$0/mo',
    color: '#a1e3ff'
  },
  {
    name: 'Premium Plan',
    points: [
      'Priority support',
      'Exclusive deals',
      'Free returns',
      'Early access to new products'
    ],
    price: '$19/mo',
    color: '#4f8cff'
  },
  {
    name: 'Business Plan',
    points: [
      'Bulk discounts',
      'Dedicated account manager',
      'Custom solutions',
      'Advanced analytics'
    ],
    price: '$49/mo',
    color: '#222'
  }
];

const Services = () => (
  <div className='plans-page'>
    <h2 className='plans-title'>Services & Plans</h2>
    <p className='plans-desc'>Choose the plan that fits your needs and enjoy exclusive benefits:</p>
    <div className='plans-grid'>
      {plans.map(plan => (
        <div className='plan-card' style={{ background: plan.color }} key={plan.name}>
          <h3 className='plan-name'>{plan.name}</h3>
          <div className='plan-price'>{plan.price}</div>
          <ul className='plan-points'>
            {plan.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
