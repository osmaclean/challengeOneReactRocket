'use client'
import { TaskListProps } from '@/@types'
import { Trash, Circle, CheckCircle } from '@phosphor-icons/react'
import { useState } from 'react'

export const MainContent = ({ taskInfo, onDeleteTask, taskList, onTaskCheck }: TaskListProps) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckedClick = () => {
    if(!taskInfo.isChecked) {
      taskInfo.isChecked = true
      setIsChecked(true)
      onTaskCheck(1)

      const checkedTask = taskList.splice(taskList.indexOf(taskInfo), 1)
      taskList.push(checkedTask[0])
    } else {
      taskInfo.isChecked = false
      setIsChecked(false)
      onTaskCheck(-1)
    }
  }

  return (    
      <div className="w-full flex items-center justify-between bg-gray-500 rounded-lg p-4">
        <div className="flex items-center justify-center gap-2">
          {!isChecked ? (
            <button className="cursor-pointer text-blue-200 hover:text-blue-300 duration-200">
              <Circle size={24} onClick={handleCheckedClick}/>
            </button>
          ) : (
            <button className="cursor-pointer text-purple-300 hover:text-purple-200 duration-200">
              <CheckCircle size={24} onClick={handleCheckedClick} weight='fill'/>
            </button>
          )}
          <p className={!isChecked ? "flex-1 text-gray-100 text-sm" : "flex-1 text-gray-300 text-sm line-through"}>
            {taskInfo.description}
          </p>
        </div>
        <button className="cursor-pointer text-gray-100 hover:text-danger-300 duration-200">
          <Trash size={16} onClick={() => onDeleteTask(taskInfo)}/>
        </button>
      </div>
  )
}
