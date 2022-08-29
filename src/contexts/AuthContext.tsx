import { createContext, ReactNode, useState } from "react";
import React from 'react';
import { SignInRequest } from "../services/Auth";
import { setCookie } from 'nookies';
import   { useRouter } from 'next/router'

export const AuthContext = createContext({} as AuthContextType);
type User = {
  email: string;
  name: string;
};

type AuthContextType={
  isAuthenticated?: boolean;
  children?: ReactNode;
  user?: User | null;
  signIn?: (data: SignInData) => Promise<void>;
};

export type SignInData={
  email: string;
  password:string;
};



const AuthProvider: React.FC<AuthContextType> = ({children}) => {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

     async function signIn({email, password}: SignInData) {
      const {token, user} = await SignInRequest({
        email,
        password
      });

      setCookie(undefined, 'nextauth.token', token, {
        maxAge: 60 * 60 * 1, // 1 hour
      });

      setUser(user);
      router.push('/dashboard');
    };

     return (
        <AuthContext.Provider value={{isAuthenticated, user, signIn}}>
            {children}
        </AuthContext.Provider>
  )
};

export default AuthProvider;