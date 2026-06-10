import { useRef, useEffect } from "react";
const Timer = () => {
  const timerRef = useRef<number | null>(null);
  const Count = useRef<number>(0);
  const handleClick = () => {
    Count.current += 1;
    console.log(`Count: ${Count.current}`);
  };
  useEffect(() => {
    timerRef.current = window.setInterval(handleClick, 1000);
    return () => {
      clearInterval(timerRef.current!);
    };
  }, []);
  return (<div style={{margin:"20px"}}>
    <h3>useRef 存储可变值（不触发渲染）</h3>
    <button onClick={handleClick}>点击增加 Count</button>
  </div>);
};
export default Timer;
