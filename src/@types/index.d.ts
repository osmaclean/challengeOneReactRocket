export interface TaskProps {
  id: string;
  isChecked: boolean;
  description: string;
}

export interface TaskListProps {
  taskList: TaskProps[];
  taskInfo: TaskProps;
  setTasks: (taskList: TaskProps[]) => void;
  onDeleteTask: (taskToDelete: TaskProps) => void;
  onTaskCheck: (taskChecked: number) => number;
}