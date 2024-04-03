import { Plus } from "lucide-react";
import BoardOptions from "./BoardOptions";
import { BoardWrapper } from "./BoardWrapper";
import { List as ListType, Task as TaskType } from "./types.d";
import { Separator } from "./ui/separator";
import Task from "./Task";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";

type Props = {
  list: ListType;
  boardName: string;
};

const List = ({ list, boardName }: Props) => {
  const [todoList, todos] = useDragAndDrop<HTMLDivElement, TaskType>(
    list.tasks,
    {
      group: boardName,
    }
  );
  return (
    <div
      key={list.id}
      className="h-fit p-4 bg-primary rounded-lg text-primary-foreground min-w-56 shadow-xl shadow-slate-200"
    >
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">{list.title}</h3>
        <Separator />
        <div ref={todoList} id={`list-${list.id}-tasks`} className="flex flex-col gap-2">
          {todos.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>

        <div className="mt-2">
          <BoardWrapper id={`options-list-${list.id}`}>
            <div className="w-full flex gap-4 items-center justify-between">
              <h4>Añadir Tarea</h4>
              <BoardOptions className="p-0">
                <Plus className="w-full h-full hover:text-primary p-1" />
              </BoardOptions>
            </div>
          </BoardWrapper>
        </div>
      </div>
    </div>
  );
};

export default List;
