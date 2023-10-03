import React,{useState} from 'react'
import Details from './Details';

const Q1 = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState(0);
  return (
    <>
      <h1>Demo form</h1>
      <input type="text" name='name'  id="na" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your name'/>
      <input type="number" name='phone'  id="ph" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Enter your phone'/>
     
    </>
  )
}

export default Q1