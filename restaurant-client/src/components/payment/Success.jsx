import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
      return (
            <div className='text-center'>
                  <h1 className='text-center text-4xl'>your payment has done successfully </h1>
                  <Link to='/ordered' className='text-center underline mt-3 text-red-600'>go to order</Link>
            </div>
      );
};

export default Success;