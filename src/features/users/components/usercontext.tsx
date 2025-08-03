
import React from 'react'
import { useState } from 'react';
interface User {
    name: string;
    age: number;
    melicode?: number;

}
interface UserContext extends User {

    setState: (user: Partial<User>) => void
}
const initialValue: User = {
    name: '',
    age: 0,
    melicode: undefined
}
export const usercontext = createContext<UserContext>({
    setState: () => { },
    ...initialValue

})
export const Userprovider = () => {
    const [user, setUser] = useState<User>(initialValue)
    const setState = (state: Partial<User>) => {
        setUser({
            ...user,
            ...state
        })
    }
    return (
        <usercontext value={{ ...user, setState }}></usercontext>
    )
}
