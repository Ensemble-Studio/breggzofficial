import { useState } from "react";

const Cookie = () => {
  const [show, setShow] = useState(true);
  if (show)
    return (
      <div
        className='flex justify-center items-center relative overflow-hidden gap-5 px-10 py-5 rounded-[3px] bg-white'
        style={{ boxShadow: "0px 4px 10px 0 rgba(0,0,0,0.1)" }}
      >
        <p className='flex-grow-0 flex-shrink-0 text-base text-left text-black'>
          Cookies
        </p>
        <p className='flex-grow-0 flex-shrink-0 opacity-60 text-sm font-medium text-left text-black'>
          By using this website, you automatically accept we use cookies.
        </p>
        <div className='flex justify-center items-center flex-grow-0 flex-shrink-0 w-[124px] relative gap-2.5 p-2 rounded-[5px] bg-[#235251]/90 border-[0.5px] border-[#12151d]/90'>
          <button
            onClick={() => setShow(false)}
            className='flex-grow-0 flex-shrink-0 opacity-90 text-sm text-left uppercase text-white'
          >
            accept
          </button>
        </div>
      </div>
    );
};

export default Cookie;
