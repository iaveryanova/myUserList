import React, { ChangeEvent, FC, useMemo, useState, FormEvent, useEffect } from 'react';
import { IUser } from './IUser';
import { initialUser } from './initialUser';
import Loader from '../Loader';
import https from '../../https';


const Users: FC = () => {
    const [user, setUser] = useState(initialUser);
    const [users, setUsers] = useState<IUser[]>([]);
    const [search, setSearch] = useState('');
    const [showUserForm, setShowUserForm] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        console.log('function getUsers work');
        try {
            const users = await https.get('users?page=2');
            setUsers(users.data.data);
        } catch (e) {
            console.log(e);
        }
    }

    const deleteUser = (id: number) => {
        const isDelete = window.confirm("Do you really delete this user?");
        if (isDelete) {
            setUsers(users.filter(user => user.id !== id));
        }
    };
    const searchedUsers = useMemo(() => {
        
        if (search) {
            return users.filter(user => user.first_name.toLowerCase().includes(search.toLowerCase()) || user.last_name.toLowerCase().includes(search.toLowerCase()));
        }
        return users;
    }, [search, users]); 
    
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const field = event.target.id;
        const newValue = event.target.value;
        setUser({...user, [field]: newValue});
    };
    const addUser = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const addedUser = await https.post('users?page=2', user);
            if (addedUser.data.data) {
                setUsers([...users, user]);
                setUser(initialUser);
            }
        } catch (e) {
            console.log(e);
        }
        
    };

    return (
        <>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Search</span>
                <input type="text"
                       className="form-control"
                       placeholder="UserName"
                       aria-label="Username"
                       aria-describedby="basic-addon1"
                       onChange={(event) => setSearch(event.target.value)}
                />
            </div>

            <button className="btn btn-success mt-3 mb-3" 
            onClick={() => setShowUserForm(!showUserForm)}
            >
                Add New User
            </button>
            {showUserForm && 
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
            }
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {searchedUsers.length
                    ?
                    searchedUsers.map(user =>
                        <div className="col" key={user.id}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{`№${user.id} - ${user.first_name}`}</h5>
                                    <p className="card-text">Last Name: {user.last_name}</p>
                                    <p className="card-text">Email: {user.email}</p>
                                    <img src={user.avatar}/>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger"
                                            onClick={() => deleteUser(user.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>)
                    :
                    <Loader />
                }
            </div>
        </>
    );
};

export default Users;