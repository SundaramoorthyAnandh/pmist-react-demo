import React, { useEffect, useState } from 'react'
import { isEqual } from '../isEqual';
import { LinearProgress, Typography } from '@mui/material';

const FetchUsersComponent = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // API Call - Side effects
        (async () => {
            let fetchedUsers = [];

            try {
                setIsLoading(true);

                await fetch('https://api.escuelajs.co/api/v1/users')
                    .then(data => data.json())
                    .then(data => fetchedUsers = [...data])


                if (!isEqual(fetchedUsers, users)) {
                    setUsers(fetchedUsers);
                }
                console.log(fetchedUsers)


                setFilteredUsers(fetchedUsers)

            } catch (error) {
                console.log(error);
                setFilteredUsers([]);
            } finally {
                setIsLoading(false);
            }
        })();

        // async function getUsers() {
        //     const users = await fetch('https://api.escuelajs.co/api/v1/users')
        // }

        // getUsers();
    }, [users])

    const handleUsersFilteringBasedOnSearchTerm = (searchTerm) => {
        if (searchTerm.length >= 3) {
            const filteredUsers = users.filter(user => {
                return user.name.toLowerCase().includes(searchTerm.toLowerCase())
            });

            if (filteredUsers.length > 0) {
                setFilteredUsers(filteredUsers)
            } else {
                setFilteredUsers([])
            }
        } else {
            setFilteredUsers(users)
        }
    }

    if (isLoading) {
        return <LinearProgress sx={{
            width: '50%',
            position: 'absolute',
            top: '50%',
            left: '25%'
        }} />
    }

    if (filteredUsers.length === 0 && searchTerm.length !== 0) {
        return <Typography variant='overline'>'No match found'</Typography>
    }

    return (
        <div>
            <input
                onChange={(e) => handleUsersFilteringBasedOnSearchTerm(e.target.value)} />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredUsers.map(user => {
                            return <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default FetchUsersComponent