import UserList from '@/components/Cards/UserList';
import { getUsers } from '@/server/actions/actions';
import React from 'react'

async function page() {
  const data = await getUsers();

  return (
    <div>
      <UserList data={data}/>
    </div>
  )
}

export default page