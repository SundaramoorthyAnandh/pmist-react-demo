import React, { useEffect, useState } from 'react'
import { isEqual } from '../isEqual';

const FetchUsersComponent = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // API Call - Side effects
        (async () => {
            let fetchedUsers = [];

            try {
                await fetch('https://api.escuelajs.co/api/v1/users')
                    .then(data => data.json())
                    .then(data => fetchedUsers = [...data])

                console.log(fetchedUsers)

                if (!isEqual(fetchedUsers, users)) {
                    setUsers(fetchedUsers);
                }
            } catch (error) {
                console.log(error)
            }
        })();

        // async function getUsers() {
        //     const users = await fetch('https://api.escuelajs.co/api/v1/users')
        // }

        // getUsers();
    }, [users])

    return (
        <div>{JSON.stringify(users)}</div>
    )
}

export default FetchUsersComponent