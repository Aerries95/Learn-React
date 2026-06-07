import {useState, useEffect} from 'react';
import './Timer.css';
export default function Timer(){
    const [count, setcount] = useState(0);
    useEffect(() =>  {
        const timer = setInterval(() =>{setcount((i => i+1))}, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div>
            <p>已经过去了: {count}s</p>
        </div>
    )
}