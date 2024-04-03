import { Aside } from "./components/Aside.tsx";
import Boards from "./components/Board.tsx";
import { Header } from "./components/Header.tsx";
import { Separator } from "./components/ui/separator.tsx";

function App() {
    const board = {
    id: '1',
    title: 'Tablero 1',
    lists: [
      {
        id: '1',
        title: 'Lista 1',
        tasks: [
          { id: '1', title: 'Tarea 1' },
          { id: '2', title: 'Tarea 2' },
          { id: '3', title: 'Tarea 3' },
        ]
      },
      {
        id: '2',
        title: 'Lista 2',
        tasks: [
          { id: '4', title: 'Tarea 4' },
          { id: '5', title: 'Tarea 5' },
          { id: '6', title: 'Tarea 6' },
        ]
      },
    ],
  
  }
  return (
    <>
      <div id="header" className="w-full">
        <Header />
      </div>

      <main className="flex h-screen">
        {/* Aside */}
        <div className="basis-1/3 lg:basis-1/4 xl:basis-1/5">

        <Aside/>
        </div>
        <Separator orientation="vertical"/>


        <div id="content" className="basis-2/3 lg:basis-3/4 xl:basis-4/5">
          <Boards board={board}/>
        </div>
      </main>
    </>
  );
}

export default App;
