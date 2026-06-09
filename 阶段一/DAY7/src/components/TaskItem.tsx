// src/components/TaskItem.tsx
import React, { useState } from 'react';
import type { Task } from '../type';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
}

const PRIORITY_COLOR: Record<Task['priority'], string> = {
  low: '#52c41a',
  medium: '#faad14',
  high: '#ff4d4f',
};

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggle,
  onDelete,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.title);

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onEdit(task.id, editValue);
    setIsEditing(false);
  };

  const handleEditKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setEditValue(task.title); // 还原
      setIsEditing(false);
    }
  };

  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '8px 0',
        opacity: task.completed ? 0.5 : 1,
      }}
    >
      {/* 优先级色块 */}
      <span
        style={{
          width: 4,
          height: 20,
          borderRadius: 2,
          backgroundColor: PRIORITY_COLOR[task.priority],
          flexShrink: 0,
        }}
      />

      {/* 完成复选框 */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      {/* 标题 / 编辑输入框 */}
      {isEditing ? (
        <form onSubmit={handleEditSubmit} style={{ flex: 1 }}>
          <input
            autoFocus
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleEditKeyDown}
            style={{ width: '100%' }}
          />
        </form>
      ) : (
        <span
          style={{
            flex: 1,
            textDecoration: task.completed ? 'line-through' : 'none',
          }}
        >
          {task.title}
        </span>
      )}

      {/* 操作按钮 */}
      {!isEditing && (
        <>
          <button onClick={() => setIsEditing(true)}>编辑</button>
          <button onClick={() => onDelete(task.id)}>删除</button>
        </>
      )}
    </li>
  );
};