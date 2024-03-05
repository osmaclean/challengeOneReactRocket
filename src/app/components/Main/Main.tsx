'use client'
import { PlusCircle } from '@phosphor-icons/react'
import { MainContent } from "../MainContent/MainContent"
import { NoTasks } from '../NoTasks/NoTasks'
import { ChangeEvent, FormEvent, useState } from 'react'
import { TaskProps } from '@/@types'
import { v4 as uuidv4 } from 'uuid'

export const Main = () => {
  const [tasks, setTasks] = useState<Array<TaskProps>>([])
  const [taskContent, setTaskContent] = useState('')
  const [tasksDone, setTasksDone] = useState(0)

  const handleAddTask = (taskValue: string) => {
    const existingTaskIndex = tasks.findIndex(task => task.description.toLowerCase() === taskValue.toLowerCase())

    if(existingTaskIndex !== -1) {
      return;
    }

    const newTask: TaskProps = {
      id: uuidv4(),
      isChecked: false,
      description: taskValue,
    }
    setTasks((prevTask) => [...prevTask, newTask])
  }

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault()
    handleAddTask(taskContent)
    setTaskContent('')
  }

  const handleNewTaskOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.setCustomValidity('');
    setTaskContent(e.target.value)
  }

  const handleDeleteTask = (taskToDelete: TaskProps) => {
    const tasksDeleted = tasks.filter(task => {
      if(taskToDelete.isChecked === true) setTasksDone(tasksDone - 1)
      return task.id !== taskToDelete.id
    })
    setTasks(tasksDeleted)
  }

  const handleCheckedTasks = (taskChecked: number) => {
    setTasksDone(tasksDone + taskChecked)
    return tasksDone
  }

  const isInputEmpty = taskContent.trim().length === 0;

  return (
    <main className="h-screen bg-gray-600 flex items-center justify-start flex-col">

      <form className="-mt-6 flex items-center justify-center gap-2 w-1/2" onSubmit={handleOnSubmit}>
        <input
          value={taskContent}
          type="text" 
          placeholder="Adicione uma nova tarefa..."
          onChange={handleNewTaskOnChange}
          className={'outline-none p-4 flex-1 bg-gray-500 placeholder:text-gray-300 rounded-lg text-gray-100 focus:outline-purple-200 hover:outline-purple-200 duration-200'}
        />
        <button 
          className="flex items-center justify-center gap-2 bg-blue-300 text-gray-100 p-4 rounded-lg font-bold text-sm hover:bg-blue-200 duration-200 disabled:cursor-not-allowed disabled:opacity-70" 
          type="submit"
          disabled={isInputEmpty}
        >
            Criar
            <PlusCircle size={24} />
        </button>
      </form>

      <section className="mt-16 w-1/2">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center justify-center gap-2 font-bold">
            <h4 className="text-sm text-blue-200">Tarefas criadas</h4>
            <div className="bg-gray-400 text-xs rounded-full px-2 py-[.125rem] text-gray-200">
              {tasks.length}
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 font-bold">
            <h4 className="text-sm text-purple-200">Concluídas</h4>
            <div className="bg-gray-400 text-xs rounded-full px-2 py-[.125rem] text-gray-200">
              {
                tasksDone !== 0 ? `${tasksDone} de ${tasks.length}` : 0
              }
            </div>
          </div>
        </div>
      </section>
      { tasks.length === 0 ? <NoTasks />
        : (
          <section className="mt-6 w-1/2 gap-3 flex flex-col justify-center items-center">
            {tasks.slice()
                  .sort((a, b) => Number(b.isChecked) - Number(a.isChecked))
                  .reverse()
                  .map((task: TaskProps) => {
              return (
                <MainContent 
                  taskList={tasks}
                  taskInfo={task}
                  setTasks={setTasks} 
                  key={task.description}
                  onDeleteTask={handleDeleteTask}
                  onTaskCheck={handleCheckedTasks}
                />
              )
            })}
          </section>
        )
      }
    </main>
  )
}
