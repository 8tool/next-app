import React from 'react'

interface User{
    id:number ; 
    name:string; 
}

const Newpage = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users: User[] = await res.json();


  return (
    <div>
      {users.map(user => <li key = {user.id}> {user.name} </li>)}
    </div>
  )
}

export default Newpage
