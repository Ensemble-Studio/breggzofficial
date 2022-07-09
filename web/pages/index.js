import { useCookie } from "../src/lib/CookieProvider";

import Cookie from "../src/components/Cookie";

import StayTuned from "../src/components/StayTuned";
import Render from "../src/components/Render";

const Home = () => {
  const cookieAccepted = useCookie();

  return (
    <div className='w-screen h-screen bg-pearl fixed top-0 left-0'>
      {cookieAccepted && <StayTuned />}
      <div className='w-screen h-screen '>
        <Render />
      </div>
      <Cookie />
    </div>
  );
};

export default Home;
