
import {v4 as uuidv4} from 'uuid'

type SignInRequestData={
    email:string;
    password:string
}

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount));

export async function SignInRequest(data: SignInRequestData){
    await delay();

    return{
        token: uuidv4(),
        user:{
            name: 'Rafael Souza',
            email: 'faelsos98@gmail.com',
        }
    }
        
};