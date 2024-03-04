import Image from "next/image"

export const MainContent = () => {
  return (    
      <div className="w-full flex items-start justify-between bg-gray-500 rounded-lg p-4">
        <div className="flex items-start justify-center gap-2">
          <button className="cursor-pointer">
            <Image 
              src='/circle.svg' 
              alt="Button to mark the task as completed" 
              aria-label="Button to mark the task as completed"
              width={24}
              height={24}
              className="w-5 h-5"
            />
          </button>
          <p className="flex-1 text-gray-100 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. scipit laudantium sint! Rem
          </p>
        </div>
        <button className="cursor-pointer">
          <Image 
            src='/trash.svg' 
            alt="Button to delete task" 
            aria-label="Button to delete task"
            width={24}
            height={24}
            className="w-4 h-4"
          />
        </button>
      </div>
  )
}
