import React from 'react'

interface User{
    id:number ; 
    name:string; 
}

const Userspage = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users',{
        next:{revalidate:10}
    })
    const users: User[] = await res.json();


  return (
    <div>
        <h1>Users</h1>
        <p> {new Date().toLocaleTimeString()}</p>
      {users.map(user => <li key = {user.id}> {user.name} </li>)}
    </div>
  )
}

export default Userspage
