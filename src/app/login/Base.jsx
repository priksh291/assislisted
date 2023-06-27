import { useSession } from 'next-auth/react'
import React from 'react'
import design from './design';
import Login from './login';

const Base = () => {
    const Session = useSession();
    if (Session.status === 'loading') {
        return <p>Loading....</p>;
      }
  return (
    <div>
      {Session.status === 'authenticated' ? (
        <design/>
      ) : (
        <Login/>
      )}
    </div>
  )
}

export default Base
