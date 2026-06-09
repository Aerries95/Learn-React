// src/hooks/useTasks.ts
import { useState, useCallback } from 'react';
import type { Task, FilterStatus, Priority } from '../type';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<FilterStatus>('all');

  // 添加任务
  const addTask = useCallback((title: string, priority: Priority) => {
    if (!title.trim()) return;
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: title.trim(),
      completed: false,
      priority,
      createdAt: Date.now(),
    };
    setTasks((prev) => [newTask, ...prev]);
  }, []);

  // 切换完成状态
  const toggleTask = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  // 删除任务
  const deleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  // 编辑标题
  const editTask = useCallback((id: string, newTitle: string) => {
    if (!newTitle.trim()) return;
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, title: newTitle.trim() } : task
      )
    );
  }, []);

  // 根据 filter 过滤
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return {
    tasks: filteredTasks,
    totalCount: tasks.length,
    activeCount: tasks.filter((t) => !t.completed).length,
    filter,
    setFilter,
    addTask,
    toggleTask,
    deleteTask,
    editTask,
  };
}