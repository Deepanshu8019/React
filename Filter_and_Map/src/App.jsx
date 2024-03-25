import React, { useState } from 'react'
import { data } from './data'
import Toors from './Toors';

function App() {

  const [toors, setToor] = useState(data);

  return (
    <div >
      <div className='flex items-center justify-center h-screen w-full gap-10 flex-col 
                      text-2xl font-bold text-[#4446c4]'>
        {
          toors.length == 0 ? (<button onClick={() => setToor(data)} className='text-[#df4343] text-3xl'>Reset</button>) :
            (toors.map((item) => (<Toors key={item.id}  {...item} setToor={setToor} toors={toors}></Toors>)))
        }
      </div>
    </div>
  )
}

export default App
