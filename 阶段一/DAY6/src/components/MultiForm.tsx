import {useState} from 'react';
import './MultiForm.css'
export default function MultiForm (){
    const [form,setForm] = useState({
        username:'',
        password:'',
    })
    const handleChange = (e)=>{
        setForm(prev => ({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    return (
        <div className='multi-form'>
            <input className='usern' type="text" name='username' value={form.username} onChange={handleChange} placeholder='请输入用户名'/>
            <hr></hr>
            <input className='usern' type="password" name='password' value={form.password} onChange={handleChange} placeholder='请输入密码'/>
            <button onClick={()=>alert(JSON.stringify(form))}>提交</button>
        </div>
    )


}