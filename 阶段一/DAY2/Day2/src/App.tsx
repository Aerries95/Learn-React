import Hello from "./components/Demo";
import { Hellow } from "./components/Demo";
import Child  from "./components/props";
function App() {
  const msg = (m: string) => {
     alert('子组件传来：' + m)
  };
  return (
    <div className="App">
      <Hello />
      <Hellow />
      <Child name="Alice" age={25} isStudent={true} isEmployed={false} m={msg} />
    </div>
  );
}

export default App;