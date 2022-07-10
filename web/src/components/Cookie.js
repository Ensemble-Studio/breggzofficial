import { useCookie, useCookieUpdate } from "../lib/CookieProvider";

const Cookie = () => {
  const cookieAccepted = useCookie();
  const setCookie = useCookieUpdate();
  if (!cookieAccepted)
    return (
      <div
        className='flex md:flex-row flex-col justify-center items-center  overflow-hidden gap-5 px-5 md:px-4 py-5 rounded-[3px] bg-white absolute md:bottom-8 bottom-[8%] w-4/5 md:w-1/2 left-[10%] md:left-[25%] z-40'
        style={{ boxShadow: "0px 4px 10px 0 rgba(0,0,0,0.1)" }}
      >
        <p className='text-xl md:text-base text-left text-black uppercase tracking-widest'>Cookies</p>
        <p className='opacity-60 text-xs font-medium md:text-left text-black text-center'>
          By using this website, you automatically accept we use cookies.
        </p>

        <button
          className='flex justify-center items-center  w-[124px] relative gap-2.5 p-2 rounded-[5px] bg-[#235251]/90 border-[0.5px] border-[#12151d]/90'
          onClick={() => setCookie()}
        >
          <a className='opacity-90 text-sm text-left uppercase text-white'>
            accept
          </a>
        </button>
      </div>
    );
};

export default Cookie;
