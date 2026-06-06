import { useState } from "react";



const Usestate = ()=>{
    const [state, setState] = useState(0);
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={()=>setState(state+1)}>+</button>
            <button onClick={()=>setState(state-1)}>-</button>
        </div>
    )
}

const Userstate =()=>{
    const [user, setuser] = useState({name:"绿龙",age:18});
    return (
        <div>
            <h1>{user.name} - {user.age}</h1>
            <input value={user.name} onChange={(e)=>setuser({...user,name:e.target.value})} />
            <button onClick={()=>setuser({...user,age:user.age+1})}>长大一岁</button>
        </div>
    )

}
const EatingFood = () =>{
    const [food, setFood] = useState(["面包"]);
    return (
        <div>
            <input id="food" />
            <h1>我吃过的食物有:</h1>
            <div>
                {food.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <button onClick={()=>setFood([...food, document.querySelector('#food').value])}>吃</button>
        </div>
    )
}

export default Usestate;
export { Userstate };
export { EatingFood };

