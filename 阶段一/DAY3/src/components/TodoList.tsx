import { useState } from "react";

export default function Todolist() {
  const [list, setList] = useState<
    { id: number; text: string; completed: boolean }[]
  >([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setList([
        ...list,
        { id: Date.now(), text: inputValue, completed: false },
      ]);
      setInputValue("");
    }
  };
  const delTodo = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  };
  const clearCompleted = () => {
    setList(list.filter((item) => !item.completed));
  };
  const toggleCompleted = (id: number) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };
  return (
    <div>
      <h1>Todo待办清单</h1>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="请输入待办"
      ></input>
      <button onClick={addTodo}>添加</button>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.text}
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleCompleted(item.id)}
            />
            <button onClick={() => delTodo(item.id)}>X</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCompleted}>清除已完成</button>
    </div>
  );
}
