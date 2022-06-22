import { Lesson } from "./Lesson";

export function Sidebar() {
    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 mb-6 border-gray-500 block">
                Cronograma de aulas
            </span>

            <div className="flex flex-col gap-8">
                <Lesson 
                    title="Aula 01"
                    slug="aula-01"
                    availableAt={new Date()}
                    type="class"
                />
                                <Lesson 
                    title="Aula 02"
                    slug="aula-02"
                    availableAt={new Date()}
                    type="live"
                />
 
            </div>
        </aside>
    )
}