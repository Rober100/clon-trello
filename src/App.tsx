import { Aside } from "./components/Aside.tsx";
import Boards from "./components/Board.tsx";
import { Header } from "./components/Header.tsx";
import { Theme } from "./components/types.d.tsx";
import { Separator } from "./components/ui/separator.tsx";

function App() {
  const board = {
    id: "1",
    title: "Tablero 1",
    lists: [
      {
        id: "1",
        title: "Lista 1",
        tasks: [
          { id: "1", title: "Tarea 1" },
          { id: "2", title: "Tarea 2" },
          { id: "3", title: "Tarea 3" },
        ],
      },
      {
        id: "2",
        title: "Lista 2",
        tasks: [
          { id: "4", title: "Tarea 4" },
          { id: "5", title: "Tarea 5" },
          { id: "6", title: "Tarea 6" },
        ],
      },
    ],
    theme: "velustro" as Theme,
  };
  return (
    <div className="flex flex-col h-screen">
      <div id="header" className="w-full">
        <Header />
      </div>

      <main className="flex h-full w-full grow">
        {/* Aside */}
        <div className="w-1/3 lg:w-1/4 xl:w-1/5">
          <Aside />
        </div>
        <Separator orientation="vertical" />

        <div id="content" className="w-2/3 lg:w-3/4 xl:w-4/5">
          <Boards board={board} />
        </div>
      </main>
    </div>
  );
}

export default App;
