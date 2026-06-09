// src/App.tsx
import React from "react";
import { useTasks } from "./hooks/useTasks";
import { AddTaskForm } from "./components/AddTaskForm";
import { FilterBar } from "./components/FilterBar";
import { TaskList } from "./components/TaskList";
export default function App() {
  const {
    tasks,
    activeCount,
    filter,
    setFilter,
    addTask,
    toggleTask,
    deleteTask,
    editTask,
  } = useTasks();

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", padding: "0 16px" }}>
      <h1>任务管理</h1>

      <AddTaskForm onAdd={addTask} />

      <div style={{ margin: "16px 0" }}>
        <FilterBar
          current={filter}
          activeCount={activeCount}
          onFilterChange={setFilter}
        />
      </div>

      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </div>
  );
}
