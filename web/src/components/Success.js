import { useSubscribe, useSubscribeUpdate } from "../../src/lib/SubscribeProvider";



const Success = () => {
     const closePopup = useSubscribeUpdate();

     const successMessage = 'Your details are saved. We will contact your by email for further information.';
  return (
     <div
     className="flex flex-col justify-start items-start gap-2 w-4/5 md:w-[400px] px-[39px] py-10 rounded-lg bg-white"
     style={{ boxShadow: "0px 20px 40px 0 rgba(0,0,0,0.05)" }}
   >
     <div className="flex flex-col justify-start items-start  w-full gap-16">
 
     <div className="flex flex-col justify-start items-start  relative gap-2">
  <p className="self-stretch  text-[27px] text-left capitalize text-black">
    Thank you
  </p>
  <p className="self-stretch opacity-80 text-lg text-left text-black">
    {successMessage}
  </p>
</div>
     
   
       <div className="flex justify-center items-start self-stretch   gap-6">
        
         <button onClick={closePopup} className="flex justify-center items-center   w-[251px] relative gap-2.5 p-2 rounded-[5px] bg-[#235251]/90 border-[0.5px] border-[#12151d]/90">
           <a className="opacity-90 text-sm text-left uppercase text-white">
             Close
           </a>
         </button>
       </div>
     </div>
   </div>
  )
}

export default Success