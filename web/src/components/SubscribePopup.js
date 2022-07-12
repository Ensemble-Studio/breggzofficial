import { useSubscribe, useSubscribeUpdate } from "../../src/lib/SubscribeProvider";
import axios from 'axios';
import { useState, useEffect, useRef,  } from 'react';
import Success from "./Success";



const SubscribePopup = () => {

  const [showForm, setShowForm] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [email, setEmail] = useState('');

  const [name, setName] = useState('');

  const clearState = () => {
    setName('');
    setEmail('');
  

}
  const closePopup = useSubscribeUpdate();


  const handleSubmit = (e) => {
    e.preventDefault();

    const objt = { name, email};

    axios.post(
         'https://sheet.best/api/sheets/19c53e2d-9738-4372-a2ce-19f18a1422c7',
         objt,
    ).then((response) => {
         clearState();
     
         setShowForm(false);
         setShowSuccess(true);
      


    }).catch(error => {
         console.log(error.response)
    })};




  return (
    <div className='w-screen h-screen fixed top-0 left-0 bg-onyx/40
    flex items-center justify-center'>
    
    {showForm &&
     <div
  className="flex flex-col justify-start items-start gap-2 w-4/5 md:w-[400px] px-[39px] py-10 rounded-lg bg-white"
  style={{ boxShadow: "0px 20px 40px 0 rgba(0,0,0,0.05)" }}
>
  <div className="flex flex-col justify-start items-start  w-full gap-16">
  
<div className='flex flex-col  flex-wrap space-y-2'>

<label className='subheader1 opacity-9'>Your Email</label>
<input
     className='p2 border-b-[1px] py-2 '
     required
     placeholder="yourname@example.com"
     value={email} type='email' onChange={(e) => setEmail(e.target.value)} />
<p className='meta whitespace-pre-line'>Please enter your email address.</p>
</div>

   
    <div className="flex flex-col justify-start items-start self-stretch   relative gap-2">
    <label className='subheader1 opacity-9'>Your Name</label>
  <input className='p2 border-b-[1px] py-2  w-[90%]' required placeholder="John Doe" value={name}  type='name'  onChange={(e) => setName(e.target.value)} />
    </div>

  

    <div className="flex justify-center items-start self-stretch   gap-6">
      <button className="flex justify-center items-center   w-[251px] relative gap-2.5 p-2 rounded-[5px] bg-[#235251]/90 border-[0.5px] border-[#12151d]/90"
      onClick={handleSubmit}>
        <a className="opacity-90 text-sm text-left uppercase text-white">
          Subscribe
        </a>
      </button>


      
      <button onClick={closePopup} className="flex justify-center items-center flex-grow relative gap-2.5 px-4 py-2 rounded-[5px] bg-white border-[0.5px] border-black">
        <a className="  opacity-90 text-sm text-left uppercase text-black">
          Close
        </a>
      </button>
    </div>
  </div>
</div>}


{showSuccess && <Success/> }
  </div>
  )
}

export default SubscribePopup