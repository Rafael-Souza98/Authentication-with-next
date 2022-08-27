import { createContext, PropsWithChildren, ReactNode } from "react";
import React from 'react';
import { SignInRequest } from "../services/Auth";

const AuthContext = createContext({} as AuthContextType);

type AuthContextType={
  isAuthenticated: boolean;
  children: ReactNode;
  key?:string
}
type SignInData={
  email: string;
  password:string;
}


const AuthProvider: React.FC<AuthContextType> = ({children}) => {
    const isAuthenticated = false;

    async function SignIn({email, password}: SignInData) {
      const {token, user} = await SignInRequest({
        email,
        password
      });
    };

     return (
        <AuthContext.Provider value={{isAuthenticated, children}}>
            {children}
        </AuthContext.Provider>
  )
};

export default AuthProvider;