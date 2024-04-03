import { Ellipsis } from "lucide-react";
import BoardOptions from "./BoardOptions";
import { BoardWrapper } from "./BoardWrapper";
import { Task as TaskType } from "./types.d";

type Props = {
  task: TaskType;
};

const Task = ({ task }: Props) => {
  return (
    <BoardWrapper id={task.id} className="p-2 text-primary bg-muted rounded-md">
      <div key={task.id}>{task.title}</div>
      <BoardOptions className="p-1 hover:bg-muted-foreground">
        <Ellipsis size={16}/>
      </BoardOptions>
    </BoardWrapper>
  );
};

export default Task;
