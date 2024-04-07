import { useUserStore } from "@/utils/user";
import BoardOptions from "./BoardOptions";
import { BoardWrapper } from "./BoardWrapper";
import SetUserName from "./SetUserName";
import { Avatar } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { ClipboardList, Plus, Ellipsis, Pencil } from "lucide-react";

const boards = [
  { id: 1, title: "Tablero 1" },
  { id: 2, title: "Tablero 2" },
];
export const Aside = () => {
  const { user } = useUserStore();

  return (
    <aside id="aside" className="w-full bg-muted h-full">
      <div id="name" className="flex items-center pl-4 h-20">
        <Avatar>
          <div className="w-full h-full bg-foreground text-background flex items-center justify-center font-medium text-2xl">
            {user && user?.length > 0 && user[0].toUpperCase()}
          </div>
        </Avatar>

        <div className="p-4 flex flex-col">
          <BoardWrapper id="edit-name">
            <h2 className="text-xl font-bold">{user}</h2>
            <BoardOptions>
              <SetUserName>
                <Pencil size={20}/>
              </SetUserName>
            </BoardOptions>
          </BoardWrapper>
          <span className="text-xs italic">Gratis</span>
        </div>
      </div>
      <Separator />
      <div id="boards">
        <div id="title" className="p-4">
          <BoardWrapper id="board-title">
            <div className="flex gap-1">
              <ClipboardList />
              <h2 className="font-medium">Tableros</h2>
            </div>
            <BoardOptions>
              <Plus />
            </BoardOptions>
          </BoardWrapper>
        </div>

        <div className="w-3/4 pl-4">
          <Separator />
        </div>
        <div>
          {/* //? Tablero 1 */}
          <div id="boards-container" className="flex flex-col py-4">
            {boards.map((board) => (
              <div
                key={board.id}
                className="px-4 py-1 hover:bg-muted-foreground"
              >
                <BoardWrapper id={`board-${board.id}`}>
                  <h3 className="">{board.title}</h3>
                  <BoardOptions>
                    <Ellipsis size={16} />
                  </BoardOptions>
                </BoardWrapper>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};
