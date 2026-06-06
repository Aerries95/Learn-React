import UseState from "./components/UseState";
import { Userstate } from "./components/UseState";
import { EatingFood } from "./components/UseState";
import Todolist from "./components/TodoList";
function App() {
  //注意，usestate 是异步的，不能直接在下面 console.log(count)，因为它还没有更新。

  return (
    <div className="App">
      <UseState />
      <Userstate />
      <EatingFood />
      <hr />
      <Todolist />
    </div>
  );
}
export default App;
