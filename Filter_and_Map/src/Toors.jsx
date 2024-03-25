import React from 'react'
import { LuDelete } from "react-icons/lu";

export default function Toors({ id, name, setToor, toors }) {

  return (
    <div key={id} className=" flex gap-10 items-center justify-center">
      <h1 >{name}</h1>
      <button >
        <LuDelete className='text-black' onClick={() => 
          setToor(toors.filter((toor) => (toor.id !== id)))} />
      </button>
    </div>
  )
}
