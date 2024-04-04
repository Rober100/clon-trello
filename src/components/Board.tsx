import { Board, Theme } from "./types.d";
import { Separator } from "./ui/separator";
import List from "./List";
import { Ellipsis, Plus } from "lucide-react";
import { Lumiflex, Novatrix, Opulento, Tranquiluxe, Velustro } from "uvcanvas";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  board: Board;
};

const themes = {
  lumiflex: <Lumiflex />,
  novatrix: <Novatrix />,
  velustro: <Velustro />,
  opulento: <Opulento />,
  tranquiluxe: <Tranquiluxe />,
};

const Boards = ({ board }: Props) => {
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(board.theme);

  return (
    <section className="w-full h-full bg-cover relative">
      {/* //? Tema  */}
      {themes[theme] && themes[theme]}

      <div className="absolute top-0 left-0 w-full h-[calc(100vh-9.2rem)]">
        <div
          id="board-header"
          className="w-full h-20 flex items-center justify-between p-4 bg-slate-800 bg-opacity-80 text-primary-foreground"
        >
          <h2 className="font-semibold text-2xl ">{board.title}</h2>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="p-1 hover:bg-slate-400 hover:bg-opacity-40 rounded-xl cursor-pointer">
                <Ellipsis size={24} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="cursor-pointer">
                Board
              </DropdownMenuLabel>
              <DropdownMenuItem className="cursor-pointer">
                Rename
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setThemeMenuOpen(true)}
                className="cursor-pointer"
              >
                Change Theme
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <span className="text-destructive">Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
      <ThemeMenu open={themeMenuOpen} setOpen={setThemeMenuOpen} />
    </section>
  );
};

const ThemeMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Change Theme</DialogTitle>
          <DialogDescription asChild>
            <div className="py-4 flex flex-wrap justify-center">
              <div className="w-1/2 h- cursor-pointer relative">
                <Lumiflex />
                <div className="obsolute top-0 left-0 w-full h-full hover:bg-slate-800 hover:bg-opacity-40"></div>
              </div>
              <div className="w-1/2 h-36 cursor-pointe relative">
                <Novatrix />
                <div className="obsolute top-0 left-0 w-full h-full hover:bg-slate-800 hover:bg-opacity-40"></div>
              </div>
              <div className="w-1/2 h-36 cursor-pointer relative">
                <Velustro />
                <div className="obsolute top-0 left-0 w-full h-full hover:bg-slate-800 hover:bg-opacity-40"></div>
              </div>
              <div className="w-1/2 h-36 cursor-pointer relative">
                <Opulento />
                <div className="obsolute top-0 left-0 w-full h-full hover:bg-slate-800 hover:bg-opacity-40"></div>
              </div>
              <div className="w-1/2 h-36 cursor-pointer relative">
                <Tranquiluxe />
                <div className="obsolute top-0 left-0 w-full h-full hover:bg-slate-800 hover:bg-opacity-40"></div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <button
              className=" px-4 py-2 rounded-xl hover:bg-red-600 bg-destructive text-primary-foreground font-medium"
              type="button"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Boards;
