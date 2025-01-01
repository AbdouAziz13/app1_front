import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/user").then((res) => {
      setAllUser(res.data);
    });
  }, []);
 
  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-5xl font-bold my-10 '>User <span className=' text-blue-700'>Data</span> </h1>

      <table className='min-w-full bg-white'>
        <thead>
          <tr className='border-b'>
            <th className='px-4 py-2 text-left'>Username</th>
            <th className='px-4 py-2 text-left'>Password</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((user, index) => (
            <tr key={index} className='border-b'>
              <td className='px-4 py-2'>{user.username}</td>
              <td className='px-4 py-2' >{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
