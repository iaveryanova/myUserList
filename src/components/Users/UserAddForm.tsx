import React, { Dispatch, SetStateAction, ChangeEvent, FormEvent } from 'react'
import { IUser } from './IUser';
import { useState } from 'react';
import { initialUser } from './initialUser';
import https from '../../https';


const UserAddForm = ({setUsers, users}: {setUsers: Dispatch<SetStateAction<IUser[]>>, users: IUser[]}) => {
    const [user, setUser] = useState(initialUser);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const field = event.target.id;
        const newValue = event.target.value;
        setUser({ ...user, [field]: newValue });
    };

    const addUser = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const addedUser = await https.post('users?page=2', user);
            if (addedUser.data) {
                setUsers([...users, user]);
                setUser(initialUser);
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <form onSubmit={(event) => addUser(event)}>
            {Object.keys(user).map(field => {
                if (field === 'id') return;
                return (
                    <div className="mb-3" key={field}>
                    <label htmlFor={field} className="form-label">{field}</label>
                    <input type="text" 
                    className="form-control" 
                    id={field}
                    required
                    value={user[field as keyof Omit<IUser, 'id'>]}
                    onChange={(event) => onChange(event)}/>
                </div>
                )
            }
            )}
            
        
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
    )
}


export default UserAddForm