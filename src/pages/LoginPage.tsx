import React, {  useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext, SignInData } from '../contexts/AuthContext';


const LoginPage: React.FC = () => {
  
const {register, handleSubmit} = useForm<SignInData>();
const { signIn } = useContext(AuthContext);

async function handleSignIn(data: SignInData){
  await signIn?.(data);
 
};

  return (
    <form
    onSubmit={handleSubmit(handleSignIn)} 
    className="items-center justify-center flex flex-col m-auto rounded-lg space-y-9 mt-64 bg-slate-100 w-96 h-96">
        <label>
          <span className='h-28'>
            <h1 className='text-2xl'>Sing In </h1>
          </span>
          <span className='justify-center flex flex-col text-base'> E-mail </span>
            <input 

            {...register("email")}
            type='text' 
            className="rounded-lg w-80 border-slate-300" />
        </label>
        <label>
         <span className='text-base'>Password</span> 
            <input 

            {...register("password")}
            type='password' 
            className="rounded-lg w-80 flex flex-col border-slate-300"/>
        </label>   
        <label>
          <button
          
          className='bg-sky-500 hover:bg-sky-700 rounded-lg w-80 h-10'> Login </button>
        </label>
        
    </form>
  );
};

export default LoginPage;