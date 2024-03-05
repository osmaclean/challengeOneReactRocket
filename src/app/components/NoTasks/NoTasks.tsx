import Image from "next/image"

export const NoTasks = () => {
  return (
    <div className="w-1/2 text-gray-100 flex flex-col justify-start items-center gap-16 mt-6">
      <div className="bg-gray-300 w-full h-[1px] opacity-40"></div>

      <div className="flex flex-col items-center justify-center gap-4">
        <Image 
          alt="" 
          src='/Clipboard.svg' 
          width={56} 
          height={56} 
          className="" 
        />
        <div className="flex items-center justify-center gap-1 flex-col">
          <h3 className="text-gray-300 font-bold text-base">Você ainda não tem tarefas cadastradas</h3>
          <h3 className="text-gray-300 text-base">Crie tarefas e organize seus itens a fazer</h3>
        </div>
      </div>
    </div>
  )
}
