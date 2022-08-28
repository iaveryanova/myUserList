import React, { FC, useState, useEffect } from 'react';
import { IUser } from '../components/Users/IUser';
import https from '../https';
import UserCards from '../components/Users/UserCards';
import UserAddForm from '../components/Users/UserAddForm';
import { useSearch } from '../hooks/useSearch';
import SearchForm from '../components/Users/SearchForm';


const Users: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [search, setSearch] = useState('');
    const [showUserForm, setShowUserForm] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const users = await https.get('users?page=2');
            setUsers(users.data.data);
        } catch (e) {
            console.log(e);
        }
    }

    const deleteUser = async (id: number) => {
        const isDelete = window.confirm("Do you really delete this user?");
        if (isDelete) {
            const deletedUser = await https.delete(`api/users/${id}`);
            console.log(deletedUser);
            if (deletedUser.status === 204) {
                setUsers(users.filter((user) => user.id !== id));
            }
        }
    };

    const searchedUsers = useSearch(users, "first_name", search);
    
    return (
        <>
            <SearchForm setSearch={setSearch}/>

            <button className="btn btn-success mt-3 mb-3" 
            onClick={() => setShowUserForm(!showUserForm)}
            >
                Add New User
            </button>
            {showUserForm && <UserAddForm setUsers={setUsers} users={users} />}
      <UserCards users={searchedUsers} deleteUser={deleteUser} />
        </>
    );
};

export default Users;