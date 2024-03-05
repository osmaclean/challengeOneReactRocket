import Image from "next/image"
import { MainContent } from "../MainContent/MainContent"

export const Main = () => {
  return (
    <main className="h-screen bg-gray-600 flex items-center justify-start flex-col">

      <form className="-mt-6 flex items-center justify-center gap-2 w-1/2">
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa..."
          className="outline-none p-4 flex-1 bg-gray-500 placeholder:text-gray-300 rounded-lg text-gray-100"
        />
        <button 
          className="flex items-center justify-center gap-2 bg-blue-300 text-gray-100 p-4 rounded-lg font-bold text-sm" 
          type="submit">
            Criar
            <Image 
              src='/plus.svg' 
              alt="Add Task Button" 
              aria-label="Add Task Button" 
              width={24} 
              className="w-5 h-5"
              height={24}/>
        </button>
      </form>

      <section className="mt-16 w-1/2">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center justify-center gap-2 font-bold">
            <h4 className="text-sm text-blue-200">Tarefas criadas</h4>
            <div className="bg-gray-400 text-xs rounded-full px-2 py-[.125rem] text-gray-200">5</div>
          </div>
          <div className="flex items-center justify-center gap-2 font-bold">
            <h4 className="text-sm text-purple-200">Concluídas</h4>
            <div className="bg-gray-400 text-xs rounded-full px-2 py-[.125rem] text-gray-200">2 de 5</div>
          </div>
        </div>
      </section>

      <section className="mt-6 w-1/2 gap-3 flex flex-col justify-center items-center">
        <MainContent />
        <MainContent />
        <MainContent />
      </section>
    </main>
  )
}
