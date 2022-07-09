import { useRef, useState } from "react";

const test = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const inputRef = useRef();

  const inputRefTwo = useRef();

  const focus = () => {
    inputRef.current.focus();
    inputRef.current.value = "Name";
  };

  const focusTwo = () => {
    inputRefTwo.current.focus();
    inputRefTwo.current.value = "Add Age";
  };
  return (
    <div className='w-scren h-screen flex  flex-col items-center justify-center bg-coral'>
      <input
        className='w-[100px] h-[40px] bg-slate-200'
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={focus}>Name Focus</button>
      <br />
      <br />
      <input
        className='w-[100px] h-[40px] bg-slate-200'
        ref={inputRefTwo}
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={focusTwo}>Age Focus</button>
    </div>
  );
};

export default test;
