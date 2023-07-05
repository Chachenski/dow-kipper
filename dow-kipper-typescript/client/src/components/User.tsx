import React from 'react'
import Navbar from './Navbar';

interface Collection {
  id: number;
  name: string;
}

interface InventoryItem {
  id: number;
  name: string;
}

interface UserProps {
  collections: Collection[];
  inventory: InventoryItem[];
}

const User: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1>User Page</h1>
      <h2>Collections:</h2>
      <ul>
      </ul>
    </div>
  )
}

export default User