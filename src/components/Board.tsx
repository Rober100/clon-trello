import { Board } from "./types.d";
import { Separator } from "./ui/separator";

type Props = {
  board: Board;
};

const Boards = ({ board }: Props) => {
  return (
    <>
      <div id="board-header" className="w-full h-20 flex items-center p-4">
        <h2 className="font-semibold text-xl">{board.title}</h2>
      </div>

      <Separator />

      <div 
      id="board-content"
      className="flex gap-4 p-4 overflow-scrool h-full w-full"
      >
        {board.lists.map((list) => (
          <div key={list.id} className="h-fit p-4 bg-primary rounded-lg text-primary-foreground">
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">{list.title}</h3>
              <Separator/>
              <div id={`list-${list.id}-tasks`}>
                    {
                        list.tasks.map(task => (
                            <div key={task.id} className="p-2 text-primary bg-muted rounded-md">
                                    {task.title}
                            </div>
                        ))
                    }
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Boards;
