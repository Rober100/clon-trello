import { Board } from "./types.d";
import { Separator } from "./ui/separator";
import List from "./List";
import { Plus } from "lucide-react";
import { Lumiflex } from "uvcanvas";

type Props = {
  board: Board;
};

const Boards = ({ board }: Props) => {
  return (
    <section className="w-full h-full bg-cover relative">
      <Lumiflex />

      <div className="absolute top-0 left-0 w-full h-[calc(100vh-9.2rem)]">
        <div id="board-header" className="w-full h-20 flex items-center p-4">
          <h2 className="font-semibold text-xl">{board.title}</h2>
        </div>

        <Separator />

        <div
          id="board-content"
          className="flex gap-4 p-4 overflow-scrool h-full w-full"
        >
          {board.lists.map((list) => (
            <List key={list.title} list={list} boardName={board.title} />
          ))}
          <div
            id="add-list"
            className="min-w-52 h-fit bg-primary rounded-lg p-4 flex justify-between text-primary-foreground hover:opacity-50 cursor-pointer gap-2"
          >
            <h3 className="font-semibold"> Añadir listas</h3>
            <Plus />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boards;
