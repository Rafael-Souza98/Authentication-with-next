import React, { useCallback, useState } from 'react';

// import { Container } from './styles';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(email, password)


  return (
    <div 
    className="items-center justify-center flex flex-col m-auto rounded-lg space-y-9 mt-64 bg-slate-100 w-96 h-96">
        <label 
        className='justify-center flex flex-col text-base'>
          <span 
          className='h-28'>
            <h1 
            className='text-2xl'>Sing In</h1>
          </span>
          E-mail
            <input
            onChange={e => setEmail(e.target.value)}
            value={email} 
            type='text' className="rounded-lg w-80 border-slate-300" />
        </label>
        <label 
        className='text-base'>
          Password
            <input
            onChange={e => setPassword(e.target.value)}
            value={password}
             type='password' className="rounded-lg w-80 flex flex-col border-slate-300"/>
        </label>   
        <label>
          <button
          
          className='bg-sky-500 hover:bg-sky-700 rounded-lg w-80 h-10'> Login </button>
        </label>
        
    </div>
  );
};

export default LoginPage;