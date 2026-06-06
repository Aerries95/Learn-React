interface childProps {
    name: string;
    age: number;
    isStudent?: boolean; // 可选属性
    isEmployed?: boolean; // 可选属性
    m: (m: string) => void; // 函数类型属性
}
const Child = ({ name, age, isStudent, isEmployed, m }: childProps) => {
    console.log(name, age);
    return (
        <div>
            <p>{name} | {age} | {isStudent ? '学生' : '非学生'} | {isEmployed ? '员工' : '非员工'}</p>
            <button onClick={() => m('Hello from Child!')}>点击发送消息</button> 
        </div>
    )
}

export default Child;